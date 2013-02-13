/// <reference path="lib/Resources.ts"/>
/// <reference path="lib/node.d.ts"/>

var fs = require("fs");

//このファイルが実行対象のTypeScriptになります。
//TypeScriptのコンパイルと実行は、このプロジェクトのプロパティにあるにある
//「ビルドイベント」→「ビルド後に実行するコマンドライン」から実行されます。
//このファイルがJavaScriptにコンパイルされたものはNode.jsによって実行されるよう構成されています。

//Stackを作成
var stack: AWS.Stack = new AWS.Stack("Create an EC2 instance running the Amazon Linux 32 bit AMI.");

//stackにいろいろ追加してください。

//JSONを書き出す
fs.writeFileSync(process.env["TargetDir"] + "cloudformation.json", stack.toString());


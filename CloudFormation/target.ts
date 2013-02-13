/// <reference path="lib/Resources.ts"/>
/// <reference path="lib/node.d.ts"/>

var fs = require("fs");

//このファイルが実行対象のTypeScriptになります。
//TypeScriptのコンパイルと実行は、このプロジェクトのプロパティにあるにある
//「ビルドイベント」→「ビルド後に実行するコマンドライン」から実行されます。
//このファイルがJavaScriptにコンパイルされたものはNode.jsによって実行されます。

//Stackを作成
var stack: AWS.Stack = new AWS.Stack("description of this stack.");

//stackにいろいろ追加してください。

//JSONを書き出す
fs.writeFileSync(process.env["TargetDir"] + "cloudformation.json", stack.toString());
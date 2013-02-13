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
var param: AWS.Parameter = new AWS.Parameter("KeyPair", AWS.ParameterTypes.String);
param.setDescription("The EC2 Key Pair to allow SSH access to the instance");
stack.addParameter(param);

var instance: AWS.EC2.Instance = new AWS.EC2.Instance("Ec2Instance");
instance.setKeyName(param.createRef()).setImageId("ami-75g0061f");
stack.addResource(instance);

var output: AWS.Output = new AWS.Output("InstanceId", instance.createRef());
output.setDescription("The InstanceId of the newly created EC2 instance");
stack.addOutput(output);

//JSONを書き出す
fs.writeFileSync(process.env["TargetDir"] + "cloudformation.json", stack.toString());


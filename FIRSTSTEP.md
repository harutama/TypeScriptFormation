はじめてのTypeScriptFormation
==========================

TypeScriptFormationは、AWSの提供するサービスCloudFormationで、スタックと呼ばれる構成を記述するJSONファイルを、TypeScriptを用いて簡単に書けるようにしてみようという試みです。

ここでは[http://aws.amazon.com/jp/cloudformation/#details](http://aws.amazon.com/jp/cloudformation/#details)にあるサンプルと同じ物を、TypeScriptFormationを使って作ってみます。
最終的な目標となるJSONは、以下のものになります。

```
{
    "Description" : "Create an EC2 instance running the Amazon Linux 32 bit AMI.”
    "Parameters" : {
        "KeyPair" : {
            "Description" : "The EC2 Key Pair to allow SSH access to the instance",       
            "Type" : "String"
        }
    },
    "Resources" : {
        "Ec2Instance" : {
            "Type" : "AWS::EC2::Instance",
            "Properties" : {
                "KeyName" : { "Ref" : "KeyPair" },
                "ImageId" : "ami-75g0061f"
            }
        }
    },
    "Outputs" : {
        "InstanceId" : {
             "Description" : "The InstanceId of the newly created EC2 instance",
             "Value" : { "Ref" : "Ec2Instance" }
         }
    },
    "AWSTemplateFormatVersion" : "2010-09-09"
} 
```

はじめに
------
TypeScriptFormationはVisual Studio 2012のソリューションとして提供されますので、Visual Studio 2012が事前にセットアップされている必要があります。

(無償版を利用する場合はVisual Studio Express 2012 for Web)

[http://www.microsoft.com/visualstudio/jpn/downloads#d-2012-express](http://www.microsoft.com/visualstudio/jpn/downloads#d-2012-express)

TypeScriptのインテリセンスを利用するため、TypeScript for Visual Studio 2012が必要です。

[http://go.microsoft.com/fwlink/?LinkID=266563](http://go.microsoft.com/fwlink/?LinkID=266563)

TypeScriptをコンパイルして生成されたJavaScriptは、node.jsを用いて実行されます。
このため、node.jsのインストールが必要です。

http://nodejs.org/

これからの内容を記述する対象となるファイルはCloudFormationプロジェクト内にあるtarget.tsファイルになります。

提供されるソリューションは、ビルドを実行するたびにtarget.tsファイルのコンパイルと実行を行うように構成されています。完成したら（完成しなくても動かしたいときは）ビルドを行うことで自動的にtarget.tsが実行されます。

スタックのDescription
-----------------
スタック自体の説明書きはAWS.Stackのコンストラクタで指定をします。
今回のサンプルの場合であれば以下のようになります。

```
//Stackを作成
var stack: AWS.Stack = new AWS.Stack("Create an EC2 instance running the Amazon Linux 32 bit AMI.");
```

Parameterの追加
--------------
Parametersセクションには、スタックを作成する際にユーザーから値の入力を受け付ける場合の設定が書かれます。
サンプルに対応するTypeScriptは以下のようになります。

```
//Stackを作成
var stack: AWS.Stack = new AWS.Stack("Create an EC2 instance running the Amazon Linux 32 bit AMI.");

//stackにいろいろ追加してください。
var param: AWS.Parameter = new AWS.Parameter("KeyPair", AWS.ParameterTypes.String);
param.setDescription("The EC2 Key Pair to allow SSH access to the instance");
stack.addParameter(param);
```

Parameter自体はAWS.Parameterクラスに対応しています。このクラスのコンストラクタの引数は2つの値を要求します。
1つ目の値は名前です。ここでの名前はStack全体で各要素を識別するための名前になりますので、全体で一意となる命名を剃る必要があります。
2つ目の値はパラメーターとして受け取る値の型を指定します。型の指定はAWS.ParameterTypes列挙体にあるものから指定を行います。
パラメータに対してsetDescriptionメソッドにより、AWSのコンソール上で表示されるパラメータの説明を設定しています。

パラメータの作成自体はここまでですが、最後にstack.addParameterメソッドで、スタックに対してパラメータを追加することを忘れないでください。スタックに追加されない限りは何も出力されませんので。

Resourceの追加
-------------
Resourceセクションには、スタックを構成するAWSの各機能の構成を記述を行います。
サンプルに対応するTypeScriptは以下のようになります。

```
//Stackを作成
var stack: AWS.Stack = new AWS.Stack("Create an EC2 instance running the Amazon Linux 32 bit AMI.");

//stackにいろいろ追加してください。
var param: AWS.Parameter = new AWS.Parameter("KeyPair", AWS.ParameterTypes.String);
param.setDescription("The EC2 Key Pair to allow SSH access to the instance");
stack.addParameter(param);

var instance: AWS.EC2.Instance = new AWS.EC2.Instance("Ec2Instance");
instance.setKeyName(param.createRef()).setImageId("ami-75g0061f");
stack.addResource(instance);
```

各リソースに対応するクラスは「AWS.[サービス名]」で表現される各モジュール内に用意されています。今回はEC2インスタンスを作成したいのでAWS.EC2.Instanceクラスのオブジェクト作成しています。サンプルにある各リソースに対応するTypeは
```
"Type" : "AWS::EC2::Instance"
```
このように記述されていますが、TypeScriptFormationでは各リソースに対応するクラスがTypeの記述を知っていますので、自動的に出力されます。

各リソースに対応しているクラス全体をを列挙するのは難しいのですが、Visual Studio上で「AWS.」と入力すると、インテリセンスと呼ばれるコードアシストによって一覧が参照できます。インテリセンス便利ですね。

EC2インスタンスに対して利用するキーペアの名前をsetKeyNameメソッドにより指定しています。ここで引数に与えているものがAWS.ParameterクラスのcreateRef()メソッドによる戻り値が指定されています。createRef()メソッドを実行すると、実行したオブジェクトに対するRefが返ってきます。サンプルでは
```
"KeyName" : { "Ref" : "KeyPair" }
```
となっている「{ "Ref" : "KeyPair" }」の部分を動的に作り出すことができますので、つまらないTypoをすることがなくなります。

setKeyNameメソッドとsetImageIdメソッドが連続して書かれています。大部分のsetメソッドは戻り値として自分自身を返すように設計されていますので、ワンライナーで記述することが可能になっています。
ただし、調子に乗ってワンライナーをキメていると、将来の自分が苦労することになりますので程々に。

Resourceに関しても、最後にstack.addResourceメソッドでスタックに追加する必要があります。注意注意。

Outputの追加
-----------
Outputセクションには、スタックの構築が完了した際に、ユーザーにフィードバックする内容の設定が書かれています。
サンプルに対応するTypeScriptは以下のようになります。

```
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
```

アウトプットはAWS.Outputクラスで指定します。
コンストラクタ1つ目の引数は、スタック全体で一意になる名前を指定します。
2つ目の引数は、ユーザーに出力する値を指定します。instance.createRefメソッドを用いて、EC2インスタンスのIDをフィードバックするように設定しています。

Outputの追加
-----------
ここまで作成したファイル全体をあげておきます。

```
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
```

記述した内容はTypeScriptからJavaScriptにコンパイルされ、コンパイルされた結果はNode.jsで実行されるようにプロジェクトが構成されています。
stack.toStringメソッドによりスタック全体がJSONで出力されますが、JSONの内容自体はNode.jsによってファイルに出力されます。ファイルが出力される場所は、このソリューションの配下にある「bin」フォルダの中に「cloudformation.json」という名前で出力されるよう構成されています。

標準ではファイルとして出力していますが、Node.jsによって実行されるため、Node.jsでできる事ならば途中で何でも
できてしまいます。

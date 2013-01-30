このプロジェクトは、CloudFormationV1.schema.jsonからTypeScriptの実装クラスを生成するものです。

main.tsが実行されるファイルになります。
このプロジェクトのプロパティにある「ビルドイベント」で、node.jsを使って実行されます。

CloudFormationV1.schema.jsonは、AWS Toolkit for Visual Studio 2012をインストールした際に
C:\Users\[ユーザー名]\AppData\Local\AWSToolkit\downloadedfiles\CloudFormationSchema
に保存されるものです。
Amazon.AWSToolkit.CloudFormation.Parser.Schema.SchemaFactory

このプロジェクトの実行するとResources.tsが生成されます。
プロジェクト「CloudFormation」にあるlib/Resources.tsは、ここから生成されています。
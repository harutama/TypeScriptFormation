/// <reference path="lib/Resources.ts"/>
/// <reference path="lib/node.d.ts"/>

//http://aws.amazon.com/jp/cloudformation/

var stack: AWS.Stack = new AWS.Stack("Create an EC2 instance running the Amazon Linux 32 bit AMI.");

var refKey: AWS.Function.Ref;
{
    var param: AWS.Parameter = new AWS.Parameter("KeyPair", AWS.ParameterTypes.String);
    param.setDescription("The EC2 Key Pair to allow SSH access to the instance");
    stack.addParameter(param);

    refKey = param.createRef();
}

var refInstance: AWS.Function.Ref;
{
    var instance: AWS.EC2.Instance = new AWS.EC2.Instance("Ec2Instance");
    instance.setKeyName(refKey).setImageId("ami-75g0061f");
    stack.addResource(instance);

    refInstance = instance.createRef();
}

{
    var out: AWS.Output = new AWS.Output("InstanceId", refInstance);
    out.setDescription("The InstanceId of the newly created EC2 instance");
    stack.addOutput(out);
}

//VisualStudioの「出力」にJSONが出力されます。
console.log(stack.toString());

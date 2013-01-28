var stack = new AWS.Stack("Create an EC2 instance running the Amazon Linux 32 bit AMI.");
var refKey;
 {
    var param = new AWS.Parameter("KeyPair", AWS.ParameterTypes.String);
    param.setDescription("The EC2 Key Pair to allow SSH access to the instance");
    stack.addParameter(param);
    refKey = param.createRef();
}
var refInstance;
 {
    var instance = new AWS.EC2.Instance("Ec2Instance");
    instance.setKeyName(refKey).setImageId("ami-75g0061f");
    stack.addResource(instance);
    refInstance = instance.createRef();
}
 {
    var out = new AWS.Output("InstanceId", refInstance);
    out.setDescription("The InstanceId of the newly created EC2 instance");
    stack.addOutput(out);
}
console.log(stack.toString());
//@ sourceMappingURL=sample1.js.map

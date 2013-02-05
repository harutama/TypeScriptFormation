var winstack = new AWS.Stack("https://s3.amazonaws.com/cloudformation-templates-us-east-1/Windows_Single_Server_SharePoint_Foundation.template");
var keypair = new AWS.Parameter("KeyPair", AWS.ParameterTypes.String);
keypair.setDescription("Name of an existing Amazon EC2 key pair for RDP access");
var instancetype = new AWS.Parameter("InstanceType", AWS.ParameterTypes.String);
instancetype.setDescription("Amazon EC2 instance type").setDefault("m1.large");
instancetype.setAllowedValues("m1.small", "m1.medium", "m1.large", "m1.xlarge", "m2.xlarge", "m2.2xlarge", "m2.4xlarge", "c1.medium", "c1.xlarge");
winstack.addParameter(keypair, instancetype);
var type2arch = new AWS.Mapping("AWSInstanceType2Arch");
type2arch.addEntry("m1.small", "Arch", "64");
type2arch.addEntry("m1.medium", "Arch", "64");
type2arch.addEntry("m1.large", "Arch", "64");
type2arch.addEntry("m1.xlarge", "Arch", "64");
type2arch.addEntry("m2.xlarge", "Arch", "64");
type2arch.addEntry("m2.2xlarge", "Arch", "64");
type2arch.addEntry("m2.4xlarge", "Arch", "64");
type2arch.addEntry("c1.medium", "Arch", "64");
type2arch.addEntry("c1.xlarge", "Arch", "64");
var arch2ami = new AWS.Mapping("AWSRegionArch2AMI");
arch2ami.addEntry("us-east-1", "64", "ami-5f42c036");
arch2ami.addEntry("us-west-2", "64", "ami-1679f126");
arch2ami.addEntry("us-west-1", "64", "ami-5eb7961b");
arch2ami.addEntry("eu-west-1", "64", "ami-8e969bfa");
arch2ami.addEntry("ap-southeast-1", "64", "ami-b8f8bbea");
arch2ami.addEntry("ap-southeast-2", "64", "ami-a740d79d");
arch2ami.addEntry("ap-northeast-1", "64", "ami-2210a823");
arch2ami.addEntry("sa-east-1", "64", "ami-9fc41c82");
winstack.addMapping(type2arch, arch2ami);
var iamUser = new AWS.IAM.User("IAMUser");
iamUser.setPath("/");
winstack.addResource(iamUser);
var iamUserKey = new AWS.IAM.AccessKey("IAMUserAccessKey");
iamUserKey.setUserName(iamUser.createRef());
winstack.addResource(iamUserKey);
var spSecurityGroup = new AWS.EC2.SecurityGroup("SharePointFoundationSecurityGroup");
spSecurityGroup.setGroupDescription("Enable HTTP and RDP");
var http = {
    "IpProtocol": "tcp",
    "FromPort": "80",
    "ToPort": "80",
    "CidrIp": "0.0.0.0/0"
};
var rdp = {
    "IpProtocol": "tcp",
    "FromPort": "3389",
    "ToPort": "3389",
    "CidrIp": "0.0.0.0/0"
};
spSecurityGroup.setSecurityGroupIngress([
    http, 
    rdp
]);
winstack.addResource(spSecurityGroup);
var spWaitHandle = new AWS.CloudFormation.WaitConditionHandle("SharePointFoundationWaitHandle");
winstack.addResource(spWaitHandle);
var spFoundation = new AWS.EC2.Instance("SharePointFoundation");
spFoundation.setMetadata(null);
spFoundation.setInstanceType(instancetype.createRef());
 {
    var findArch = new AWS.Function.FindInMap(type2arch, new AWS.Function.Ref(instancetype), "Arch");
    var findAmi = new AWS.Function.FindInMap(arch2ami, AWS.Function.Ref.Region, findArch);
    spFoundation.setImageId(findAmi);
}
spFoundation.setSecurityGroups(spSecurityGroup.createRef());
spFoundation.setKeyName(keypair.createRef());
 {
    var cmd = new AWS.Function.Join("");
    cmd.add("<script>\n");
    cmd.add("cfn-init.exe -v -s ").add(AWS.Function.Ref.StackName).add(" -r SharePointFoundation");
    cmd.add(" --access-key ").add(iamUserKey.createRef());
    cmd.add(" --secret-key ").add(new AWS.Function.GetAtt("IAMUserAccessKey", "SecretAccessKey"));
    cmd.add(" --region ").add(AWS.Function.Ref.Region).add("\n");
    cmd.add("cfn-signal.exe -e %ERRORLEVEL% ").add(new AWS.Function.Base64(spWaitHandle.createRef())).add("\n");
    cmd.add("SCHTASKS /Create /SC MINUTE /MO 10 /TN cfn-hup /RU SYSTEM /TR \"cfn-hup.exe -v --no-daemon\"").add("\n");
    cmd.add("</script>");
    spFoundation.setUserData(cmd);
}
winstack.addResource(spFoundation);
var spEip = new AWS.EC2.EIP("SharePointFoundationEIP");
spEip.setInstanceId(spFoundation.createRef());
winstack.addResource(spEip);
var spWaitCondition = new AWS.CloudFormation.WaitCondition("SharePointFoundationWaitCondition");
spWaitCondition.setDependsOn(spFoundation);
spWaitCondition.setHandle(spWaitHandle.createRef()).setTimeout("3600");
winstack.addResource(spWaitCondition);
var output = new AWS.Output("SharePointFoundationURL", new AWS.Function.Join("").add("http://").add(spEip.createRef()));
output.setDescription("SharePoint Team Site URL. Please retrieve Administrator password of the instance and use it to access the URL");
winstack.addOutput(output);
console.log(winstack.toString());
//@ sourceMappingURL=target1.js.map

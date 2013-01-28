/// <reference path="BaseClasses.ts"/>

module AWS.EC2 {

    /**
     * Associates a subnet with a network ACL.
     * 
     * Return values
     * AssociationId: Returns the value of this object's SubnetId property.
     */
    export class SubnetNetworkAclAssociation extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::SubnetNetworkAclAssociation");
        }


        /**
         * The ID representing the current association between the original network ACL and the subnet.
         * @param ref required : true
         */
        setSubnetId(ref: AWS.Function.Ref): SubnetNetworkAclAssociation;
        setSubnetId(ref: AWS.Function.BaseFunction): SubnetNetworkAclAssociation;
        setSubnetId(ref: any): SubnetNetworkAclAssociation {
            this.Properties["SubnetId"] = ref;
            return this;
        }

        /**
         * The ID of the new ACL to associate with the subnet.
         * @param ref required : true
         */
        setNetworkAclId(ref: AWS.Function.Ref): SubnetNetworkAclAssociation;
        setNetworkAclId(ref: AWS.Function.BaseFunction): SubnetNetworkAclAssociation;
        setNetworkAclId(ref: any): SubnetNetworkAclAssociation {
            this.Properties["NetworkAclId"] = ref;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["SubnetId", "NetworkAclId"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.IAM {

    /**
     * The AWS::IAM::User type creates a user.
     * 
     * Return values
     * Arn: Returns the Amazon Resource Name (ARN) for the specified AWS::IAM::User resource.
     * For example: arn:aws:iam::123456789012:user/mystack-myuser-1CCXAFG2H2U4D.
     */
    export class User extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::IAM::User");
        }


        /**
         * The path for the user name.
         * For more information about paths, see Identifiers for IAM Entities in Using AWS Identity and Access Management.
         * @param ref required : false
         */
        setGroups(ref: AWS.Function.Ref[]): User;
        setGroups(ref: AWS.Function.BaseFunction): User;
        setGroups(ref: any): User {
            this.Properties["Groups"] = ref;
            return this;
        }

        /**
         * Applies specified policies to the user.
         * @param ref required : false
         */
        setPolicies(ref: AWS.Function.Ref[]): User;
        setPolicies(ref: AWS.Function.BaseFunction): User;
        setPolicies(ref: any): User {
            this.Properties["Policies"] = ref;
            return this;
        }

        /**
         * Creates a login profile for the user so the user can access AWS services such as the AWS Management Console.
         * @param lp required : false
         */
        setLoginProfile(lp: Object): User;
        setLoginProfile(lp: AWS.Function.BaseFunction): User;
        setLoginProfile(lp: any): User {
            this.Properties["LoginProfile"] = lp;
            return this;
        }

        /**
         * The path for the user name.
         * For more information about paths, see Identifiers for IAM Entities in Using AWS Identity and Access Management.
         * @param p required : false
         */
        setPath(p: string): User;
        setPath(p: AWS.Function.BaseFunction): User;
        setPath(p: any): User {
            this.Properties["Path"] = p;
            return this;
        }

        validate(errors: Object[]): Object[] {
            return errors;
        }

    }
}


module AWS.SQS {

    /**
     * The AWS::SQS::QueuePolicy type applies a policy to SQS queues.
     */
    export class QueuePolicy extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::SQS::QueuePolicy");
        }


        /**
         * The URLs of the queues to which you want to add the policy.
         * @param ref required : true
         */
        setQueues(ref: AWS.Function.Ref[]): QueuePolicy;
        setQueues(ref: AWS.Function.BaseFunction): QueuePolicy;
        setQueues(ref: any): QueuePolicy {
            this.Properties["Queues"] = ref;
            return this;
        }

        /**
         * A policy document containing permissions to add to the specified SQS queues.
         * @param jsonObj required : true
         */
        setPolicyDocument(jsonObj: Object): QueuePolicy;
        setPolicyDocument(jsonObj: AWS.Function.BaseFunction): QueuePolicy;
        setPolicyDocument(jsonObj: any): QueuePolicy {
            this.Properties["PolicyDocument"] = jsonObj;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["Queues", "PolicyDocument"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.RDS {

    /**
     * The AWS::RDS::DBSecurityGroup type is used to create or update an Amazon RDS DB Security Group.
     */
    export class DBSecurityGroup extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::RDS::DBSecurityGroup");
        }


        /**
         * The Id of VPC.
         * Indicates which VPC this DB Security Group should belong to.
         * Required: Conditional.
         * Must be specified to create a DB Security Group for a VPC; may not be specified otherwise.
         * @param ref required : false
         */
        setEC2VpcId(ref: AWS.Function.Ref): DBSecurityGroup;
        setEC2VpcId(ref: AWS.Function.BaseFunction): DBSecurityGroup;
        setEC2VpcId(ref: any): DBSecurityGroup {
            this.Properties["EC2VpcId"] = ref;
            return this;
        }

        /**
         * Description of the security group.
         * @param gd required : true
         */
        setGroupDescription(gd: string): DBSecurityGroup;
        setGroupDescription(gd: AWS.Function.BaseFunction): DBSecurityGroup;
        setGroupDescription(gd: any): DBSecurityGroup {
            this.Properties["GroupDescription"] = gd;
            return this;
        }

        /**
         * Network ingress authorization for an Amazon EC2 security group or an IP address range.
         * @param dbsgi required : true
         */
        setDBSecurityGroupIngress(dbsgi: Object[]): DBSecurityGroup;
        setDBSecurityGroupIngress(dbsgi: AWS.Function.BaseFunction): DBSecurityGroup;
        setDBSecurityGroupIngress(dbsgi: any): DBSecurityGroup {
            this.Properties["DBSecurityGroupIngress"] = dbsgi;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["GroupDescription", "DBSecurityGroupIngress"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * The AWS::EC2::SecurityGroupIngress type adds an ingress rule to an Amazon EC2 or VPC security group.
     */
    export class SecurityGroupIngress extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::SecurityGroupIngress");
        }


        /**
         * IP protocol name or number.
         * @param ip required : true
         */
        setIpProtocol(ip: string): SecurityGroupIngress;
        setIpProtocol(ip: AWS.Function.BaseFunction): SecurityGroupIngress;
        setIpProtocol(ip: any): SecurityGroupIngress {
            this.Properties["IpProtocol"] = ip;
            return this;
        }

        /**
         * Name of the EC2 security group to modify.
         * This value can be a reference to an AWS::EC2::SecurityGroup resource or the name of an existing EC2 security group.
         * Required: Can be used instead of GroupId for EC2 security groups.
         * @param ref required : false
         */
        setGroupName(ref: AWS.Function.Ref): SecurityGroupIngress;
        setGroupName(ref: AWS.Function.BaseFunction): SecurityGroupIngress;
        setGroupName(ref: any): SecurityGroupIngress {
            this.Properties["GroupName"] = ref;
            return this;
        }

        /**
         * Specifies the name of the Amazon EC2 Security Group to allow access.
         * If you specify CidrIp, do not specify SourceSecurityGroupName.
         * @param ref required : false
         */
        setSourceSecurityGroupName(ref: AWS.Function.Ref): SecurityGroupIngress;
        setSourceSecurityGroupName(ref: AWS.Function.BaseFunction): SecurityGroupIngress;
        setSourceSecurityGroupName(ref: any): SecurityGroupIngress {
            this.Properties["SourceSecurityGroupName"] = ref;
            return this;
        }

        /**
         * End of port range for the TCP and UDP protocols, or an ICMP code.
         * An ICMP code of -1 indicates a wildcard.
         * @param tp required : true
         */
        setToPort(tp: string): SecurityGroupIngress;
        setToPort(tp: AWS.Function.BaseFunction): SecurityGroupIngress;
        setToPort(tp: any): SecurityGroupIngress {
            this.Properties["ToPort"] = tp;
            return this;
        }

        /**
         * For VPC security groups only.
         * Specifies the ID of the Amazon EC2 Security Group to allow access.
         * If you specify CidrIp, do not specify SourceSecurityGroupId.
         * @param ref required : false
         */
        setSourceSecurityGroupId(ref: AWS.Function.Ref): SecurityGroupIngress;
        setSourceSecurityGroupId(ref: AWS.Function.BaseFunction): SecurityGroupIngress;
        setSourceSecurityGroupId(ref: any): SecurityGroupIngress {
            this.Properties["SourceSecurityGroupId"] = ref;
            return this;
        }

        /**
         * Specifies the AWS Account ID of the owner of the Amazon EC2 Security Group specified in the SourceSecurityGroupName property.
        
        If you specify SourceSecurityGroupName and that security group is owned by a different account than the account creating the stack, you must specify the SourceSecurityGroupOwnerId; otherwise, this property is optional.
         * @param ssgoi required : false
         */
        setSourceSecurityGroupOwnerId(ssgoi: string): SecurityGroupIngress;
        setSourceSecurityGroupOwnerId(ssgoi: AWS.Function.BaseFunction): SecurityGroupIngress;
        setSourceSecurityGroupOwnerId(ssgoi: any): SecurityGroupIngress {
            this.Properties["SourceSecurityGroupOwnerId"] = ssgoi;
            return this;
        }

        /**
         * Start of port range for the TCP and UDP protocols, or an ICMP type number.
         * An ICMP type number of -1 indicates a wildcard.
         * @param fp required : true
         */
        setFromPort(fp: string): SecurityGroupIngress;
        setFromPort(fp: AWS.Function.BaseFunction): SecurityGroupIngress;
        setFromPort(fp: any): SecurityGroupIngress {
            this.Properties["FromPort"] = fp;
            return this;
        }

        /**
         * Name of the EC2 security group to modify.
         * This value can be a reference to an AWS::EC2::SecurityGroup resource or the name of an existing EC2 security group.
         * Required: Yes, for VPC security groups; can be used instead of GroupName for EC2 security groups.
         * @param ref required : false
         */
        setGroupId(ref: AWS.Function.Ref): SecurityGroupIngress;
        setGroupId(ref: AWS.Function.BaseFunction): SecurityGroupIngress;
        setGroupId(ref: any): SecurityGroupIngress {
            this.Properties["GroupId"] = ref;
            return this;
        }

        /**
         * The CIDR range.
         * If you specify SourceSecurityGroupName, do not specify CidrIp.
         * @param ci required : false
         */
        setCidrIp(ci: string): SecurityGroupIngress;
        setCidrIp(ci: AWS.Function.BaseFunction): SecurityGroupIngress;
        setCidrIp(ci: any): SecurityGroupIngress {
            this.Properties["CidrIp"] = ci;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["IpProtocol", "ToPort", "FromPort"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * The AWS::EC2::SecurityGroup type creates an Amazon EC2 security group.
     */
    export class SecurityGroup extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::SecurityGroup");
        }


        /**
         * Description of the security group.
         * @param gd required : false
         */
        setGroupDescription(gd: string): SecurityGroup;
        setGroupDescription(gd: AWS.Function.BaseFunction): SecurityGroup;
        setGroupDescription(gd: any): SecurityGroup {
            this.Properties["GroupDescription"] = gd;
            return this;
        }

        /**
         * A list of EC2 security group ingress rules.
         * @param sgi required : false
         */
        setSecurityGroupIngress(sgi: Object[]): SecurityGroup;
        setSecurityGroupIngress(sgi: AWS.Function.BaseFunction): SecurityGroup;
        setSecurityGroupIngress(sgi: any): SecurityGroup {
            this.Properties["SecurityGroupIngress"] = sgi;
            return this;
        }

        /**
         * ID of the VPC.
         * @param ref required : false
         */
        setVpcId(ref: AWS.Function.Ref): SecurityGroup;
        setVpcId(ref: AWS.Function.BaseFunction): SecurityGroup;
        setVpcId(ref: any): SecurityGroup {
            this.Properties["VpcId"] = ref;
            return this;
        }

        /**
         * A list of EC2 security group egress rules.
         * @param sge required : false
         */
        setSecurityGroupEgress(sge: Object[]): SecurityGroup;
        setSecurityGroupEgress(sge: AWS.Function.BaseFunction): SecurityGroup;
        setSecurityGroupEgress(sge: any): SecurityGroup {
            this.Properties["SecurityGroupEgress"] = sge;
            return this;
        }

        validate(errors: Object[]): Object[] {
            return errors;
        }

    }
}


module AWS.ElasticBeanstalk {

    /**
     * Creates an application within AWS Elastic Beanstalk.
     */
    export class Application extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::ElasticBeanstalk::Application");
        }


        /**
         * Describes the application.
         * @param d required : false
         */
        setDescription(d: string): Application;
        setDescription(d: AWS.Function.BaseFunction): Application;
        setDescription(d: any): Application {
            this.Properties["Description"] = d;
            return this;
        }

        /**
         * Application versions associated with this application.
         * An application version is a specific, labeled iteration of deployable code.
         * @param av required : true
         */
        setApplicationVersions(av: Object[]): Application;
        setApplicationVersions(av: AWS.Function.BaseFunction): Application;
        setApplicationVersions(av: any): Application {
            this.Properties["ApplicationVersions"] = av;
            return this;
        }

        /**
         * Configuration templates associated with this application.
         * You can use templates to deploy different versions of an application using the configuration settings defined in the template.
         * @param ct required : false
         */
        setConfigurationTemplates(ct: Object[]): Application;
        setConfigurationTemplates(ct: AWS.Function.BaseFunction): Application;
        setConfigurationTemplates(ct: any): Application {
            this.Properties["ConfigurationTemplates"] = ct;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["ApplicationVersions"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.IAM {

    /**
     * Creates an AWS Identity and Access Management (IAM) Instance Profile that can be used with IAM Roles for EC2 Instances.
     * 
     * Return values
     * Arn: Returns the Amazon Resource Name (ARN) for the instance profile.
     * For example: arn:aws:iam::1234567890:instance-profile/MyProfile-ASDNSDLKJ.
     */
    export class InstanceProfile extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::IAM::InstanceProfile");
        }


        /**
         * The roles associated with this IAM instance profile.
         * @param ref required : true
         */
        setRoles(ref: AWS.Function.Ref[]): InstanceProfile;
        setRoles(ref: AWS.Function.BaseFunction): InstanceProfile;
        setRoles(ref: any): InstanceProfile {
            this.Properties["Roles"] = ref;
            return this;
        }

        /**
         * The path associated with this IAM instance profile.
         * For more information about paths, see Identifiers for IAM Entities in Using AWS Identity and Access Management.
         * @param p required : false
         */
        setPath(p: string): InstanceProfile;
        setPath(p: AWS.Function.BaseFunction): InstanceProfile;
        setPath(p: any): InstanceProfile {
            this.Properties["Path"] = p;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["Roles"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * Creates a new VPN connection between an existing virtual private gateway and a VPN customer gateway.
     */
    export class VPNConnection extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::VPNConnection");
        }


        /**
         * The ID of the customer gateway.
         * This can either be an embedded JSON object or a reference to a Gateway ID.
         * @param ref required : true
         */
        setCustomerGatewayId(ref: AWS.Function.Ref): VPNConnection;
        setCustomerGatewayId(ref: AWS.Function.BaseFunction): VPNConnection;
        setCustomerGatewayId(ref: any): VPNConnection {
            this.Properties["CustomerGatewayId"] = ref;
            return this;
        }

        /**
         * The ID of the virtual private gateway.
         * This can either be an embedded JSON object or a reference to a Gateway ID.
         * @param ref required : true
         */
        setVpnGatewayId(ref: AWS.Function.Ref): VPNConnection;
        setVpnGatewayId(ref: AWS.Function.BaseFunction): VPNConnection;
        setVpnGatewayId(ref: any): VPNConnection {
            this.Properties["VpnGatewayId"] = ref;
            return this;
        }

        /**
         * The type of VPN connection this virtual private gateway supports.
         * Example: "ipsec.1"
         * @param t required : true
         */
        setType(t: string): VPNConnection;
        setType(t: AWS.Function.BaseFunction): VPNConnection;
        setType(t: any): VPNConnection {
            this.Properties["Type"] = t;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["CustomerGatewayId", "VpnGatewayId", "Type"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.SDB {

    /**
     * The AWS::SDB::Domain creates a Amazon SimpleDB Domain.
     */
    export class Domain extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::SDB::Domain");
        }


        validate(errors: Object[]): Object[] {
            return errors;
        }

    }
}


module AWS.IAM {

    /**
     * The AWS::IAM::Policy type applies an Identity and Access Management (IAM) policy to users or groups.
     */
    export class Policy extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::IAM::Policy");
        }


        /**
         * The names of groups to which you want to add the policy.
         * @param ref required : false
         */
        setGroups(ref: AWS.Function.Ref[]): Policy;
        setGroups(ref: AWS.Function.BaseFunction): Policy;
        setGroups(ref: any): Policy {
            this.Properties["Groups"] = ref;
            return this;
        }

        /**
         * The names of users for whom you want to add the policy.
         * @param ref required : false
         */
        setUsers(ref: AWS.Function.Ref[]): Policy;
        setUsers(ref: AWS.Function.BaseFunction): Policy;
        setUsers(ref: any): Policy {
            this.Properties["Users"] = ref;
            return this;
        }

        /**
         * The name of the policy.
         * @param pn required : true
         */
        setPolicyName(pn: string): Policy;
        setPolicyName(pn: AWS.Function.BaseFunction): Policy;
        setPolicyName(pn: any): Policy {
            this.Properties["PolicyName"] = pn;
            return this;
        }

        /**
         * A policy document containing permissions to add to the specified users or groups.
         * @param jsonObj required : true
         */
        setPolicyDocument(jsonObj: Object): Policy;
        setPolicyDocument(jsonObj: AWS.Function.BaseFunction): Policy;
        setPolicyDocument(jsonObj: any): Policy {
            this.Properties["PolicyDocument"] = jsonObj;
            return this;
        }

        /**
         * The names of roles to which you want to add the policy.
         * @param ref required : false
         */
        setRoles(ref: AWS.Function.Ref[]): Policy;
        setRoles(ref: AWS.Function.BaseFunction): Policy;
        setRoles(ref: any): Policy {
            this.Properties["Roles"] = ref;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["PolicyName", "PolicyDocument"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.SQS {

    /**
     * The AWS::SQS::Queue type creates an Amazon SQS queue.
     * 
     * Return values
     * Arn: Returns the Amazon Resource Name (ARN) of the queue.
     * For example: arn:aws:sqs:us-east-1:123456789012:mystack-myqueue-15PG5C2FC1CW8
     * QueueName: Returns the queue name.
     * For example: mystack-myqueue-1VF9BKQH5BJVI
     */
    export class Queue extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::SQS::Queue");
        }


        /**
         * The length of time during which the queue will be unavailable once a message is delivered from the queue.
         * This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue.
         * Values must be from 0 to 43200 seconds (12 hours).
         * If no value is specified, the default value of 30 seconds will be used.
         * @param vt required : false
         */
        setVisibilityTimeout(vt: number): Queue;
        setVisibilityTimeout(vt: AWS.Function.BaseFunction): Queue;
        setVisibilityTimeout(vt: any): Queue {
            this.Properties["VisibilityTimeout"] = vt;
            return this;
        }

        validate(errors: Object[]): Object[] {
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * The AWS::EC2::Volume type creates a new Elastic Block Store volume.
     * You can set a deletion policy for your volume to control how AWS CloudFormation handles the volume when the stack is deleted.
     * For Elastic Block Store volumes, you can choose to retain the volume, to delete the volume, or to create a snapshot of the volume.
     */
    export class Volume extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::Volume");
        }


        /**
         * The tags that you want to attach to the instance.
         * @param t required : false
         */
        setTags(t: Object[]): Volume;
        setTags(t: AWS.Function.BaseFunction): Volume;
        setTags(t: any): Volume {
            this.Properties["Tags"] = t;
            return this;
        }

        /**
         * The volume type.
         * This can be either "standard" or "io1".
         * If no value is specified, "standard" will be used.
         * @param vt required : false
         */
        setVolumeType(vt: string): Volume;
        setVolumeType(vt: AWS.Function.BaseFunction): Volume;
        setVolumeType(vt: any): Volume {
            this.Properties["VolumeType"] = vt;
            return this;
        }

        /**
         * The number of I/O operations per second (IOPS) that the volume supports.
         * This can be any value from 1–1000.
         * Required: Conditional.
         * Required when the volume type is "io1"; not used with standard volumes.
         * @param i required : false
         */
        setIops(i: number): Volume;
        setIops(i: AWS.Function.BaseFunction): Volume;
        setIops(i: any): Volume {
            this.Properties["Iops"] = i;
            return this;
        }

        /**
         * The snapshot from which to create the new volume.
         * Required: Conditional.
         * Required if you are creating a volume from a snapshot.
         * If you do not specify a value for SnapshotId, you should specify a value for Size.
         * @param si required : false
         */
        setSnapshotId(si: string): Volume;
        setSnapshotId(si: AWS.Function.BaseFunction): Volume;
        setSnapshotId(si: any): Volume {
            this.Properties["SnapshotId"] = si;
            return this;
        }

        /**
         * The Availability Zone in which to create the new volume.
         * @param az required : true
         */
        setAvailabilityZone(az: string): Volume;
        setAvailabilityZone(az: AWS.Function.BaseFunction): Volume;
        setAvailabilityZone(az: any): Volume {
            this.Properties["AvailabilityZone"] = az;
            return this;
        }

        /**
         * The size of the volume, in gibibytes (GiBs).
         * This can be any value from 1–1024.
         * Required: Conditional.
         * Required if you are not creating a volume from a snapshot.
         * If you specify Size, do not specify SnapshotId.
         * @param s required : false
         */
        setSize(s: string): Volume;
        setSize(s: AWS.Function.BaseFunction): Volume;
        setSize(s: any): Volume {
            this.Properties["Size"] = s;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["AvailabilityZone"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * Creates a new route in a route table within a VPC.
     * The route's target can be either a gateway attached to the VPC or a NAT instance in the VPC.
     */
    export class Route extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::Route");
        }


        /**
         * The ID of a gateway attached to your VPC.
         * For example: "igw-eaad4883".
         * Required: Conditional.
         * You must provide only one of the following: a GatewayID, InstanceID, or NetworkInterfaceId.
         * @param ref required : false
         */
        setGatewayId(ref: AWS.Function.Ref): Route;
        setGatewayId(ref: AWS.Function.BaseFunction): Route;
        setGatewayId(ref: any): Route {
            this.Properties["GatewayId"] = ref;
            return this;
        }

        /**
         * The ID of a NAT instance in your VPC.
         * For example, "i-1a2b3c4d".
         * Required: Conditional.
         * You must provide only one of the following: a GatewayID, InstanceID, or NetworkInterfaceId.
         * @param ref required : false
         */
        setInstanceId(ref: AWS.Function.Ref): Route;
        setInstanceId(ref: AWS.Function.BaseFunction): Route;
        setInstanceId(ref: any): Route {
            this.Properties["InstanceId"] = ref;
            return this;
        }

        /**
         * The ID of the route table where the route will be added.
         * @param ref required : true
         */
        setRouteTableId(ref: AWS.Function.Ref): Route;
        setRouteTableId(ref: AWS.Function.BaseFunction): Route;
        setRouteTableId(ref: any): Route {
            this.Properties["RouteTableId"] = ref;
            return this;
        }

        /**
         * The CIDR address block used for the destination match.
         * For example, "0.0.0.0/0".
         * Routing decisions are based on the most specific match.
         * @param dcb required : true
         */
        setDestinationCidrBlock(dcb: string): Route;
        setDestinationCidrBlock(dcb: AWS.Function.BaseFunction): Route;
        setDestinationCidrBlock(dcb: any): Route {
            this.Properties["DestinationCidrBlock"] = dcb;
            return this;
        }

        /**
         * Allows the routing of network interface IDs.
         * Required: Conditional.
         * You must provide only one of the following: a GatewayID, InstanceID, or NetworkInterfaceId.
         * @param ref required : false
         */
        setNetworkInterfaceId(ref: AWS.Function.Ref): Route;
        setNetworkInterfaceId(ref: AWS.Function.BaseFunction): Route;
        setNetworkInterfaceId(ref: any): Route {
            this.Properties["NetworkInterfaceId"] = ref;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["RouteTableId", "DestinationCidrBlock"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * Creates a set of DHCP options for your VPC.
     */
    export class DHCPOptions extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::DHCPOptions");
        }


        /**
         * Value indicating the NetBIOS node type (1, 2, 4, or 8).
         * We recommend you only use 2 at this time (broadcast and multicast are currently not supported).
         * @param nnt required : true
         */
        setNetbiosNodeType(nnt: number[]): DHCPOptions;
        setNetbiosNodeType(nnt: AWS.Function.BaseFunction): DHCPOptions;
        setNetbiosNodeType(nnt: any): DHCPOptions {
            this.Properties["NetbiosNodeType"] = nnt;
            return this;
        }

        /**
         * The tags that you want to attach to the instance.
         * @param t required : false
         */
        setTags(t: Object[]): DHCPOptions;
        setTags(t: AWS.Function.BaseFunction): DHCPOptions;
        setTags(t: any): DHCPOptions {
            this.Properties["Tags"] = t;
            return this;
        }

        /**
         * The IP address of a Network Time Protocol (NTP) server.
         * You can specify up to four addresses.
         * Example: 10.0.0.1
         * @param ns required : true
         */
        setNtpServers(ns: string[]): DHCPOptions;
        setNtpServers(ns: AWS.Function.BaseFunction): DHCPOptions;
        setNtpServers(ns: any): DHCPOptions {
            this.Properties["NtpServers"] = ns;
            return this;
        }

        /**
         * The IP address (IPv4) of a NetBIOS name server.
         * You can specify up to four addresses.
         * Example: 10.0.0.1
         * @param nns required : true
         */
        setNetbiosNameServers(nns: string[]): DHCPOptions;
        setNetbiosNameServers(nns: AWS.Function.BaseFunction): DHCPOptions;
        setNetbiosNameServers(nns: any): DHCPOptions {
            this.Properties["NetbiosNameServers"] = nns;
            return this;
        }

        /**
         * A domain name of your choice.
         * Example: example.com
         * @param dn required : true
         */
        setDomainName(dn: string): DHCPOptions;
        setDomainName(dn: AWS.Function.BaseFunction): DHCPOptions;
        setDomainName(dn: any): DHCPOptions {
            this.Properties["DomainName"] = dn;
            return this;
        }

        /**
         * The IP (IPv4) address of a domain name server.
         * You can specify up to four addresses.
         * Example: 10.0.0.1
         * @param dns required : true
         */
        setDomainNameServers(dns: string[]): DHCPOptions;
        setDomainNameServers(dns: AWS.Function.BaseFunction): DHCPOptions;
        setDomainNameServers(dns: any): DHCPOptions {
            this.Properties["DomainNameServers"] = dns;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["NetbiosNodeType", "NtpServers", "NetbiosNameServers", "DomainName", "DomainNameServers"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.CloudFormation {

    /**
     * The AWS::CloudFormation::WaitConditionHandle type has no properties.
     */
    export class WaitConditionHandle extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::CloudFormation::WaitConditionHandle");
        }


        validate(errors: Object[]): Object[] {
            return errors;
        }

    }
}


module AWS.ElastiCache {

    /**
     * The AWS::ElastiCache::SecurityGroup type creates a cache security group.
     */
    export class SecurityGroup extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::ElastiCache::SecurityGroup");
        }


        /**
         * The description property of the new cache security group.
         * @param d required : true
         */
        setDescription(d: string): SecurityGroup;
        setDescription(d: AWS.Function.BaseFunction): SecurityGroup;
        setDescription(d: any): SecurityGroup {
            this.Properties["Description"] = d;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["Description"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.AutoScaling {

    /**
     * The AWS::AutoScaling::ScalingPolicy resource adds a scaling policy to an auto scaling group.
     * A scaling policy specifies whether to scale the auto scaling group up or down, and by how much.
     */
    export class ScalingPolicy extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::AutoScaling::ScalingPolicy");
        }


        /**
         * The name or Amazon Resource Name (ARN) of the Auto Scaling Group that you want to attach the policy to.
         * @param ref required : true
         */
        setAutoScalingGroupName(ref: AWS.Function.Ref): ScalingPolicy;
        setAutoScalingGroupName(ref: AWS.Function.BaseFunction): ScalingPolicy;
        setAutoScalingGroupName(ref: any): ScalingPolicy {
            this.Properties["AutoScalingGroupName"] = ref;
            return this;
        }

        /**
         * The number of instances by which to scale.
         * AdjustmentType determines the interpretation of this number (e.g., as an absolute number or as a percentage of the existing Auto Scaling group size).
         * A positive increment adds to the current capacity and a negative value removes from the current capacity.
         * @param sa required : true
         */
        setScalingAdjustment(sa: string): ScalingPolicy;
        setScalingAdjustment(sa: AWS.Function.BaseFunction): ScalingPolicy;
        setScalingAdjustment(sa: any): ScalingPolicy {
            this.Properties["ScalingAdjustment"] = sa;
            return this;
        }

        /**
         * Specifies whether the ScalingAdjustment is an absolute number or a percentage of the current capacity.
         * @param at required : true
         */
        setAdjustmentType(at: string): ScalingPolicy;
        setAdjustmentType(at: AWS.Function.BaseFunction): ScalingPolicy;
        setAdjustmentType(at: any): ScalingPolicy {
            this.Properties["AdjustmentType"] = at;
            return this;
        }

        /**
         * The amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start.
         * @param c required : false
         */
        setCooldown(c: string): ScalingPolicy;
        setCooldown(c: AWS.Function.BaseFunction): ScalingPolicy;
        setCooldown(c: any): ScalingPolicy {
            this.Properties["Cooldown"] = c;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["AutoScalingGroupName", "ScalingAdjustment", "AdjustmentType"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.IAM {

    /**
     * The AWS::IAM::UserToGroupAddition type adds Identity and Access Management (IAM) users to a group.
     */
    export class UserToGroupAddition extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::IAM::UserToGroupAddition");
        }


        /**
         * List of users
         * @param ref required : true
         */
        setUsers(ref: AWS.Function.Ref[]): UserToGroupAddition;
        setUsers(ref: AWS.Function.BaseFunction): UserToGroupAddition;
        setUsers(ref: any): UserToGroupAddition {
            this.Properties["Users"] = ref;
            return this;
        }

        /**
         * List of groups
         * @param ref required : true
         */
        setGroupName(ref: AWS.Function.Ref[]): UserToGroupAddition;
        setGroupName(ref: AWS.Function.BaseFunction): UserToGroupAddition;
        setGroupName(ref: any): UserToGroupAddition {
            this.Properties["GroupName"] = ref;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["Users", "GroupName"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.S3 {

    /**
     * The AWS::S3::Bucket type creates an Amazon S3 bucket.
     * 
     * Return values
     * DomainName: The DNS name of the specified bucket.
     * WebsiteURL: Amazon S3 website endpoint for the specified bucket.
     */
    export class Bucket extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::S3::Bucket");
        }


        /**
         * A canned ACL that grants predefined permissions on the bucket.
         * Default is Private.
         * @param ac required : false
         */
        setAccessControl(ac: string): Bucket;
        setAccessControl(ac: AWS.Function.BaseFunction): Bucket;
        setAccessControl(ac: any): Bucket {
            this.Properties["AccessControl"] = ac;
            return this;
        }

        /**
         * Information used to configure the bucket as a static website.
         * @param wc required : false
         */
        setWebsiteConfiguration(wc: Object): Bucket;
        setWebsiteConfiguration(wc: AWS.Function.BaseFunction): Bucket;
        setWebsiteConfiguration(wc: any): Bucket {
            this.Properties["WebsiteConfiguration"] = wc;
            return this;
        }

        validate(errors: Object[]): Object[] {
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * Creates a new Internet gateway in your AWS account.
     * After creating the Internet gateway, you then attach it to a VPC.
     */
    export class InternetGateway extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::InternetGateway");
        }


        /**
         * The tags that you want to attach to the instance.
         * @param t required : false
         */
        setTags(t: Object[]): InternetGateway;
        setTags(t: AWS.Function.BaseFunction): InternetGateway;
        setTags(t: any): InternetGateway {
            this.Properties["Tags"] = t;
            return this;
        }

        validate(errors: Object[]): Object[] {
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * Creates a subnet in an existing VPC.
     * 
     * Return values
     * AvailabilityZone: Returns the availability zone (for example, "us-east-1a") of this subnet.
     */
    export class Subnet extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::Subnet");
        }


        /**
         * The CIDR block you want the subnet to cover (for example, "10.0.0.0/24").
         * @param cb required : true
         */
        setCidrBlock(cb: string): Subnet;
        setCidrBlock(cb: AWS.Function.BaseFunction): Subnet;
        setCidrBlock(cb: any): Subnet {
            this.Properties["CidrBlock"] = cb;
            return this;
        }

        /**
         * The tags that you want to attach to the instance.
         * @param t required : false
         */
        setTags(t: Object[]): Subnet;
        setTags(t: AWS.Function.BaseFunction): Subnet;
        setTags(t: any): Subnet {
            this.Properties["Tags"] = t;
            return this;
        }

        /**
         * The availability zone you want the subnet in.
         * Default: AWS selects a zone for you (recommended).
         * @param az required : false
         */
        setAvailabilityZone(az: string): Subnet;
        setAvailabilityZone(az: AWS.Function.BaseFunction): Subnet;
        setAvailabilityZone(az: any): Subnet {
            this.Properties["AvailabilityZone"] = az;
            return this;
        }

        /**
         * A Ref structure containing the ID of the VPC where you want to create the subnet.
         * The VPC ID is provided as the value of the "Ref" property, as: { "Ref": "VPCID" }.
         * @param ref required : true
         */
        setVpcId(ref: AWS.Function.Ref): Subnet;
        setVpcId(ref: AWS.Function.BaseFunction): Subnet;
        setVpcId(ref: any): Subnet {
            this.Properties["VpcId"] = ref;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["CidrBlock", "VpcId"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * Creates a new virtual private gateway.
     * A virtual private gateway is the VPC-side endpoint for your VPN connection.
     */
    export class VPNGateway extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::VPNGateway");
        }


        /**
         * The tags that you want to attach to the instance.
         * @param t required : false
         */
        setTags(t: Object[]): VPNGateway;
        setTags(t: AWS.Function.BaseFunction): VPNGateway;
        setTags(t: any): VPNGateway {
            this.Properties["Tags"] = t;
            return this;
        }

        /**
         * The type of VPN connection this customer gateway supports.
         * For example: ipsec.1
         * @param t required : true
         */
        setType(t: string): VPNGateway;
        setType(t: AWS.Function.BaseFunction): VPNGateway;
        setType(t: any): VPNGateway {
            this.Properties["Type"] = t;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["Type"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.AutoScaling {

    /**
     * The AWS::AutoScaling::LaunchConfiguration type creates an Auto Scaling launch configuration that can be used by an Auto Scaling group to configure EC2 instances in the Auto Scaling group.
     */
    export class LaunchConfiguration extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::AutoScaling::LaunchConfiguration");
        }


        /**
         * Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance.
         * The instance profile contains the IAM role.
         * @param ref required : false
         */
        setIamInstanceProfile(ref: AWS.Function.Ref): LaunchConfiguration;
        setIamInstanceProfile(ref: AWS.Function.BaseFunction): LaunchConfiguration;
        setIamInstanceProfile(ref: any): LaunchConfiguration {
            this.Properties["IamInstanceProfile"] = ref;
            return this;
        }

        /**
         * Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.
         * @param ii required : true
         */
        setImageId(ii: string): LaunchConfiguration;
        setImageId(ii: AWS.Function.BaseFunction): LaunchConfiguration;
        setImageId(ii: any): LaunchConfiguration {
            this.Properties["ImageId"] = ii;
            return this;
        }

        /**
         * Indicates whether or not instance monitoring should be enabled for this autoscaling group.
         * This is enabled by default.
         * To turn it off, set InstanceMonitoring to "false".
         * @param im required : false
         */
        setInstanceMonitoring(im: bool): LaunchConfiguration;
        setInstanceMonitoring(im: AWS.Function.BaseFunction): LaunchConfiguration;
        setInstanceMonitoring(im: any): LaunchConfiguration {
            this.Properties["InstanceMonitoring"] = im;
            return this;
        }

        /**
         * The kernel ID
         * @param ki required : false
         */
        setKernelId(ki: string): LaunchConfiguration;
        setKernelId(ki: AWS.Function.BaseFunction): LaunchConfiguration;
        setKernelId(ki: any): LaunchConfiguration {
            this.Properties["KernelId"] = ki;
            return this;
        }

        /**
         * The ID of the RAM disk to select.
         * Some kernels require additional drivers at launch.
         * Check the kernel requirements for information about whether you need to specify a RAM disk.
         * To find kernel requirements, refer to the AWS Resource Center and search for the kernel ID.
         * @param ri required : false
         */
        setRamdiskId(ri: string): LaunchConfiguration;
        setRamdiskId(ri: AWS.Function.BaseFunction): LaunchConfiguration;
        setRamdiskId(ri: any): LaunchConfiguration {
            this.Properties["RamdiskId"] = ri;
            return this;
        }

        /**
         * A list containing the EC2 security groups to assign to the Amazon EC2 instances in the Auto Scaling group.
         * The list can contain the name of existing EC2 security groups, references to AWS::EC2::SecurityGroup resources created in the template, or both.
         * @param ref required : false
         */
        setSecurityGroups(ref: AWS.Function.Ref[]): LaunchConfiguration;
        setSecurityGroups(ref: AWS.Function.BaseFunction): LaunchConfiguration;
        setSecurityGroups(ref: any): LaunchConfiguration {
            this.Properties["SecurityGroups"] = ref;
            return this;
        }

        /**
         * The user data available to the launched EC2 instances.
         * @param ud required : false
         */
        setUserData(ud: string): LaunchConfiguration;
        setUserData(ud: AWS.Function.BaseFunction): LaunchConfiguration;
        setUserData(ud: any): LaunchConfiguration {
            this.Properties["UserData"] = ud;
            return this;
        }

        /**
         * Specifies how block devices are exposed to the instance.
         * You can specify virtual devices and EBS volumes.
         * @param bdm required : false
         */
        setBlockDeviceMappings(bdm: Object[]): LaunchConfiguration;
        setBlockDeviceMappings(bdm: AWS.Function.BaseFunction): LaunchConfiguration;
        setBlockDeviceMappings(bdm: any): LaunchConfiguration {
            this.Properties["BlockDeviceMappings"] = bdm;
            return this;
        }

        /**
         * The instance type.
         * For example, "m1.small".
         * @param it required : true
         */
        setInstanceType(it: string): LaunchConfiguration;
        setInstanceType(it: AWS.Function.BaseFunction): LaunchConfiguration;
        setInstanceType(it: any): LaunchConfiguration {
            this.Properties["InstanceType"] = it;
            return this;
        }

        /**
         * Provides the name of the EC2 key pair.
         * @param kn required : false
         */
        setKeyName(kn: string): LaunchConfiguration;
        setKeyName(kn: AWS.Function.BaseFunction): LaunchConfiguration;
        setKeyName(kn: any): LaunchConfiguration {
            this.Properties["KeyName"] = kn;
            return this;
        }

        /**
         * The spot price for this autoscaling group.
         * If a spot price is set, then the autoscaling group will launch when the current spot price is less than the amount specified in the template.
         * @param sp required : false
         */
        setSpotPrice(sp: string): LaunchConfiguration;
        setSpotPrice(sp: AWS.Function.BaseFunction): LaunchConfiguration;
        setSpotPrice(sp: any): LaunchConfiguration {
            this.Properties["SpotPrice"] = sp;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["ImageId", "InstanceType"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * Describes a network interface in an Elastic Compute Cloud (EC2) instance for AWS CloudFormation.
     * 
     */
    export class NetworkInterface extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::NetworkInterface");
        }


        /**
         * The tags that you want to attach to the instance.
         * @param t required : false
         */
        setTags(t: Object[]): NetworkInterface;
        setTags(t: AWS.Function.BaseFunction): NetworkInterface;
        setTags(t: any): NetworkInterface {
            this.Properties["Tags"] = t;
            return this;
        }

        /**
         * The description of this network interface.
         * @param d required : false
         */
        setDescription(d: string): NetworkInterface;
        setDescription(d: AWS.Function.BaseFunction): NetworkInterface;
        setDescription(d: any): NetworkInterface {
            this.Properties["Description"] = d;
            return this;
        }

        /**
         * Flag indicating whether traffic to or from the instance is validated.
         * @param sdc required : false
         */
        setSourceDestCheck(sdc: bool): NetworkInterface;
        setSourceDestCheck(sdc: AWS.Function.BaseFunction): NetworkInterface;
        setSourceDestCheck(sdc: any): NetworkInterface {
            this.Properties["SourceDestCheck"] = sdc;
            return this;
        }

        /**
         * A list of security group IDs associated with this network interface.
         * @param ref required : false
         */
        setGroupSet(ref: AWS.Function.Ref[]): NetworkInterface;
        setGroupSet(ref: AWS.Function.BaseFunction): NetworkInterface;
        setGroupSet(ref: any): NetworkInterface {
            this.Properties["GroupSet"] = ref;
            return this;
        }

        /**
         * The ID of the subnet to associate with the network interface.
         * @param ref required : true
         */
        setSubnetId(ref: AWS.Function.Ref): NetworkInterface;
        setSubnetId(ref: AWS.Function.BaseFunction): NetworkInterface;
        setSubnetId(ref: any): NetworkInterface {
            this.Properties["SubnetId"] = ref;
            return this;
        }

        /**
         * IP address of the interface within the subnet.
         * @param pia required : false
         */
        setPrivateIpAddress(pia: string): NetworkInterface;
        setPrivateIpAddress(pia: AWS.Function.BaseFunction): NetworkInterface;
        setPrivateIpAddress(pia: any): NetworkInterface {
            this.Properties["PrivateIpAddress"] = pia;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["SubnetId"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * Creates a new network ACL in a VPC.
     */
    export class NetworkAcl extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::NetworkAcl");
        }


        /**
         * The tags that you want to attach to the instance.
         * @param t required : false
         */
        setTags(t: Object[]): NetworkAcl;
        setTags(t: AWS.Function.BaseFunction): NetworkAcl;
        setTags(t: any): NetworkAcl {
            this.Properties["Tags"] = t;
            return this;
        }

        /**
         * The ID of the VPC where the network ACL will be created.
         * @param ref required : true
         */
        setVpcId(ref: AWS.Function.Ref): NetworkAcl;
        setVpcId(ref: AWS.Function.BaseFunction): NetworkAcl;
        setVpcId(ref: any): NetworkAcl {
            this.Properties["VpcId"] = ref;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["VpcId"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.CloudFormation {

    /**
     * The AWS::CloudFormation::Stack type embeds a stack as a resource in a template.
     * 
     * Return values
     * *: The output value from the specified embedded stack where EmbeddedStackOutputName is the name of the output value.
     */
    export class Stack extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::CloudFormation::Stack");
        }


        /**
         * The set of parameters passed to AWS CloudFormation when this embedded stack is created.
         * @param jsonObj required : false
         */
        setParameters(jsonObj: Object): Stack;
        setParameters(jsonObj: AWS.Function.BaseFunction): Stack;
        setParameters(jsonObj: any): Stack {
            this.Properties["Parameters"] = jsonObj;
            return this;
        }

        /**
         * The length of time, in minutes, that AWS CloudFormation waits for the embedded stack to reach the CREATE_COMPLETE state.
         * 
         * @param tim required : false
         */
        setTimeoutInMinutes(tim: string): Stack;
        setTimeoutInMinutes(tim: AWS.Function.BaseFunction): Stack;
        setTimeoutInMinutes(tim: any): Stack {
            this.Properties["TimeoutInMinutes"] = tim;
            return this;
        }

        /**
         * The URL of a template that specifies the stack that you want to create as a resource.
         * @param turl required : true
         */
        setTemplateURL(turl: string): Stack;
        setTemplateURL(turl: AWS.Function.BaseFunction): Stack;
        setTemplateURL(turl: any): Stack {
            this.Properties["TemplateURL"] = turl;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["TemplateURL"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * Associates a subnet with a route table.
     */
    export class SubnetRouteTableAssociation extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::SubnetRouteTableAssociation");
        }


        /**
         * The ID of the subnet.
         * This is commonly written as a reference to a subnet declared elsewhere in the template.
         * @param ref required : true
         */
        setSubnetId(ref: AWS.Function.Ref): SubnetRouteTableAssociation;
        setSubnetId(ref: AWS.Function.BaseFunction): SubnetRouteTableAssociation;
        setSubnetId(ref: any): SubnetRouteTableAssociation {
            this.Properties["SubnetId"] = ref;
            return this;
        }

        /**
         * The ID of the route table.
         * This is commonly written as a reference to a route table declared elsewhere in the template.
         * For example:
         * @param ref required : true
         */
        setRouteTableId(ref: AWS.Function.Ref): SubnetRouteTableAssociation;
        setRouteTableId(ref: AWS.Function.BaseFunction): SubnetRouteTableAssociation;
        setRouteTableId(ref: any): SubnetRouteTableAssociation {
            this.Properties["RouteTableId"] = ref;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["SubnetId", "RouteTableId"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.RDS {

    /**
     * The AWS::RDS::DBSubnetGroup type creates DB subnet group.
     * DB subnet groups must contain at least one subnet in each AZ in the region.
     */
    export class DBSubnetGroup extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::RDS::DBSubnetGroup");
        }


        /**
         * The description for the DB Subnet Group.
         * @param dbsgd required : true
         */
        setDBSubnetGroupDescription(dbsgd: string): DBSubnetGroup;
        setDBSubnetGroupDescription(dbsgd: AWS.Function.BaseFunction): DBSubnetGroup;
        setDBSubnetGroupDescription(dbsgd: any): DBSubnetGroup {
            this.Properties["DBSubnetGroupDescription"] = dbsgd;
            return this;
        }

        /**
         * The EC2 Subnet IDs for the DB Subnet Group.
         * @param ref required : true
         */
        setSubnetIds(ref: AWS.Function.Ref[]): DBSubnetGroup;
        setSubnetIds(ref: AWS.Function.BaseFunction): DBSubnetGroup;
        setSubnetIds(ref: any): DBSubnetGroup {
            this.Properties["SubnetIds"] = ref;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["DBSubnetGroupDescription", "SubnetIds"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.IAM {

    /**
     * The AWS::IAM::Group type creates an Identity and Access Management (IAM) group.
     * 
     * Return values
     * Arn: Returns the Amazon Resource Name (ARN) for the AWS::IAM::Group resource.
     * For example: arn:aws:iam::123456789012:group/mystack-mygroup-1DZETITOWEKVO.
     */
    export class Group extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::IAM::Group");
        }


        /**
         * Applies specified policies to the role.
         * @param ref required : false
         */
        setPolicies(ref: AWS.Function.Ref[]): Group;
        setPolicies(ref: AWS.Function.BaseFunction): Group;
        setPolicies(ref: any): Group {
            this.Properties["Policies"] = ref;
            return this;
        }

        /**
         * The path for the group.
         * For more information about paths, see Identifiers for IAM Entities in Using AWS Identity and Access Management.
         * @param p required : false
         */
        setPath(p: string): Group;
        setPath(p: AWS.Function.BaseFunction): Group;
        setPath(p: any): Group {
            this.Properties["Path"] = p;
            return this;
        }

        validate(errors: Object[]): Object[] {
            return errors;
        }

    }
}


module AWS.Route53 {

    /**
     * Creates or updates a new Amazon Route 53RecordSetGroup.
     */
    export class RecordSetGroup extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::Route53::RecordSetGroup");
        }


        /**
         * List of resource record sets to add.
         * @param rs required : true
         */
        setRecordSets(rs: Object[]): RecordSetGroup;
        setRecordSets(rs: AWS.Function.BaseFunction): RecordSetGroup;
        setRecordSets(rs: any): RecordSetGroup {
            this.Properties["RecordSets"] = rs;
            return this;
        }

        /**
         * The name of the domain for the hosted zone where you want to add the record set.
         * Required: Conditional.
         * You must specify either the HostedZoneName or HostedZoneId, but you cannot specify both.
         * @param hzn required : false
         */
        setHostedZoneName(hzn: string): RecordSetGroup;
        setHostedZoneName(hzn: AWS.Function.BaseFunction): RecordSetGroup;
        setHostedZoneName(hzn: any): RecordSetGroup {
            this.Properties["HostedZoneName"] = hzn;
            return this;
        }

        /**
         * The ID of the hosted zone.
         * Required: Conditional: You must specify either the HostedZoneName or HostedZoneId, but you cannot specify both.
         * @param hzi required : false
         */
        setHostedZoneId(hzi: string): RecordSetGroup;
        setHostedZoneId(hzi: AWS.Function.BaseFunction): RecordSetGroup;
        setHostedZoneId(hzi: any): RecordSetGroup {
            this.Properties["HostedZoneId"] = hzi;
            return this;
        }

        /**
         * Any comments you want to include about the hosted zone.
         * @param c required : false
         */
        setComment(c: string): RecordSetGroup;
        setComment(c: AWS.Function.BaseFunction): RecordSetGroup;
        setComment(c: any): RecordSetGroup {
            this.Properties["Comment"] = c;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["RecordSets"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.ElasticLoadBalancing {

    /**
     * The AWS::ElasticLoadBalancing::LoadBalancer type creates a LoadBalancer.
     * 
     * Return values
     * CanonicalHostedZoneName: The name of the Route 53 hosted zone that is associated with the LoadBalancer.
     * CanonicalHostedZoneNameID: The ID of the Route 53 hosted zone name that is associated with the LoadBalancer.
     * DNSName: The DNS name for the LoadBalancer.
     * SourceSecurityGroup.GroupName: The security group that you can use as part of your inbound rules for your LoadBalancer's back-end Amazon EC2 application instances.
     * SourceSecurityGroup.OwnerAlias: Owner of the source security group.
     */
    export class LoadBalancer extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::ElasticLoadBalancing::LoadBalancer");
        }


        /**
         * A list of elastic load balancing policies to apply to this elastic load balancer.
         * @param p required : false
         */
        setPolicies(p: Object[]): LoadBalancer;
        setPolicies(p: AWS.Function.BaseFunction): LoadBalancer;
        setPolicies(p: any): LoadBalancer {
            this.Properties["Policies"] = p;
            return this;
        }

        /**
         * For LoadBalancers attached to an Apazon VPC, this parameter can be used to specify the type of LoadBalancer to use.
         * Specify "internal" to create an internal LoadBalancer with a DNS name that resolves to private IP addresses.
         * @param s required : false
         */
        setScheme(s: string): LoadBalancer;
        setScheme(s: AWS.Function.BaseFunction): LoadBalancer;
        setScheme(s: any): LoadBalancer {
            this.Properties["Scheme"] = s;
            return this;
        }

        /**
         * The Availability Zones in which to create the load balancer.
         * You can specify either AvailabilityZones or Subnets, but not both.
         * @param az required : false
         */
        setAvailabilityZones(az: string[]): LoadBalancer;
        setAvailabilityZones(az: AWS.Function.BaseFunction): LoadBalancer;
        setAvailabilityZones(az: any): LoadBalancer {
            this.Properties["AvailabilityZones"] = az;
            return this;
        }

        /**
         * One or more listeners for this load balancer.
         * Each listener must be registered for a specific port, and you can not have more than one listener for a given port.
         * @param l required : true
         */
        setListeners(l: Object[]): LoadBalancer;
        setListeners(l: AWS.Function.BaseFunction): LoadBalancer;
        setListeners(l: any): LoadBalancer {
            this.Properties["Listeners"] = l;
            return this;
        }

        /**
         * Provides a list of EC2 instance IDs for the LoadBalancer.
         * @param ref required : false
         */
        setInstances(ref: AWS.Function.Ref[]): LoadBalancer;
        setInstances(ref: AWS.Function.BaseFunction): LoadBalancer;
        setInstances(ref: any): LoadBalancer {
            this.Properties["Instances"] = ref;
            return this;
        }

        /**
         * A list of subnet IDs in your virtual private cloud (VPC) to attach to your load balancer.
         * You can specify either AvailabilityZones or Subnets, but not both.
         * @param ref required : false
         */
        setSubnets(ref: AWS.Function.Ref[]): LoadBalancer;
        setSubnets(ref: AWS.Function.BaseFunction): LoadBalancer;
        setSubnets(ref: any): LoadBalancer {
            this.Properties["Subnets"] = ref;
            return this;
        }

        /**
         * When specified, declares an application health check for the instances.
         * @param hc required : false
         */
        setHealthCheck(hc: Object): LoadBalancer;
        setHealthCheck(hc: AWS.Function.BaseFunction): LoadBalancer;
        setHealthCheck(hc: any): LoadBalancer {
            this.Properties["HealthCheck"] = hc;
            return this;
        }

        /**
         * Security groups assigned to your load balancer within your virtual private cloud (VPC).
         * @param ref required : false
         */
        setSecurityGroups(ref: AWS.Function.Ref[]): LoadBalancer;
        setSecurityGroups(ref: AWS.Function.BaseFunction): LoadBalancer;
        setSecurityGroups(ref: any): LoadBalancer {
            this.Properties["SecurityGroups"] = ref;
            return this;
        }

        /**
         * Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent), or by a specified expiration period.
         * This policy can be associated only with HTTP/HTTPS listeners.
         * @param lbcsp required : false
         */
        setLBCookieStickinessPolicy(lbcsp: Object[]): LoadBalancer;
        setLBCookieStickinessPolicy(lbcsp: AWS.Function.BaseFunction): LoadBalancer;
        setLBCookieStickinessPolicy(lbcsp: any): LoadBalancer {
            this.Properties["LBCookieStickinessPolicy"] = lbcsp;
            return this;
        }

        /**
         * Generates one or more stickiness policies with sticky session lifetimes that follow that of an application-generated cookie.
         * These policies can be associated only with HTTP/HTTPS listeners.
         * @param acsp required : false
         */
        setAppCookieStickinessPolicy(acsp: Object[]): LoadBalancer;
        setAppCookieStickinessPolicy(acsp: AWS.Function.BaseFunction): LoadBalancer;
        setAppCookieStickinessPolicy(acsp: any): LoadBalancer {
            this.Properties["AppCookieStickinessPolicy"] = acsp;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["Listeners"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.IAM {

    /**
     * Creates an AWS Identity and Access Management (IAM) Role for EC2 Instances.
     * An IAM Role can be used to enable applications running on an Amazon EC2 instance to securely access your AWS resources.
     * 
     * Return values
     * Arn: Returns the Amazon Resource Name (ARN) for the instance profile.
     * For example: arn:aws:iam::1234567890:role/MyRole-AJJHDSKSDF.
     */
    export class Role extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::IAM::Role");
        }


        /**
         * Applies specified policies to the role.
         * @param ref required : false
         */
        setPolicies(ref: AWS.Function.Ref[]): Role;
        setPolicies(ref: AWS.Function.BaseFunction): Role;
        setPolicies(ref: any): Role {
            this.Properties["Policies"] = ref;
            return this;
        }

        /**
         * The IAM Assume Role Policy Document associated with this role.
         * @param jsonObj required : true
         */
        setAssumeRolePolicyDocument(jsonObj: Object): Role;
        setAssumeRolePolicyDocument(jsonObj: AWS.Function.BaseFunction): Role;
        setAssumeRolePolicyDocument(jsonObj: any): Role {
            this.Properties["AssumeRolePolicyDocument"] = jsonObj;
            return this;
        }

        /**
         * The path for the role.
         * For more information about paths, see Identifiers for IAM Entities in Using AWS Identity and Access Management.
         * @param p required : false
         */
        setPath(p: string): Role;
        setPath(p: AWS.Function.BaseFunction): Role;
        setPath(p: any): Role {
            this.Properties["Path"] = p;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["AssumeRolePolicyDocument"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * Attaches a gateway to a VPC.
     */
    export class VPCGatewayAttachment extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::VPCGatewayAttachment");
        }


        /**
         * The ID of the Internet gateway.
         * Required: Conditional.
         * You must specify either InternetGatewayId or VpnGatewayId, but not both.
         * @param ref required : true
         */
        setInternetGatewayId(ref: AWS.Function.Ref): VPCGatewayAttachment;
        setInternetGatewayId(ref: AWS.Function.BaseFunction): VPCGatewayAttachment;
        setInternetGatewayId(ref: any): VPCGatewayAttachment {
            this.Properties["InternetGatewayId"] = ref;
            return this;
        }

        /**
         * The ID of the virtual private network (VPN) gateway to attach to the VPC.
         * Required: Conditional.
         * You must specify either InternetGatewayId or VpnGatewayId, but not both.
         * @param ref required : true
         */
        setVpnGatewayId(ref: AWS.Function.Ref): VPCGatewayAttachment;
        setVpnGatewayId(ref: AWS.Function.BaseFunction): VPCGatewayAttachment;
        setVpnGatewayId(ref: any): VPCGatewayAttachment {
            this.Properties["VpnGatewayId"] = ref;
            return this;
        }

        /**
         * The ID of the VPC to associate with this gateway.
         * @param ref required : true
         */
        setVpcId(ref: AWS.Function.Ref): VPCGatewayAttachment;
        setVpcId(ref: AWS.Function.BaseFunction): VPCGatewayAttachment;
        setVpcId(ref: any): VPCGatewayAttachment {
            this.Properties["VpcId"] = ref;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["InternetGatewayId", "VpnGatewayId", "VpcId"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * Provides information to AWS about your VPN customer gateway device.
     */
    export class CustomerGateway extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::CustomerGateway");
        }


        /**
         * The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).
         * @param ba required : true
         */
        setBgpAsn(ba: number): CustomerGateway;
        setBgpAsn(ba: AWS.Function.BaseFunction): CustomerGateway;
        setBgpAsn(ba: any): CustomerGateway {
            this.Properties["BgpAsn"] = ba;
            return this;
        }

        /**
         * The type of VPN connection this customer gateway supports.
         * For example: ipsec.1
         * @param t required : true
         */
        setType(t: string): CustomerGateway;
        setType(t: AWS.Function.BaseFunction): CustomerGateway;
        setType(t: any): CustomerGateway {
            this.Properties["Type"] = t;
            return this;
        }

        /**
         * The Internet-routable IP address for the customer gateway's outside interface.
         * The address must be static.
         * @param ia required : true
         */
        setIpAddress(ia: string): CustomerGateway;
        setIpAddress(ia: AWS.Function.BaseFunction): CustomerGateway;
        setIpAddress(ia: any): CustomerGateway {
            this.Properties["IpAddress"] = ia;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["BgpAsn", "Type", "IpAddress"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * The AWS::EC2::SecurityGroupEgress type adds an egress rule to an Amazon VPC security group.
     */
    export class SecurityGroupEgress extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::SecurityGroupEgress");
        }


        /**
         * IP protocol name or number.
         * @param ip required : true
         */
        setIpProtocol(ip: string): SecurityGroupEgress;
        setIpProtocol(ip: AWS.Function.BaseFunction): SecurityGroupEgress;
        setIpProtocol(ip: any): SecurityGroupEgress {
            this.Properties["IpProtocol"] = ip;
            return this;
        }

        /**
         * End of port range for the TCP and UDP protocols, or an ICMP code.
         * An ICMP code of -1 indicates a wildcard.
         * @param tp required : true
         */
        setToPort(tp: string): SecurityGroupEgress;
        setToPort(tp: AWS.Function.BaseFunction): SecurityGroupEgress;
        setToPort(tp: any): SecurityGroupEgress {
            this.Properties["ToPort"] = tp;
            return this;
        }

        /**
         * Start of port range for the TCP and UDP protocols, or an ICMP type number.
         * An ICMP type number of -1 indicates a wildcard.
         * @param fp required : true
         */
        setFromPort(fp: string): SecurityGroupEgress;
        setFromPort(fp: AWS.Function.BaseFunction): SecurityGroupEgress;
        setFromPort(fp: any): SecurityGroupEgress {
            this.Properties["FromPort"] = fp;
            return this;
        }

        /**
         * For VPC security groups only.
         * Specifies the ID of the Amazon EC2 Security Group to allow access.
         * If you specify CidrIp, do not specify SourceSecurityGroupId.
         * @param ref required : false
         */
        setDestinationSecurityGroupId(ref: AWS.Function.Ref): SecurityGroupEgress;
        setDestinationSecurityGroupId(ref: AWS.Function.BaseFunction): SecurityGroupEgress;
        setDestinationSecurityGroupId(ref: any): SecurityGroupEgress {
            this.Properties["DestinationSecurityGroupId"] = ref;
            return this;
        }

        /**
         * ID of the Amazon VPC security group to modify.
         * This value can be a reference to an AWS::EC2::SecurityGroup resource that has a valid VpcId property or the ID of an existing Amazon VPC security group.
         * @param ref required : true
         */
        setGroupId(ref: AWS.Function.Ref): SecurityGroupEgress;
        setGroupId(ref: AWS.Function.BaseFunction): SecurityGroupEgress;
        setGroupId(ref: any): SecurityGroupEgress {
            this.Properties["GroupId"] = ref;
            return this;
        }

        /**
         * The CIDR range.
         * Required: Conditional—cannot be used when specifying a destination security group.
         * @param ci required : false
         */
        setCidrIp(ci: string): SecurityGroupEgress;
        setCidrIp(ci: AWS.Function.BaseFunction): SecurityGroupEgress;
        setCidrIp(ci: any): SecurityGroupEgress {
            this.Properties["CidrIp"] = ci;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["IpProtocol", "ToPort", "FromPort", "GroupId"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.ElastiCache {

    /**
     * The AWS::ElastiCache::CacheCluster type creates an Amazon ElastiCache cache cluster.
     */
    export class CacheCluster extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::ElastiCache::CacheCluster");
        }


        /**
         * The EC2 Availability Zone that the cache cluster will be created in.
         * @param paz required : false
         */
        setPreferredAvailabilityZone(paz: string): CacheCluster;
        setPreferredAvailabilityZone(paz: AWS.Function.BaseFunction): CacheCluster;
        setPreferredAvailabilityZone(paz: any): CacheCluster {
            this.Properties["PreferredAvailabilityZone"] = paz;
            return this;
        }

        /**
         * A list of cache security group names associated with this cache cluster.
         * @param ref required : true
         */
        setCacheSecurityGroupNames(ref: AWS.Function.Ref[]): CacheCluster;
        setCacheSecurityGroupNames(ref: AWS.Function.BaseFunction): CacheCluster;
        setCacheSecurityGroupNames(ref: any): CacheCluster {
            this.Properties["CacheSecurityGroupNames"] = ref;
            return this;
        }

        /**
         * The port number on which each of the cache nodes will accept connections.
         * @param p required : false
         */
        setPort(p: number): CacheCluster;
        setPort(p: AWS.Function.BaseFunction): CacheCluster;
        setPort(p: any): CacheCluster {
            this.Properties["Port"] = p;
            return this;
        }

        /**
         * The name of the cache parameter group associated with this cache cluster.
         * @param ref required : false
         */
        setCacheParameterGroupName(ref: AWS.Function.Ref): CacheCluster;
        setCacheParameterGroupName(ref: AWS.Function.BaseFunction): CacheCluster;
        setCacheParameterGroupName(ref: any): CacheCluster {
            this.Properties["CacheParameterGroupName"] = ref;
            return this;
        }

        /**
         * The compute and memory capacity of nodes in a cache cluster.
         * @param cnt required : true
         */
        setCacheNodeType(cnt: string): CacheCluster;
        setCacheNodeType(cnt: AWS.Function.BaseFunction): CacheCluster;
        setCacheNodeType(cnt: any): CacheCluster {
            this.Properties["CacheNodeType"] = cnt;
            return this;
        }

        /**
         * Indicates that minor engine upgrades will be applied automatically to the cache cluster during the maintenance window.
         * @param amvu required : false
         */
        setAutoMinorVersionUpgrade(amvu: bool): CacheCluster;
        setAutoMinorVersionUpgrade(amvu: AWS.Function.BaseFunction): CacheCluster;
        setAutoMinorVersionUpgrade(amvu: any): CacheCluster {
            this.Properties["AutoMinorVersionUpgrade"] = amvu;
            return this;
        }

        /**
         * The number of cache nodes the cache cluster should have.
         * @param ncn required : false
         */
        setNumCacheNodes(ncn: string): CacheCluster;
        setNumCacheNodes(ncn: AWS.Function.BaseFunction): CacheCluster;
        setNumCacheNodes(ncn: any): CacheCluster {
            this.Properties["NumCacheNodes"] = ncn;
            return this;
        }

        /**
         * The weekly time range (in UTC) during which system maintenance can occur.
         * Example: sun:05:00-sun:09:00
         * @param pmw required : false
         */
        setPreferredMaintenanceWindow(pmw: string): CacheCluster;
        setPreferredMaintenanceWindow(pmw: AWS.Function.BaseFunction): CacheCluster;
        setPreferredMaintenanceWindow(pmw: any): CacheCluster {
            this.Properties["PreferredMaintenanceWindow"] = pmw;
            return this;
        }

        /**
         * The version of the cache engine to be used for this cluster.
         * @param ev required : false
         */
        setEngineVersion(ev: string): CacheCluster;
        setEngineVersion(ev: AWS.Function.BaseFunction): CacheCluster;
        setEngineVersion(ev: any): CacheCluster {
            this.Properties["EngineVersion"] = ev;
            return this;
        }

        /**
         * The name of the cache engine to be used for this cache cluster.
         * @param e required : true
         */
        setEngine(e: string): CacheCluster;
        setEngine(e: AWS.Function.BaseFunction): CacheCluster;
        setEngine(e: any): CacheCluster {
            this.Properties["Engine"] = e;
            return this;
        }

        /**
         * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications will be sent.
         * @param ref required : false
         */
        setNotificationTopicArn(ref: AWS.Function.Ref): CacheCluster;
        setNotificationTopicArn(ref: AWS.Function.BaseFunction): CacheCluster;
        setNotificationTopicArn(ref: any): CacheCluster {
            this.Properties["NotificationTopicArn"] = ref;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["CacheSecurityGroupNames", "CacheNodeType", "Engine"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.CloudFormation {

    /**
     * The following properties are available with the AWS::CloudFormation::WaitCondition type.
     * 
     * Return values
     * Data: A JSON object containing the UniqueId and Data values from the wait condition signal(s) for the specified wait condition.
     */
    export class WaitCondition extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::CloudFormation::WaitCondition");
        }


        /**
         * A reference to the wait condition handle used to signal this wait condition.
         * @param ref required : true
         */
        setHandle(ref: AWS.Function.Ref): WaitCondition;
        setHandle(ref: AWS.Function.BaseFunction): WaitCondition;
        setHandle(ref: any): WaitCondition {
            this.Properties["Handle"] = ref;
            return this;
        }

        /**
         * The length of time (in seconds) to wait for the number of signals that the Count property specifies.
         * @param t required : true
         */
        setTimeout(t: string): WaitCondition;
        setTimeout(t: AWS.Function.BaseFunction): WaitCondition;
        setTimeout(t: any): WaitCondition {
            this.Properties["Timeout"] = t;
            return this;
        }

        /**
         * The number of success signals that AWS CloudFormation must receive before it continues the stack creation process.
         * @param c required : true
         */
        setCount(c: string): WaitCondition;
        setCount(c: AWS.Function.BaseFunction): WaitCondition;
        setCount(c: any): WaitCondition {
            this.Properties["Count"] = c;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["Handle", "Timeout", "Count"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.CloudWatch {

    /**
     * The AWS::CloudWatch::Alarm type creates an Amazon CloudWatch alarm.
     */
    export class Alarm extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::CloudWatch::Alarm");
        }


        /**
         * The list of actions to execute when this alarm transitions into an ALARM state from any other state.
         * Each action is specified as an Amazon Resource Number (ARN).
         * Currently the only action supported is publishing to an Amazon SNS topic or an Amazon Auto Scaling policy.
         * @param ref required : false
         */
        setAlarmActions(ref: AWS.Function.Ref[]): Alarm;
        setAlarmActions(ref: AWS.Function.BaseFunction): Alarm;
        setAlarmActions(ref: any): Alarm {
            this.Properties["AlarmActions"] = ref;
            return this;
        }

        /**
         * The period in seconds over which the specified statistic is applied.
         * @param p required : true
         */
        setPeriod(p: string): Alarm;
        setPeriod(p: AWS.Function.BaseFunction): Alarm;
        setPeriod(p: any): Alarm {
            this.Properties["Period"] = p;
            return this;
        }

        /**
         * The statistic to apply to the alarm's associated metric.
         * @param s required : true
         */
        setStatistic(s: string): Alarm;
        setStatistic(s: AWS.Function.BaseFunction): Alarm;
        setStatistic(s: any): Alarm {
            this.Properties["Statistic"] = s;
            return this;
        }

        /**
         * The name for the alarm's associated metric.
         * @param mn required : true
         */
        setMetricName(mn: string): Alarm;
        setMetricName(mn: AWS.Function.BaseFunction): Alarm;
        setMetricName(mn: any): Alarm {
            this.Properties["MetricName"] = mn;
            return this;
        }

        /**
         * The value against which the specified statistic is compared.
         * @param t required : true
         */
        setThreshold(t: string): Alarm;
        setThreshold(t: AWS.Function.BaseFunction): Alarm;
        setThreshold(t: any): Alarm {
            this.Properties["Threshold"] = t;
            return this;
        }

        /**
         * Indicates whether or not actions should be executed during any changes to the alarm's state.
         * Either true or false.
         * @param ae required : false
         */
        setActionsEnabled(ae: string): Alarm;
        setActionsEnabled(ae: AWS.Function.BaseFunction): Alarm;
        setActionsEnabled(ae: any): Alarm {
            this.Properties["ActionsEnabled"] = ae;
            return this;
        }

        /**
         * The number of periods over which data is compared to the specified threshold.
         * @param ep required : true
         */
        setEvaluationPeriods(ep: string): Alarm;
        setEvaluationPeriods(ep: AWS.Function.BaseFunction): Alarm;
        setEvaluationPeriods(ep: any): Alarm {
            this.Properties["EvaluationPeriods"] = ep;
            return this;
        }

        /**
         * The dimensions for the alarm's associated metric.
         * @param d required : false
         */
        setDimensions(d: Object[]): Alarm;
        setDimensions(d: AWS.Function.BaseFunction): Alarm;
        setDimensions(d: any): Alarm {
            this.Properties["Dimensions"] = d;
            return this;
        }

        /**
         * The description for the alarm.
         * @param ad required : false
         */
        setAlarmDescription(ad: string): Alarm;
        setAlarmDescription(ad: AWS.Function.BaseFunction): Alarm;
        setAlarmDescription(ad: any): Alarm {
            this.Properties["AlarmDescription"] = ad;
            return this;
        }

        /**
         * The namespace for the alarm's associated metric.
         * @param n required : true
         */
        setNamespace(n: string): Alarm;
        setNamespace(n: AWS.Function.BaseFunction): Alarm;
        setNamespace(n: any): Alarm {
            this.Properties["Namespace"] = n;
            return this;
        }

        /**
         * The list of actions to execute when this alarm transitions into an OK state from any other state.
         * Each action is specified as an Amazon Resource Number (ARN).
         * Currently the only action supported is publishing to an Amazon SNS topic or an Amazon Auto Scaling policy.
         * @param ref required : false
         */
        setOKActions(ref: AWS.Function.Ref[]): Alarm;
        setOKActions(ref: AWS.Function.BaseFunction): Alarm;
        setOKActions(ref: any): Alarm {
            this.Properties["OKActions"] = ref;
            return this;
        }

        /**
         * The list of actions to execute when this alarm transitions into an INSUFFICIENT_DATA state from any other state.
         * Each action is specified as an Amazon Resource Number (ARN).
         * Currently the only action supported is publishing to an Amazon SNS topic or an Amazon Auto Scaling policy.
         * @param ref required : false
         */
        setInsufficientDataActions(ref: AWS.Function.Ref[]): Alarm;
        setInsufficientDataActions(ref: AWS.Function.BaseFunction): Alarm;
        setInsufficientDataActions(ref: any): Alarm {
            this.Properties["InsufficientDataActions"] = ref;
            return this;
        }

        /**
         * The arithmetic operation to use when comparing the specified Statistic and Threshold.
         * The specified Statistic value is used as the first operand.
         * @param co required : true
         */
        setComparisonOperator(co: string): Alarm;
        setComparisonOperator(co: AWS.Function.BaseFunction): Alarm;
        setComparisonOperator(co: any): Alarm {
            this.Properties["ComparisonOperator"] = co;
            return this;
        }

        /**
         * The unit for the alarm's associated metric.
         * @param u required : false
         */
        setUnit(u: string): Alarm;
        setUnit(u: AWS.Function.BaseFunction): Alarm;
        setUnit(u: any): Alarm {
            this.Properties["Unit"] = u;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["Period", "Statistic", "MetricName", "Threshold", "EvaluationPeriods", "Namespace", "ComparisonOperator"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * Associates a set of DHCP options (that you've previously created) with the specified VPC.
     */
    export class VPCDHCPOptionsAssociation extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::VPCDHCPOptionsAssociation");
        }


        /**
         * The ID of the DHCP options you want to associate with the VPC, or "default" if you want the VPC to use no DHCP options.
         * @param ref required : true
         */
        setDhcpOptionsId(ref: AWS.Function.Ref): VPCDHCPOptionsAssociation;
        setDhcpOptionsId(ref: AWS.Function.BaseFunction): VPCDHCPOptionsAssociation;
        setDhcpOptionsId(ref: any): VPCDHCPOptionsAssociation {
            this.Properties["DhcpOptionsId"] = ref;
            return this;
        }

        /**
         * The ID of the VPC to associate with this DHCP options set.
         * @param ref required : true
         */
        setVpcId(ref: AWS.Function.Ref): VPCDHCPOptionsAssociation;
        setVpcId(ref: AWS.Function.BaseFunction): VPCDHCPOptionsAssociation;
        setVpcId(ref: any): VPCDHCPOptionsAssociation {
            this.Properties["VpcId"] = ref;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["DhcpOptionsId", "VpcId"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * Attaches a volume to an EC2 instance.
     */
    export class VolumeAttachment extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::VolumeAttachment");
        }


        /**
         * How the device is exposed to the instance (e.g., /dev/sdh, or xvdh).
         * @param d required : true
         */
        setDevice(d: string): VolumeAttachment;
        setDevice(d: AWS.Function.BaseFunction): VolumeAttachment;
        setDevice(d: any): VolumeAttachment {
            this.Properties["Device"] = d;
            return this;
        }

        /**
         * The ID of the Amazon EBS volume.
         * The volume and instance must be within the same Availability Zone.
         * This value can be a reference to an AWS::EC2::Volume resource, or it can be the volume ID of an existing Amazon EBS volume.
         * @param ref required : true
         */
        setVolumeId(ref: AWS.Function.Ref): VolumeAttachment;
        setVolumeId(ref: AWS.Function.BaseFunction): VolumeAttachment;
        setVolumeId(ref: any): VolumeAttachment {
            this.Properties["VolumeId"] = ref;
            return this;
        }

        /**
         * The ID of the instance to which the volume attaches.
         * This value can be a reference to an AWS::EC2::Instance resource, or it can be the instance ID of an existing EC2 instance.
         * @param ref required : true
         */
        setInstanceId(ref: AWS.Function.Ref): VolumeAttachment;
        setInstanceId(ref: AWS.Function.BaseFunction): VolumeAttachment;
        setInstanceId(ref: any): VolumeAttachment {
            this.Properties["InstanceId"] = ref;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["Device", "VolumeId", "InstanceId"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.DynamoDB {

    /**
     * Creates an Amazon DynamoDB table.
     */
    export class Table extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::DynamoDB::Table");
        }


        /**
         * New throughput for the specified table, consisting of values for ReadCapacityUnits and WriteCapacityUnits.
         * @param pt required : true
         */
        setProvisionedThroughput(pt: Object): Table;
        setProvisionedThroughput(pt: AWS.Function.BaseFunction): Table;
        setProvisionedThroughput(pt: any): Table {
            this.Properties["ProvisionedThroughput"] = pt;
            return this;
        }

        /**
         * The primary key structure for the table
         * @param ks required : true
         */
        setKeySchema(ks: Object): Table;
        setKeySchema(ks: AWS.Function.BaseFunction): Table;
        setKeySchema(ks: any): Table {
            this.Properties["KeySchema"] = ks;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["ProvisionedThroughput", "KeySchema"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.ElastiCache {

    /**
     * The AWS::ElastiCache::ParameterGroup type creates a new cache parameter group.
     * Cache parameter groups control the parameters for a cache cluster.
     */
    export class ParameterGroup extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::ElastiCache::ParameterGroup");
        }


        /**
         * The description for the Cache Parameter Group.
         * @param d required : true
         */
        setDescription(d: string): ParameterGroup;
        setDescription(d: AWS.Function.BaseFunction): ParameterGroup;
        setDescription(d: any): ParameterGroup {
            this.Properties["Description"] = d;
            return this;
        }

        /**
         * The name of the cache parameter group family that the cache parameter group can be used with.
         * @param cpgf required : true
         */
        setCacheParameterGroupFamily(cpgf: string): ParameterGroup;
        setCacheParameterGroupFamily(cpgf: AWS.Function.BaseFunction): ParameterGroup;
        setCacheParameterGroupFamily(cpgf: any): ParameterGroup {
            this.Properties["CacheParameterGroupFamily"] = cpgf;
            return this;
        }

        /**
         * A comma-delimited list of parameter name/value pairs.
         * @param p required : false
         */
        setProperties(p: string): ParameterGroup;
        setProperties(p: AWS.Function.BaseFunction): ParameterGroup;
        setProperties(p: any): ParameterGroup {
            this.Properties["Properties"] = p;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["Description", "CacheParameterGroupFamily"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.IAM {

    /**
     * The AWS::IAM::AccessKey resource type generates a secret access key and assigns it to an IAM user or AWS account.
     * 
     * Return values
     * SecretAccessKey: Returns the secret access key for the specified AWS::IAM::AccessKey resource.
     * For example: wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY.
     */
    export class AccessKey extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::IAM::AccessKey");
        }


        /**
         * The status of the access key.
         * @param s required : true
         */
        setStatus(s: string): AccessKey;
        setStatus(s: AWS.Function.BaseFunction): AccessKey;
        setStatus(s: any): AccessKey {
            this.Properties["Status"] = s;
            return this;
        }

        /**
         * This value is specific to AWS CloudFormation and can only be incremented.
         * Incrementing this value notifies AWS CloudFormation that you want to rotate your access key.
         * When you update your stack, AWS CloudFormation will replace the existing access key with a new key.
         * @param s required : false
         */
        setSerial(s: string): AccessKey;
        setSerial(s: AWS.Function.BaseFunction): AccessKey;
        setSerial(s: any): AccessKey {
            this.Properties["Serial"] = s;
            return this;
        }

        /**
         * The name of the user that the new key will belong to.
         * @param ref required : true
         */
        setUserName(ref: AWS.Function.Ref): AccessKey;
        setUserName(ref: AWS.Function.BaseFunction): AccessKey;
        setUserName(ref: any): AccessKey {
            this.Properties["UserName"] = ref;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["Status", "UserName"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * The AWS::EC2::EIPAssociation resource associates an Elastic IP address with an Amazon EC2 instance.
     * The Elastic IP address can be an existing Elastic IP address or an Elastic IP address allocated through an AWS::EC2::EIP resource.
     */
    export class EIPAssociation extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::EIPAssociation");
        }


        /**
         * Elastic IP address that you want to associate with the Amazon EC2 instance specified by the InstanceId property.
         * You can specify an existing Elastic IP address or a reference to an Elastic IP address allocated with a AWS::EC2::EIP resource.
         * @param ref required : false
         */
        setEIP(ref: AWS.Function.Ref): EIPAssociation;
        setEIP(ref: AWS.Function.BaseFunction): EIPAssociation;
        setEIP(ref: any): EIPAssociation {
            this.Properties["EIP"] = ref;
            return this;
        }

        /**
         * Instance ID of the Amazon EC2 instance that you want to associate with the Elastic IP address specified by the EIP property.
         * @param ref required : false
         */
        setInstanceId(ref: AWS.Function.Ref): EIPAssociation;
        setInstanceId(ref: AWS.Function.BaseFunction): EIPAssociation;
        setInstanceId(ref: any): EIPAssociation {
            this.Properties["InstanceId"] = ref;
            return this;
        }

        /**
         * Allocation ID for the VPC Elastic IP address you want to associate with an Amazon EC2 instance in your VPC.
         * @param ai required : false
         */
        setAllocationId(ai: string): EIPAssociation;
        setAllocationId(ai: AWS.Function.BaseFunction): EIPAssociation;
        setAllocationId(ai: any): EIPAssociation {
            this.Properties["AllocationId"] = ai;
            return this;
        }

        /**
         * The ID of the network interface to associate with the Elastic IP address (VPC only).
         * @param nii required : false
         */
        setNetworkInterfaceId(nii: string): EIPAssociation;
        setNetworkInterfaceId(nii: AWS.Function.BaseFunction): EIPAssociation;
        setNetworkInterfaceId(nii: any): EIPAssociation {
            this.Properties["NetworkInterfaceId"] = nii;
            return this;
        }

        validate(errors: Object[]): Object[] {
            return errors;
        }

    }
}


module AWS.AutoScaling {

    /**
     * Creates an Auto Scaling trigger that determines when scaling activities should occur for the Auto Scaling group.
     * This type does not support updates.
     */
    export class Trigger extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::AutoScaling::Trigger");
        }


        /**
         * The incremental amount to use when performing scaling activities when the lower threshold has been breached.
         * @param lbsi required : false
         */
        setLowerBreachScaleIncrement(lbsi: string): Trigger;
        setLowerBreachScaleIncrement(lbsi: AWS.Function.BaseFunction): Trigger;
        setLowerBreachScaleIncrement(lbsi: any): Trigger {
            this.Properties["LowerBreachScaleIncrement"] = lbsi;
            return this;
        }

        /**
         * The period used in retrieving metric statistics used by the trigger to determine when to fire.
         * @param p required : false
         */
        setPeriod(p: string): Trigger;
        setPeriod(p: AWS.Function.BaseFunction): Trigger;
        setPeriod(p: any): Trigger {
            this.Properties["Period"] = p;
            return this;
        }

        /**
         * The name of the Auto Scaling group.
         * @param ref required : true
         */
        setAutoScalingGroupName(ref: AWS.Function.Ref): Trigger;
        setAutoScalingGroupName(ref: AWS.Function.BaseFunction): Trigger;
        setAutoScalingGroupName(ref: any): Trigger {
            this.Properties["AutoScalingGroupName"] = ref;
            return this;
        }

        /**
         * The statistic used by the trigger to determine which metric statistics to examine.
         * @param s required : false
         */
        setStatistic(s: string): Trigger;
        setStatistic(s: AWS.Function.BaseFunction): Trigger;
        setStatistic(s: any): Trigger {
            this.Properties["Statistic"] = s;
            return this;
        }

        /**
         * The metric name used by the trigger to determine when to fire.
         * @param mn required : true
         */
        setMetricName(mn: string): Trigger;
        setMetricName(mn: AWS.Function.BaseFunction): Trigger;
        setMetricName(mn: any): Trigger {
            this.Properties["MetricName"] = mn;
            return this;
        }

        /**
         * The incremental amount to use when performing scaling activities when the upper threshold has been breached.
         * Must be a negative or positive integer, or integer percentage value.
         * @param ubsi required : false
         */
        setUpperBreachScaleIncrement(ubsi: string): Trigger;
        setUpperBreachScaleIncrement(ubsi: AWS.Function.BaseFunction): Trigger;
        setUpperBreachScaleIncrement(ubsi: any): Trigger {
            this.Properties["UpperBreachScaleIncrement"] = ubsi;
            return this;
        }

        /**
         * The lower limit for the metric.
         * The trigger fires if all data points in the last BreachDuration seconds exceed the upper threshold or fall below the lower threshold.
         * @param lt required : true
         */
        setLowerThreshold(lt: string): Trigger;
        setLowerThreshold(lt: AWS.Function.BaseFunction): Trigger;
        setLowerThreshold(lt: any): Trigger {
            this.Properties["LowerThreshold"] = lt;
            return this;
        }

        /**
         * A list of CloudWatch dimensions used to retrieve metric statistics that the trigger uses to determine when to fire.
         * @param d required : true
         */
        setDimensions(d: Object[]): Trigger;
        setDimensions(d: AWS.Function.BaseFunction): Trigger;
        setDimensions(d: any): Trigger {
            this.Properties["Dimensions"] = d;
            return this;
        }

        /**
         * The amount of time to wait while the trigger is firing before performing scaling activities in response to the breach.
         * @param bd required : true
         */
        setBreachDuration(bd: string): Trigger;
        setBreachDuration(bd: AWS.Function.BaseFunction): Trigger;
        setBreachDuration(bd: any): Trigger {
            this.Properties["BreachDuration"] = bd;
            return this;
        }

        /**
         * The namespace used by the trigger to determine when to fire.
         * @param n required : false
         */
        setNamespace(n: string): Trigger;
        setNamespace(n: AWS.Function.BaseFunction): Trigger;
        setNamespace(n: any): Trigger {
            this.Properties["Namespace"] = n;
            return this;
        }

        /**
         * The upper limit of the metric used.
         * The trigger fires if all data points in the last BreachDuration seconds exceed the upper threshold or fall below the lower threshold.
         * @param ut required : false
         */
        setUpperThreshold(ut: string): Trigger;
        setUpperThreshold(ut: AWS.Function.BaseFunction): Trigger;
        setUpperThreshold(ut: any): Trigger {
            this.Properties["UpperThreshold"] = ut;
            return this;
        }

        /**
         * The standard unit associated with a measure, used by the trigger when fetching the metric statistics it uses to determine when to activate.
         * @param u required : false
         */
        setUnit(u: string): Trigger;
        setUnit(u: AWS.Function.BaseFunction): Trigger;
        setUnit(u: any): Trigger {
            this.Properties["Unit"] = u;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["AutoScalingGroupName", "MetricName", "LowerThreshold", "Dimensions", "BreachDuration"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.RDS {

    /**
     * Creates a custom parameter group for an RDS database family.
     */
    export class DBParameterGroup extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::RDS::DBParameterGroup");
        }


        /**
         * The parameters to set for this RDS parameter group.
         * @param jsonObj required : true
         */
        setParameters(jsonObj: Object): DBParameterGroup;
        setParameters(jsonObj: AWS.Function.BaseFunction): DBParameterGroup;
        setParameters(jsonObj: any): DBParameterGroup {
            this.Properties["Parameters"] = jsonObj;
            return this;
        }

        /**
         * A friendly description of the RDS parameter group.
         * For example, "My Parameter Group".
         * @param d required : true
         */
        setDescription(d: string): DBParameterGroup;
        setDescription(d: AWS.Function.BaseFunction): DBParameterGroup;
        setDescription(d: any): DBParameterGroup {
            this.Properties["Description"] = d;
            return this;
        }

        /**
         * The database family of this RDS parameter group.
         * For example, "MySQL5.1".
         * @param f required : true
         */
        setFamily(f: string): DBParameterGroup;
        setFamily(f: AWS.Function.BaseFunction): DBParameterGroup;
        setFamily(f: any): DBParameterGroup {
            this.Properties["Family"] = f;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["Parameters", "Description", "Family"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.ElastiCache {

    /**
     * The AWS::ElastiCache::SecurityGroupIngress type authorizes ingress to a cache security group from hosts in specified EC2 security groups.
     */
    export class SecurityGroupIngress extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::ElastiCache::SecurityGroupIngress");
        }


        /**
         * The name of the Cache Security Group to authorize.
         * @param ref required : true
         */
        setCacheSecurityGroupName(ref: AWS.Function.Ref): SecurityGroupIngress;
        setCacheSecurityGroupName(ref: AWS.Function.BaseFunction): SecurityGroupIngress;
        setCacheSecurityGroupName(ref: any): SecurityGroupIngress {
            this.Properties["CacheSecurityGroupName"] = ref;
            return this;
        }

        /**
         * Name of the EC2 Security Group to include in the authorization.
         * @param ref required : true
         */
        setEC2SecurityGroupName(ref: AWS.Function.Ref): SecurityGroupIngress;
        setEC2SecurityGroupName(ref: AWS.Function.BaseFunction): SecurityGroupIngress;
        setEC2SecurityGroupName(ref: any): SecurityGroupIngress {
            this.Properties["EC2SecurityGroupName"] = ref;
            return this;
        }

        /**
         * Specifies the AWS Account ID of the owner of the EC2 security group specified in the EC2SecurityGroupName property.
         * The AWS Access Key ID is not an acceptable value.
         * @param ecsgoi required : true
         */
        setEC2SecurityGroupOwnerId(ecsgoi: string): SecurityGroupIngress;
        setEC2SecurityGroupOwnerId(ecsgoi: AWS.Function.BaseFunction): SecurityGroupIngress;
        setEC2SecurityGroupOwnerId(ecsgoi: any): SecurityGroupIngress {
            this.Properties["EC2SecurityGroupOwnerId"] = ecsgoi;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["CacheSecurityGroupName", "EC2SecurityGroupName", "EC2SecurityGroupOwnerId"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.ElasticBeanstalk {

    /**
     * Creates an environment within AWS Elastic Beanstalk.
     * 
     * Return values
     * EndpointURL: The URL to the LoadBalancer for this environment.
     */
    export class Environment extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::ElasticBeanstalk::Environment");
        }


        /**
         * The name of the application associated with this environment.
         * @param ref required : true
         */
        setApplicationName(ref: AWS.Function.Ref): Environment;
        setApplicationName(ref: AWS.Function.BaseFunction): Environment;
        setApplicationName(ref: any): Environment {
            this.Properties["ApplicationName"] = ref;
            return this;
        }

        /**
         * The URL to the CNAME for this environment.
         * @param cnamep required : false
         */
        setCNAMEPrefix(cnamep: string): Environment;
        setCNAMEPrefix(cnamep: AWS.Function.BaseFunction): Environment;
        setCNAMEPrefix(cnamep: any): Environment {
            this.Properties["CNAMEPrefix"] = cnamep;
            return this;
        }

        /**
         * Name of the template to use with the environment.
         * @param tn required : false
         */
        setTemplateName(tn: string): Environment;
        setTemplateName(tn: AWS.Function.BaseFunction): Environment;
        setTemplateName(tn: any): Environment {
            this.Properties["TemplateName"] = tn;
            return this;
        }

        /**
         * Describes the environment.
         * @param d required : false
         */
        setDescription(d: string): Environment;
        setDescription(d: AWS.Function.BaseFunction): Environment;
        setDescription(d: any): Environment {
            this.Properties["Description"] = d;
            return this;
        }

        /**
         * Version to associate with the environment
         * @param vl required : false
         */
        setVersionLabel(vl: string): Environment;
        setVersionLabel(vl: AWS.Function.BaseFunction): Environment;
        setVersionLabel(vl: any): Environment {
            this.Properties["VersionLabel"] = vl;
            return this;
        }

        /**
         * The option settings to remove.
         * @param otr required : false
         */
        setOptionsToRemove(otr: Object[]): Environment;
        setOptionsToRemove(otr: AWS.Function.BaseFunction): Environment;
        setOptionsToRemove(otr: any): Environment {
            this.Properties["OptionsToRemove"] = otr;
            return this;
        }

        /**
         * Stack name associated with the environment.
         * @param ssn required : false
         */
        setSolutionStackName(ssn: string): Environment;
        setSolutionStackName(ssn: AWS.Function.BaseFunction): Environment;
        setSolutionStackName(ssn: any): Environment {
            this.Properties["SolutionStackName"] = ssn;
            return this;
        }

        /**
         * The option settings to add.
         * @param os required : false
         */
        setOptionSettings(os: Object[]): Environment;
        setOptionSettings(os: AWS.Function.BaseFunction): Environment;
        setOptionSettings(os: any): Environment {
            this.Properties["OptionSettings"] = os;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["ApplicationName"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.S3 {

    /**
     * The AWS::S3::BucketPolicy type applies a policy to an Amazon S3 bucket.
     */
    export class BucketPolicy extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::S3::BucketPolicy");
        }


        /**
         * Name of the bucket to which you want to add the policy.
         * @param ref required : true
         */
        setBucket(ref: AWS.Function.Ref): BucketPolicy;
        setBucket(ref: AWS.Function.BaseFunction): BucketPolicy;
        setBucket(ref: any): BucketPolicy {
            this.Properties["Bucket"] = ref;
            return this;
        }

        /**
         * A policy document containing permissions to add to the specified SNS topics.
         * @param jsonObj required : true
         */
        setPolicyDocument(jsonObj: Object): BucketPolicy;
        setPolicyDocument(jsonObj: AWS.Function.BaseFunction): BucketPolicy;
        setPolicyDocument(jsonObj: any): BucketPolicy {
            this.Properties["PolicyDocument"] = jsonObj;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["Bucket", "PolicyDocument"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * The AWS::EC2::Instance type creates an Amazon EC2 instance.
     * 
     * Return values
     * AvailabilityZone: The availability zone where the specified instance is launched.
     * For example: us-east-1b.
     * PrivateDnsName: The private DNS name of the specified instance.
     * For example: ip-10-24-34-0.ec2.internal
     * PublicDnsName: The public DNS name of the specified instance.
     * For example: ec2-107-20-50-45.compute-1.amazonaws.com
     * PrivateIp: The private IP address of the specified instance.
     * For example: 10.24.34.0
     * PublicIp: The public IP address of the specified instance.
     * For example: 192.0.2.0
     */
    export class Instance extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::Instance");
        }


        /**
         * A reference to an AWS::IAM::InstanceProfile type
         * @param ref required : false
         */
        setIamInstanceProfile(ref: AWS.Function.Ref): Instance;
        setIamInstanceProfile(ref: AWS.Function.BaseFunction): Instance;
        setIamInstanceProfile(ref: any): Instance {
            this.Properties["IamInstanceProfile"] = ref;
            return this;
        }

        /**
         * Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.
         * @param ii required : true
         */
        setImageId(ii: string): Instance;
        setImageId(ii: AWS.Function.BaseFunction): Instance;
        setImageId(ii: any): Instance {
            this.Properties["ImageId"] = ii;
            return this;
        }

        /**
         * Controls whether source/destination checking is enabled on the instance.
         * Also determines if an instance in a VPC will perform network address translation (NAT).
         * @param sdc required : false
         */
        setSourceDestCheck(sdc: bool): Instance;
        setSourceDestCheck(sdc: AWS.Function.BaseFunction): Instance;
        setSourceDestCheck(sdc: any): Instance {
            this.Properties["SourceDestCheck"] = sdc;
            return this;
        }

        /**
         * The kernel ID
         * @param ki required : false
         */
        setKernelId(ki: string): Instance;
        setKernelId(ki: AWS.Function.BaseFunction): Instance;
        setKernelId(ki: any): Instance {
            this.Properties["KernelId"] = ki;
            return this;
        }

        /**
         * Specifies the name of the availability zone in which the instance is located.
         * If not specified, the default availability zone for the region will be used.
         * @param az required : false
         */
        setAvailabilityZone(az: string): Instance;
        setAvailabilityZone(az: AWS.Function.BaseFunction): Instance;
        setAvailabilityZone(az: any): Instance {
            this.Properties["AvailabilityZone"] = az;
            return this;
        }

        /**
         * Valid only for EC2 security groups.
         * A list that contains the EC2 security groups to assign to the Amazon EC2 instance.
         * The list can contain both the name of existing EC2 security groups or references to AWS::EC2::SecurityGroup resources created in the template.
         * @param ref required : false
         */
        setSecurityGroups(ref: AWS.Function.Ref[]): Instance;
        setSecurityGroups(ref: AWS.Function.BaseFunction): Instance;
        setSecurityGroups(ref: any): Instance {
            this.Properties["SecurityGroups"] = ref;
            return this;
        }

        /**
         * Base64-encoded MIME user data that is made available to the instances.
         * @param ud required : false
         */
        setUserData(ud: string): Instance;
        setUserData(ud: AWS.Function.BaseFunction): Instance;
        setUserData(ud: any): Instance {
            this.Properties["UserData"] = ud;
            return this;
        }

        /**
         * This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance.
         * @param eo required : false
         */
        setEbsOptimized(eo: bool): Instance;
        setEbsOptimized(eo: AWS.Function.BaseFunction): Instance;
        setEbsOptimized(eo: any): Instance {
            this.Properties["EbsOptimized"] = eo;
            return this;
        }

        /**
         * The tenancy of the instance that you want to launch.
         * This value can be either "default" or "dedicated".
         * An instance that has a tenancy value of "dedicated" runs on single-tenant hardware and can be launched only into a VPC.
         * @param t required : false
         */
        setTenancy(t: string): Instance;
        setTenancy(t: AWS.Function.BaseFunction): Instance;
        setTenancy(t: any): Instance {
            this.Properties["Tenancy"] = t;
            return this;
        }

        /**
         * The instance type.
         * For example, "m1.small".
         * @param it required : true
         */
        setInstanceType(it: string): Instance;
        setInstanceType(it: AWS.Function.BaseFunction): Instance;
        setInstanceType(it: any): Instance {
            this.Properties["InstanceType"] = it;
            return this;
        }

        /**
         * The tags that you want to attach to the instance.
         * @param t required : false
         */
        setTags(t: Object[]): Instance;
        setTags(t: AWS.Function.BaseFunction): Instance;
        setTags(t: any): Instance {
            this.Properties["Tags"] = t;
            return this;
        }

        /**
         * The ID of the RAM disk to select.
         * Some kernels require additional drivers at launch.
         * Check the kernel requirements for information about whether you need to specify a RAM disk.
         * To find kernel requirements, refer to the AWS Resource Center and search for the kernel ID.
         * @param ri required : false
         */
        setRamdiskId(ri: string): Instance;
        setRamdiskId(ri: AWS.Function.BaseFunction): Instance;
        setRamdiskId(ri: any): Instance {
            this.Properties["RamdiskId"] = ri;
            return this;
        }

        /**
         * A list that contains the security group IDs for VPC security groups to assign to the Amazon EC2 instance.
         * @param ref required : false
         */
        setSecurityGroupIds(ref: AWS.Function.Ref[]): Instance;
        setSecurityGroupIds(ref: AWS.Function.BaseFunction): Instance;
        setSecurityGroupIds(ref: any): Instance {
            this.Properties["SecurityGroupIds"] = ref;
            return this;
        }

        /**
         * If you're using Amazon Virtual Private Cloud, this specifies the ID of the subnet that you want to launch the instance into.
         * @param ref required : false
         */
        setSubnetId(ref: AWS.Function.Ref): Instance;
        setSubnetId(ref: AWS.Function.BaseFunction): Instance;
        setSubnetId(ref: any): Instance {
            this.Properties["SubnetId"] = ref;
            return this;
        }

        /**
         * Specifies whether the instance can be terminated through the API (specify "true"), or not (specify "false").
         * @param dat required : false
         */
        setDisableApiTermination(dat: bool): Instance;
        setDisableApiTermination(dat: AWS.Function.BaseFunction): Instance;
        setDisableApiTermination(dat: any): Instance {
            this.Properties["DisableApiTermination"] = dat;
            return this;
        }

        /**
         * The name of an existing placement group that you want to launch the instance into (for cluster instances).
         * @param pgn required : false
         */
        setPlacementGroupName(pgn: string): Instance;
        setPlacementGroupName(pgn: AWS.Function.BaseFunction): Instance;
        setPlacementGroupName(pgn: any): Instance {
            this.Properties["PlacementGroupName"] = pgn;
            return this;
        }

        /**
         * If you're using an Amazon Virtual Private Cloud (VPC), you can optionally use this parameter to assign the instance a specific available IP address from the subnet (e.g., 10.0.0.25).
         * By default, Amazon VPC selects an IP address from the subnet for the instance.
         * @param pia required : false
         */
        setPrivateIpAddress(pia: string): Instance;
        setPrivateIpAddress(pia: AWS.Function.BaseFunction): Instance;
        setPrivateIpAddress(pia: any): Instance {
            this.Properties["PrivateIpAddress"] = pia;
            return this;
        }

        /**
         * Specifies whether monitoring is enabled for the instance.
         * @param m required : false
         */
        setMonitoring(m: bool): Instance;
        setMonitoring(m: AWS.Function.BaseFunction): Instance;
        setMonitoring(m: any): Instance {
            this.Properties["Monitoring"] = m;
            return this;
        }

        /**
         * Provides the name of the EC2 key pair.
         * @param kn required : false
         */
        setKeyName(kn: string): Instance;
        setKeyName(kn: AWS.Function.BaseFunction): Instance;
        setKeyName(kn: any): Instance {
            this.Properties["KeyName"] = kn;
            return this;
        }

        /**
         * The EBS volumes to attach to the instance.
         * @param v required : false
         */
        setVolumes(v: Object[]): Instance;
        setVolumes(v: AWS.Function.BaseFunction): Instance;
        setVolumes(v: any): Instance {
            this.Properties["Volumes"] = v;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["ImageId", "InstanceType"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.RDS {

    /**
     * The AWS::RDS::DBSecurityGroupIngress type enables ingress to a DBSecurityGroup using one of two forms of authorization.
     */
    export class DBSecurityGroupIngress extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::RDS::DBSecurityGroupIngress");
        }


        /**
         * Id of the VPC or EC2 Security Group to authorize.
         * @param ref required : false
         */
        setEC2SecurityGroupId(ref: AWS.Function.Ref): DBSecurityGroupIngress;
        setEC2SecurityGroupId(ref: AWS.Function.BaseFunction): DBSecurityGroupIngress;
        setEC2SecurityGroupId(ref: any): DBSecurityGroupIngress {
            this.Properties["EC2SecurityGroupId"] = ref;
            return this;
        }

        /**
         * The IP range to authorize.
         * @param cidrip required : false
         */
        setCIDRIP(cidrip: string): DBSecurityGroupIngress;
        setCIDRIP(cidrip: AWS.Function.BaseFunction): DBSecurityGroupIngress;
        setCIDRIP(cidrip: any): DBSecurityGroupIngress {
            this.Properties["CIDRIP"] = cidrip;
            return this;
        }

        /**
         * Name of the EC2 Security Group to authorize.
         * @param ref required : false
         */
        setEC2SecurityGroupName(ref: AWS.Function.Ref): DBSecurityGroupIngress;
        setEC2SecurityGroupName(ref: AWS.Function.BaseFunction): DBSecurityGroupIngress;
        setEC2SecurityGroupName(ref: any): DBSecurityGroupIngress {
            this.Properties["EC2SecurityGroupName"] = ref;
            return this;
        }

        /**
         * AWS Account Number of the owner of the EC2 Security Group specified in the EC2SecurityGroupName parameter.
         * The AWS Access Key ID is not an acceptable value.
         * @param ecsgoi required : false
         */
        setEC2SecurityGroupOwnerId(ecsgoi: string): DBSecurityGroupIngress;
        setEC2SecurityGroupOwnerId(ecsgoi: AWS.Function.BaseFunction): DBSecurityGroupIngress;
        setEC2SecurityGroupOwnerId(ecsgoi: any): DBSecurityGroupIngress {
            this.Properties["EC2SecurityGroupOwnerId"] = ecsgoi;
            return this;
        }

        validate(errors: Object[]): Object[] {
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * Creates a Virtual Private Cloud (VPC) with the CIDR block that you specify.
     */
    export class VPC extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::VPC");
        }


        /**
         * The CIDR block you want the VPC to cover.
         * For example: "10.0.0.0/16".
         * @param cb required : true
         */
        setCidrBlock(cb: string): VPC;
        setCidrBlock(cb: AWS.Function.BaseFunction): VPC;
        setCidrBlock(cb: any): VPC {
            this.Properties["CidrBlock"] = cb;
            return this;
        }

        /**
         * The tags that you want to attach to the instance.
         * @param t required : false
         */
        setTags(t: Object[]): VPC;
        setTags(t: AWS.Function.BaseFunction): VPC;
        setTags(t: any): VPC {
            this.Properties["Tags"] = t;
            return this;
        }

        /**
         * The allowed tenancy of instances launched into the VPC.
         * A value of "default" means instances can be launched with any tenancy; a value of "dedicated" means instances must be launched with tenancy as dedicated.
         * @param it required : false
         */
        setInstanceTenancy(it: number): VPC;
        setInstanceTenancy(it: AWS.Function.BaseFunction): VPC;
        setInstanceTenancy(it: any): VPC {
            this.Properties["InstanceTenancy"] = it;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["CidrBlock"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * Creates a new route table within a VPC.
     * After you create a new route table, you can add routes and associate the table with a subnet.
     */
    export class RouteTable extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::RouteTable");
        }


        /**
         * The tags that you want to attach to the instance.
         * @param t required : false
         */
        setTags(t: Object[]): RouteTable;
        setTags(t: AWS.Function.BaseFunction): RouteTable;
        setTags(t: any): RouteTable {
            this.Properties["Tags"] = t;
            return this;
        }

        /**
         * The ID of the VPC where the route table will be created.
         * @param ref required : true
         */
        setVpcId(ref: AWS.Function.Ref): RouteTable;
        setVpcId(ref: AWS.Function.BaseFunction): RouteTable;
        setVpcId(ref: any): RouteTable {
            this.Properties["VpcId"] = ref;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["VpcId"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.SNS {

    /**
     * The AWS::SNS::TopicPolicy type applies a policy to SNS topics.
     */
    export class TopicPolicy extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::SNS::TopicPolicy");
        }


        /**
         * The Amazon Resource Names (ARN) of the topics to which you want to add the policy.
         * @param ref required : true
         */
        setTopics(ref: AWS.Function.Ref[]): TopicPolicy;
        setTopics(ref: AWS.Function.BaseFunction): TopicPolicy;
        setTopics(ref: any): TopicPolicy {
            this.Properties["Topics"] = ref;
            return this;
        }

        /**
         * A policy document containing permissions to add to the specified SNS topics.
         * @param jsonObj required : true
         */
        setPolicyDocument(jsonObj: Object): TopicPolicy;
        setPolicyDocument(jsonObj: AWS.Function.BaseFunction): TopicPolicy;
        setPolicyDocument(jsonObj: any): TopicPolicy {
            this.Properties["PolicyDocument"] = jsonObj;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["Topics", "PolicyDocument"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.SNS {

    /**
     * The AWS::SNS::Topic type creates an Amazon SNS topic.
     */
    export class Topic extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::SNS::Topic");
        }


        /**
         * Array of SNS Subscription type.
         * @param s required : true
         */
        setSubscription(s: Object[]): Topic;
        setSubscription(s: AWS.Function.BaseFunction): Topic;
        setSubscription(s: any): Topic {
            this.Properties["Subscription"] = s;
            return this;
        }

        /**
         * The human-readable name used in the "From" field for notifications to email and email-json endpoints
         * @param dn required : false
         */
        setDisplayName(dn: string): Topic;
        setDisplayName(dn: AWS.Function.BaseFunction): Topic;
        setDisplayName(dn: any): Topic {
            this.Properties["DisplayName"] = dn;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["Subscription"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.AutoScaling {

    /**
     * The AWS::AutoScaling::AutoScalingGroup type creates an Auto Scaling group.
     */
    export class AutoScalingGroup extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::AutoScaling::AutoScalingGroup");
        }


        /**
         * The tags you want to attach to this resource.
         * @param t required : false
         */
        setTags(t: Object[]): AutoScalingGroup;
        setTags(t: AWS.Function.BaseFunction): AutoScalingGroup;
        setTags(t: any): AutoScalingGroup {
            this.Properties["Tags"] = t;
            return this;
        }

        /**
         * The length of time in seconds after a new EC2 instance comes into service that Auto Scaling starts checking its health.
         * @param hcgp required : false
         */
        setHealthCheckGracePeriod(hcgp: number): AutoScalingGroup;
        setHealthCheckGracePeriod(hcgp: AWS.Function.BaseFunction): AutoScalingGroup;
        setHealthCheckGracePeriod(hcgp: any): AutoScalingGroup {
            this.Properties["HealthCheckGracePeriod"] = hcgp;
            return this;
        }

        /**
         * The service you want the health status from, Amazon EC2 or Elastic Load Balancer.
         * Valid values are "EC2" or "ELB."
         * @param hct required : false
         */
        setHealthCheckType(hct: string): AutoScalingGroup;
        setHealthCheckType(hct: AWS.Function.BaseFunction): AutoScalingGroup;
        setHealthCheckType(hct: any): AutoScalingGroup {
            this.Properties["HealthCheckType"] = hct;
            return this;
        }

        /**
         * A list of load balancers associated with this auto scaling group.
         * @param ref required : false
         */
        setLoadBalancerNames(ref: AWS.Function.Ref[]): AutoScalingGroup;
        setLoadBalancerNames(ref: AWS.Function.BaseFunction): AutoScalingGroup;
        setLoadBalancerNames(ref: any): AutoScalingGroup {
            this.Properties["LoadBalancerNames"] = ref;
            return this;
        }

        /**
         * Contains a list of Availability Zones for the group.
         * @param az required : true
         */
        setAvailabilityZones(az: string[]): AutoScalingGroup;
        setAvailabilityZones(az: AWS.Function.BaseFunction): AutoScalingGroup;
        setAvailabilityZones(az: any): AutoScalingGroup {
            this.Properties["AvailabilityZones"] = az;
            return this;
        }

        /**
         * Specifies the desired capacity for the auto scaling group.
         * @param dc required : false
         */
        setDesiredCapacity(dc: string): AutoScalingGroup;
        setDesiredCapacity(dc: AWS.Function.BaseFunction): AutoScalingGroup;
        setDesiredCapacity(dc: any): AutoScalingGroup {
            this.Properties["DesiredCapacity"] = dc;
            return this;
        }

        /**
         * The maximum size of the auto scaling group.
         * @param ms required : true
         */
        setMaxSize(ms: string): AutoScalingGroup;
        setMaxSize(ms: AWS.Function.BaseFunction): AutoScalingGroup;
        setMaxSize(ms: any): AutoScalingGroup {
            this.Properties["MaxSize"] = ms;
            return this;
        }

        /**
         * A list of subnet identifiers of Amazon Virtual Private Clouds (Amazon VPCs).
         * @param ref required : false
         */
        setVPCZoneIdentifier(ref: AWS.Function.Ref[]): AutoScalingGroup;
        setVPCZoneIdentifier(ref: AWS.Function.BaseFunction): AutoScalingGroup;
        setVPCZoneIdentifier(ref: any): AutoScalingGroup {
            this.Properties["VPCZoneIdentifier"] = ref;
            return this;
        }

        /**
         * The number of seconds after a scaling activity completes before any further scaling activities can start.
         * @param c required : false
         */
        setCooldown(c: string): AutoScalingGroup;
        setCooldown(c: AWS.Function.BaseFunction): AutoScalingGroup;
        setCooldown(c: any): AutoScalingGroup {
            this.Properties["Cooldown"] = c;
            return this;
        }

        /**
         * An embedded property that configures an auto scaling group to send notifications when specified events take place.
         * @param nc required : false
         */
        setNotificationConfiguration(nc: Object): AutoScalingGroup;
        setNotificationConfiguration(nc: AWS.Function.BaseFunction): AutoScalingGroup;
        setNotificationConfiguration(nc: any): AutoScalingGroup {
            this.Properties["NotificationConfiguration"] = nc;
            return this;
        }

        /**
         * Specifies the name of the associated AWS::AutoScaling::LaunchConfiguration.
         * @param ref required : false
         */
        setLaunchConfigurationName(ref: AWS.Function.Ref): AutoScalingGroup;
        setLaunchConfigurationName(ref: AWS.Function.BaseFunction): AutoScalingGroup;
        setLaunchConfigurationName(ref: any): AutoScalingGroup {
            this.Properties["LaunchConfigurationName"] = ref;
            return this;
        }

        /**
         * The minimum size of the auto scaling group.
         * @param ms required : true
         */
        setMinSize(ms: string): AutoScalingGroup;
        setMinSize(ms: AWS.Function.BaseFunction): AutoScalingGroup;
        setMinSize(ms: any): AutoScalingGroup {
            this.Properties["MinSize"] = ms;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["AvailabilityZones", "MaxSize", "MinSize"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * The AWS::EC2::EIP resource allocates an Elastic IP (EIP) address and can, optionally, associate it with an Amazon EC2 instance.
     * 
     * Return values
     * AllocationId: The ID that AWS assigns to represent the allocation of the address for use with Amazon VPC.
     * THis is returned only for VPC elastic IP addresses.
     * Example return value: eipalloc-5723d13e
     */
    export class EIP extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::EIP");
        }


        /**
         * Set to "vpc" to allocate the address to your Virtual Private Cloud (VPC).
         * No other values are supported.
         * @param d required : false
         */
        setDomain(d: string): EIP;
        setDomain(d: AWS.Function.BaseFunction): EIP;
        setDomain(d: any): EIP {
            this.Properties["Domain"] = d;
            return this;
        }

        /**
         * The Instance ID of the Amazon EC2 instance that you want to associate with this Elastic IP address.
         * @param ref required : false
         */
        setInstanceId(ref: AWS.Function.Ref): EIP;
        setInstanceId(ref: AWS.Function.BaseFunction): EIP;
        setInstanceId(ref: any): EIP {
            this.Properties["InstanceId"] = ref;
            return this;
        }

        validate(errors: Object[]): Object[] {
            return errors;
        }

    }
}


module AWS.CloudFront {

    /**
     * Creates an Amazon CloudFront download distribution.
     * 
     * Return values
     * DomainName: The domain name of the resource.
     * For example: d2fadu0nynjpfn.cloudfront.net.
     */
    export class Distribution extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::CloudFront::Distribution");
        }


        /**
         * The distribution's configuration information.
         * @param dc required : true
         */
        setDistributionConfig(dc: Object): Distribution;
        setDistributionConfig(dc: AWS.Function.BaseFunction): Distribution;
        setDistributionConfig(dc: any): Distribution {
            this.Properties["DistributionConfig"] = dc;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["DistributionConfig"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.Route53 {

    /**
     * The AWS::Route53::RecordSet type can be used as a standalone resource or as an embedded property in the AWS::Route53::RecordSetGroup type.
     */
    export class RecordSet extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::Route53::RecordSet");
        }


        /**
         * The name of the domain.
         * This must be a fully-specified domain, ending with a period as the last label indication.
         * If you omit the final period, Amazon Route 53 assumes the domain is relative to the root.
         * @param n required : true
         */
        setName(n: string): RecordSet;
        setName(n: AWS.Function.BaseFunction): RecordSet;
        setName(n: any): RecordSet {
            this.Properties["Name"] = n;
            return this;
        }

        /**
         * Alias resource record sets only: Information about the domain to which you are redirecting traffic.
         * Required: Conditional.
         * Required if you are creating an alias resource record set.
         * @param at required : false
         */
        setAliasTarget(at: Object): RecordSet;
        setAliasTarget(at: AWS.Function.BaseFunction): RecordSet;
        setAliasTarget(at: any): RecordSet {
            this.Properties["AliasTarget"] = at;
            return this;
        }

        /**
         * The name of the domain for the hosted zone where you want to add the record set.
         * Required: Conditional.
         * You must specify either the HostedZoneName or HostedZoneId, but you cannot specify both.
         * @param hzn required : false
         */
        setHostedZoneName(hzn: string): RecordSet;
        setHostedZoneName(hzn: AWS.Function.BaseFunction): RecordSet;
        setHostedZoneName(hzn: any): RecordSet {
            this.Properties["HostedZoneName"] = hzn;
            return this;
        }

        /**
         * Latency resource record sets only: The Amazon EC2 region where the resource that is specified in this resource record set resides.
         * The resource typically is an AWS resource, for example, Amazon EC2 instance or an Elastic Load Balancing load balancer, and is referred to by an IP address or a DNS domain name, depending on the record type.
         * @param r required : false
         */
        setRegion(r: string): RecordSet;
        setRegion(r: AWS.Function.BaseFunction): RecordSet;
        setRegion(r: any): RecordSet {
            this.Properties["Region"] = r;
            return this;
        }

        /**
         * Weighted resource record sets only: Among resource record sets that have the same combination of DNS name and type, a value that determines what portion of traffic for the current resource record set is routed to the associated location.
         * Required: Conditional.
         * Required if you are creating a weighted resource record set.
         * @param w required : false
         */
        setWeight(w: number): RecordSet;
        setWeight(w: AWS.Function.BaseFunction): RecordSet;
        setWeight(w: any): RecordSet {
            this.Properties["Weight"] = w;
            return this;
        }

        /**
         * The type of records to add.
         * @param t required : true
         */
        setType(t: string): RecordSet;
        setType(t: AWS.Function.BaseFunction): RecordSet;
        setType(t: any): RecordSet {
            this.Properties["Type"] = t;
            return this;
        }

        /**
         * The ID of the hosted zone.
         * Required: Conditional.
         * You must specify either the HostedZoneName or HostedZoneId, but you cannot specify both.
         * @param hzi required : false
         */
        setHostedZoneId(hzi: string): RecordSet;
        setHostedZoneId(hzi: AWS.Function.BaseFunction): RecordSet;
        setHostedZoneId(hzi: any): RecordSet {
            this.Properties["HostedZoneId"] = hzi;
            return this;
        }

        /**
         * Any comments you want to include about the hosted zone.
         * @param c required : false
         */
        setComment(c: string): RecordSet;
        setComment(c: AWS.Function.BaseFunction): RecordSet;
        setComment(c: any): RecordSet {
            this.Properties["Comment"] = c;
            return this;
        }

        /**
         * A unique identifier that differentiates among multiple resource record sets that have the same combination of DNS name and type.
         * Required: Conditional.
         * Required if you are creating a weighted resource record set.
         * @param si required : false
         */
        setSetIdentifier(si: string): RecordSet;
        setSetIdentifier(si: AWS.Function.BaseFunction): RecordSet;
        setSetIdentifier(si: any): RecordSet {
            this.Properties["SetIdentifier"] = si;
            return this;
        }

        /**
         * The resource record cache time to live (TTL), in seconds.
         * If TTL is specified, ResourceRecords is also required.
         * @param ttl required : false
         */
        setTTL(ttl: string): RecordSet;
        setTTL(ttl: AWS.Function.BaseFunction): RecordSet;
        setTTL(ttl: any): RecordSet {
            this.Properties["TTL"] = ttl;
            return this;
        }

        /**
         * List of resource records to add.
         * Each record should be in the format appropriate for the record type specified by the Type property.
         * Required: Conditional.
         * Required if TTL is specified.
         * @param rr required : false
         */
        setResourceRecords(rr: string[]): RecordSet;
        setResourceRecords(rr: AWS.Function.BaseFunction): RecordSet;
        setResourceRecords(rr: any): RecordSet {
            this.Properties["ResourceRecords"] = rr;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["Name", "Type"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.RDS {

    /**
     * The AWS::RDS::DBInstance type creates an Amazon RDS database instance.
     * 
     * Return values
     * Endpoint.Address: The connection endpoint for the database.
     * For example: mystack-mydb-1apw1j4phylrk.cg034hpkmmjt.us-east-1.rds.amazonaws.com.
     * Endpoint.Port: The port number on which the database accepts connections.
     * For example: 3306
     */
    export class DBInstance extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::RDS::DBInstance");
        }


        /**
         * The daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.
         * @param pbw required : false
         */
        setPreferredBackupWindow(pbw: string): DBInstance;
        setPreferredBackupWindow(pbw: AWS.Function.BaseFunction): DBInstance;
        setPreferredBackupWindow(pbw: any): DBInstance {
            this.Properties["PreferredBackupWindow"] = pbw;
            return this;
        }

        /**
         * The name of the compute and memory capacity class of the DB instance.
         * @param dbic required : true
         */
        setDBInstanceClass(dbic: string): DBInstance;
        setDBInstanceClass(dbic: AWS.Function.BaseFunction): DBInstance;
        setDBInstanceClass(dbic: any): DBInstance {
            this.Properties["DBInstanceClass"] = dbic;
            return this;
        }

        /**
         * The identifier for the DB snapshot to restore from.
         * @param dbsi required : false
         */
        setDBSnapshotIdentifier(dbsi: string): DBInstance;
        setDBSnapshotIdentifier(dbsi: AWS.Function.BaseFunction): DBInstance;
        setDBSnapshotIdentifier(dbsi: any): DBInstance {
            this.Properties["DBSnapshotIdentifier"] = dbsi;
            return this;
        }

        /**
         * The allocated storage size specified in gigabytes (GB).
         * If any value is used in the Iops parameter, AllocatedStorage must be at least 100 GB, which corresponds to the minimum Iops value of 1000.
         * If Iops is increased (in 1000 IOPS increments), then AllocatedStorage must also be increased (in 100 GB increments) correspondingly.
         * @param as required : true
         */
        setAllocatedStorage(as: string): DBInstance;
        setAllocatedStorage(as: AWS.Function.BaseFunction): DBInstance;
        setAllocatedStorage(as: any): DBInstance {
            this.Properties["AllocatedStorage"] = as;
            return this;
        }

        /**
         * The number of I/O operations per second (IOPS) that the database should provision.
         * This can be any value from 1000–10,000, in 1000 IOPS increments.
         * @param i required : false
         */
        setIops(i: string): DBInstance;
        setIops(i: AWS.Function.BaseFunction): DBInstance;
        setIops(i: any): DBInstance {
            this.Properties["Iops"] = i;
            return this;
        }

        /**
         * The name of the Availability Zone where the DB instance is.
         * You cannot set the AvailabilityZone parameter if the MultiAZ parameter is set to true.
         * @param az required : false
         */
        setAvailabilityZone(az: string): DBInstance;
        setAvailabilityZone(az: AWS.Function.BaseFunction): DBInstance;
        setAvailabilityZone(az: any): DBInstance {
            this.Properties["AvailabilityZone"] = az;
            return this;
        }

        /**
         * The name of an existing DB parameter group or a reference to an AWS::RDS::DBParameterGroup resource created in the template.
         * @param ref required : false
         */
        setDBParameterGroupName(ref: AWS.Function.Ref): DBInstance;
        setDBParameterGroupName(ref: AWS.Function.BaseFunction): DBInstance;
        setDBParameterGroupName(ref: any): DBInstance {
            this.Properties["DBParameterGroupName"] = ref;
            return this;
        }

        /**
         * The weekly time range (in UTC) during which system maintenance can occur.
         * @param pmw required : false
         */
        setPreferredMaintenanceWindow(pmw: string): DBInstance;
        setPreferredMaintenanceWindow(pmw: AWS.Function.BaseFunction): DBInstance;
        setPreferredMaintenanceWindow(pmw: any): DBInstance {
            this.Properties["PreferredMaintenanceWindow"] = pmw;
            return this;
        }

        /**
         * The license model information for this DB instance.
         * @param lm required : false
         */
        setLicenseModel(lm: string): DBInstance;
        setLicenseModel(lm: AWS.Function.BaseFunction): DBInstance;
        setLicenseModel(lm: any): DBInstance {
            this.Properties["LicenseModel"] = lm;
            return this;
        }

        /**
         * The master password for the DB instance.
         * @param mup required : true
         */
        setMasterUserPassword(mup: string): DBInstance;
        setMasterUserPassword(mup: AWS.Function.BaseFunction): DBInstance;
        setMasterUserPassword(mup: any): DBInstance {
            this.Properties["MasterUserPassword"] = mup;
            return this;
        }

        /**
         * The name of the database engine to be used for this DB instance.
         * @param e required : true
         */
        setEngine(e: string): DBInstance;
        setEngine(e: AWS.Function.BaseFunction): DBInstance;
        setEngine(e: any): DBInstance {
            this.Properties["Engine"] = e;
            return this;
        }

        /**
         * The master username for the DB instance.
         * @param mu required : true
         */
        setMasterUsername(mu: string): DBInstance;
        setMasterUsername(mu: AWS.Function.BaseFunction): DBInstance;
        setMasterUsername(mu: any): DBInstance {
            this.Properties["MasterUsername"] = mu;
            return this;
        }

        /**
         * The port for the instance.
         * @param p required : false
         */
        setPort(p: string): DBInstance;
        setPort(p: AWS.Function.BaseFunction): DBInstance;
        setPort(p: any): DBInstance {
            this.Properties["Port"] = p;
            return this;
        }

        /**
         * A list containing the DB security groups to assign to the Amazon RDS instance.
         * The list can contain both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup resources created in the template.
         * @param ref required : false
         */
        setDBSecurityGroups(ref: AWS.Function.Ref[]): DBInstance;
        setDBSecurityGroups(ref: AWS.Function.BaseFunction): DBInstance;
        setDBSecurityGroups(ref: any): DBInstance {
            this.Properties["DBSecurityGroups"] = ref;
            return this;
        }

        /**
         * Specifies if the DB instance is a multiple availability-zone deployment.
         * You cannot set the AvailabilityZone parameter if the MultiAZ parameter is set to true.
         * @param maz required : false
         */
        setMultiAZ(maz: bool): DBInstance;
        setMultiAZ(maz: AWS.Function.BaseFunction): DBInstance;
        setMultiAZ(maz: any): DBInstance {
            this.Properties["MultiAZ"] = maz;
            return this;
        }

        /**
         * The version number of the database engine to use.
         * @param ev required : false
         */
        setEngineVersion(ev: string): DBInstance;
        setEngineVersion(ev: AWS.Function.BaseFunction): DBInstance;
        setEngineVersion(ev: any): DBInstance {
            this.Properties["EngineVersion"] = ev;
            return this;
        }

        /**
         * The name of the initial database of this instance that was provided at create time, if one was specified when the DB instance was created.
         * This same name is returned for the life of the DB instance.
         * @param dbn required : false
         */
        setDBName(dbn: string): DBInstance;
        setDBName(dbn: AWS.Function.BaseFunction): DBInstance;
        setDBName(dbn: any): DBInstance {
            this.Properties["DBName"] = dbn;
            return this;
        }

        /**
         * The number of days for which automatic DB snapshots are retained.
         * @param brp required : false
         */
        setBackupRetentionPeriod(brp: string): DBInstance;
        setBackupRetentionPeriod(brp: AWS.Function.BaseFunction): DBInstance;
        setBackupRetentionPeriod(brp: any): DBInstance {
            this.Properties["BackupRetentionPeriod"] = brp;
            return this;
        }

        /**
         * A DB Subnet Group to associate with this DB instance.
         * @param ref required : false
         */
        setDBSubnetGroupName(ref: AWS.Function.Ref): DBInstance;
        setDBSubnetGroupName(ref: AWS.Function.BaseFunction): DBInstance;
        setDBSubnetGroupName(ref: any): DBInstance {
            this.Properties["DBSubnetGroupName"] = ref;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["DBInstanceClass", "AllocatedStorage", "MasterUserPassword", "Engine", "MasterUsername"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}


module AWS.EC2 {

    /**
     * Creates an entry (i.e., rule) in a network ACL with a rule number you specify.
     * Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules.
     */
    export class NetworkAclEntry extends BaseResource {

        private Properties: Object = {};

        /**
         * constructor
         * @param name this resource name.
         */
        constructor(name: string) {
            super(name, "AWS::EC2::NetworkAclEntry");
        }


        /**
         * The CIDR range to allow or deny, in CIDR notation (e.g., 172.16.0.0/24).
         * @param cb required : true
         */
        setCidrBlock(cb: string): NetworkAclEntry;
        setCidrBlock(cb: AWS.Function.BaseFunction): NetworkAclEntry;
        setCidrBlock(cb: any): NetworkAclEntry {
            this.Properties["CidrBlock"] = cb;
            return this;
        }

        /**
         * ID of the ACL where the entry will be created.
         * @param ra required : true
         */
        setRuleAction(ra: string): NetworkAclEntry;
        setRuleAction(ra: AWS.Function.BaseFunction): NetworkAclEntry;
        setRuleAction(ra: any): NetworkAclEntry {
            this.Properties["RuleAction"] = ra;
            return this;
        }

        /**
         * The Internet Control Message Protocol (ICMP) code and type.
         * Required: Conditional, required if specifying 1 (ICMP) for the protocol parameter.
         * @param i required : false
         */
        setIcmp(i: Object): NetworkAclEntry;
        setIcmp(i: AWS.Function.BaseFunction): NetworkAclEntry;
        setIcmp(i: any): NetworkAclEntry {
            this.Properties["Icmp"] = i;
            return this;
        }

        /**
         * The range of port numbers for the UDP/TCP protocol.
         * Required: Conditional, required if specifying 6 (TCP) or 17 (UDP) for the protocol parameter.
         * @param pr required : false
         */
        setPortRange(pr: Object): NetworkAclEntry;
        setPortRange(pr: AWS.Function.BaseFunction): NetworkAclEntry;
        setPortRange(pr: any): NetworkAclEntry {
            this.Properties["PortRange"] = pr;
            return this;
        }

        /**
         * Whether this rule applies to egress traffic from the subnet ("true") or ingress traffic to the subnet ("false").
         * @param e required : true
         */
        setEgress(e: bool): NetworkAclEntry;
        setEgress(e: AWS.Function.BaseFunction): NetworkAclEntry;
        setEgress(e: any): NetworkAclEntry {
            this.Properties["Egress"] = e;
            return this;
        }

        /**
         * ID of the ACL where the entry will be created.
         * @param ref required : true
         */
        setNetworkAclId(ref: AWS.Function.Ref): NetworkAclEntry;
        setNetworkAclId(ref: AWS.Function.BaseFunction): NetworkAclEntry;
        setNetworkAclId(ref: any): NetworkAclEntry {
            this.Properties["NetworkAclId"] = ref;
            return this;
        }

        /**
         * IP protocol the rule applies to.
         * You can use -1 to mean all protocols.
         * This must be -1 or a protocol number.
         * @param p required : true
         */
        setProtocol(p: number): NetworkAclEntry;
        setProtocol(p: AWS.Function.BaseFunction): NetworkAclEntry;
        setProtocol(p: any): NetworkAclEntry {
            this.Properties["Protocol"] = p;
            return this;
        }

        /**
         * Rule number to assign to the entry (e.g., 100).
         * This must be a postive integer from 1 to 32766.
         * @param rn required : true
         */
        setRuleNumber(rn: number): NetworkAclEntry;
        setRuleNumber(rn: AWS.Function.BaseFunction): NetworkAclEntry;
        setRuleNumber(rn: any): NetworkAclEntry {
            this.Properties["RuleNumber"] = rn;
            return this;
        }

        validate(errors: Object[]): Object[] {
            var requires: string[] = ["CidrBlock", "RuleAction", "Egress", "NetworkAclId", "Protocol", "RuleNumber"];

            for (var i: number = 0; i < requires.length; i++) {
                if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                    var err: Object = { "Name": this.getName(), "Type": this.getType(), "Property": requires[i], "Description": "value is null or undefined." };
                    errors.push(err);
                }
            }
            return errors;
        }

    }
}



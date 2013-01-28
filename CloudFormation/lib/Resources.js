var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AWS;
(function (AWS) {
    (function (EC2) {
        var SubnetNetworkAclAssociation = (function (_super) {
            __extends(SubnetNetworkAclAssociation, _super);
            function SubnetNetworkAclAssociation(name) {
                        _super.call(this, name, "AWS::EC2::SubnetNetworkAclAssociation");
                this.Properties = {
                };
            }
            SubnetNetworkAclAssociation.prototype.setSubnetId = function (ref) {
                this.Properties["SubnetId"] = ref;
                return this;
            };
            SubnetNetworkAclAssociation.prototype.setNetworkAclId = function (ref) {
                this.Properties["NetworkAclId"] = ref;
                return this;
            };
            SubnetNetworkAclAssociation.prototype.validate = function (errors) {
                var requires = [
                    "SubnetId", 
                    "NetworkAclId"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return SubnetNetworkAclAssociation;
        })(AWS.BaseResource);
        EC2.SubnetNetworkAclAssociation = SubnetNetworkAclAssociation;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (IAM) {
        var User = (function (_super) {
            __extends(User, _super);
            function User(name) {
                        _super.call(this, name, "AWS::IAM::User");
                this.Properties = {
                };
            }
            User.prototype.setGroups = function (ref) {
                this.Properties["Groups"] = ref;
                return this;
            };
            User.prototype.setPolicies = function (ref) {
                this.Properties["Policies"] = ref;
                return this;
            };
            User.prototype.setLoginProfile = function (lp) {
                this.Properties["LoginProfile"] = lp;
                return this;
            };
            User.prototype.setPath = function (p) {
                this.Properties["Path"] = p;
                return this;
            };
            User.prototype.validate = function (errors) {
                return errors;
            };
            return User;
        })(AWS.BaseResource);
        IAM.User = User;        
    })(AWS.IAM || (AWS.IAM = {}));
    var IAM = AWS.IAM;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (SQS) {
        var QueuePolicy = (function (_super) {
            __extends(QueuePolicy, _super);
            function QueuePolicy(name) {
                        _super.call(this, name, "AWS::SQS::QueuePolicy");
                this.Properties = {
                };
            }
            QueuePolicy.prototype.setQueues = function (ref) {
                this.Properties["Queues"] = ref;
                return this;
            };
            QueuePolicy.prototype.setPolicyDocument = function (jsonObj) {
                this.Properties["PolicyDocument"] = jsonObj;
                return this;
            };
            QueuePolicy.prototype.validate = function (errors) {
                var requires = [
                    "Queues", 
                    "PolicyDocument"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return QueuePolicy;
        })(AWS.BaseResource);
        SQS.QueuePolicy = QueuePolicy;        
    })(AWS.SQS || (AWS.SQS = {}));
    var SQS = AWS.SQS;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (RDS) {
        var DBSecurityGroup = (function (_super) {
            __extends(DBSecurityGroup, _super);
            function DBSecurityGroup(name) {
                        _super.call(this, name, "AWS::RDS::DBSecurityGroup");
                this.Properties = {
                };
            }
            DBSecurityGroup.prototype.setEC2VpcId = function (ref) {
                this.Properties["EC2VpcId"] = ref;
                return this;
            };
            DBSecurityGroup.prototype.setGroupDescription = function (gd) {
                this.Properties["GroupDescription"] = gd;
                return this;
            };
            DBSecurityGroup.prototype.setDBSecurityGroupIngress = function (dbsgi) {
                this.Properties["DBSecurityGroupIngress"] = dbsgi;
                return this;
            };
            DBSecurityGroup.prototype.validate = function (errors) {
                var requires = [
                    "GroupDescription", 
                    "DBSecurityGroupIngress"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return DBSecurityGroup;
        })(AWS.BaseResource);
        RDS.DBSecurityGroup = DBSecurityGroup;        
    })(AWS.RDS || (AWS.RDS = {}));
    var RDS = AWS.RDS;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var SecurityGroupIngress = (function (_super) {
            __extends(SecurityGroupIngress, _super);
            function SecurityGroupIngress(name) {
                        _super.call(this, name, "AWS::EC2::SecurityGroupIngress");
                this.Properties = {
                };
            }
            SecurityGroupIngress.prototype.setIpProtocol = function (ip) {
                this.Properties["IpProtocol"] = ip;
                return this;
            };
            SecurityGroupIngress.prototype.setGroupName = function (ref) {
                this.Properties["GroupName"] = ref;
                return this;
            };
            SecurityGroupIngress.prototype.setSourceSecurityGroupName = function (ref) {
                this.Properties["SourceSecurityGroupName"] = ref;
                return this;
            };
            SecurityGroupIngress.prototype.setToPort = function (tp) {
                this.Properties["ToPort"] = tp;
                return this;
            };
            SecurityGroupIngress.prototype.setSourceSecurityGroupId = function (ref) {
                this.Properties["SourceSecurityGroupId"] = ref;
                return this;
            };
            SecurityGroupIngress.prototype.setSourceSecurityGroupOwnerId = function (ssgoi) {
                this.Properties["SourceSecurityGroupOwnerId"] = ssgoi;
                return this;
            };
            SecurityGroupIngress.prototype.setFromPort = function (fp) {
                this.Properties["FromPort"] = fp;
                return this;
            };
            SecurityGroupIngress.prototype.setGroupId = function (ref) {
                this.Properties["GroupId"] = ref;
                return this;
            };
            SecurityGroupIngress.prototype.setCidrIp = function (ci) {
                this.Properties["CidrIp"] = ci;
                return this;
            };
            SecurityGroupIngress.prototype.validate = function (errors) {
                var requires = [
                    "IpProtocol", 
                    "ToPort", 
                    "FromPort"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return SecurityGroupIngress;
        })(AWS.BaseResource);
        EC2.SecurityGroupIngress = SecurityGroupIngress;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var SecurityGroup = (function (_super) {
            __extends(SecurityGroup, _super);
            function SecurityGroup(name) {
                        _super.call(this, name, "AWS::EC2::SecurityGroup");
                this.Properties = {
                };
            }
            SecurityGroup.prototype.setGroupDescription = function (gd) {
                this.Properties["GroupDescription"] = gd;
                return this;
            };
            SecurityGroup.prototype.setSecurityGroupIngress = function (sgi) {
                this.Properties["SecurityGroupIngress"] = sgi;
                return this;
            };
            SecurityGroup.prototype.setVpcId = function (ref) {
                this.Properties["VpcId"] = ref;
                return this;
            };
            SecurityGroup.prototype.setSecurityGroupEgress = function (sge) {
                this.Properties["SecurityGroupEgress"] = sge;
                return this;
            };
            SecurityGroup.prototype.validate = function (errors) {
                return errors;
            };
            return SecurityGroup;
        })(AWS.BaseResource);
        EC2.SecurityGroup = SecurityGroup;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (ElasticBeanstalk) {
        var Application = (function (_super) {
            __extends(Application, _super);
            function Application(name) {
                        _super.call(this, name, "AWS::ElasticBeanstalk::Application");
                this.Properties = {
                };
            }
            Application.prototype.setDescription = function (d) {
                this.Properties["Description"] = d;
                return this;
            };
            Application.prototype.setApplicationVersions = function (av) {
                this.Properties["ApplicationVersions"] = av;
                return this;
            };
            Application.prototype.setConfigurationTemplates = function (ct) {
                this.Properties["ConfigurationTemplates"] = ct;
                return this;
            };
            Application.prototype.validate = function (errors) {
                var requires = [
                    "ApplicationVersions"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return Application;
        })(AWS.BaseResource);
        ElasticBeanstalk.Application = Application;        
    })(AWS.ElasticBeanstalk || (AWS.ElasticBeanstalk = {}));
    var ElasticBeanstalk = AWS.ElasticBeanstalk;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (IAM) {
        var InstanceProfile = (function (_super) {
            __extends(InstanceProfile, _super);
            function InstanceProfile(name) {
                        _super.call(this, name, "AWS::IAM::InstanceProfile");
                this.Properties = {
                };
            }
            InstanceProfile.prototype.setRoles = function (ref) {
                this.Properties["Roles"] = ref;
                return this;
            };
            InstanceProfile.prototype.setPath = function (p) {
                this.Properties["Path"] = p;
                return this;
            };
            InstanceProfile.prototype.validate = function (errors) {
                var requires = [
                    "Roles"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return InstanceProfile;
        })(AWS.BaseResource);
        IAM.InstanceProfile = InstanceProfile;        
    })(AWS.IAM || (AWS.IAM = {}));
    var IAM = AWS.IAM;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var VPNConnection = (function (_super) {
            __extends(VPNConnection, _super);
            function VPNConnection(name) {
                        _super.call(this, name, "AWS::EC2::VPNConnection");
                this.Properties = {
                };
            }
            VPNConnection.prototype.setCustomerGatewayId = function (ref) {
                this.Properties["CustomerGatewayId"] = ref;
                return this;
            };
            VPNConnection.prototype.setVpnGatewayId = function (ref) {
                this.Properties["VpnGatewayId"] = ref;
                return this;
            };
            VPNConnection.prototype.setType = function (t) {
                this.Properties["Type"] = t;
                return this;
            };
            VPNConnection.prototype.validate = function (errors) {
                var requires = [
                    "CustomerGatewayId", 
                    "VpnGatewayId", 
                    "Type"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return VPNConnection;
        })(AWS.BaseResource);
        EC2.VPNConnection = VPNConnection;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (SDB) {
        var Domain = (function (_super) {
            __extends(Domain, _super);
            function Domain(name) {
                        _super.call(this, name, "AWS::SDB::Domain");
                this.Properties = {
                };
            }
            Domain.prototype.validate = function (errors) {
                return errors;
            };
            return Domain;
        })(AWS.BaseResource);
        SDB.Domain = Domain;        
    })(AWS.SDB || (AWS.SDB = {}));
    var SDB = AWS.SDB;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (IAM) {
        var Policy = (function (_super) {
            __extends(Policy, _super);
            function Policy(name) {
                        _super.call(this, name, "AWS::IAM::Policy");
                this.Properties = {
                };
            }
            Policy.prototype.setGroups = function (ref) {
                this.Properties["Groups"] = ref;
                return this;
            };
            Policy.prototype.setUsers = function (ref) {
                this.Properties["Users"] = ref;
                return this;
            };
            Policy.prototype.setPolicyName = function (pn) {
                this.Properties["PolicyName"] = pn;
                return this;
            };
            Policy.prototype.setPolicyDocument = function (jsonObj) {
                this.Properties["PolicyDocument"] = jsonObj;
                return this;
            };
            Policy.prototype.setRoles = function (ref) {
                this.Properties["Roles"] = ref;
                return this;
            };
            Policy.prototype.validate = function (errors) {
                var requires = [
                    "PolicyName", 
                    "PolicyDocument"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return Policy;
        })(AWS.BaseResource);
        IAM.Policy = Policy;        
    })(AWS.IAM || (AWS.IAM = {}));
    var IAM = AWS.IAM;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (SQS) {
        var Queue = (function (_super) {
            __extends(Queue, _super);
            function Queue(name) {
                        _super.call(this, name, "AWS::SQS::Queue");
                this.Properties = {
                };
            }
            Queue.prototype.setVisibilityTimeout = function (vt) {
                this.Properties["VisibilityTimeout"] = vt;
                return this;
            };
            Queue.prototype.validate = function (errors) {
                return errors;
            };
            return Queue;
        })(AWS.BaseResource);
        SQS.Queue = Queue;        
    })(AWS.SQS || (AWS.SQS = {}));
    var SQS = AWS.SQS;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var Volume = (function (_super) {
            __extends(Volume, _super);
            function Volume(name) {
                        _super.call(this, name, "AWS::EC2::Volume");
                this.Properties = {
                };
            }
            Volume.prototype.setTags = function (t) {
                this.Properties["Tags"] = t;
                return this;
            };
            Volume.prototype.setVolumeType = function (vt) {
                this.Properties["VolumeType"] = vt;
                return this;
            };
            Volume.prototype.setIops = function (i) {
                this.Properties["Iops"] = i;
                return this;
            };
            Volume.prototype.setSnapshotId = function (si) {
                this.Properties["SnapshotId"] = si;
                return this;
            };
            Volume.prototype.setAvailabilityZone = function (az) {
                this.Properties["AvailabilityZone"] = az;
                return this;
            };
            Volume.prototype.setSize = function (s) {
                this.Properties["Size"] = s;
                return this;
            };
            Volume.prototype.validate = function (errors) {
                var requires = [
                    "AvailabilityZone"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return Volume;
        })(AWS.BaseResource);
        EC2.Volume = Volume;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var Route = (function (_super) {
            __extends(Route, _super);
            function Route(name) {
                        _super.call(this, name, "AWS::EC2::Route");
                this.Properties = {
                };
            }
            Route.prototype.setGatewayId = function (ref) {
                this.Properties["GatewayId"] = ref;
                return this;
            };
            Route.prototype.setInstanceId = function (ref) {
                this.Properties["InstanceId"] = ref;
                return this;
            };
            Route.prototype.setRouteTableId = function (ref) {
                this.Properties["RouteTableId"] = ref;
                return this;
            };
            Route.prototype.setDestinationCidrBlock = function (dcb) {
                this.Properties["DestinationCidrBlock"] = dcb;
                return this;
            };
            Route.prototype.setNetworkInterfaceId = function (ref) {
                this.Properties["NetworkInterfaceId"] = ref;
                return this;
            };
            Route.prototype.validate = function (errors) {
                var requires = [
                    "RouteTableId", 
                    "DestinationCidrBlock"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return Route;
        })(AWS.BaseResource);
        EC2.Route = Route;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var DHCPOptions = (function (_super) {
            __extends(DHCPOptions, _super);
            function DHCPOptions(name) {
                        _super.call(this, name, "AWS::EC2::DHCPOptions");
                this.Properties = {
                };
            }
            DHCPOptions.prototype.setNetbiosNodeType = function (nnt) {
                this.Properties["NetbiosNodeType"] = nnt;
                return this;
            };
            DHCPOptions.prototype.setTags = function (t) {
                this.Properties["Tags"] = t;
                return this;
            };
            DHCPOptions.prototype.setNtpServers = function (ns) {
                this.Properties["NtpServers"] = ns;
                return this;
            };
            DHCPOptions.prototype.setNetbiosNameServers = function (nns) {
                this.Properties["NetbiosNameServers"] = nns;
                return this;
            };
            DHCPOptions.prototype.setDomainName = function (dn) {
                this.Properties["DomainName"] = dn;
                return this;
            };
            DHCPOptions.prototype.setDomainNameServers = function (dns) {
                this.Properties["DomainNameServers"] = dns;
                return this;
            };
            DHCPOptions.prototype.validate = function (errors) {
                var requires = [
                    "NetbiosNodeType", 
                    "NtpServers", 
                    "NetbiosNameServers", 
                    "DomainName", 
                    "DomainNameServers"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return DHCPOptions;
        })(AWS.BaseResource);
        EC2.DHCPOptions = DHCPOptions;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (CloudFormation) {
        var WaitConditionHandle = (function (_super) {
            __extends(WaitConditionHandle, _super);
            function WaitConditionHandle(name) {
                        _super.call(this, name, "AWS::CloudFormation::WaitConditionHandle");
                this.Properties = {
                };
            }
            WaitConditionHandle.prototype.validate = function (errors) {
                return errors;
            };
            return WaitConditionHandle;
        })(AWS.BaseResource);
        CloudFormation.WaitConditionHandle = WaitConditionHandle;        
    })(AWS.CloudFormation || (AWS.CloudFormation = {}));
    var CloudFormation = AWS.CloudFormation;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (ElastiCache) {
        var SecurityGroup = (function (_super) {
            __extends(SecurityGroup, _super);
            function SecurityGroup(name) {
                        _super.call(this, name, "AWS::ElastiCache::SecurityGroup");
                this.Properties = {
                };
            }
            SecurityGroup.prototype.setDescription = function (d) {
                this.Properties["Description"] = d;
                return this;
            };
            SecurityGroup.prototype.validate = function (errors) {
                var requires = [
                    "Description"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return SecurityGroup;
        })(AWS.BaseResource);
        ElastiCache.SecurityGroup = SecurityGroup;        
    })(AWS.ElastiCache || (AWS.ElastiCache = {}));
    var ElastiCache = AWS.ElastiCache;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (AutoScaling) {
        var ScalingPolicy = (function (_super) {
            __extends(ScalingPolicy, _super);
            function ScalingPolicy(name) {
                        _super.call(this, name, "AWS::AutoScaling::ScalingPolicy");
                this.Properties = {
                };
            }
            ScalingPolicy.prototype.setAutoScalingGroupName = function (ref) {
                this.Properties["AutoScalingGroupName"] = ref;
                return this;
            };
            ScalingPolicy.prototype.setScalingAdjustment = function (sa) {
                this.Properties["ScalingAdjustment"] = sa;
                return this;
            };
            ScalingPolicy.prototype.setAdjustmentType = function (at) {
                this.Properties["AdjustmentType"] = at;
                return this;
            };
            ScalingPolicy.prototype.setCooldown = function (c) {
                this.Properties["Cooldown"] = c;
                return this;
            };
            ScalingPolicy.prototype.validate = function (errors) {
                var requires = [
                    "AutoScalingGroupName", 
                    "ScalingAdjustment", 
                    "AdjustmentType"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return ScalingPolicy;
        })(AWS.BaseResource);
        AutoScaling.ScalingPolicy = ScalingPolicy;        
    })(AWS.AutoScaling || (AWS.AutoScaling = {}));
    var AutoScaling = AWS.AutoScaling;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (IAM) {
        var UserToGroupAddition = (function (_super) {
            __extends(UserToGroupAddition, _super);
            function UserToGroupAddition(name) {
                        _super.call(this, name, "AWS::IAM::UserToGroupAddition");
                this.Properties = {
                };
            }
            UserToGroupAddition.prototype.setUsers = function (ref) {
                this.Properties["Users"] = ref;
                return this;
            };
            UserToGroupAddition.prototype.setGroupName = function (ref) {
                this.Properties["GroupName"] = ref;
                return this;
            };
            UserToGroupAddition.prototype.validate = function (errors) {
                var requires = [
                    "Users", 
                    "GroupName"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return UserToGroupAddition;
        })(AWS.BaseResource);
        IAM.UserToGroupAddition = UserToGroupAddition;        
    })(AWS.IAM || (AWS.IAM = {}));
    var IAM = AWS.IAM;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (S3) {
        var Bucket = (function (_super) {
            __extends(Bucket, _super);
            function Bucket(name) {
                        _super.call(this, name, "AWS::S3::Bucket");
                this.Properties = {
                };
            }
            Bucket.prototype.setAccessControl = function (ac) {
                this.Properties["AccessControl"] = ac;
                return this;
            };
            Bucket.prototype.setWebsiteConfiguration = function (wc) {
                this.Properties["WebsiteConfiguration"] = wc;
                return this;
            };
            Bucket.prototype.validate = function (errors) {
                return errors;
            };
            return Bucket;
        })(AWS.BaseResource);
        S3.Bucket = Bucket;        
    })(AWS.S3 || (AWS.S3 = {}));
    var S3 = AWS.S3;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var InternetGateway = (function (_super) {
            __extends(InternetGateway, _super);
            function InternetGateway(name) {
                        _super.call(this, name, "AWS::EC2::InternetGateway");
                this.Properties = {
                };
            }
            InternetGateway.prototype.setTags = function (t) {
                this.Properties["Tags"] = t;
                return this;
            };
            InternetGateway.prototype.validate = function (errors) {
                return errors;
            };
            return InternetGateway;
        })(AWS.BaseResource);
        EC2.InternetGateway = InternetGateway;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var Subnet = (function (_super) {
            __extends(Subnet, _super);
            function Subnet(name) {
                        _super.call(this, name, "AWS::EC2::Subnet");
                this.Properties = {
                };
            }
            Subnet.prototype.setCidrBlock = function (cb) {
                this.Properties["CidrBlock"] = cb;
                return this;
            };
            Subnet.prototype.setTags = function (t) {
                this.Properties["Tags"] = t;
                return this;
            };
            Subnet.prototype.setAvailabilityZone = function (az) {
                this.Properties["AvailabilityZone"] = az;
                return this;
            };
            Subnet.prototype.setVpcId = function (ref) {
                this.Properties["VpcId"] = ref;
                return this;
            };
            Subnet.prototype.validate = function (errors) {
                var requires = [
                    "CidrBlock", 
                    "VpcId"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return Subnet;
        })(AWS.BaseResource);
        EC2.Subnet = Subnet;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var VPNGateway = (function (_super) {
            __extends(VPNGateway, _super);
            function VPNGateway(name) {
                        _super.call(this, name, "AWS::EC2::VPNGateway");
                this.Properties = {
                };
            }
            VPNGateway.prototype.setTags = function (t) {
                this.Properties["Tags"] = t;
                return this;
            };
            VPNGateway.prototype.setType = function (t) {
                this.Properties["Type"] = t;
                return this;
            };
            VPNGateway.prototype.validate = function (errors) {
                var requires = [
                    "Type"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return VPNGateway;
        })(AWS.BaseResource);
        EC2.VPNGateway = VPNGateway;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (AutoScaling) {
        var LaunchConfiguration = (function (_super) {
            __extends(LaunchConfiguration, _super);
            function LaunchConfiguration(name) {
                        _super.call(this, name, "AWS::AutoScaling::LaunchConfiguration");
                this.Properties = {
                };
            }
            LaunchConfiguration.prototype.setIamInstanceProfile = function (ref) {
                this.Properties["IamInstanceProfile"] = ref;
                return this;
            };
            LaunchConfiguration.prototype.setImageId = function (ii) {
                this.Properties["ImageId"] = ii;
                return this;
            };
            LaunchConfiguration.prototype.setInstanceMonitoring = function (im) {
                this.Properties["InstanceMonitoring"] = im;
                return this;
            };
            LaunchConfiguration.prototype.setKernelId = function (ki) {
                this.Properties["KernelId"] = ki;
                return this;
            };
            LaunchConfiguration.prototype.setRamdiskId = function (ri) {
                this.Properties["RamdiskId"] = ri;
                return this;
            };
            LaunchConfiguration.prototype.setSecurityGroups = function (ref) {
                this.Properties["SecurityGroups"] = ref;
                return this;
            };
            LaunchConfiguration.prototype.setUserData = function (ud) {
                this.Properties["UserData"] = ud;
                return this;
            };
            LaunchConfiguration.prototype.setBlockDeviceMappings = function (bdm) {
                this.Properties["BlockDeviceMappings"] = bdm;
                return this;
            };
            LaunchConfiguration.prototype.setInstanceType = function (it) {
                this.Properties["InstanceType"] = it;
                return this;
            };
            LaunchConfiguration.prototype.setKeyName = function (kn) {
                this.Properties["KeyName"] = kn;
                return this;
            };
            LaunchConfiguration.prototype.setSpotPrice = function (sp) {
                this.Properties["SpotPrice"] = sp;
                return this;
            };
            LaunchConfiguration.prototype.validate = function (errors) {
                var requires = [
                    "ImageId", 
                    "InstanceType"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return LaunchConfiguration;
        })(AWS.BaseResource);
        AutoScaling.LaunchConfiguration = LaunchConfiguration;        
    })(AWS.AutoScaling || (AWS.AutoScaling = {}));
    var AutoScaling = AWS.AutoScaling;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var NetworkInterface = (function (_super) {
            __extends(NetworkInterface, _super);
            function NetworkInterface(name) {
                        _super.call(this, name, "AWS::EC2::NetworkInterface");
                this.Properties = {
                };
            }
            NetworkInterface.prototype.setTags = function (t) {
                this.Properties["Tags"] = t;
                return this;
            };
            NetworkInterface.prototype.setDescription = function (d) {
                this.Properties["Description"] = d;
                return this;
            };
            NetworkInterface.prototype.setSourceDestCheck = function (sdc) {
                this.Properties["SourceDestCheck"] = sdc;
                return this;
            };
            NetworkInterface.prototype.setGroupSet = function (ref) {
                this.Properties["GroupSet"] = ref;
                return this;
            };
            NetworkInterface.prototype.setSubnetId = function (ref) {
                this.Properties["SubnetId"] = ref;
                return this;
            };
            NetworkInterface.prototype.setPrivateIpAddress = function (pia) {
                this.Properties["PrivateIpAddress"] = pia;
                return this;
            };
            NetworkInterface.prototype.validate = function (errors) {
                var requires = [
                    "SubnetId"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return NetworkInterface;
        })(AWS.BaseResource);
        EC2.NetworkInterface = NetworkInterface;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var NetworkAcl = (function (_super) {
            __extends(NetworkAcl, _super);
            function NetworkAcl(name) {
                        _super.call(this, name, "AWS::EC2::NetworkAcl");
                this.Properties = {
                };
            }
            NetworkAcl.prototype.setTags = function (t) {
                this.Properties["Tags"] = t;
                return this;
            };
            NetworkAcl.prototype.setVpcId = function (ref) {
                this.Properties["VpcId"] = ref;
                return this;
            };
            NetworkAcl.prototype.validate = function (errors) {
                var requires = [
                    "VpcId"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return NetworkAcl;
        })(AWS.BaseResource);
        EC2.NetworkAcl = NetworkAcl;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (CloudFormation) {
        var Stack = (function (_super) {
            __extends(Stack, _super);
            function Stack(name) {
                        _super.call(this, name, "AWS::CloudFormation::Stack");
                this.Properties = {
                };
            }
            Stack.prototype.setParameters = function (jsonObj) {
                this.Properties["Parameters"] = jsonObj;
                return this;
            };
            Stack.prototype.setTimeoutInMinutes = function (tim) {
                this.Properties["TimeoutInMinutes"] = tim;
                return this;
            };
            Stack.prototype.setTemplateURL = function (turl) {
                this.Properties["TemplateURL"] = turl;
                return this;
            };
            Stack.prototype.validate = function (errors) {
                var requires = [
                    "TemplateURL"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return Stack;
        })(AWS.BaseResource);
        CloudFormation.Stack = Stack;        
    })(AWS.CloudFormation || (AWS.CloudFormation = {}));
    var CloudFormation = AWS.CloudFormation;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var SubnetRouteTableAssociation = (function (_super) {
            __extends(SubnetRouteTableAssociation, _super);
            function SubnetRouteTableAssociation(name) {
                        _super.call(this, name, "AWS::EC2::SubnetRouteTableAssociation");
                this.Properties = {
                };
            }
            SubnetRouteTableAssociation.prototype.setSubnetId = function (ref) {
                this.Properties["SubnetId"] = ref;
                return this;
            };
            SubnetRouteTableAssociation.prototype.setRouteTableId = function (ref) {
                this.Properties["RouteTableId"] = ref;
                return this;
            };
            SubnetRouteTableAssociation.prototype.validate = function (errors) {
                var requires = [
                    "SubnetId", 
                    "RouteTableId"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return SubnetRouteTableAssociation;
        })(AWS.BaseResource);
        EC2.SubnetRouteTableAssociation = SubnetRouteTableAssociation;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (RDS) {
        var DBSubnetGroup = (function (_super) {
            __extends(DBSubnetGroup, _super);
            function DBSubnetGroup(name) {
                        _super.call(this, name, "AWS::RDS::DBSubnetGroup");
                this.Properties = {
                };
            }
            DBSubnetGroup.prototype.setDBSubnetGroupDescription = function (dbsgd) {
                this.Properties["DBSubnetGroupDescription"] = dbsgd;
                return this;
            };
            DBSubnetGroup.prototype.setSubnetIds = function (ref) {
                this.Properties["SubnetIds"] = ref;
                return this;
            };
            DBSubnetGroup.prototype.validate = function (errors) {
                var requires = [
                    "DBSubnetGroupDescription", 
                    "SubnetIds"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return DBSubnetGroup;
        })(AWS.BaseResource);
        RDS.DBSubnetGroup = DBSubnetGroup;        
    })(AWS.RDS || (AWS.RDS = {}));
    var RDS = AWS.RDS;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (IAM) {
        var Group = (function (_super) {
            __extends(Group, _super);
            function Group(name) {
                        _super.call(this, name, "AWS::IAM::Group");
                this.Properties = {
                };
            }
            Group.prototype.setPolicies = function (ref) {
                this.Properties["Policies"] = ref;
                return this;
            };
            Group.prototype.setPath = function (p) {
                this.Properties["Path"] = p;
                return this;
            };
            Group.prototype.validate = function (errors) {
                return errors;
            };
            return Group;
        })(AWS.BaseResource);
        IAM.Group = Group;        
    })(AWS.IAM || (AWS.IAM = {}));
    var IAM = AWS.IAM;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (Route53) {
        var RecordSetGroup = (function (_super) {
            __extends(RecordSetGroup, _super);
            function RecordSetGroup(name) {
                        _super.call(this, name, "AWS::Route53::RecordSetGroup");
                this.Properties = {
                };
            }
            RecordSetGroup.prototype.setRecordSets = function (rs) {
                this.Properties["RecordSets"] = rs;
                return this;
            };
            RecordSetGroup.prototype.setHostedZoneName = function (hzn) {
                this.Properties["HostedZoneName"] = hzn;
                return this;
            };
            RecordSetGroup.prototype.setHostedZoneId = function (hzi) {
                this.Properties["HostedZoneId"] = hzi;
                return this;
            };
            RecordSetGroup.prototype.setComment = function (c) {
                this.Properties["Comment"] = c;
                return this;
            };
            RecordSetGroup.prototype.validate = function (errors) {
                var requires = [
                    "RecordSets"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return RecordSetGroup;
        })(AWS.BaseResource);
        Route53.RecordSetGroup = RecordSetGroup;        
    })(AWS.Route53 || (AWS.Route53 = {}));
    var Route53 = AWS.Route53;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (ElasticLoadBalancing) {
        var LoadBalancer = (function (_super) {
            __extends(LoadBalancer, _super);
            function LoadBalancer(name) {
                        _super.call(this, name, "AWS::ElasticLoadBalancing::LoadBalancer");
                this.Properties = {
                };
            }
            LoadBalancer.prototype.setPolicies = function (p) {
                this.Properties["Policies"] = p;
                return this;
            };
            LoadBalancer.prototype.setScheme = function (s) {
                this.Properties["Scheme"] = s;
                return this;
            };
            LoadBalancer.prototype.setAvailabilityZones = function (az) {
                this.Properties["AvailabilityZones"] = az;
                return this;
            };
            LoadBalancer.prototype.setListeners = function (l) {
                this.Properties["Listeners"] = l;
                return this;
            };
            LoadBalancer.prototype.setInstances = function (ref) {
                this.Properties["Instances"] = ref;
                return this;
            };
            LoadBalancer.prototype.setSubnets = function (ref) {
                this.Properties["Subnets"] = ref;
                return this;
            };
            LoadBalancer.prototype.setHealthCheck = function (hc) {
                this.Properties["HealthCheck"] = hc;
                return this;
            };
            LoadBalancer.prototype.setSecurityGroups = function (ref) {
                this.Properties["SecurityGroups"] = ref;
                return this;
            };
            LoadBalancer.prototype.setLBCookieStickinessPolicy = function (lbcsp) {
                this.Properties["LBCookieStickinessPolicy"] = lbcsp;
                return this;
            };
            LoadBalancer.prototype.setAppCookieStickinessPolicy = function (acsp) {
                this.Properties["AppCookieStickinessPolicy"] = acsp;
                return this;
            };
            LoadBalancer.prototype.validate = function (errors) {
                var requires = [
                    "Listeners"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return LoadBalancer;
        })(AWS.BaseResource);
        ElasticLoadBalancing.LoadBalancer = LoadBalancer;        
    })(AWS.ElasticLoadBalancing || (AWS.ElasticLoadBalancing = {}));
    var ElasticLoadBalancing = AWS.ElasticLoadBalancing;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (IAM) {
        var Role = (function (_super) {
            __extends(Role, _super);
            function Role(name) {
                        _super.call(this, name, "AWS::IAM::Role");
                this.Properties = {
                };
            }
            Role.prototype.setPolicies = function (ref) {
                this.Properties["Policies"] = ref;
                return this;
            };
            Role.prototype.setAssumeRolePolicyDocument = function (jsonObj) {
                this.Properties["AssumeRolePolicyDocument"] = jsonObj;
                return this;
            };
            Role.prototype.setPath = function (p) {
                this.Properties["Path"] = p;
                return this;
            };
            Role.prototype.validate = function (errors) {
                var requires = [
                    "AssumeRolePolicyDocument"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return Role;
        })(AWS.BaseResource);
        IAM.Role = Role;        
    })(AWS.IAM || (AWS.IAM = {}));
    var IAM = AWS.IAM;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var VPCGatewayAttachment = (function (_super) {
            __extends(VPCGatewayAttachment, _super);
            function VPCGatewayAttachment(name) {
                        _super.call(this, name, "AWS::EC2::VPCGatewayAttachment");
                this.Properties = {
                };
            }
            VPCGatewayAttachment.prototype.setInternetGatewayId = function (ref) {
                this.Properties["InternetGatewayId"] = ref;
                return this;
            };
            VPCGatewayAttachment.prototype.setVpnGatewayId = function (ref) {
                this.Properties["VpnGatewayId"] = ref;
                return this;
            };
            VPCGatewayAttachment.prototype.setVpcId = function (ref) {
                this.Properties["VpcId"] = ref;
                return this;
            };
            VPCGatewayAttachment.prototype.validate = function (errors) {
                var requires = [
                    "InternetGatewayId", 
                    "VpnGatewayId", 
                    "VpcId"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return VPCGatewayAttachment;
        })(AWS.BaseResource);
        EC2.VPCGatewayAttachment = VPCGatewayAttachment;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var CustomerGateway = (function (_super) {
            __extends(CustomerGateway, _super);
            function CustomerGateway(name) {
                        _super.call(this, name, "AWS::EC2::CustomerGateway");
                this.Properties = {
                };
            }
            CustomerGateway.prototype.setBgpAsn = function (ba) {
                this.Properties["BgpAsn"] = ba;
                return this;
            };
            CustomerGateway.prototype.setType = function (t) {
                this.Properties["Type"] = t;
                return this;
            };
            CustomerGateway.prototype.setIpAddress = function (ia) {
                this.Properties["IpAddress"] = ia;
                return this;
            };
            CustomerGateway.prototype.validate = function (errors) {
                var requires = [
                    "BgpAsn", 
                    "Type", 
                    "IpAddress"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return CustomerGateway;
        })(AWS.BaseResource);
        EC2.CustomerGateway = CustomerGateway;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var SecurityGroupEgress = (function (_super) {
            __extends(SecurityGroupEgress, _super);
            function SecurityGroupEgress(name) {
                        _super.call(this, name, "AWS::EC2::SecurityGroupEgress");
                this.Properties = {
                };
            }
            SecurityGroupEgress.prototype.setIpProtocol = function (ip) {
                this.Properties["IpProtocol"] = ip;
                return this;
            };
            SecurityGroupEgress.prototype.setToPort = function (tp) {
                this.Properties["ToPort"] = tp;
                return this;
            };
            SecurityGroupEgress.prototype.setFromPort = function (fp) {
                this.Properties["FromPort"] = fp;
                return this;
            };
            SecurityGroupEgress.prototype.setDestinationSecurityGroupId = function (ref) {
                this.Properties["DestinationSecurityGroupId"] = ref;
                return this;
            };
            SecurityGroupEgress.prototype.setGroupId = function (ref) {
                this.Properties["GroupId"] = ref;
                return this;
            };
            SecurityGroupEgress.prototype.setCidrIp = function (ci) {
                this.Properties["CidrIp"] = ci;
                return this;
            };
            SecurityGroupEgress.prototype.validate = function (errors) {
                var requires = [
                    "IpProtocol", 
                    "ToPort", 
                    "FromPort", 
                    "GroupId"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return SecurityGroupEgress;
        })(AWS.BaseResource);
        EC2.SecurityGroupEgress = SecurityGroupEgress;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (ElastiCache) {
        var CacheCluster = (function (_super) {
            __extends(CacheCluster, _super);
            function CacheCluster(name) {
                        _super.call(this, name, "AWS::ElastiCache::CacheCluster");
                this.Properties = {
                };
            }
            CacheCluster.prototype.setPreferredAvailabilityZone = function (paz) {
                this.Properties["PreferredAvailabilityZone"] = paz;
                return this;
            };
            CacheCluster.prototype.setCacheSecurityGroupNames = function (ref) {
                this.Properties["CacheSecurityGroupNames"] = ref;
                return this;
            };
            CacheCluster.prototype.setPort = function (p) {
                this.Properties["Port"] = p;
                return this;
            };
            CacheCluster.prototype.setCacheParameterGroupName = function (ref) {
                this.Properties["CacheParameterGroupName"] = ref;
                return this;
            };
            CacheCluster.prototype.setCacheNodeType = function (cnt) {
                this.Properties["CacheNodeType"] = cnt;
                return this;
            };
            CacheCluster.prototype.setAutoMinorVersionUpgrade = function (amvu) {
                this.Properties["AutoMinorVersionUpgrade"] = amvu;
                return this;
            };
            CacheCluster.prototype.setNumCacheNodes = function (ncn) {
                this.Properties["NumCacheNodes"] = ncn;
                return this;
            };
            CacheCluster.prototype.setPreferredMaintenanceWindow = function (pmw) {
                this.Properties["PreferredMaintenanceWindow"] = pmw;
                return this;
            };
            CacheCluster.prototype.setEngineVersion = function (ev) {
                this.Properties["EngineVersion"] = ev;
                return this;
            };
            CacheCluster.prototype.setEngine = function (e) {
                this.Properties["Engine"] = e;
                return this;
            };
            CacheCluster.prototype.setNotificationTopicArn = function (ref) {
                this.Properties["NotificationTopicArn"] = ref;
                return this;
            };
            CacheCluster.prototype.validate = function (errors) {
                var requires = [
                    "CacheSecurityGroupNames", 
                    "CacheNodeType", 
                    "Engine"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return CacheCluster;
        })(AWS.BaseResource);
        ElastiCache.CacheCluster = CacheCluster;        
    })(AWS.ElastiCache || (AWS.ElastiCache = {}));
    var ElastiCache = AWS.ElastiCache;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (CloudFormation) {
        var WaitCondition = (function (_super) {
            __extends(WaitCondition, _super);
            function WaitCondition(name) {
                        _super.call(this, name, "AWS::CloudFormation::WaitCondition");
                this.Properties = {
                };
            }
            WaitCondition.prototype.setHandle = function (ref) {
                this.Properties["Handle"] = ref;
                return this;
            };
            WaitCondition.prototype.setTimeout = function (t) {
                this.Properties["Timeout"] = t;
                return this;
            };
            WaitCondition.prototype.setCount = function (c) {
                this.Properties["Count"] = c;
                return this;
            };
            WaitCondition.prototype.validate = function (errors) {
                var requires = [
                    "Handle", 
                    "Timeout", 
                    "Count"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return WaitCondition;
        })(AWS.BaseResource);
        CloudFormation.WaitCondition = WaitCondition;        
    })(AWS.CloudFormation || (AWS.CloudFormation = {}));
    var CloudFormation = AWS.CloudFormation;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (CloudWatch) {
        var Alarm = (function (_super) {
            __extends(Alarm, _super);
            function Alarm(name) {
                        _super.call(this, name, "AWS::CloudWatch::Alarm");
                this.Properties = {
                };
            }
            Alarm.prototype.setAlarmActions = function (ref) {
                this.Properties["AlarmActions"] = ref;
                return this;
            };
            Alarm.prototype.setPeriod = function (p) {
                this.Properties["Period"] = p;
                return this;
            };
            Alarm.prototype.setStatistic = function (s) {
                this.Properties["Statistic"] = s;
                return this;
            };
            Alarm.prototype.setMetricName = function (mn) {
                this.Properties["MetricName"] = mn;
                return this;
            };
            Alarm.prototype.setThreshold = function (t) {
                this.Properties["Threshold"] = t;
                return this;
            };
            Alarm.prototype.setActionsEnabled = function (ae) {
                this.Properties["ActionsEnabled"] = ae;
                return this;
            };
            Alarm.prototype.setEvaluationPeriods = function (ep) {
                this.Properties["EvaluationPeriods"] = ep;
                return this;
            };
            Alarm.prototype.setDimensions = function (d) {
                this.Properties["Dimensions"] = d;
                return this;
            };
            Alarm.prototype.setAlarmDescription = function (ad) {
                this.Properties["AlarmDescription"] = ad;
                return this;
            };
            Alarm.prototype.setNamespace = function (n) {
                this.Properties["Namespace"] = n;
                return this;
            };
            Alarm.prototype.setOKActions = function (ref) {
                this.Properties["OKActions"] = ref;
                return this;
            };
            Alarm.prototype.setInsufficientDataActions = function (ref) {
                this.Properties["InsufficientDataActions"] = ref;
                return this;
            };
            Alarm.prototype.setComparisonOperator = function (co) {
                this.Properties["ComparisonOperator"] = co;
                return this;
            };
            Alarm.prototype.setUnit = function (u) {
                this.Properties["Unit"] = u;
                return this;
            };
            Alarm.prototype.validate = function (errors) {
                var requires = [
                    "Period", 
                    "Statistic", 
                    "MetricName", 
                    "Threshold", 
                    "EvaluationPeriods", 
                    "Namespace", 
                    "ComparisonOperator"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return Alarm;
        })(AWS.BaseResource);
        CloudWatch.Alarm = Alarm;        
    })(AWS.CloudWatch || (AWS.CloudWatch = {}));
    var CloudWatch = AWS.CloudWatch;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var VPCDHCPOptionsAssociation = (function (_super) {
            __extends(VPCDHCPOptionsAssociation, _super);
            function VPCDHCPOptionsAssociation(name) {
                        _super.call(this, name, "AWS::EC2::VPCDHCPOptionsAssociation");
                this.Properties = {
                };
            }
            VPCDHCPOptionsAssociation.prototype.setDhcpOptionsId = function (ref) {
                this.Properties["DhcpOptionsId"] = ref;
                return this;
            };
            VPCDHCPOptionsAssociation.prototype.setVpcId = function (ref) {
                this.Properties["VpcId"] = ref;
                return this;
            };
            VPCDHCPOptionsAssociation.prototype.validate = function (errors) {
                var requires = [
                    "DhcpOptionsId", 
                    "VpcId"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return VPCDHCPOptionsAssociation;
        })(AWS.BaseResource);
        EC2.VPCDHCPOptionsAssociation = VPCDHCPOptionsAssociation;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var VolumeAttachment = (function (_super) {
            __extends(VolumeAttachment, _super);
            function VolumeAttachment(name) {
                        _super.call(this, name, "AWS::EC2::VolumeAttachment");
                this.Properties = {
                };
            }
            VolumeAttachment.prototype.setDevice = function (d) {
                this.Properties["Device"] = d;
                return this;
            };
            VolumeAttachment.prototype.setVolumeId = function (ref) {
                this.Properties["VolumeId"] = ref;
                return this;
            };
            VolumeAttachment.prototype.setInstanceId = function (ref) {
                this.Properties["InstanceId"] = ref;
                return this;
            };
            VolumeAttachment.prototype.validate = function (errors) {
                var requires = [
                    "Device", 
                    "VolumeId", 
                    "InstanceId"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return VolumeAttachment;
        })(AWS.BaseResource);
        EC2.VolumeAttachment = VolumeAttachment;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (DynamoDB) {
        var Table = (function (_super) {
            __extends(Table, _super);
            function Table(name) {
                        _super.call(this, name, "AWS::DynamoDB::Table");
                this.Properties = {
                };
            }
            Table.prototype.setProvisionedThroughput = function (pt) {
                this.Properties["ProvisionedThroughput"] = pt;
                return this;
            };
            Table.prototype.setKeySchema = function (ks) {
                this.Properties["KeySchema"] = ks;
                return this;
            };
            Table.prototype.validate = function (errors) {
                var requires = [
                    "ProvisionedThroughput", 
                    "KeySchema"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return Table;
        })(AWS.BaseResource);
        DynamoDB.Table = Table;        
    })(AWS.DynamoDB || (AWS.DynamoDB = {}));
    var DynamoDB = AWS.DynamoDB;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (ElastiCache) {
        var ParameterGroup = (function (_super) {
            __extends(ParameterGroup, _super);
            function ParameterGroup(name) {
                        _super.call(this, name, "AWS::ElastiCache::ParameterGroup");
                this.Properties = {
                };
            }
            ParameterGroup.prototype.setDescription = function (d) {
                this.Properties["Description"] = d;
                return this;
            };
            ParameterGroup.prototype.setCacheParameterGroupFamily = function (cpgf) {
                this.Properties["CacheParameterGroupFamily"] = cpgf;
                return this;
            };
            ParameterGroup.prototype.setProperties = function (p) {
                this.Properties["Properties"] = p;
                return this;
            };
            ParameterGroup.prototype.validate = function (errors) {
                var requires = [
                    "Description", 
                    "CacheParameterGroupFamily"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return ParameterGroup;
        })(AWS.BaseResource);
        ElastiCache.ParameterGroup = ParameterGroup;        
    })(AWS.ElastiCache || (AWS.ElastiCache = {}));
    var ElastiCache = AWS.ElastiCache;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (IAM) {
        var AccessKey = (function (_super) {
            __extends(AccessKey, _super);
            function AccessKey(name) {
                        _super.call(this, name, "AWS::IAM::AccessKey");
                this.Properties = {
                };
            }
            AccessKey.prototype.setStatus = function (s) {
                this.Properties["Status"] = s;
                return this;
            };
            AccessKey.prototype.setSerial = function (s) {
                this.Properties["Serial"] = s;
                return this;
            };
            AccessKey.prototype.setUserName = function (ref) {
                this.Properties["UserName"] = ref;
                return this;
            };
            AccessKey.prototype.validate = function (errors) {
                var requires = [
                    "Status", 
                    "UserName"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return AccessKey;
        })(AWS.BaseResource);
        IAM.AccessKey = AccessKey;        
    })(AWS.IAM || (AWS.IAM = {}));
    var IAM = AWS.IAM;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var EIPAssociation = (function (_super) {
            __extends(EIPAssociation, _super);
            function EIPAssociation(name) {
                        _super.call(this, name, "AWS::EC2::EIPAssociation");
                this.Properties = {
                };
            }
            EIPAssociation.prototype.setEIP = function (ref) {
                this.Properties["EIP"] = ref;
                return this;
            };
            EIPAssociation.prototype.setInstanceId = function (ref) {
                this.Properties["InstanceId"] = ref;
                return this;
            };
            EIPAssociation.prototype.setAllocationId = function (ai) {
                this.Properties["AllocationId"] = ai;
                return this;
            };
            EIPAssociation.prototype.setNetworkInterfaceId = function (nii) {
                this.Properties["NetworkInterfaceId"] = nii;
                return this;
            };
            EIPAssociation.prototype.validate = function (errors) {
                return errors;
            };
            return EIPAssociation;
        })(AWS.BaseResource);
        EC2.EIPAssociation = EIPAssociation;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (AutoScaling) {
        var Trigger = (function (_super) {
            __extends(Trigger, _super);
            function Trigger(name) {
                        _super.call(this, name, "AWS::AutoScaling::Trigger");
                this.Properties = {
                };
            }
            Trigger.prototype.setLowerBreachScaleIncrement = function (lbsi) {
                this.Properties["LowerBreachScaleIncrement"] = lbsi;
                return this;
            };
            Trigger.prototype.setPeriod = function (p) {
                this.Properties["Period"] = p;
                return this;
            };
            Trigger.prototype.setAutoScalingGroupName = function (ref) {
                this.Properties["AutoScalingGroupName"] = ref;
                return this;
            };
            Trigger.prototype.setStatistic = function (s) {
                this.Properties["Statistic"] = s;
                return this;
            };
            Trigger.prototype.setMetricName = function (mn) {
                this.Properties["MetricName"] = mn;
                return this;
            };
            Trigger.prototype.setUpperBreachScaleIncrement = function (ubsi) {
                this.Properties["UpperBreachScaleIncrement"] = ubsi;
                return this;
            };
            Trigger.prototype.setLowerThreshold = function (lt) {
                this.Properties["LowerThreshold"] = lt;
                return this;
            };
            Trigger.prototype.setDimensions = function (d) {
                this.Properties["Dimensions"] = d;
                return this;
            };
            Trigger.prototype.setBreachDuration = function (bd) {
                this.Properties["BreachDuration"] = bd;
                return this;
            };
            Trigger.prototype.setNamespace = function (n) {
                this.Properties["Namespace"] = n;
                return this;
            };
            Trigger.prototype.setUpperThreshold = function (ut) {
                this.Properties["UpperThreshold"] = ut;
                return this;
            };
            Trigger.prototype.setUnit = function (u) {
                this.Properties["Unit"] = u;
                return this;
            };
            Trigger.prototype.validate = function (errors) {
                var requires = [
                    "AutoScalingGroupName", 
                    "MetricName", 
                    "LowerThreshold", 
                    "Dimensions", 
                    "BreachDuration"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return Trigger;
        })(AWS.BaseResource);
        AutoScaling.Trigger = Trigger;        
    })(AWS.AutoScaling || (AWS.AutoScaling = {}));
    var AutoScaling = AWS.AutoScaling;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (RDS) {
        var DBParameterGroup = (function (_super) {
            __extends(DBParameterGroup, _super);
            function DBParameterGroup(name) {
                        _super.call(this, name, "AWS::RDS::DBParameterGroup");
                this.Properties = {
                };
            }
            DBParameterGroup.prototype.setParameters = function (jsonObj) {
                this.Properties["Parameters"] = jsonObj;
                return this;
            };
            DBParameterGroup.prototype.setDescription = function (d) {
                this.Properties["Description"] = d;
                return this;
            };
            DBParameterGroup.prototype.setFamily = function (f) {
                this.Properties["Family"] = f;
                return this;
            };
            DBParameterGroup.prototype.validate = function (errors) {
                var requires = [
                    "Parameters", 
                    "Description", 
                    "Family"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return DBParameterGroup;
        })(AWS.BaseResource);
        RDS.DBParameterGroup = DBParameterGroup;        
    })(AWS.RDS || (AWS.RDS = {}));
    var RDS = AWS.RDS;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (ElastiCache) {
        var SecurityGroupIngress = (function (_super) {
            __extends(SecurityGroupIngress, _super);
            function SecurityGroupIngress(name) {
                        _super.call(this, name, "AWS::ElastiCache::SecurityGroupIngress");
                this.Properties = {
                };
            }
            SecurityGroupIngress.prototype.setCacheSecurityGroupName = function (ref) {
                this.Properties["CacheSecurityGroupName"] = ref;
                return this;
            };
            SecurityGroupIngress.prototype.setEC2SecurityGroupName = function (ref) {
                this.Properties["EC2SecurityGroupName"] = ref;
                return this;
            };
            SecurityGroupIngress.prototype.setEC2SecurityGroupOwnerId = function (ecsgoi) {
                this.Properties["EC2SecurityGroupOwnerId"] = ecsgoi;
                return this;
            };
            SecurityGroupIngress.prototype.validate = function (errors) {
                var requires = [
                    "CacheSecurityGroupName", 
                    "EC2SecurityGroupName", 
                    "EC2SecurityGroupOwnerId"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return SecurityGroupIngress;
        })(AWS.BaseResource);
        ElastiCache.SecurityGroupIngress = SecurityGroupIngress;        
    })(AWS.ElastiCache || (AWS.ElastiCache = {}));
    var ElastiCache = AWS.ElastiCache;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (ElasticBeanstalk) {
        var Environment = (function (_super) {
            __extends(Environment, _super);
            function Environment(name) {
                        _super.call(this, name, "AWS::ElasticBeanstalk::Environment");
                this.Properties = {
                };
            }
            Environment.prototype.setApplicationName = function (ref) {
                this.Properties["ApplicationName"] = ref;
                return this;
            };
            Environment.prototype.setCNAMEPrefix = function (cnamep) {
                this.Properties["CNAMEPrefix"] = cnamep;
                return this;
            };
            Environment.prototype.setTemplateName = function (tn) {
                this.Properties["TemplateName"] = tn;
                return this;
            };
            Environment.prototype.setDescription = function (d) {
                this.Properties["Description"] = d;
                return this;
            };
            Environment.prototype.setVersionLabel = function (vl) {
                this.Properties["VersionLabel"] = vl;
                return this;
            };
            Environment.prototype.setOptionsToRemove = function (otr) {
                this.Properties["OptionsToRemove"] = otr;
                return this;
            };
            Environment.prototype.setSolutionStackName = function (ssn) {
                this.Properties["SolutionStackName"] = ssn;
                return this;
            };
            Environment.prototype.setOptionSettings = function (os) {
                this.Properties["OptionSettings"] = os;
                return this;
            };
            Environment.prototype.validate = function (errors) {
                var requires = [
                    "ApplicationName"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return Environment;
        })(AWS.BaseResource);
        ElasticBeanstalk.Environment = Environment;        
    })(AWS.ElasticBeanstalk || (AWS.ElasticBeanstalk = {}));
    var ElasticBeanstalk = AWS.ElasticBeanstalk;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (S3) {
        var BucketPolicy = (function (_super) {
            __extends(BucketPolicy, _super);
            function BucketPolicy(name) {
                        _super.call(this, name, "AWS::S3::BucketPolicy");
                this.Properties = {
                };
            }
            BucketPolicy.prototype.setBucket = function (ref) {
                this.Properties["Bucket"] = ref;
                return this;
            };
            BucketPolicy.prototype.setPolicyDocument = function (jsonObj) {
                this.Properties["PolicyDocument"] = jsonObj;
                return this;
            };
            BucketPolicy.prototype.validate = function (errors) {
                var requires = [
                    "Bucket", 
                    "PolicyDocument"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return BucketPolicy;
        })(AWS.BaseResource);
        S3.BucketPolicy = BucketPolicy;        
    })(AWS.S3 || (AWS.S3 = {}));
    var S3 = AWS.S3;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var Instance = (function (_super) {
            __extends(Instance, _super);
            function Instance(name) {
                        _super.call(this, name, "AWS::EC2::Instance");
                this.Properties = {
                };
            }
            Instance.prototype.setIamInstanceProfile = function (ref) {
                this.Properties["IamInstanceProfile"] = ref;
                return this;
            };
            Instance.prototype.setImageId = function (ii) {
                this.Properties["ImageId"] = ii;
                return this;
            };
            Instance.prototype.setSourceDestCheck = function (sdc) {
                this.Properties["SourceDestCheck"] = sdc;
                return this;
            };
            Instance.prototype.setKernelId = function (ki) {
                this.Properties["KernelId"] = ki;
                return this;
            };
            Instance.prototype.setAvailabilityZone = function (az) {
                this.Properties["AvailabilityZone"] = az;
                return this;
            };
            Instance.prototype.setSecurityGroups = function (ref) {
                this.Properties["SecurityGroups"] = ref;
                return this;
            };
            Instance.prototype.setUserData = function (ud) {
                this.Properties["UserData"] = ud;
                return this;
            };
            Instance.prototype.setEbsOptimized = function (eo) {
                this.Properties["EbsOptimized"] = eo;
                return this;
            };
            Instance.prototype.setTenancy = function (t) {
                this.Properties["Tenancy"] = t;
                return this;
            };
            Instance.prototype.setInstanceType = function (it) {
                this.Properties["InstanceType"] = it;
                return this;
            };
            Instance.prototype.setTags = function (t) {
                this.Properties["Tags"] = t;
                return this;
            };
            Instance.prototype.setRamdiskId = function (ri) {
                this.Properties["RamdiskId"] = ri;
                return this;
            };
            Instance.prototype.setSecurityGroupIds = function (ref) {
                this.Properties["SecurityGroupIds"] = ref;
                return this;
            };
            Instance.prototype.setSubnetId = function (ref) {
                this.Properties["SubnetId"] = ref;
                return this;
            };
            Instance.prototype.setDisableApiTermination = function (dat) {
                this.Properties["DisableApiTermination"] = dat;
                return this;
            };
            Instance.prototype.setPlacementGroupName = function (pgn) {
                this.Properties["PlacementGroupName"] = pgn;
                return this;
            };
            Instance.prototype.setPrivateIpAddress = function (pia) {
                this.Properties["PrivateIpAddress"] = pia;
                return this;
            };
            Instance.prototype.setMonitoring = function (m) {
                this.Properties["Monitoring"] = m;
                return this;
            };
            Instance.prototype.setKeyName = function (kn) {
                this.Properties["KeyName"] = kn;
                return this;
            };
            Instance.prototype.setVolumes = function (v) {
                this.Properties["Volumes"] = v;
                return this;
            };
            Instance.prototype.validate = function (errors) {
                var requires = [
                    "ImageId", 
                    "InstanceType"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return Instance;
        })(AWS.BaseResource);
        EC2.Instance = Instance;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (RDS) {
        var DBSecurityGroupIngress = (function (_super) {
            __extends(DBSecurityGroupIngress, _super);
            function DBSecurityGroupIngress(name) {
                        _super.call(this, name, "AWS::RDS::DBSecurityGroupIngress");
                this.Properties = {
                };
            }
            DBSecurityGroupIngress.prototype.setEC2SecurityGroupId = function (ref) {
                this.Properties["EC2SecurityGroupId"] = ref;
                return this;
            };
            DBSecurityGroupIngress.prototype.setCIDRIP = function (cidrip) {
                this.Properties["CIDRIP"] = cidrip;
                return this;
            };
            DBSecurityGroupIngress.prototype.setEC2SecurityGroupName = function (ref) {
                this.Properties["EC2SecurityGroupName"] = ref;
                return this;
            };
            DBSecurityGroupIngress.prototype.setEC2SecurityGroupOwnerId = function (ecsgoi) {
                this.Properties["EC2SecurityGroupOwnerId"] = ecsgoi;
                return this;
            };
            DBSecurityGroupIngress.prototype.validate = function (errors) {
                return errors;
            };
            return DBSecurityGroupIngress;
        })(AWS.BaseResource);
        RDS.DBSecurityGroupIngress = DBSecurityGroupIngress;        
    })(AWS.RDS || (AWS.RDS = {}));
    var RDS = AWS.RDS;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var VPC = (function (_super) {
            __extends(VPC, _super);
            function VPC(name) {
                        _super.call(this, name, "AWS::EC2::VPC");
                this.Properties = {
                };
            }
            VPC.prototype.setCidrBlock = function (cb) {
                this.Properties["CidrBlock"] = cb;
                return this;
            };
            VPC.prototype.setTags = function (t) {
                this.Properties["Tags"] = t;
                return this;
            };
            VPC.prototype.setInstanceTenancy = function (it) {
                this.Properties["InstanceTenancy"] = it;
                return this;
            };
            VPC.prototype.validate = function (errors) {
                var requires = [
                    "CidrBlock"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return VPC;
        })(AWS.BaseResource);
        EC2.VPC = VPC;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var RouteTable = (function (_super) {
            __extends(RouteTable, _super);
            function RouteTable(name) {
                        _super.call(this, name, "AWS::EC2::RouteTable");
                this.Properties = {
                };
            }
            RouteTable.prototype.setTags = function (t) {
                this.Properties["Tags"] = t;
                return this;
            };
            RouteTable.prototype.setVpcId = function (ref) {
                this.Properties["VpcId"] = ref;
                return this;
            };
            RouteTable.prototype.validate = function (errors) {
                var requires = [
                    "VpcId"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return RouteTable;
        })(AWS.BaseResource);
        EC2.RouteTable = RouteTable;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (SNS) {
        var TopicPolicy = (function (_super) {
            __extends(TopicPolicy, _super);
            function TopicPolicy(name) {
                        _super.call(this, name, "AWS::SNS::TopicPolicy");
                this.Properties = {
                };
            }
            TopicPolicy.prototype.setTopics = function (ref) {
                this.Properties["Topics"] = ref;
                return this;
            };
            TopicPolicy.prototype.setPolicyDocument = function (jsonObj) {
                this.Properties["PolicyDocument"] = jsonObj;
                return this;
            };
            TopicPolicy.prototype.validate = function (errors) {
                var requires = [
                    "Topics", 
                    "PolicyDocument"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return TopicPolicy;
        })(AWS.BaseResource);
        SNS.TopicPolicy = TopicPolicy;        
    })(AWS.SNS || (AWS.SNS = {}));
    var SNS = AWS.SNS;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (SNS) {
        var Topic = (function (_super) {
            __extends(Topic, _super);
            function Topic(name) {
                        _super.call(this, name, "AWS::SNS::Topic");
                this.Properties = {
                };
            }
            Topic.prototype.setSubscription = function (s) {
                this.Properties["Subscription"] = s;
                return this;
            };
            Topic.prototype.setDisplayName = function (dn) {
                this.Properties["DisplayName"] = dn;
                return this;
            };
            Topic.prototype.validate = function (errors) {
                var requires = [
                    "Subscription"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return Topic;
        })(AWS.BaseResource);
        SNS.Topic = Topic;        
    })(AWS.SNS || (AWS.SNS = {}));
    var SNS = AWS.SNS;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (AutoScaling) {
        var AutoScalingGroup = (function (_super) {
            __extends(AutoScalingGroup, _super);
            function AutoScalingGroup(name) {
                        _super.call(this, name, "AWS::AutoScaling::AutoScalingGroup");
                this.Properties = {
                };
            }
            AutoScalingGroup.prototype.setTags = function (t) {
                this.Properties["Tags"] = t;
                return this;
            };
            AutoScalingGroup.prototype.setHealthCheckGracePeriod = function (hcgp) {
                this.Properties["HealthCheckGracePeriod"] = hcgp;
                return this;
            };
            AutoScalingGroup.prototype.setHealthCheckType = function (hct) {
                this.Properties["HealthCheckType"] = hct;
                return this;
            };
            AutoScalingGroup.prototype.setLoadBalancerNames = function (ref) {
                this.Properties["LoadBalancerNames"] = ref;
                return this;
            };
            AutoScalingGroup.prototype.setAvailabilityZones = function (az) {
                this.Properties["AvailabilityZones"] = az;
                return this;
            };
            AutoScalingGroup.prototype.setDesiredCapacity = function (dc) {
                this.Properties["DesiredCapacity"] = dc;
                return this;
            };
            AutoScalingGroup.prototype.setMaxSize = function (ms) {
                this.Properties["MaxSize"] = ms;
                return this;
            };
            AutoScalingGroup.prototype.setVPCZoneIdentifier = function (ref) {
                this.Properties["VPCZoneIdentifier"] = ref;
                return this;
            };
            AutoScalingGroup.prototype.setCooldown = function (c) {
                this.Properties["Cooldown"] = c;
                return this;
            };
            AutoScalingGroup.prototype.setNotificationConfiguration = function (nc) {
                this.Properties["NotificationConfiguration"] = nc;
                return this;
            };
            AutoScalingGroup.prototype.setLaunchConfigurationName = function (ref) {
                this.Properties["LaunchConfigurationName"] = ref;
                return this;
            };
            AutoScalingGroup.prototype.setMinSize = function (ms) {
                this.Properties["MinSize"] = ms;
                return this;
            };
            AutoScalingGroup.prototype.validate = function (errors) {
                var requires = [
                    "AvailabilityZones", 
                    "MaxSize", 
                    "MinSize"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return AutoScalingGroup;
        })(AWS.BaseResource);
        AutoScaling.AutoScalingGroup = AutoScalingGroup;        
    })(AWS.AutoScaling || (AWS.AutoScaling = {}));
    var AutoScaling = AWS.AutoScaling;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var EIP = (function (_super) {
            __extends(EIP, _super);
            function EIP(name) {
                        _super.call(this, name, "AWS::EC2::EIP");
                this.Properties = {
                };
            }
            EIP.prototype.setDomain = function (d) {
                this.Properties["Domain"] = d;
                return this;
            };
            EIP.prototype.setInstanceId = function (ref) {
                this.Properties["InstanceId"] = ref;
                return this;
            };
            EIP.prototype.validate = function (errors) {
                return errors;
            };
            return EIP;
        })(AWS.BaseResource);
        EC2.EIP = EIP;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (CloudFront) {
        var Distribution = (function (_super) {
            __extends(Distribution, _super);
            function Distribution(name) {
                        _super.call(this, name, "AWS::CloudFront::Distribution");
                this.Properties = {
                };
            }
            Distribution.prototype.setDistributionConfig = function (dc) {
                this.Properties["DistributionConfig"] = dc;
                return this;
            };
            Distribution.prototype.validate = function (errors) {
                var requires = [
                    "DistributionConfig"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return Distribution;
        })(AWS.BaseResource);
        CloudFront.Distribution = Distribution;        
    })(AWS.CloudFront || (AWS.CloudFront = {}));
    var CloudFront = AWS.CloudFront;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (Route53) {
        var RecordSet = (function (_super) {
            __extends(RecordSet, _super);
            function RecordSet(name) {
                        _super.call(this, name, "AWS::Route53::RecordSet");
                this.Properties = {
                };
            }
            RecordSet.prototype.setName = function (n) {
                this.Properties["Name"] = n;
                return this;
            };
            RecordSet.prototype.setAliasTarget = function (at) {
                this.Properties["AliasTarget"] = at;
                return this;
            };
            RecordSet.prototype.setHostedZoneName = function (hzn) {
                this.Properties["HostedZoneName"] = hzn;
                return this;
            };
            RecordSet.prototype.setRegion = function (r) {
                this.Properties["Region"] = r;
                return this;
            };
            RecordSet.prototype.setWeight = function (w) {
                this.Properties["Weight"] = w;
                return this;
            };
            RecordSet.prototype.setType = function (t) {
                this.Properties["Type"] = t;
                return this;
            };
            RecordSet.prototype.setHostedZoneId = function (hzi) {
                this.Properties["HostedZoneId"] = hzi;
                return this;
            };
            RecordSet.prototype.setComment = function (c) {
                this.Properties["Comment"] = c;
                return this;
            };
            RecordSet.prototype.setSetIdentifier = function (si) {
                this.Properties["SetIdentifier"] = si;
                return this;
            };
            RecordSet.prototype.setTTL = function (ttl) {
                this.Properties["TTL"] = ttl;
                return this;
            };
            RecordSet.prototype.setResourceRecords = function (rr) {
                this.Properties["ResourceRecords"] = rr;
                return this;
            };
            RecordSet.prototype.validate = function (errors) {
                var requires = [
                    "Name", 
                    "Type"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return RecordSet;
        })(AWS.BaseResource);
        Route53.RecordSet = RecordSet;        
    })(AWS.Route53 || (AWS.Route53 = {}));
    var Route53 = AWS.Route53;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (RDS) {
        var DBInstance = (function (_super) {
            __extends(DBInstance, _super);
            function DBInstance(name) {
                        _super.call(this, name, "AWS::RDS::DBInstance");
                this.Properties = {
                };
            }
            DBInstance.prototype.setPreferredBackupWindow = function (pbw) {
                this.Properties["PreferredBackupWindow"] = pbw;
                return this;
            };
            DBInstance.prototype.setDBInstanceClass = function (dbic) {
                this.Properties["DBInstanceClass"] = dbic;
                return this;
            };
            DBInstance.prototype.setDBSnapshotIdentifier = function (dbsi) {
                this.Properties["DBSnapshotIdentifier"] = dbsi;
                return this;
            };
            DBInstance.prototype.setAllocatedStorage = function (as) {
                this.Properties["AllocatedStorage"] = as;
                return this;
            };
            DBInstance.prototype.setIops = function (i) {
                this.Properties["Iops"] = i;
                return this;
            };
            DBInstance.prototype.setAvailabilityZone = function (az) {
                this.Properties["AvailabilityZone"] = az;
                return this;
            };
            DBInstance.prototype.setDBParameterGroupName = function (ref) {
                this.Properties["DBParameterGroupName"] = ref;
                return this;
            };
            DBInstance.prototype.setPreferredMaintenanceWindow = function (pmw) {
                this.Properties["PreferredMaintenanceWindow"] = pmw;
                return this;
            };
            DBInstance.prototype.setLicenseModel = function (lm) {
                this.Properties["LicenseModel"] = lm;
                return this;
            };
            DBInstance.prototype.setMasterUserPassword = function (mup) {
                this.Properties["MasterUserPassword"] = mup;
                return this;
            };
            DBInstance.prototype.setEngine = function (e) {
                this.Properties["Engine"] = e;
                return this;
            };
            DBInstance.prototype.setMasterUsername = function (mu) {
                this.Properties["MasterUsername"] = mu;
                return this;
            };
            DBInstance.prototype.setPort = function (p) {
                this.Properties["Port"] = p;
                return this;
            };
            DBInstance.prototype.setDBSecurityGroups = function (ref) {
                this.Properties["DBSecurityGroups"] = ref;
                return this;
            };
            DBInstance.prototype.setMultiAZ = function (maz) {
                this.Properties["MultiAZ"] = maz;
                return this;
            };
            DBInstance.prototype.setEngineVersion = function (ev) {
                this.Properties["EngineVersion"] = ev;
                return this;
            };
            DBInstance.prototype.setDBName = function (dbn) {
                this.Properties["DBName"] = dbn;
                return this;
            };
            DBInstance.prototype.setBackupRetentionPeriod = function (brp) {
                this.Properties["BackupRetentionPeriod"] = brp;
                return this;
            };
            DBInstance.prototype.setDBSubnetGroupName = function (ref) {
                this.Properties["DBSubnetGroupName"] = ref;
                return this;
            };
            DBInstance.prototype.validate = function (errors) {
                var requires = [
                    "DBInstanceClass", 
                    "AllocatedStorage", 
                    "MasterUserPassword", 
                    "Engine", 
                    "MasterUsername"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return DBInstance;
        })(AWS.BaseResource);
        RDS.DBInstance = DBInstance;        
    })(AWS.RDS || (AWS.RDS = {}));
    var RDS = AWS.RDS;
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (EC2) {
        var NetworkAclEntry = (function (_super) {
            __extends(NetworkAclEntry, _super);
            function NetworkAclEntry(name) {
                        _super.call(this, name, "AWS::EC2::NetworkAclEntry");
                this.Properties = {
                };
            }
            NetworkAclEntry.prototype.setCidrBlock = function (cb) {
                this.Properties["CidrBlock"] = cb;
                return this;
            };
            NetworkAclEntry.prototype.setRuleAction = function (ra) {
                this.Properties["RuleAction"] = ra;
                return this;
            };
            NetworkAclEntry.prototype.setIcmp = function (i) {
                this.Properties["Icmp"] = i;
                return this;
            };
            NetworkAclEntry.prototype.setPortRange = function (pr) {
                this.Properties["PortRange"] = pr;
                return this;
            };
            NetworkAclEntry.prototype.setEgress = function (e) {
                this.Properties["Egress"] = e;
                return this;
            };
            NetworkAclEntry.prototype.setNetworkAclId = function (ref) {
                this.Properties["NetworkAclId"] = ref;
                return this;
            };
            NetworkAclEntry.prototype.setProtocol = function (p) {
                this.Properties["Protocol"] = p;
                return this;
            };
            NetworkAclEntry.prototype.setRuleNumber = function (rn) {
                this.Properties["RuleNumber"] = rn;
                return this;
            };
            NetworkAclEntry.prototype.validate = function (errors) {
                var requires = [
                    "CidrBlock", 
                    "RuleAction", 
                    "Egress", 
                    "NetworkAclId", 
                    "Protocol", 
                    "RuleNumber"
                ];
                for(var i = 0; i < requires.length; i++) {
                    if(this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {
                        var err = {
                            "Name": this.getName(),
                            "Type": this.getType(),
                            "Property": requires[i],
                            "Description": "value is null or undefined."
                        };
                        errors.push(err);
                    }
                }
                return errors;
            };
            return NetworkAclEntry;
        })(AWS.BaseResource);
        EC2.NetworkAclEntry = NetworkAclEntry;        
    })(AWS.EC2 || (AWS.EC2 = {}));
    var EC2 = AWS.EC2;
})(AWS || (AWS = {}));
//@ sourceMappingURL=Resources.js.map

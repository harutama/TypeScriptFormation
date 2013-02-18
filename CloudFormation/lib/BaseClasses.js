var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AWS;
(function (AWS) {
    var Stack = (function () {
        function Stack(description) {
            this.AWSTemplateFormatVersion = "2010-09-09";
            this.Description = "";
            this.Description = description;
        }
        Stack.prototype.addParameter = function () {
            var param = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                param[_i] = arguments[_i + 0];
            }
            if(this.Parameters === undefined) {
                this.Parameters = {
                };
            }
            for(var i = 0; i < param.length; i++) {
                this.Parameters[param[i].getName()] = param[i];
            }
        };
        Stack.prototype.addMapping = function () {
            var mapping = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                mapping[_i] = arguments[_i + 0];
            }
            if(this.Mappings === undefined) {
                this.Mappings = {
                };
            }
            for(var i = 0; i < mapping.length; i++) {
                this.Mappings[mapping[i].getName()] = mapping[i];
            }
        };
        Stack.prototype.addResource = function () {
            var resource = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                resource[_i] = arguments[_i + 0];
            }
            if(this.Resources === undefined) {
                this.Resources = {
                };
            }
            for(var i = 0; i < resource.length; i++) {
                this.Resources[resource[i].getName()] = resource[i];
            }
        };
        Stack.prototype.addOutput = function () {
            var output = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                output[_i] = arguments[_i + 0];
            }
            if(this.Outputs === undefined) {
                this.Outputs = {
                };
            }
            for(var i = 0; i < output.length; i++) {
                this.Outputs[output[i].getName()] = output[i];
            }
        };
        Stack.prototype.toString = function () {
            return JSON.stringify(this, undefined, "    ");
        };
        return Stack;
    })();
    AWS.Stack = Stack;    
    var BaseElement = (function () {
        function BaseElement(name) {
            this.Name = name;
        }
        BaseElement.prototype.getName = function () {
            return this.Name;
        };
        BaseElement.prototype.toJSON = function () {
            var retval = {
            };
            for(var key in this) {
                if(key === "Name") {
                    retval[key] = undefined;
                } else {
                    retval[key] = this[key];
                }
            }
            return retval;
        };
        return BaseElement;
    })();
    AWS.BaseElement = BaseElement;    
    (function (ParameterTypes) {
        ParameterTypes._map = [];
        ParameterTypes._map[0] = "String";
        ParameterTypes.String = 0;
        ParameterTypes._map[1] = "Number";
        ParameterTypes.Number = 1;
        ParameterTypes._map[2] = "CommaDelimitedList";
        ParameterTypes.CommaDelimitedList = 2;
    })(AWS.ParameterTypes || (AWS.ParameterTypes = {}));
    var ParameterTypes = AWS.ParameterTypes;
    ;
    var Parameter = (function (_super) {
        __extends(Parameter, _super);
        function Parameter(name, type) {
                _super.call(this, name);
            switch(type) {
                case ParameterTypes.String:
                    this.Type = "String";
                    break;
                case ParameterTypes.Number:
                    this.Type = "Number";
                    break;
                case ParameterTypes.CommaDelimitedList:
                    this.Type = "CommaDelimitedList";
                    break;
            }
        }
        Parameter.prototype.createRef = function () {
            return new AWS.Function.Ref(this);
        };
        Parameter.prototype.setDefault = function (value) {
            this.Default = value;
            return this;
        };
        Parameter.prototype.setNoEcho = function (value) {
            this.NoEcho = value;
            return this;
        };
        Parameter.prototype.setAllowedValues = function () {
            var value = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                value[_i] = arguments[_i + 0];
            }
            this.AllowedValues = value;
            return this;
        };
        Parameter.prototype.setAllowedPattern = function (value) {
            this.AllowedPattern = value;
            return this;
        };
        Parameter.prototype.setMaxLength = function (value) {
            this.MaxLength = value;
            return this;
        };
        Parameter.prototype.setMinLength = function (value) {
            this.MinLength = value;
            return this;
        };
        Parameter.prototype.setMaxValue = function (value) {
            this.MaxValue = value;
            return this;
        };
        Parameter.prototype.setMinValue = function (value) {
            this.Default = value;
            return this;
        };
        Parameter.prototype.setDescription = function (value) {
            this.Description = value;
            return this;
        };
        Parameter.prototype.setConstraintDescription = function (value) {
            this.ConstraintDescription = value;
            return this;
        };
        return Parameter;
    })(BaseElement);
    AWS.Parameter = Parameter;    
    var Mapping = (function (_super) {
        __extends(Mapping, _super);
        function Mapping(name) {
                _super.call(this, name);
            this.Map = {
            };
        }
        Mapping.prototype.addEntry = function (key, valueKey, valuevalue) {
            this.Map[key] = {
                valueKey: valuevalue
            };
            return this;
        };
        return Mapping;
    })(BaseElement);
    AWS.Mapping = Mapping;    
    (function (DeletionPolicy) {
        DeletionPolicy._map = [];
        DeletionPolicy._map[0] = "Delete";
        DeletionPolicy.Delete = 0;
        DeletionPolicy._map[1] = "Retain";
        DeletionPolicy.Retain = 1;
        DeletionPolicy._map[2] = "Snapshot";
        DeletionPolicy.Snapshot = 2;
    })(AWS.DeletionPolicy || (AWS.DeletionPolicy = {}));
    var DeletionPolicy = AWS.DeletionPolicy;
    var BaseResource = (function (_super) {
        __extends(BaseResource, _super);
        function BaseResource(name, type) {
                _super.call(this, name);
            this.Type = type;
        }
        BaseResource.prototype.getType = function () {
            return this.Type;
        };
        BaseResource.prototype.createRef = function () {
            return new AWS.Function.Ref(this);
        };
        BaseResource.prototype.setDependsOn = function (dependsOn) {
            this.DependsOn = dependsOn.getName();
        };
        BaseResource.prototype.setDeletionPolicy = function (deletionPolicy) {
            switch(deletionPolicy) {
                case DeletionPolicy.Delete:
                    this.DeletionPolicy = "Delete";
                    break;
                case DeletionPolicy.Retain:
                    this.DeletionPolicy = "Retain";
                    break;
                case DeletionPolicy.Snapshot:
                    this.DeletionPolicy = "Snapshot";
                    break;
            }
        };
        BaseResource.prototype.setMetadata = function (metadata) {
            this.Metadata = metadata;
        };
        BaseResource.prototype.toString = function () {
            return JSON.stringify(this);
        };
        return BaseResource;
    })(BaseElement);
    AWS.BaseResource = BaseResource;    
    var Output = (function (_super) {
        __extends(Output, _super);
        function Output(name, value) {
                _super.call(this, name);
            this.Value = value;
        }
        Output.prototype.setDescription = function (description) {
            this.Description = description;
        };
        return Output;
    })(BaseElement);
    AWS.Output = Output;    
})(AWS || (AWS = {}));
var AWS;
(function (AWS) {
    (function (Function) {
        var BaseFunction = (function () {
            function BaseFunction(functionName) {
                this.FunctionName = functionName;
            }
            BaseFunction.prototype.getFunctionName = function () {
                return this.FunctionName;
            };
            return BaseFunction;
        })();
        Function.BaseFunction = BaseFunction;        
        var Base64 = (function (_super) {
            __extends(Base64, _super);
            function Base64(value) {
                        _super.call(this, "Fn::Base64");
                this.ValueToEncode = value;
            }
            Base64.prototype.toJSON = function () {
                var retval = {
                };
                retval[this.getFunctionName()] = this.ValueToEncode;
                return retval;
            };
            return Base64;
        })(BaseFunction);
        Function.Base64 = Base64;        
        var FindInMap = (function (_super) {
            __extends(FindInMap, _super);
            function FindInMap(map, key, value) {
                        _super.call(this, "Fn::FindInMap");
                this.Map = map;
                this.Key = key;
                this.Value = value;
            }
            FindInMap.prototype.toJSON = function () {
                var retval = {
                };
                retval[this.getFunctionName()] = [
                    this.Map.getName(), 
                    this.Key, 
                    this.Value
                ];
                return retval;
            };
            return FindInMap;
        })(BaseFunction);
        Function.FindInMap = FindInMap;        
        var GetAtt = (function (_super) {
            __extends(GetAtt, _super);
            function GetAtt(logicalNameOfResource, attributeName) {
                        _super.call(this, "Fn::GetAtt");
                this.LogicalNameOfResource = logicalNameOfResource;
                this.AttributeName = attributeName;
            }
            GetAtt.prototype.toJSON = function () {
                var retval = {
                };
                retval[this.getFunctionName()] = [
                    this.LogicalNameOfResource, 
                    this.AttributeName
                ];
                return retval;
            };
            return GetAtt;
        })(BaseFunction);
        Function.GetAtt = GetAtt;        
        var GetAZs = (function (_super) {
            __extends(GetAZs, _super);
            function GetAZs(region) {
                        _super.call(this, "Fn::GetAZs");
                this.Region = region;
            }
            GetAZs.prototype.toJSON = function () {
                var retval = {
                };
                retval[this.getFunctionName()] = this.Region;
                return retval;
            };
            return GetAZs;
        })(BaseFunction);
        Function.GetAZs = GetAZs;        
        var Join = (function (_super) {
            __extends(Join, _super);
            function Join(delimiter) {
                        _super.call(this, "Fn::Join");
                this.Delimiter = delimiter;
                this.Values = [];
            }
            Join.prototype.add = function (value) {
                this.Values.push(value);
                return this;
            };
            Join.prototype.toJSON = function () {
                var retval = {
                };
                var value = [
                    this.Delimiter, 
                    this.Values
                ];
                retval[this.getFunctionName()] = value;
                return retval;
            };
            return Join;
        })(BaseFunction);
        Function.Join = Join;        
        var Select = (function (_super) {
            __extends(Select, _super);
            function Select(index, values) {
                        _super.call(this, "Fn::Select");
                this.Index = index;
                this.Values = values;
            }
            Select.prototype.toJSON = function () {
                var retval = {
                };
                var value = [
                    this.Index, 
                    this.Values
                ];
                retval[this.getFunctionName()] = value;
                return retval;
            };
            return Select;
        })(BaseFunction);
        Function.Select = Select;        
        var Ref = (function (_super) {
            __extends(Ref, _super);
            function Ref(value) {
                        _super.call(this, "Ref");
                if(typeof value === "string") {
                    this.Reference = value;
                } else {
                    this.Reference = value.getName();
                }
            }
            Ref.StackId = new Ref("AWS::StackId");
            Ref.StackName = new Ref("AWS::StackName");
            Ref.NotificationARNs = new Ref("AWS::NotificationARNs");
            Ref.Region = new Ref("AWS::Region");
            Ref.prototype.toJSON = function () {
                var retval = {
                };
                retval[this.getFunctionName()] = this.Reference;
                return retval;
            };
            return Ref;
        })(BaseFunction);
        Function.Ref = Ref;        
    })(AWS.Function || (AWS.Function = {}));
    var Function = AWS.Function;
})(AWS || (AWS = {}));
//@ sourceMappingURL=BaseClasses.js.map

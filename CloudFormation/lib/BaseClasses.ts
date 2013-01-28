module AWS {
    export class Stack {

        private AWSTemplateFormatVersion: string = "2010-09-09";

        private Description: string = "";

        private Parameters: Object;

        private Mappings: Object;

        private Resources: Object;

        private Outputs: Object;

        constructor(description: string) {
            this.Description = description;
        }

        addParameter(...param: Parameter[]): void {
            if (this.Parameters === undefined) {
                this.Parameters = {};
            }

            for (var i: number = 0; i < param.length; i++) {
                this.Parameters[param[i].getName()] = param[i];
            }
        }

        addMapping(...mapping: Mapping[]) {
            if (this.Mappings === undefined) {
                this.Mappings = {};
            }

            for (var i: number = 0; i < mapping.length; i++) {
                this.Mappings[mapping[i].getName()] = mapping[i];
            }
        }

        addResource(...resource: BaseResource[]) {
            if (this.Resources === undefined) {
                this.Resources = {};
            }

            for (var i: number = 0; i < resource.length; i++) {
                this.Resources[resource[i].getName()] = resource[i];
            }
        }

        addOutput(...output: Output[]) {
            if (this.Outputs === undefined) {
                this.Outputs = {};
            }

            for (var i: number = 0; i < output.length; i++) {
                this.Outputs[output[i].getName()] = output[i];
            }
        }

        toString(): string {
            return JSON.stringify(this);
        }

    }

    export class BaseElement {
        private Name: string;

        constructor(name: string) {
            this.Name = name;
        }

        getName(): string {
            return this.Name;
        }
    }

    //------------------------------------------------------------

    export enum ParameterTypes {
        String, Number, CommaDelimitedList
    };

    export class Parameter extends BaseElement {

        private Type: string;
        private Default: Object;
        private NoEcho: bool;
        private AllowedValues: string[];
        private AllowedPattern: string;
        private MaxLength: string;
        private MinLength: string;
        private MaxValue: number;
        private MinValue: number;
        private Description: string;
        private ConstraintDescription: string;

        constructor(name: string, type: ParameterTypes) {
            super(name);

            switch (type) {
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

        createRef() {
            return new AWS.Function.Ref(this);
        }

        setDefault(value: Object): Parameter {
            this.Default = value;
            return this;
        }

        setNoEcho(value: bool): Parameter {
            this.NoEcho = value;
            return this;
        }

        setAllowedValues(...value: string[]): Parameter {
            this.AllowedValues = value;
            return this;
        }

        setAllowedPattern(value: string): Parameter {
            this.AllowedPattern = value;
            return this;
        }

        setMaxLength(value: string): Parameter {
            this.MaxLength = value;
            return this;
        }

        setMinLength(value: string): Parameter {
            this.MinLength = value;
            return this;
        }

        setMaxValue(value: number): Parameter {
            this.MaxValue = value;
            return this;
        }

        setMinValue(value: number): Parameter {
            this.Default = value;
            return this;
        }

        setDescription(value: string): Parameter {
            this.Description = value;
            return this;
        }

        setConstraintDescription(value: string): Parameter {
            this.ConstraintDescription = value;
            return this;
        }

    }

    //------------------------------------------------------------

    //http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html
    export class Mapping extends BaseElement {

        Map: Object = {};

        constructor(name: string) {
            super(name);
        }

        addEntry(key: string, valueKey: string, valuevalue: string): Mapping {
            this.Map[key] = { valueKey: valuevalue };
            return this;
        }
    }

    //------------------------------------------------------------

    export enum DeletionPolicy {
        Delete, Retain, Snapshot
    }

    export class BaseResource extends BaseElement {

        private Type: string;
        private DependsOn: string;
        private DeletionPolicy: string;
        private MetaData: Object;

        constructor(name: string, type: string) {
            super(name);
            this.Type = type;
        }

        getType(): string {
            return this.Type;
        }

        createRef() {
            return new AWS.Function.Ref(this);
        }

        setDependsOn(dependsOn: BaseResource) {
            this.DependsOn = dependsOn.getName();
        }


        setDeletionPolicy(deletionPolicy: DeletionPolicy) {
            switch (deletionPolicy) {
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
        }

        ///後で
        setMetaData(metaData: Object) {
            //よくわかんないから後で
            this.MetaData = metaData;
        }

        toString(): string {
            return JSON.stringify(this);
        }

    }

    //------------------------------------------------------------

    export class Output extends BaseElement {

        private Description: string;
        private Value: Object;

        constructor(name: string, value: string);
        constructor(name: string, value: AWS.Function.BaseFunction);
        constructor(name: string, value: Object) {
            super(name);
            this.Value = value;
        }

        setDescription(description: string) {
            this.Description = description;
        }

    }

}


module AWS.Function {

    ///http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html
    export class BaseFunction {
        private FunctionName: string;

        constructor(functionName: string) {
            this.FunctionName = functionName;
        }

        getFunctionName(): string {
            return this.FunctionName;
        }
    }

    export class Base64 extends BaseFunction {

        private ValueToEncode: Object;

        constructor(value: string);
        constructor(value: BaseFunction);
        constructor(value: Object) {
            super("Fn::Base64");
            this.ValueToEncode = value;
        }

        toJSON(): any {
            var retval: Object = {};
            retval[this.getFunctionName()] = this.ValueToEncode;
            return retval;
        }
    }

    export class FindInMap extends BaseFunction {

        private Map: Mapping;
        private Key: Object;
        private Value: Object;

        //修正
        constructor(map: Mapping, key: string, value: string);
        constructor(map: Mapping, key: BaseFunction, value: string);
        constructor(map: Mapping, key: BaseFunction, value: BaseFunction);
        constructor(map: Mapping, key: Object, value: Object) {
            super("Fn::FindInMap");
            this.Map = map;
            this.Key = key;
            this.Value = value;
        }

        toJSON(): any {
            var retval: Object = {};
            retval[this.getFunctionName()] = [this.Map.getName(), this.Key, this.Value];
            return retval;
        }
    }

    export class GetAtt extends BaseFunction {

        private LogicalNameOfResource: string;
        private AttributeName: string;

        constructor(logicalNameOfResource: string, attributeName: string) {
            super("Fn::GetAtt");
            this.LogicalNameOfResource = logicalNameOfResource;
            this.AttributeName = attributeName;
        }

        toJSON(): any {
            var retval: Object = {};
            retval[this.getFunctionName()] = [this.LogicalNameOfResource, this.AttributeName];
            return retval;
        }
    }

    export class GetAZs extends BaseFunction {

        private Region: string;

        constructor(region: string) {
            super("Fn::GetAZs");
            this.Region = region;
        }

        toJSON(): any {
            var retval: Object = {};
            retval[this.getFunctionName()] = this.Region;
            return retval;
        }
    }

    export class Join extends BaseFunction {

        private Delimiter: string;
        private Values: Object[];

        constructor(delimiter: string) {
            super("Fn::Join");
            this.Delimiter = delimiter;
            this.Values = [];
        }

        add(value: string): Join;
        add(value: BaseFunction): Join;
        add(value: any): Join {
            this.Values.push(value);
            return this;
        }

        toJSON(): any {
            var retval: Object = {};
            var value: any[] = [this.Delimiter, this.Values];
            retval[this.getFunctionName()] = value;
            return retval;
        }
    }

    export class Select extends BaseFunction {

        private Index: string;
        private Values: string[];

        constructor(index: string, values: string[]) {
            super("Fn::Select");
            this.Index = index;
            this.Values = values;
        }

        toJSON(): any {
            var retval: Object = {};
            var value: any[] = [this.Index, this.Values];
            retval[this.getFunctionName()] = value;
            return retval;
        }
    }

    export class Ref extends BaseFunction {

        static StackId: Ref = new Ref("AWS::StackId");
        static StackName: Ref = new Ref("AWS::StackName");
        static NotificationARNs: Ref = new Ref("AWS::NotificationARNs");
        static Region: Ref = new Ref("AWS::Region");

        private Reference: string;

        constructor(resource: BaseResource);
        constructor(parameter: Parameter);
        constructor(name: string);
        constructor(value: any) {
            super("Ref")
            if (typeof value === "string") {
                this.Reference = value;
            } else {
                this.Reference = value.getName();
            }
        }

        toJSON(): any {
            var retval: Object = {};
            retval[this.getFunctionName()] = this.Reference;
            return retval;
        }
    }
}
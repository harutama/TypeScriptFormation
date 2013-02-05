module AWS {

    /**
     * Root object of CloudFormation Stack.
     */
    export class Stack {

        private AWSTemplateFormatVersion: string = "2010-09-09";

        private Description: string = "";

        private Parameters: Object;

        private Mappings: Object;

        private Resources: Object;

        private Outputs: Object;

        /**
         * Constructor.
         * @param description description of the stack.
         */
        constructor(description: string) {
            this.Description = description;
        }

        /**
         * Add parameter declearation.
         * @param param object of parameter.
         * @see AWS.Parameter
         */
        addParameter(...param: Parameter[]): void {
            if (this.Parameters === undefined) {
                this.Parameters = {};
            }

            for (var i: number = 0; i < param.length; i++) {
                this.Parameters[param[i].getName()] = param[i];
            }
        }

        /**
         * Add mapping declearation.
         * @param param object of mapping.
         * @see AWS.Mapping
         */
        addMapping(...mapping: Mapping[]): void {
            if (this.Mappings === undefined) {
                this.Mappings = {};
            }

            for (var i: number = 0; i < mapping.length; i++) {
                this.Mappings[mapping[i].getName()] = mapping[i];
            }
        }

        /**
         * Add resource declearation.
         * @param param object of resource.
         * @see AWS.BaseResource
         */
        addResource(...resource: BaseResource[]): void {
            if (this.Resources === undefined) {
                this.Resources = {};
            }

            for (var i: number = 0; i < resource.length; i++) {
                this.Resources[resource[i].getName()] = resource[i];
            }
        }

        /**
         * Add output declearation.
         * @param param object of output.
         * @see AWS.Output
         */
        addOutput(...output: Output[]): void {
            if (this.Outputs === undefined) {
                this.Outputs = {};
            }

            for (var i: number = 0; i < output.length; i++) {
                this.Outputs[output[i].getName()] = output[i];
            }
        }

        /**
         * This object contents is output to JSON as CloudFormation stack.
         * @return JSON stirng.
         */
        toString(): string {
            return JSON.stringify(this);
        }

    }

    /**
     * Root object of CloudFormation elements.
     * (Parameter, Mapping, Resource and Output)
     */
    export class BaseElement {
        private Name: string;

        /**
         * This object contents is output to JSON as CloudFormation stack.
         * @param name Name of this object.
         */
        constructor(name: string) {
            this.Name = name;
        }

        /**
         * Get name of this object.
         * @return Name of this object.
         */
        getName(): string {
            return this.Name;
        }
    }

    //------------------------------------------------------------

    /**
     * Types of Parameters.
     */
    export enum ParameterTypes {
        /** String parameter. */
        String,
        /** Number parameter. */
        Number,
        /** Commma delimited parameters. */
        CommaDelimitedList
    };

    /**
     * The optional Parameters section enables you to pass values into your template at stack creation time.
     * Parameters allow you to create templates that can be customized for each stack deployment.
     * When a user creates a stack from a template containing parameters, the user can specify values for those parameters.
     * Within the template, you can use the \"Ref\" intrinsic function to specify those parameter values in properties values for resources.
     */
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

        /**
         * Constructor
         * @param name Name of this parameter.
         * @param type Type of this parameter.
         * @see AWS.ParameterTypes
         */
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

        /**
         * Create AWS.Function.Ref object that refer to this object.
         * @return AWS.Function.Ref object.
         * @see AWS.Function.Ref
         */
        createRef(): AWS.Function.Ref {
            return new AWS.Function.Ref(this);
        }

        /**
         * A value of the appropriate type for the template to use if no value is specified at stack creation.
         * @param value Default value.
         * @return This object.
         */
        setDefault(value: Object): Parameter {
            this.Default = value;
            return this;
        }

        /**
         * If TRUE, the value of the parameter is masked with asterisks (*****) with cfn-describe-stacks.
         * @param value TRUE will mask the parameters value.
         * @return This object.
         */
        setNoEcho(value: bool): Parameter {
            this.NoEcho = value;
            return this;
        }

        /**
         * An array containing the list of values allowed for the parameter.
         * @param value Values of acceptable.
         * @return This object.
         */
        setAllowedValues(...value: string[]): Parameter {
            this.AllowedValues = value;
            return this;
        }

        /**
         * A regular expression that represents the patterns allowed in the parameter's string value.
         * @param value Regular expression for value.
         * @return This object.
         */
        setAllowedPattern(value: string): Parameter {
            this.AllowedPattern = value;
            return this;
        }

        /**
         * A integer value that determines the maximum number of characters in the parameter's string value.
         * @param value Max length of value.
         * @return This object.
         */
        setMaxLength(value: string): Parameter {
            this.MaxLength = value;
            return this;
        }

        /**
         * A integer value that determines the minimum number of characters in the parameter's string value.
         * @param value Min length of value.
         * @return This object.
         */
        setMinLength(value: string): Parameter {
            this.MinLength = value;
            return this;
        }

        /**
         * A numeric value that determines the largest numeric value allowed for the parameter.
         * @param value Max value.
         * @return This object.
         */
        setMaxValue(value: number): Parameter {
            this.MaxValue = value;
            return this;
        }

        /**
         * A integer value that determines the minimum number of characters in the parameter's string value.
         * @param value Minimum value.
         * @return This object.
         */
        setMinValue(value: number): Parameter {
            this.Default = value;
            return this;
        }

        /**
         * A String type up to 4000 characters describing the parameter.
         * @param value Description of this parameter.
         * @return This object.
         */
        setDescription(value: string): Parameter {
            this.Description = value;
            return this;
        }

        /**
         * A String type that describes the constraint requirements when the user specifies a parameter value that does not match the constraints defined for the parameter.
         * @param value Constraint description..
         * @return This object.
         */
        setConstraintDescription(value: string): Parameter {
            this.ConstraintDescription = value;
            return this;
        }

    }

    //------------------------------------------------------------

    /**
     * Mappings match a key to a corresponding set of named values.
     * For example, if you want to set values based on a region, you can create a mapping that uses the region name as a key and contains the values you want to specify for each specific region.
     * @link http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html
     */
    export class Mapping extends BaseElement {

        Map: Object = {};

        /**
         * Constructor
         * @param name Name of this object.
         */
        constructor(name: string) {
            super(name);
        }

        /**
         * Add parameter entry.
         * @param key 
         * @param valueKey 
         * @param valuevalue 
         * @return This object.
         */
        addEntry(key: string, valueKey: string, valuevalue: string): Mapping {
            this.Map[key] = { valueKey: valuevalue };
            return this;
        }
    }

    //------------------------------------------------------------

    /**
     * The DeletionPolicy attribute enables you to specify how AWS CloudFormation handles the resource deletion.
     */
    export enum DeletionPolicy {
        Delete, Retain, Snapshot
    }

    /**
     * The required Resources section describes the member resources in your AWS CloudFormation template.
     */
    export class BaseResource extends BaseElement {

        private Type: string;
        private DependsOn: string;
        private DeletionPolicy: string;
        private Metadata: Object;

        /**
         * Constructor
         * @param name Name of this object.
         * @param type Type of resource. 
         */
        constructor(name: string, type: string) {
            super(name);
            this.Type = type;
        }

        /**
         * Get resource type.
         * @return Resource type.
         */
        getType(): string {
            return this.Type;
        }

        /**
         * Create AWS.Function.Ref object that refer to this object.
         * @return AWS.Function.Ref object.
         * @see AWS.Function.Ref
         */
        createRef(): AWS.Function.Ref {
            return new AWS.Function.Ref(this);
        }

        /**
         * The DependsOn attribute enables you to specify that the creation of a specific resource follows another.
         * @param dependsOn Another resource.
         */
        setDependsOn(dependsOn: BaseResource): void {
            this.DependsOn = dependsOn.getName();
        }

        /**
         * The DeletionPolicy attribute enables you to specify how AWS CloudFormation handles the resource deletion.
         * @param deletionPolicy DeletionPolicy.
         * @see AWS.DeletionPolicy
         */
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

        /**
         * The Metadata attribute enables you to associate structured data with a resource.
         * @param metadata Metadata.
         */
        setMetadata(metadata: Object) {
            //よくわかんないから後で
            this.Metadata = metadata;
        }

        /**
         * This object contents is output to JSON as CloudFormation stack.
         * @return JSON stirng.
         */
        toString(): string {
            return JSON.stringify(this);
        }

    }

    //------------------------------------------------------------

    /**
     * The optional Outputs section enables you to return one or more values to the user.
     */
    export class Output extends BaseElement {

        private Description: string;
        private Value: Object;

        /**
         * Constructor
         * @param name Name of this object.
         * @param value Value is displayed for user.
         */
        constructor(name: string, value: string);
        constructor(name: string, value: AWS.Function.BaseFunction);
        constructor(name: string, value: Object) {
            super(name);
            this.Value = value;
        }

        /**
         * A String type up to 4K in length describing the output value.
         * @param description Description
         */
        setDescription(description: string): void {
            this.Description = description;
        }

    }

}


module AWS.Function {

    /**
     * Root crass for CloudFormation functions.
     * @see http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html
     */
    export class BaseFunction {
        private FunctionName: string;

        /**
         * Constructor
         * @param functionName Function name expression like "Fn::Base64".
         */
        constructor(functionName: string) {
            this.FunctionName = functionName;
        }

        /**
         * Get function name.
         * @return Function name.
         */
        getFunctionName(): string {
            return this.FunctionName;
        }
    }

    /**
     * The intrinsic function Fn::Base64 returns the Base64 representation of the input string.
     * This function is typically used to pass encoded data to Amazon EC2 instances by way of the UserData property.
     */
    export class Base64 extends BaseFunction {

        private ValueToEncode: Object;

        /**
         * Constructor
         * @param value The string value you want to convert to Base64.
         */
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

    /**
     * The intrinsic function Fn::FindInMap returns the value of a key from a mapping declared in the Mappings section.
     */
    export class FindInMap extends BaseFunction {

        private Map: Mapping;
        private Key: Object;
        private Value: Object;

        //修正
        /**
         * @param map The logical name of the mapping declared in the Mappings section that contains the key-value pair.
         * @param key The name of the mapping key whose value you want.
         * @param value The value for the named mapping key.
         */
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

    /**
     * The intrinsic function Fn::GetAtt returns the value of an attribute from a resource in the template.
     */
    export class GetAtt extends BaseFunction {

        private LogicalNameOfResource: string;
        private AttributeName: string;

        /**
         * Constructor
         * @param logicalNameOfResource The logical name of the resource that contains the attribute you want.
         * @param attributeName The name of the resource-specific attribute whose value you want. See the resource's reference page for details about the attributes available for that resource type.
         */
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

    /**
     * The intrinsic function Fn::GetAZs returns an array that lists all Availability Zones for the specified region.
     */
    export class GetAZs extends BaseFunction {

        private Region: string;

        /**
         * Constructor
         * @param region The name of the region for which you want to get the Availability Zones.
         * You can use the AWS::Region pseudo parameter to specify the region in which the stack is created.
         * Specifying an empty string is equivalent to specifying AWS::Region.
         */
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

    /**
     * The intrinsic function Fn::Join appends a set of values into a single value, separated by the specified delimiter.
     * If a delimiter is the empty string, the set of values are concatenated with no delimiter.
     */
    export class Join extends BaseFunction {

        private Delimiter: string;
        private Values: Object[];

        /**
         * Constructor
         * @param delimiter The value you want to occur between fragments.
         * The delimiter will occur between fragments only.
         * It will not terminate the final value.
         */
        constructor(delimiter: string) {
            super("Fn::Join");
            this.Delimiter = delimiter;
            this.Values = [];
        }

        /**
         * Add value to set.
         * @param value Value of set.
         */
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

    /**
     * The intrinsic function Fn::Select returns a single object from a list of objects by index.
     */
    export class Select extends BaseFunction {

        private Index: string;
        private Values: string[];

        /**
         * Constructor
         * @param index The index of the object to retrieve.
         * This must be a value from zero to N-1, where N represents the number of elements in the array.
         * @param values The list of objects to select from.
         * This list must not be null, nor can it have null entries.
         */
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

    /**
     * The intrinsic function Ref returns the value of the specified parameter or resource.
     */
    export class Ref extends BaseFunction {

        /** Refer to stack id. */
        static StackId: Ref = new Ref("AWS::StackId");
        /** Refer to stack name. */
        static StackName: Ref = new Ref("AWS::StackName");
        /** Refer to nortification ARN */
        static NotificationARNs: Ref = new Ref("AWS::NotificationARNs");
        /** Refer to region */
        static Region: Ref = new Ref("AWS::Region");

        private Reference: string;

        /**
         * Constructor
         * @param resource Refer to the resource.
         * @param parameter Refer to the parameter.
         * @param name Refer to named element.
         */
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
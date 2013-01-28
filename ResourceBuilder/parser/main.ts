/// <reference path="node.d.ts"/>

import fs = module("fs");
var strJson: string = fs.readFileSync("json/CloudFormationV1.schema.json", "utf-8");
var objJson: Object = JSON.parse(strJson);

var content: string = main();
fs.writeFileSync("Resources.ts", content, "UTF-8");

function main(): string {
    var retval: string = "";
    retval += "/// <reference path=\"BaseClasses.ts\"/>\r\n"
    retval += "\r\n";

    var objResources: Object = objJson['root-schema-object']['properties']['Resources']['child-schemas'];
    for (var elem in objResources) {
        var types: string[] = elem.split("::");
        var classname: string = types[types.length - 1];
        var modulename: string = "";
        {
            for (var i: number = 0; i < types.length - 1; i++) {
                if (i === types.length - 2) {
                    modulename += types[i];
                } else {
                    modulename += types[i] + ".";
                }
            }
        }

        var strProp: string = procProperties(modulename, classname, objResources[elem]);
        var strClass: string = procClass(modulename, classname, elem, objResources[elem], strProp);

        retval += strClass;
        retval += "\r\n\r\n";
    }

    return retval;
}

//------------------------------------------------

function procClass(modulename: string, classname: string, type: string, resource: Object, methods: string): string {
    var retval: string = "";
    retval += "module " + modulename + " {\r\n";
    retval += "\r\n";

    //comments
    var regexDescription = new RegExp("\\. +", "gm");
    retval += "/**\r\n";
    retval += " * " + (<string>resource["description"]).replace(regexDescription, ".\r\n * ") + "\r\n";
    if (resource["return-values"] != undefined) {
        retval += " * \r\n";
        retval += " * Return values\r\n";
        var rv: Object[] = resource["return-values"];
        for (var i = 0; i < rv.length; i++) {
            retval += " * " + rv[i]["name"] + ": " + rv[i]["description"].replace(new RegExp("\\. +", "gm"), ".\r\n * ") + "\r\n";
        }
    }
    retval += " */\r\n";

    //class body
    retval += "export class " + classname + " extends BaseResource {\r\n";
    retval += "\r\n";
    retval += "private Properties: Object = {};\r\n";
    retval += "\r\n";
    retval += "/**\r\n";
    retval += " * constructor\r\n";
    retval += " * @param name this resource name.\r\n";
    retval += " */\r\n";
    retval += "constructor(name: string) {\r\n";
    retval += "super(name, \"" + type + "\");\r\n";
    retval += "}\r\n";
    retval += "\r\n";
    retval += "\r\n";
    retval += methods;
    retval += "\r\n";
    retval += "}\r\n";
    retval += "}\r\n";
    return retval;
}

//------------------------------------------------

function procProperties(modulename: string, classname: string, resource: Object): string {

    var props = resource['properties']['Properties']['properties'];
    var requires: string[] = [];
    var retval: string = "";
    for (var p in props) {

        if (props[p]["required"] === true) {
            requires.push(p);
        }

        var args: Object = procPropertiesType(p, props);
        var argname: string = args["argname"];
        var argtype: string = args["argtype"];

        retval += "/**\r\n"
        retval += " * " + props[p]["description"].replace(new RegExp("\\. +", "gm"), ".\r\n * ") + "\r\n";
        retval += " * @param " + argname + " required : " + props[p]["required"] + "\r\n";
        retval += " */\r\n";
        retval += "set" + p + "(" + argname + ": " + argtype + "):" + classname + ";\r\n";
        retval += "set" + p + "(" + argname + ": AWS.Function.BaseFunction):" + classname + ";\r\n";
        retval += "set" + p + "(" + argname + ": any):" + classname + " {\r\n";
        retval += "this.Properties[\"" + p + "\"] = " + argname + ";\r\n"
        retval += "return this;\r\n";
        retval += "}\r\n";
        retval += "\r\n";
    }

    retval += "validate(errors:Object[]): Object[]{\r\n";
    if (requires.length != 0) {
        retval += "var requires: string[] = " + JSON.stringify(requires) + ";\r\n";
        retval += "\r\n";
        retval += "for (var i: number = 0; i < requires.length; i++) {\r\n";
        retval += "if (this.Properties[requires[i]] == undefined || this.Properties[requires[i]] == null) {\r\n";
        retval += "var err: Object = { \"Name\": this.getName(), \"Type\": this.getType(), \"Property\": requires[i], \"Description\": \"value is null or undefined.\" };\r\n";
        retval += "errors.push(err);\r\n";
        retval += "}\r\n";
        retval += "}\r\n";
    }
    retval += "return errors;\r\n";
    retval += "}\r\n";

    return retval;
}

function procPropertiesType(key: string, props: Object) {
    var retval: Object = {};

    var argname: string = key.replace(new RegExp("[a-z0-9]", "g"), "").toLocaleLowerCase();
    var argtype: string = props[key]["type"];

    var isarray: bool = argtype == "Array";
    var refType: string = props[key]["resource-ref-type"];
    if (refType === undefined) {
        if (isarray) {
            argtype = props[key]["array-type"];
        }
        console.log("$$$" + argtype);
        if (argtype === "String") {
            argtype = "string";
        } else if (argtype === "Number") {
            argtype = "number";
        } else if (argtype === "Boolean") {
            argtype = "bool";
        } else if (argtype === "Json" || argtype === "Policy") {
            argtype = "Object";
            argname = "jsonObj";
        } else if (argtype === "Reference") {
            console.log("##kita####" + argtype);
            argtype = "AWS.Function.Ref";
        } else if (argtype === "Object") {
            //argtype = "Object";
        } else {
            console.log("######" + argtype);
        }

        if (isarray) {
            argtype += "[]";
        }
    } else {
        argtype = "AWS.Function.Ref";
        argname = "ref";

        if (isarray) {
            argtype = argtype + "[]";
        }
    }

    retval["argname"] = argname;
    retval["argtype"] = argtype;
    return retval;
}

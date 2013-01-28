var fs = require("fs")
var strJson = fs.readFileSync("json/CloudFormationV1.schema.json", "utf-8");
var objJson = JSON.parse(strJson);
var content = main();
fs.writeFileSync("Resources.ts", content, "UTF-8");
function main() {
    var retval = "";
    retval += "/// <reference path=\"BaseClasses.ts\"/>\r\n";
    retval += "\r\n";
    var objResources = objJson['root-schema-object']['properties']['Resources']['child-schemas'];
    for(var elem in objResources) {
        var types = elem.split("::");
        var classname = types[types.length - 1];
        var modulename = "";
 {
            for(var i = 0; i < types.length - 1; i++) {
                if(i === types.length - 2) {
                    modulename += types[i];
                } else {
                    modulename += types[i] + ".";
                }
            }
        }
        var strProp = procProperties(modulename, classname, objResources[elem]);
        var strClass = procClass(modulename, classname, elem, objResources[elem], strProp);
        retval += strClass;
        retval += "\r\n\r\n";
    }
    return retval;
}
function procClass(modulename, classname, type, resource, methods) {
    var retval = "";
    retval += "module " + modulename + " {\r\n";
    retval += "\r\n";
    var regexDescription = new RegExp("\\. +", "gm");
    retval += "/**\r\n";
    retval += " * " + (resource["description"]).replace(regexDescription, ".\r\n * ") + "\r\n";
    if(resource["return-values"] != undefined) {
        retval += " * \r\n";
        retval += " * Return values\r\n";
        var rv = resource["return-values"];
        for(var i = 0; i < rv.length; i++) {
            retval += " * " + rv[i]["name"] + ": " + rv[i]["description"].replace(new RegExp("\\. +", "gm"), ".\r\n * ") + "\r\n";
        }
    }
    retval += " */\r\n";
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
function procProperties(modulename, classname, resource) {
    var props = resource['properties']['Properties']['properties'];
    var requires = [];
    var retval = "";
    for(var p in props) {
        if(props[p]["required"] === true) {
            requires.push(p);
        }
        var args = procPropertiesType(p, props);
        var argname = args["argname"];
        var argtype = args["argtype"];
        retval += "/**\r\n";
        retval += " * " + props[p]["description"].replace(new RegExp("\\. +", "gm"), ".\r\n * ") + "\r\n";
        retval += " * @param " + argname + " required : " + props[p]["required"] + "\r\n";
        retval += " */\r\n";
        retval += "set" + p + "(" + argname + ": " + argtype + "):" + classname + ";\r\n";
        retval += "set" + p + "(" + argname + ": AWS.Function.BaseFunction):" + classname + ";\r\n";
        retval += "set" + p + "(" + argname + ": any):" + classname + " {\r\n";
        retval += "this.Properties[\"" + p + "\"] = " + argname + ";\r\n";
        retval += "return this;\r\n";
        retval += "}\r\n";
        retval += "\r\n";
    }
    retval += "validate(errors:Object[]): Object[]{\r\n";
    if(requires.length != 0) {
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
function procPropertiesType(key, props) {
    var retval = {
    };
    var argname = key.replace(new RegExp("[a-z0-9]", "g"), "").toLocaleLowerCase();
    var argtype = props[key]["type"];
    var isarray = argtype == "Array";
    var refType = props[key]["resource-ref-type"];
    if(refType === undefined) {
        if(isarray) {
            argtype = props[key]["array-type"];
        }
        console.log("$$$" + argtype);
        if(argtype === "String") {
            argtype = "string";
        } else if(argtype === "Number") {
            argtype = "number";
        } else if(argtype === "Boolean") {
            argtype = "bool";
        } else if(argtype === "Json" || argtype === "Policy") {
            argtype = "Object";
            argname = "jsonObj";
        } else if(argtype === "Reference") {
            console.log("##kita####" + argtype);
            argtype = "AWS.Function.Ref";
        } else if(argtype === "Object") {
        } else {
            console.log("######" + argtype);
        }
        if(isarray) {
            argtype += "[]";
        }
    } else {
        argtype = "AWS.Function.Ref";
        argname = "ref";
        if(isarray) {
            argtype = argtype + "[]";
        }
    }
    retval["argname"] = argname;
    retval["argtype"] = argtype;
    return retval;
}
//@ sourceMappingURL=main.js.map

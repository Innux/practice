import config from "./config";
import * as Common from "./common";

const titleTmp = "<span class='title'>{{title}}</span>";
const checkboxTmp = "<label for='{{name}}_{{key}}'><input type='checkbox' value='{{value}}' name='{{name}}' id='{{name}}_{{key}}'/>{{text}}</label>";
//当前表单
const form={};
//初始化
const init = (form) => {
    for (var key in config) {
        var type = config[key].type;
        Common.render()

    }
}

const buildFormItem = (conf,name)=>{
    console.log(conf);
    if (!conf) return false;
    const html = [
        titleTmp.replace("{{title}}",conf.title)
    ];
    const tpl = checkboxTmp.replace("{{name}}",name);
    if (conf.type === "checkbox")
        html.push(tpl.replace())
}
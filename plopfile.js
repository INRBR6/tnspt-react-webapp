const requireField = fieldName => {
    return value => {
        if(!String(value).length){
            return `${fieldName} is required`;
        }
        return true;
    }
}

module.exports = plop => {
    plop.setGenerator("component", {
        description: "Create Reusable component",
        prompts: [{
            type: "input",
            name: "name",
            message: "What is your component name?",
            validate: requireField("name")
        }],
        actions:[{
            type: "add",
            path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
            templateFile:"plop-templates/component/Component.tsx.hbs"
        },{
            type: "add",
            path: "src/components/{{pascalCase name}}/types.ts",
            templateFile:"plop-templates/component/types.ts.hbs"
        },{
            type: "add",
            path: "src/components/{{pascalCase name}}/index.ts",
            templateFile:"plop-templates/component/index.ts.hbs"
        }]
    })
}
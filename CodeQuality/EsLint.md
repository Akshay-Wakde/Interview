--Install :  npm init eslint --save-dev
--RUN: npx eslint --init
--For single for check : npx eslint yourfile.js


after init one configuration file will be added into project


after npm install eslint
create eslintrc.json - for basic configuration rules.

Add scripts into package.json
"lint" : "eslint ."
"lint-fix" : "eslint . --fix"

to run : npm run lint   

EsLint Rules : 

"rules": {
    "indent": ["error",2],
    "linebreak-style":["error","unix"],
    "quotes":["error","double"],
    "semi":["error","always"]
}

1.It will find runtime error detection like undefined variable or variable delete, null object came and condition not handled.
2.Code consistency in team.

Questions
1.what are recommended rules from eslint
2.what are benifits of using eslint
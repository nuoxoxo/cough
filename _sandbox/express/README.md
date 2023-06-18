# env setup
- npm install `<dep>`
```sh
10018  cat package.json
10019  npm install -D typescript
10020  npm install -D ts-node
10021  npm install -D nodemon
```
- create tsconfig.json
```json
{
    "compilerOptions" : {
        "module": "NodeNext",
        "moduleResolution" : "node",
        "baseUrl" : "src",
        "outDir" : "dist",
        "sourceMap" : true,
        "noImplicitAny" : true
    },
    "include" : ["src/**/*"]
}
```
- create nodemon.json
```json
{
    "watch" : ["src"],
    "ext" : ".ts,.js",
    "exec" : "ts-node ./src/index.ts"
}
```
- fi. setup
```sh
$ npm start
```


const fs= require('fs');
const  path =require('path')
const parser=require('@babel/parser')
const traverser=require('@babel/traverse').default
const babel=require('@babel/core')

// TODO index.js import谁
function getModuleInfo(file) {
//    读取文集
    const body = fs.readFileSync(file,'utf-8')

//    文本=》对象 正则
//    抽象过程区分隔符 用对象表示
//    AST

    const ast=parser.parse(body,{
        sourceType:'module'
    })
    console.log('ast',ast)
//    分析 节点遍历 对象

    const deps={}
    traverse(ast,{
    //    访问者模式 访问所有import
        ImportDeclaration({node}){
             // /遇到import
           const dirname=path.dirname(file)
            const abspath='./'+path.join(dirname.node.source.value)
            deps[node.source.value]=abspath
        }
    })

//    ES6=>ES5
    const {code}=babel.transformFromAst(ast,null,{
        presets:['@babel/preset-env']
    })
    const  moduleInfo={
        file,
        deps,
        code
    }

    return moduleInfo

}
const  info=getModuleInfo('./index.js')
console.log('info',info)

function parseModule(file) {
    const entry=getModuleInfo(file)
    const temp=[entry]
    const depsGraph ={}
    getDeps(temp,entry)
    temp.forEach(info=>{
        depsGraph[info.file]={
            deps:info.deps,
            code:info.code
        }
    })
}

const deps=pa

function getDeps(temp,{deps}) {
    //deps={add,b,c}
    Object.keys(deps).forEach(key=>{
        const child=getModuleInfo(deps[key])
        temp.push(child)
        getDeps(temps,child)
    })
}

function bundle(file) {
    const  depsGraph=JSON.parse(parseModule())
}

!fs.existsSync('./dist')&&fd.mkdirSunc()
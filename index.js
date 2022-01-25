//modules
const asciiart=require('./modules/asciiart')
const automato=require('./modules/automata')
const readlinesync=require('readline-sync')
const menu=require('./modules/menu')
//datas
const user=require('./src/data/user.json')

function initializer(){
    console.log(asciiart.telaini())
    console.log(asciiart.avisos())
    
   user.n=readlinesync.question("user:")
   user.p=readlinesync.question("password:")
    control()
    
    

}
async function control(){
    console.log(menu())
    let comand=readlinesync.question("comando: ")
    
    switch(comand){
        case "1":
            await  automato.portema()
            control()
        break
        case "0":
            console.log("bye! ;)")
            break
    }
}


initializer()


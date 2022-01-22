//modules
const asciiart=require('./modules/asciiart')
const readlinesync=require('readline-sync')
const os=require('os')
//

function initializer(){
    console.log(asciiart.telaini())
    console.log(asciiart.avisos())
    console.log(os.version())
    

}


initializer()


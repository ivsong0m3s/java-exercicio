var entrada = require("readline-sync")

var numero = entrada.question(`Digite um numero: `)
if(numero >= 20 && numero <= 90){
    console.log(`NUMERO VALIDO`)
}else{
    console.log(`ESTE NUMERO NÃO É VALIDO`)
}

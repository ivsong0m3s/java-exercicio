var entrada = require("readline-sync")

var num1 = entrada.question(`Digite o 1 numero: `)
var num2 = entrada.question(`Digite o 2 numero: `)
if( num1 > num2){
    console.log(`O numero maior é`, num1)
}else{
    console.log(`O maior numero é`, num2)
}

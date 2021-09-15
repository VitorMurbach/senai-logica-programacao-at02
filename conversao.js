// 1 - celsius, 2 - kelvin, 3 - fahreith
var tempOrigem = 3
var tempDestino = 2
var temperatura = 36
var resultado = temperatura
if (tempOrigem == 1){
    if(tempDestino == 2){
        resultado = temperatura + 273
    } else if(tempDestino == 3){
        resultado = (9 * temperatura + 160) / 5
    } 
} else if ( tempOrigem == 2){
    if (tempDestino == 1){
        resultado = (5 * temperatura - 160) / 9 
    } else if ( tempDestino == 3){
        resultado = ((5 * temperatura - 160) / 9) + 273
    }
} else {
    if (tempDestino == 1){
        resultado = temperatura - 273
    } else if (tempDestino == 2){
        resultado = (((temperatura -273) * 9) + 160) / 5
    }
}
console.log(resultado)
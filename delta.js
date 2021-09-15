var a = 10
var b = 20
var c = 6
var delta = b ** 2 - 4 * a * c
console.log(delta)
if (delta < 0){
    console.log('Não é possível obter o x1 e x2!')
} else {
    var x1 = (- b + Math.sqrt(delta)) / (2 * a)
    var x2 = (- b - Math.sqrt(delta)) / (2 * a)
    console.log('Valor de X1', x1)
    console.log('Valor de X2',  x2)
    //console.log(`O valor de X1 é ${x1} e o valor de X2 é ${x2}`)
}

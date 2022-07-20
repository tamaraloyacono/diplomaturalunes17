//var miArray = [142, 5232, 324, 2, 13, 578, 7, 1099, 2794]

var numeroMayor = 0

var numero1 = prompt ("Introduzca el primer numero")
var numero2 = prompt ("Introduzca el segundo numero")
var numero3 = prompt ("Introduzca el tercer numero")
var numero4 = prompt ("Introduzca el cuarto numero")
var numero5 = prompt ("Introduzca el quinto numero")

var miArray = [parseInt(numero1), parseInt(numero2), parseInt(numero3), parseInt(numero4), parseInt(numero5)]

for (var i = 0; i <miArray.length ; i++) {
    //console.log (i)
    console.log (miArray[i])
    if (miArray[i] > numeroMayor){
        numeroMayor = miArray[i]
    }
}

//console.log (numeroMayor)
alert ("El numero mayor es " + numeroMayor)

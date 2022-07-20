//console.log("test")

var miDistancia = prompt("Por favor introduzca su distancia a destino")

if (miDistancia <1000) {
    alert("Mi distancia a destino es " + miDistancia + " metros entonces deberia ir a pie")  
} else if (miDistancia >= 1000 && miDistancia < 10000) {
    alert("Mi distancia a destino es " + miDistancia + " metros entonces deberia ir en bicicleta")
} else if (miDistancia >= 10000 && miDistancia < 30000) {
    alert("Mi distancia a destino es " + miDistancia + " metros entonces deberia ir en colectivo")
} else if (miDistancia >= 30000 && miDistancia <100000) {
    alert("Mi distancia a destino es " + miDistancia + " metros entoncesdeberia ir en en auto")
} else if (miDistancia >=100000) {
    alert("Mi distancia a destino es " + miDistancia + " metros entonces deberia ir en avion")
} else if (typeof miDistancia !== "number") {
    alert("Por favor introduzca una entrada valida")
}
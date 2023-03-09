const calculate = (inicio, final) => {
    //calcular para imprimir a doble cara en js

    inicio = parseInt(inicio)   //numero de hoja en la que inicia
    final = parseInt(final)     //numero de hoja en la que termina

    var resultado = ""

    //numeros de página a imprimir al frente
    resultado = pages(inicio, final)

    console.log("enfrente: ")
    console.log(resultado)

    inicio++
    final++
    resultado = ""

    //numeros de página a imprimir al reverso
    resultado = pages(inicio, final)

    console.log("reverso: ")
    console.log(resultado)
}

const pages = (inicio, final) => {
    var resultado = ""

    //numeros de página
    for(var p = inicio; p <= final; p+=2){
        resultado += p + ","
    }

    return resultado
}
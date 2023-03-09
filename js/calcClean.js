const calcular = (inicio, final) => {
    //calcular para imprimir a doble cara en js

    inicio = parseInt(inicio)   //numero de hoja en la que inicia
    final = parseInt(final)     //numero de hoja en la que termina

    var resultado = ""
    var resultadoCompleto = ""

    //numeros de página a imprimir al frente
    resultado = pages(inicio, final)

    resultadoCompleto += "enfrente: \n"
    resultadoCompleto += resultado
    resultadoCompleto += "\n"

    inicio++
    final++
    resultado = ""

    //numeros de página a imprimir al reverso
    resultado = pages(inicio, final)

    resultadoCompleto += "reverso: \n"
    resultadoCompleto += resultado

    console.log(resultadoCompleto)

    return resultadoCompleto
}

const pages = (inicio, final) => {
    var resultado = ""

    //numeros de página
    for(var p = inicio; p <= final; p+=2){
        resultado += p + ","
    }

    return resultado
}
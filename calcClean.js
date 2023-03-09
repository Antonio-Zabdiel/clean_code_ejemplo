const calculate = (inicio, final) => {
    //calcular para imprimir a doble cara en js

    inicio = parseInt(inicio)
    final = parseInt(final)

    var resultado = ""

    for(var p = inicio; p <= final; p+=2){
        resultado += p + ","
    }

    console.log("1, 3, 5, ...")
    console.log(resultado)

    inicio++
    final++
    resultado = ""

    for(var p = inicio; p <= final; p+=2){
        resultado += p + ","
    }
    console.log("2, 4, 6, ...")
    console.log(resultado)
}

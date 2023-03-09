function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    var reap = ""
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                resp = allText;
            }
        }
    }
    rawFile.send(null);
    return resp;
}

function showCode(text){
    document.getElementById("code").innerHTML = text
}

function showPages(pages){
    document.getElementById("pages").innerHTML = pages
}

document.getElementById("calcular").onclick = function(){
    var inicio = document.getElementById("inicio").value
    var final = document.getElementById("final").value
    showPages(calcular(inicio, final))
}


document.getElementById("sucioBoton").onclick = function(){
    showCode(readTextFile("./js/calc.js"))
}

document.getElementById("limpioBoton").onclick = function(){
    showCode(readTextFile("./js/calcClean.js"))
}


const func1 = (b, e) => {
var i = parseInt(b)
var f = parseInt(e)
var s = ""
for(var p = i; p <= f; p+=2){
    s += p + ","
}console.log("1, 3, 5, ...")
console.log(s)
i++
f++
var r = [s]
s = ""
for(var p = i; p <= f; p+=2){
    s += p + ","
}console.log("2, 4, 6, ...")
r[1] = s
console.log(s)
return r
}

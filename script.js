function start() {
    var op = prompt("que operação deseja realizar? +,-,*,/,**,%,!")
   
    if (op === "+") {
        var v1 = prompt("digite o primeiro valor")
        var v2 = prompt("digite o segundo valor")
        var v3 = (parseInt(v1) + parseInt(v2))
        alert("Seu resultado é: " + v3)
    }
    else if (op === "-") {
        var v1 = prompt("digite o primeiro valor")
        var v2 = prompt("digite o segundo valor")
        var v3 = (parseInt(v1) - parseInt(v2))
        alert("Seu resultado é: " + v3)
    }
    else if (op === "*") {
        var v1 = prompt("digite o primeiro valor")
        var v2 = prompt("digite o segundo valor")
        var v3 = (parseInt(v1) * parseInt(v2))
        alert("Seu resultado é: " + v3)
    }
    else if (op === "/") {
        var v1 = prompt("digite o primeiro valor")
        var v2 = prompt("digite o segundo valor")
        var v3 = (parseInt(v1) / parseInt(v2))
        alert("Seu resultado é: " + v3)
    }
    else if (op === "%") {
        var v1 = prompt("digite o primeiro valor")
        var v2 = prompt("digite o segundo valor")
        var v3 = ((parseInt(v1)/100) * parseInt(v2))
        alert("Seu resultado é: " + v3)
    }
    else if (op === "**") {
        var v1 = prompt("digite o primeiro valor")
        var v2 = prompt("digite o segundo valor")
        var v3 = (parseInt(v1) ** parseInt(v2))
        alert("Seu resultado é: " + v3)
    }
    else if (op === "!") {
        var v1 = prompt("digite o valor")
        if (v1 === 0){
            v2 = 1
            alert("Seu resultado é: " + v2)
        }
        else if (v1 < 0) {
            alert("Fatorial não é definido para números negativos")
        }
         v2 = 1
        for (let v3 = 1; v3<= v1; v3++ ) { v2 *= v3}
        alert("Seu resultado é: " + v2 )
    }
    else {
        alert("operação desconhecida")
    }
}
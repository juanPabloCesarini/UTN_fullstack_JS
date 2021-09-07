const main = (operacion) => {
    const n1 = parseFloat(document.calculadora.num1.value);
    const n2 = parseFloat(document.calculadora.num2.value);



    c = new Calculadora(n1, n2);
    switch (operacion) {
        case "sumar":
            document.getElementById("resultado").style.color = "#078BF3";
            document.getElementById("resultado").value = c.sumar();
            break;
        case "restar":
            if (c.restar() < 0) {
                document.getElementById("resultado").style.color = "red";
                document.getElementById("resultado").value = c.restar();
            } else {
                document.getElementById("resultado").style.color = "#078BF3";
                document.getElementById("resultado").value = c.restar();
            }
            break;
        case "multiplicar":
            document.getElementById("resultado").style.color = "#078BF3";
            document.getElementById("resultado").value = c.multiplicar();
            break;
        case "dividir":
            if (c.dividir() != Infinity) {
                document.getElementById("resultado").style.color = "#078BF3";
                document.getElementById("resultado").value = c.dividir();
            } else {
                document.getElementById("resultado").style.color = "red";
                document.getElementById("resultado").value = "ERROR"
            }
            break;
        default:
            break;
    }

}
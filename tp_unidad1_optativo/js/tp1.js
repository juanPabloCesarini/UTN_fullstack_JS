function mostrarPrecio() {
    const opcion = document.getElementById("seguro").value;
    switch (opcion) {
        case "Basico":
            document.getElementById("precio").innerHTML = "$ 100";
            break;
        case "Intermedio":
            document.getElementById("precio").innerHTML = "$ 1000";
            break;
        case "Premium":
            document.getElementById("precio").innerHTML = "$ 1500";
            break;
        default:
            document.getElementById("precio").innerHTML = "";
    }

}
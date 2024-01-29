function validar () {

    let listaCodigos = ["2AZ4JLGV", "48JTQY5D", "BBLM8T7N", "HDWRFE7C", "PFJPC4DN", "RFESZ3Q"];

var nombre = document.getElementById("nombre").value;
if(nombre === "" || nombre == null){
    alert("Debe ingresar un Nombre")
    return false;
}
var apellido =document.getElementById("apellido").value;
if(apellido === "" || apellido == null){
    alert("Debe ingresar un Apellido")
    return false;
}
var edad =document.getElementById("edad").value;
if(edad === "" || edad == null){
    alert("Debe ingresar una Edad")
    return false;
}

var email =document.getElementById("email").value;
if(email === "" || email == null){
    alert("Debe ingresar un Email")
    return false;
}


var code = document.getElementById("code").value;
if(code === "" || code == null){
    alert("Debe ingresar un Código")
    return false;
}

var code =document.getElementById("code").value;
if((listaCodigos.indexOf(code) >= 0) && (edad >17)){

    /* if(edad >17 || edad == null) */
    alert("Código Válido ¡Registro exitoso!");
    location.replace("./exito.html");
} else{
    alert("Debe ser mayor de 18 años.");
    location.replace("./error.html");
}


}

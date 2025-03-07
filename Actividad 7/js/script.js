function Comprobar() {
    let nota;
    nota= parseFloat(document.getElementById("caja").value);


    if (nota<0 || nota>10){
        //La nota no es valida (Es muy baja O muy alta)
        document.getElementById("resultado").innerHTML = "La nota que has puesto no es valida"
    }
    else {
        //Si es valida
        if (nota<5) {
            document.getElementById("resultado").innerHTML = "Suspenso"
        }
        else {
            document.getElementById("resultado").innerHTML = "Aprobado"
        }
    }
    
}
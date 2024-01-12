
let arreglo = ["", "", "", "", ""];

function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    if(arreglo[parseInt(ev.target.id)] == ""){
        let data = ev.dataTransfer.getData("text");
        arreglo[parseInt(ev.target.id)] = data;
        ev.target.appendChild(document.getElementById(data));
    }

if(arreglo[0] != "" && arreglo[1] != "" && arreglo[2] != "" && arreglo[3] != "" && arreglo[4] != ""){
    if(arreglo[0] == "Petalo" && arreglo[1] == "Ovulo" && arreglo[2] == "Estambre" && arreglo[3] == "Pistilo" && arreglo[4] == "Sepalo"){
        document.querySelector(".titulo").innerHTML = "MUY BIEN!!!";
    }
    else{
        document.querySelector(".titulo").innerHTML = "INTENTA DE NUEVO"
    }
}
}

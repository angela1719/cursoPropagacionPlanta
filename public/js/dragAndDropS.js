
let arreglo = ["", "", ""];

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

if(arreglo[0] != "" && arreglo[1] != "" && arreglo[2] != ""){
    if(arreglo[0] == "Onur" && arreglo[1] == "Grisly" && arreglo[2] == "Osiris"){
        document.querySelector("h1").innerHTML = "MUY BIEN!!!";
    }
    else{
        document.querySelector("h1").innerHTML = "INTENTA DE NUEVO"
    }
}
}

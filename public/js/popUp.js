const botonAbrirModal = document.querySelector("#btnAbrirModal");
const botonCerrarModal = document.querySelector("#btnCerrarModal");
const modal = document.querySelector("#modal");

botonAbrirModal.addEventListener("click", ()=>{
    modal.showModal();
})

botonCerrarModal.addEventListener("click", ()=>{
    modal.close();
})
console.log("¡Mi JavaScript está vinculado correctamente!");
window.addEventListener('load', () => {

// imagen1 que se va a arrastrar
let dragElement = document.getElementById("imagenArrastrar");

let isDragging = false;
let offsetX;
let offsetY;

// Agregar un evento de mousedown
dragElement.addEventListener("mousedown", function(event) {
  isDragging = true;
  offsetX = event.clientX - dragElement.getBoundingClientRect().left;
  offsetY = event.clientY - dragElement.getBoundingClientRect().top;
});

// Agregar un evento de mousemove
document.addEventListener("mousemove", function(event) {
  if (isDragging) {
    dragElement.style.left = event.clientX - offsetX + "px";
    dragElement.style.top = event.clientY - offsetY + "px";
  }
});

// Agregar un evento de mouseup
document.addEventListener("mouseup", function() {
  isDragging = false;
});

// imagen2 que se va a arrastrar
let dragElement2 = document.getElementById("imagenArrastrar2");
let isDragging2 = false;
let offsetX2;
let offsetY2;

// Agregar un evento de mousedown para la segunda imagen
dragElement2.addEventListener("mousedown", function(event) {
  isDragging2 = true;
  offsetX2 = event.clientX - dragElement2.getBoundingClientRect().left;
  offsetY2 = event.clientY - dragElement2.getBoundingClientRect().top;
});

document.addEventListener("mousemove", function(event) {
  if (isDragging2) {
    dragElement2.style.left = event.clientX - offsetX2 + "px";
    dragElement2.style.top = event.clientY - offsetY2 + "px";
  }
});

document.addEventListener("mouseup", function() {
  isDragging2 = false;

  // Comprobar si la imagen se soltó en el cuadroA
  let cuadroA = document.querySelector(".cuadroA");
  if (
    event.clientX > cuadroA.getBoundingClientRect().left &&
    event.clientX < cuadroA.getBoundingClientRect().right &&
    event.clientY > cuadroA.getBoundingClientRect().top &&
    event.clientY < cuadroA.getBoundingClientRect().bottom
  ) {
    // Si la imagen se soltó en el cuadroA, muestra una ventana emergente
    alert("¡Lo lograste!");
  }
});

// Párrafo para arrastrar
let dragParrafo = document.getElementById("parrafoArrastre");
let isDraggingDos = false;
let offsetXDos;
let offsetYDos;

// Agregar un evento de mousedown para el párrafo
dragParrafo.addEventListener("mousedown", function(event) {
  isDraggingDos = true;
  offsetXDos = event.clientX - dragParrafo.getBoundingClientRect().left;
  offsetYDos = event.clientY - dragParrafo.getBoundingClientRect().top;
});

// Agregar un evento de mousemove para el párrafo
document.addEventListener("mousemove", function(event) {
  if (isDraggingDos) {
    dragParrafo.style.left = event.clientX - offsetXDos + "px";
    dragParrafo.style.top = event.clientY - offsetYDos + "px";
  }
});

// Agregar un evento de mouseup para el párrafo
document.addEventListener("mouseup", function() {
  isDraggingDos = false;
});
})
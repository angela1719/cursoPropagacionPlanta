console.log("¡Mi JavaScript está vinculado correctamente!");
window.addEventListener('load', () => {

    // Obtener todos los elementos con la clase cajaPalabra
    const cajasPalabra = document.querySelectorAll(".cajaPalabra");
    
    let isDragging = false;
    let offsetX, offsetY, draggedElement;
    
    // Agregar eventos de mousedown a cada elemento cajaPalabra
    cajasPalabra.forEach(caja => {
      caja.addEventListener("mousedown", function (event) {
        isDragging = true;
        draggedElement = this;
        offsetX = event.clientX - this.getBoundingClientRect().left;
        offsetY = event.clientY - this.getBoundingClientRect().top;
        // Cambiar el estilo para indicar que el elemento está siendo arrastrado
        this.style.opacity = "0.5";
      });
    });
    
    // Agregar evento de mousemove al documento para seguir el arrastre
    document.addEventListener("mousemove", function (event) {
      if (isDragging && draggedElement) {
        draggedElement.style.left = event.clientX - offsetX + "px";
        draggedElement.style.top = event.clientY - offsetY + "px";
      }
    });
    
    // Agregar evento de mouseup al documento para finalizar el arrastre
    document.addEventListener("mouseup", function () {
      if (isDragging && draggedElement) {
        // Restaurar el estilo original
        draggedElement.style.opacity = "1";
        isDragging = false;
        draggedElement = null;
    
        // Comprobar si el elemento está sobre la estructura anatómica correspondiente
        const estructuraAnatomica = document.querySelector(".cuadroA");
        if (
          event.clientX > estructuraAnatomica.getBoundingClientRect().left &&
          event.clientX < estructuraAnatomica.getBoundingClientRect().right &&
          event.clientY > estructuraAnatomica.getBoundingClientRect().top &&
          event.clientY < estructuraAnatomica.getBoundingClientRect().bottom
        ) {
          // Si el elemento se soltó en la estructuraAnatomica, realiza acciones adicionales aquí
          alert("¡Palabra colocada correctamente!");
        }
      }
    });
    
})
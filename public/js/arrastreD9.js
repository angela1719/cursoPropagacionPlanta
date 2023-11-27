// archivo: public/js/arrastreD9.js
console.log("¡Mi JavaScript está vinculado correctamente!");

window.addEventListener('load', () => {
    const cajasPalabra = document.querySelectorAll(".cajaPalabra");
    const dropZones = document.querySelectorAll(".drop-zone");

    cajasPalabra.forEach((caja, index) => {
        let isDragging = false;
        let draggedElement;

        caja.addEventListener("mousedown", function (event) {
            isDragging = true;
            draggedElement = this;
            this.style.opacity = "0.5";
        });

        document.addEventListener("mousemove", function (event) {
            if (isDragging && draggedElement) {
                draggedElement.style.left = event.clientX - draggedElement.offsetWidth / 2 + "px";
                draggedElement.style.top = event.clientY - draggedElement.offsetHeight / 2 + "px";
            }
        });

        document.addEventListener("mouseup", function () {
            if (isDragging && draggedElement) {
                draggedElement.style.opacity = "1";
                isDragging = false;

                const dropZone = findDropZone(event.clientX, event.clientY);

                if (dropZone && !dropZone.hasChildNodes() && isDropZoneCorrect(dropZone, draggedElement)) {
                    const palabra = draggedElement.innerText;
                    dropZone.innerText = `¡${palabra} colocada correctamente!`;
                    alert(`¡${palabra} colocada correctamente!`);
                } else {
                    // La palabra no está en el drop-zone correcto, muestra un mensaje de error
                    alert("¡Intenta de nuevo!");
                }

                // Resetear la posición del elemento arrastrado
                draggedElement.style.left = "";
                draggedElement.style.top = "";
                draggedElement = null;
            }
        });
    });

    function findDropZone(x, y) {
        for (const dropZone of dropZones) {
            const dropZoneRect = dropZone.getBoundingClientRect();
            if (
                x > dropZoneRect.left &&
                x < dropZoneRect.right &&
                y > dropZoneRect.top &&
                y < dropZoneRect.bottom
            ) {
                return dropZone;
            }
        }
        return null;
    }

    function isDropZoneCorrect(dropZone, draggedElement) {
        const dropZoneIndex = parseInt(dropZone.dataset.target);
        const palabraIndex = parseInt(draggedElement.dataset.index);

        return dropZoneIndex === palabraIndex;
    }
});

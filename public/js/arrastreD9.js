// archivo: public/js/arrastreD9.js
console.log("¡Mi JavaScript está vinculado correctamente!");

window.addEventListener('load', () => {
    const cajasPalabra = document.querySelectorAll(".cajaPalabra");
    const dropZones = document.querySelectorAll(".drop-zone");

    cajasPalabra.forEach((caja, index) => {
        let isDragging = false;
        let offsetX, offsetY, draggedElement;

        caja.addEventListener("mousedown", function (event) {
            isDragging = true;
            draggedElement = this;
            offsetX = event.clientX - this.getBoundingClientRect().left;
            offsetY = event.clientY - this.getBoundingClientRect().top;
            this.style.opacity = "0.5";
        });

        document.addEventListener("mousemove", function (event) {
            if (isDragging && draggedElement) {
                draggedElement.style.left = event.clientX - offsetX + "px";
                draggedElement.style.top = event.clientY - offsetY + "px";
            }
        });

        document.addEventListener("mouseup", function () {
            if (isDragging && draggedElement) {
                draggedElement.style.opacity = "1";
                isDragging = false;

                const dropZone = findDropZone(event.clientX, event.clientY);

                if (dropZone && !dropZone.hasChildNodes()) {
                    const palabra = draggedElement.innerText;
                    dropZone.innerText = `¡${palabra} colocada correctamente!`;
                } else {
                    // La palabra no está en un drop-zone válido, resetea su posición
                    draggedElement.style.left = "";
                    draggedElement.style.top = "";
                }

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
});

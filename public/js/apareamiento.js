console.log("¡Mi JavaScript está vinculado Correctamente!");

window.addEventListener('load', () => {
    const draggableElements = document.querySelectorAll('.draggable');
    const droppableElements = document.querySelectorAll('.droppable');

    let draggedElement = null;
    let originalPosition = null;

    draggableElements.forEach((draggable) => {
        draggable.addEventListener('mousedown', (e) => {
            startDragging(e, draggable);
        });
    });

    droppableElements.forEach((droppable) => {
        droppable.addEventListener('dragover', dragOver);
        droppable.addEventListener('dragenter', dragEnter);
        droppable.addEventListener('dragleave', dragLeave);
        droppable.addEventListener('drop', drop);
    });

    function startDragging(e, element) {
        draggedElement = element;
        originalPosition = { x: draggedElement.offsetLeft, y: draggedElement.offsetTop };
        document.addEventListener('mousemove', dragElement);
        document.addEventListener('mouseup', stopDragging);
    }

    function dragElement(e) {
        if (!draggedElement) return;
        e.preventDefault();

        const x = e.clientX;
        const y = e.clientY;

        draggedElement.style.left = x + 'px';
        draggedElement.style.top = y + 'px';

        // Verificar si el elemento arrastrado está sobre un droppable correcto
        const dropTarget = getDropTarget(draggedElement);
        if (dropTarget) {
            dropTarget.classList.add('hovered');
        }
    }

    function stopDragging() {
        document.removeEventListener('mousemove', dragElement);
        document.removeEventListener('mouseup', stopDragging);

        if (draggedElement) {
            // Verificar si el elemento arrastrado está sobre un droppable correcto
            const dropTarget = getDropTarget(draggedElement);
            if (dropTarget) {
                dropTarget.appendChild(draggedElement);
                draggedElement.style.left = dropTarget.offsetLeft + 'px';
                draggedElement.style.top = dropTarget.offsetTop + 'px';
            } else {
                // Si no está sobre un droppable correcto, vuelve a la posición original
                draggedElement.style.left = originalPosition.x + 'px';
                draggedElement.style.top = originalPosition.y + 'px';
            }

            draggedElement = null;
            originalPosition = null;
        }
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter() {
        this.classList.add('hovered');
    }

    function dragLeave() {
        this.classList.remove('hovered');
    }

    function drop() {
        this.classList.remove('hovered');
    }

    function getDropTarget(draggedElement) {
        const dropTargets = document.querySelectorAll('.droppable');
        for (const dropTarget of dropTargets) {
            const rect = dropTarget.getBoundingClientRect();
            const x = event.clientX;
            const y = event.clientY;

            if (
                x >= rect.left &&
                x <= rect.right &&
                y >= rect.top &&
                y <= rect.bottom &&
                draggedElement.dataset.id === dropTarget.dataset.id
            ) {
                return dropTarget;
            }
        }

        return null;
    }
});

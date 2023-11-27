console.log("¡Mi JavaScript está vinculado Correctamente!");

window.addEventListener('load', () => {
    const draggableElements = document.querySelectorAll('.draggable');
    const droppableElements = document.querySelectorAll('.droppable');

    let draggedElement = null;

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
    }

    function stopDragging() {
        document.removeEventListener('mousemove', dragElement);
        document.removeEventListener('mouseup', stopDragging);
        draggedElement = null;
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
        if (draggedElement) {
            this.appendChild(draggedElement);
            draggedElement = null;
        }
    }
});

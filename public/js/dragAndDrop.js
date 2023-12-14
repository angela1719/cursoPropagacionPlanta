console.log("¡Mi JavaScript está vinculado correctamente!");
window.addEventListener('load', () => {

    // DRAG

    const dragRosa = document.querySelector(".rosa");

    dragRosa.addEventListener('dragstart' , e => {
        console.log('Drag start');
    });

    dragRosa.addEventListener('dragend' , e => {
        console.log('Drag end');
    });

    dragRosa.addEventListener('drag' , e => {
        console.log('Drag');
    });

    const dragAzul = document.querySelector(".azul");

    dragAzul.addEventListener('dragstart' , e => {
        console.log('Drag start');
    });

    dragAzul.addEventListener('dragend' , e => {
        console.log('Drag end');
    });

    dragAzul.addEventListener('drag' , e => {
        console.log('Drag');
    });

    const dragMorado = document.querySelector(".morado");

    dragMorado.addEventListener('dragstart' , e => {
        console.log('Drag start');
    });

    dragMorado.addEventListener('dragend' , e => {
        console.log('Drag end');
    });

    dragMorado.addEventListener('drag' , e => {
        console.log('Drag');
    });

    // DROP

    const dropRosa = document.querySelector(".rosaDrop");

    dropRosa.addEventListener('dragenter' , e => {
        console.log('Drag enter')
    });

    dropRosa.addEventListener('dragleave' , e => {
        console.log('Drag Leave')
    });
    dropRosa.addEventListener('dragover' , e => {
        e.preventDefault();
        console.log('Drag Over')
    });
    dropRosa.addEventListener('drop' , e => {
        console.log('Drop');
        dropRosa.appendChild(dragRosa)
    });


})
window.onload = function() {
    // Obtener los elementos de los enlaces y las secciones de contenido
    let enlace1 = document.getElementById('enlace_1');
    let contenido1 = document.getElementById('contenidos_1');

    let enlace2 = document.getElementById('enlace_2');
    let contenido2 = document.getElementById('contenidos_2');

    let enlace3 = document.getElementById('enlace_3');
    let contenido3 = document.getElementById('contenidos_3');

    // Función que alterna el contenido y cambia el texto del enlace
    function toggleContent(enlace, contenido) {
        if (contenido.style.display === 'none') {
            contenido.style.display = 'block';  // Mostrar el contenido
            enlace.innerHTML = 'Ocultar contenidos';  // Cambiar el texto del enlace
        } else {
            contenido.style.display = 'none';  // Ocultar el contenido
            enlace.innerHTML = 'Mostrar contenidos';  // Cambiar el texto del enlace
        }
    }

    // Asignar eventos click a los enlaces
    enlace1.onclick = function(event) {
        event.preventDefault();  // Evitar que el enlace recargue la página
        toggleContent(enlace1, contenido1);  // Alternar contenido del primer enlace
    };

    enlace2.onclick = function(event) {
        event.preventDefault();  // Evitar que el enlace recargue la página
        toggleContent(enlace2, contenido2);  // Alternar contenido del segundo enlace
    };

    enlace3.onclick = function(event) {
        event.preventDefault();  // Evitar que el enlace recargue la página
        toggleContent(enlace3, contenido3);  // Alternar contenido del tercer enlace
    };
};

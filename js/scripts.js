// obtiene los enlaces del menú
var links = document.querySelectorAll('.navbar-nav a');

// para cada enlace del menú...
links.forEach(function(link) {
  // cuando se hace clic en el enlace...
  link.addEventListener('click', function(event) {
    
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    var target = link.getAttribute('href'); // Obtiene el destino del enlace
    var section = document.querySelector(target); // Encuentra la sección correspondiente
  
    // Oculta todas las secciones y muestra solo la seleccionada
    document.querySelectorAll('section').forEach(function(section) {
      section.style.display = 'none';
    });

    section.style.display = 'block';
    
    // Cierra el menú
    document.querySelector('.navbar-toggler').click();
  });
});


// Inicializar tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// Selecciona la imagen y el audio
const imagen = document.getElementById('imagen');
const audio = document.getElementById('audio');

// Agrega un event listener al hacer clic en la imagen
imagen.addEventListener('click', function() {
  // Reproduce el audio
  audio.play();
});
document.addEventListener("DOMContentLoaded", function () {
    // Lógica de animación para las frases en frases.js
    var frases = document.querySelectorAll('.frase'); // selecciona todas las frases

    // Establecer la opacidad a 0 para evitar parpadeo
    anime.set(frases, { opacity: 0 });

    // Mostrar las frases una por una después de que aparece el nombre "Aracely"
    mostrarFrasesConRetraso();
});

function mostrarFrasesConRetraso() {
    var frases = document.querySelectorAll('.frase');

    frases.forEach(function (frase, index) {
        // Calcula el retraso en base al índice
        var delay = index * 1000; // Ajusta el tiempo según tus necesidades

        // Muestra la frase con el retraso calculado
        mostrarFraseConRetraso(frase, delay);
    });
}

function mostrarFraseConRetraso(frase, delay) {
    anime.timeline({
        easing: 'easeInOutQuad'
    }).add({
        targets: frase,
        opacity: [0, 1],
        translateY: ['-20px', '0px'],
        duration: 1000,
        delay: delay
    });
}

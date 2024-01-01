document.addEventListener("DOMContentLoaded", function () {
    // Inicialmente, oculta el título, el deseo, y el nombre Aracely
    ocultarElementos();

    function ocultarElementos() {
        var elementos = document.querySelectorAll('.frase, #titulo, #deseo, #ara');
        anime.set(elementos, { opacity: 0 });

        // Después de un breve retraso, muestra "Feliz Año Nuevo" gradualmente
        setTimeout(mostrarFelizAnoNuevo, 500);
    }

    function mostrarFelizAnoNuevo() {
        var titulo = document.getElementById('titulo');
        anime({
            targets: titulo,
            opacity: [0, 1],
            translateY: ['-20px', '0px'],
            duration: 1000,
            easing: 'easeInOutQuad',
            complete: mostrarSaludoYAracely
        });
    }

    function mostrarSaludoYAracely() {
        var deseo = document.getElementById('deseo');
        var aracely = document.getElementById('ara');
        var container = document.getElementById('container');

        anime.timeline({
            easing: 'easeInOutQuad'
        }).add({
            targets: deseo,
            opacity: [0, 1],
            translateY: ['-20px', '0px'],
            duration: 1000
        }).add({
            targets: aracely,
            opacity: [0, 1],
            translateY: ['-20px', '0px'],
            duration: 1000,
            complete: function() {
                // Oculta todo el contenedor antes de mostrar las nuevas frases
                anime({
                    targets: container,
                    opacity: 0,
                    duration: 1000,
                    easing: 'easeInOutQuad',
                    complete: function() {
                        anime.set(container, { visibility: 'hidden' });
                        mostrarNuevasFrases();
                    }
                });
            }
        });
    }

    function mostrarNuevasFrases() {
        var idsFrases = ['frase1', 'frase2', 'frase3', 'frase4', 'frase5'];
        var finalMessage = document.getElementById('final-message');

        // Oculta todas las frases al principio
        idsFrases.forEach(function (id) {
            var frase = document.getElementById(id);
            frase.style.opacity = 0;
        });

        // Función para mostrar una frase
        function mostrarFrase(id, index) {
            var frase = document.getElementById(id);
            anime({
                targets: frase,
                opacity: [0, 1],
                translateY: ['-20px', '0px'],
                duration: 2000,
                easing: 'easeInOutQuad',
                begin: function() {
                    frase.style.display = 'block';
                },
                complete: function() {
                    // Oculta la frase después de mostrarla
                    anime({
                        targets: frase,
                        opacity: 0,
                        duration: 2000,
                        easing: 'easeInOutQuad',
                        complete: function() {
                            frase.style.display = 'none';
                            // Muestra la siguiente frase
                            if (index < idsFrases.length - 1) {
                                mostrarFrase(idsFrases[index + 1], index + 1);
                            } else {
                                // Después de mostrar todas las frases, muestra el mensaje final
                                mostrarMensajeFinal();
                            }
                        }
                    });
                }
            });
        }

        // Comienza mostrando la primera frase
        mostrarFrase(idsFrases[0], 0);
    }
    function mostrarMensajeFinal() {
        var finalMessage = document.getElementById('final-message');
        anime({
            targets: finalMessage,
            opacity: [0, 1],
            translateY: ['-20px', '0px'],
            duration: 2000,
            easing: 'easeInOutQuad',
            begin: function() {
                finalMessage.style.display = 'block';
            }
        });
    }

    
    // Llama a la función para iniciar la animación
    ocultarElementos();
});

















    



// var opciones = ["piedra", "papel", "tijera"];
var opciones = [0, 1, 2];
var eleccionMaquina;
var contadorHumano = 1;
var contadorMaquina = 1;

function aleatorio(min, max){
    var numero = Math.floor(Math.random() * (max - min +1) + min);
    return numero;
}

function Humano(eleccionHumano) {
    eleccionHumano = parseInt(eleccionHumano);
    eleccionMaquina = aleatorio(0,2);
    document.getElementById('descriptiveText').innerHTML = '(click in one of 3 options to continue playing!)';

    if(eleccionHumano == 0) { // humano eligió piedra 
        document.getElementById('user').src='svg/rockstar_main.svg';
        
        if (opciones[eleccionMaquina] == 1) { // maquina eligio papel 
            var contador = document.getElementById('textoResultado');
            contador.innerHTML = 'YOU LOOSE!';
            contador.style.color = 'var(--rojo)';
            document.getElementById('contadorM').innerHTML = 'MACHINE';
            document.getElementById('numberCounterM').innerHTML = contadorMaquina++;
            document.getElementById('robot').src='svg/toilet-paper_main.svg';
        } else {
            if (opciones[eleccionMaquina] == 2) { // maquina eligio tijera 
                var contador = document.getElementById('textoResultado');
                contador.innerHTML = 'YOU WIN!';
                contador.style.color = 'var(--verde)';
                document.getElementById('contadorH').innerHTML = 'HUMAN';
                document.getElementById('numberCounterH').innerHTML = contadorHumano++;
                document.getElementById('robot').src='svg/scissor_main.svg';
            } else {
                if (opciones[eleccionMaquina] == 0) { // maquina eligio piedra 
                    var contador = document.getElementById('textoResultado');
                    contador.innerHTML = 'IT\'S A TIE!';
                    contador.style.color = 'var(--blanco)';
                    document.getElementById('robot').src='svg/rockstar_main.svg';
                }
            }
        } 
    }

    if (eleccionHumano == 1) { // humano eligió papel 
        document.getElementById('user').src='svg/toilet-paper_main.svg';
        if (opciones[eleccionMaquina] == 2) { // máquina eligió tijera 
            var contador = document.getElementById('textoResultado');
            contador.innerHTML = 'YOU LOOSE!';
            contador.style.color = 'var(--rojo)';
            document.getElementById('contadorM').innerHTML = 'MACHINE';
            document.getElementById('numberCounterM').innerHTML = contadorMaquina++;
            document.getElementById('robot').src='svg/scissor_main.svg';
        } else {
            if (opciones[eleccionMaquina] == 0) { // máquina eligió piedra 
                var contador = document.getElementById('textoResultado');
                contador.innerHTML = 'YOU WIN!';
                contador.style.color = 'var(--verde)';
                document.getElementById('contadorH').innerHTML = 'HUMAN';
                document.getElementById('numberCounterH').innerHTML = contadorHumano++;
                document.getElementById('robot').src='svg/rockstar_main.svg';
            } else {
                if (opciones[eleccionMaquina] == 1) { // máquina eligió papel 
                    var contador = document.getElementById('textoResultado');
                    contador.innerHTML = 'IT\'S A TIE!';
                    contador.style.color = 'var(--blanco)';
                    document.getElementById('robot').src='svg/toilet-paper_main.svg';
                }
            }
        }
    }

    if (eleccionHumano == 2) { // humano eligió tijera 
        document.getElementById('user').src='svg/scissor_main.svg';
        if (opciones[eleccionMaquina] == 1) { // máquina eligió papel 
            var contador = document.getElementById('textoResultado');
                contador.innerHTML = 'YOU WIN!';
                contador.style.color = 'var(--verde)';
                document.getElementById('contadorH').innerHTML = 'HUMAN';
                document.getElementById('numberCounterH').innerHTML = contadorHumano++;
                document.getElementById('robot').src='svg/toilet-paper_main.svg';
        
        } else {
            if (opciones[eleccionMaquina] == 0) { // máquina eligió piedra 
                var contador = document.getElementById('textoResultado');
                contador.innerHTML = 'YOU LOOSE!';
                contador.style.color = 'var(--rojo)';
                document.getElementById('contadorM').innerHTML = 'MACHINE';
                document.getElementById('numberCounterM').innerHTML = contadorMaquina++;
                document.getElementById('robot').src='svg/rockstar_main.svg';
 
            } else {
                if (opciones[eleccionMaquina] == 2) { // máquina eligió tijera 
                    var contador = document.getElementById('textoResultado');
                    contador.innerHTML = 'IT\'S A TIE!';
                    contador.style.color = 'var(--blanco)';
                    document.getElementById('robot').src='svg/scissor_main.svg';
                }
            }
        }
    }
    if (contadorHumano > contadorMaquina) {
        document.getElementById('contadorH').style.color = 'var(--verde)';
        document.getElementById('contadorM').style.color = 'var(--rojo)';
        document.getElementById('numberCounterH').style.color = 'var(--verde)';
        document.getElementById('numberCounterM').style.color = 'var(--rojo)';
    } else {
        if (contadorHumano < contadorMaquina) {
            document.getElementById('contadorH').style.color = 'var(--rojo)';
            document.getElementById('contadorM').style.color = 'var(--verde)';
            document.getElementById('numberCounterH').style.color = 'var(--rojo)';
            document.getElementById('numberCounterM').style.color = 'var(--verde)';
    } else {
        document.getElementById('contadorH').style.color = 'var(--blanco)';
        document.getElementById('contadorM').style.color = 'var(--blanco)';
        document.getElementById('numberCounterH').style.color = 'var(--blanco)';
        document.getElementById('numberCounterM').style.color = 'var(--blanco)';
    }
    };
    if (contadorHumano > 3) {
            var finalBackgound = document.getElementById('efecto');
            finalBackgound.style.display = 'block';
            finalBackgound.style.backgroundColor = 'rgba(var(--verde-RGB), 0.8)';
            finalBackgound.innerHTML = 'YOU WIN!!' + '<br><h3>' + 'Human: ' + (contadorHumano - 1) + '<br>Machine: ' + (contadorMaquina - 1) + '<h3>';
            ;
    } else {
        if (contadorMaquina > 3) {
            var finalBackgound = document.getElementById('efecto');
            finalBackgound.style.display = 'block';
            finalBackgound.style.backgroundColor = 'rgba(var(--rojo-RGB), 0.8)';
            finalBackgound.innerHTML = 'YOU LOSE!!' + '<br><h3>' + 'Human: ' + (contadorHumano - 1) + '<br>Machine: ' + (contadorMaquina - 1) + '<h3>';
            
        }
    }
}
function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
    location.reload();
}
function funcionRecarga() {
    location.reload();
}
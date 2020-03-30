//var opciones = ["piedra", "papel", "tijera"];
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
    //alert(eleccionUsuario);
    //alert(eleccionMaquina);

    if(eleccionHumano == 0) { //el usuario eligio piedra 
        document.getElementById('user').src='svg/rockstar_main.svg';
        if (opciones[eleccionMaquina] == 1) { //si la maquina eligio papel 
            var contador = document.getElementById('textoResultado');
            contador.innerHTML = 'YOU LOOSE!';
            contador.style.color = 'var(--rojo)';
            document.getElementById('contadorM').innerHTML = 'MACHINE';
            document.getElementById('numberCounterM').innerHTML = contadorMaquina++;
            document.getElementById('robot').src='svg/toilet-paper_main.svg';
            // document.body.style.backgroundColor = 'pink';
        } else {
            if (opciones[eleccionMaquina] == 2) { //si la maquina eligio tijera 
                var contador = document.getElementById('textoResultado');
                contador.innerHTML = 'YOU WIN!';
                contador.style.color = 'var(--verde)';
                document.getElementById('contadorH').innerHTML = 'HUMAN';
                document.getElementById('numberCounterH').innerHTML = contadorHumano++;
                document.getElementById('robot').src='svg/scissor_main.svg';
                // document.body.style.backgroundColor = 'yellow';
            } else {
                if (opciones[eleccionMaquina] == 0) { //si la maquina eligio piedra 
                    var contador = document.getElementById('textoResultado');
                    contador.innerHTML = 'IT\'S A TIE!';
                    contador.style.color = 'var(--blanco)';
                    document.getElementById('robot').src='svg/rockstar_main.svg';
                    // document.body.style.backgroundColor = 'brown';
                }
            }
        } 
    }

    if (eleccionHumano == 1) { //el usuario eligio papel 
        document.getElementById('user').src='svg/toilet-paper_main.svg';
        if (opciones[eleccionMaquina] == 2) { //si la maquina eligio tijera 
            var contador = document.getElementById('textoResultado');
            contador.innerHTML = 'YOU LOOSE!';
            contador.style.color = 'var(--rojo)';
            document.getElementById('contadorM').innerHTML = 'MACHINE';
            document.getElementById('numberCounterM').innerHTML = contadorMaquina++;
            document.getElementById('robot').src='svg/scissor_main.svg';
        } else {
            if (opciones[eleccionMaquina] == 0) { //si la maquina eligio piedra 
                var contador = document.getElementById('textoResultado');
                contador.innerHTML = 'YOU WIN!';
                contador.style.color = 'var(--verde)';
                document.getElementById('contadorH').innerHTML = 'HUMAN';
                document.getElementById('numberCounterH').innerHTML = contadorHumano++;
                document.getElementById('robot').src='svg/rockstar_main.svg';
            } else {
                if (opciones[eleccionMaquina] == 1) { //si la maquina eligio papel 
                    var contador = document.getElementById('textoResultado');
                    contador.innerHTML = 'IT\'S A TIE!';
                    contador.style.color = 'var(--blanco)';
                    document.getElementById('robot').src='svg/toilet-paper_main.svg';
                }
            }
        }
    }

    if (eleccionHumano == 2) { //el usuario eligio tijera 
        document.getElementById('user').src='svg/scissor_main.svg';
        if (opciones[eleccionMaquina] == 1) { //si la maquina eligio papel 
            var contador = document.getElementById('textoResultado');
                contador.innerHTML = 'YOU WIN!';
                contador.style.color = 'var(--verde)';
                document.getElementById('contadorH').innerHTML = 'HUMAN';
                document.getElementById('numberCounterH').innerHTML = contadorHumano++;
                document.getElementById('robot').src='svg/toilet-paper_main.svg';
        
        } else {
            if (opciones[eleccionMaquina] == 0) { //si la maquina eligio piedra 
                var contador = document.getElementById('textoResultado');
                contador.innerHTML = 'YOU LOOSE!';
                contador.style.color = 'var(--rojo)';
                document.getElementById('contadorM').innerHTML = 'MACHINE';
                document.getElementById('numberCounterM').innerHTML = contadorMaquina++;
                document.getElementById('robot').src='svg/rockstar_main.svg';
 
            } else {
                if (opciones[eleccionMaquina] == 2) { //si la maquina eligio tijera 
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
}
   //  document.getElementById('efecto').style.display = "";


function funcionRecarga() {
    location.reload();
}

// function quitarEfecto() {
   // document.getElementById('efecto').style.display = "none";
//}
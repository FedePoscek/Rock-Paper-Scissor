// var opciones = ["piedra", "papel", "tijera"];
var opciones = [0, 1, 2];
var choiceMachine;
var counterHuman = 1;
var counterMachine = 1;

function aleatorio(min, max){
    var numero = Math.floor(Math.random() * (max - min +1) + min);
    return numero;
}

function Humano(choiceHuman) {
    choiceHuman = parseInt(choiceHuman);
    choiceMachine = aleatorio(0,2);
    document.getElementById('descriptiveText').innerHTML = '(click in one of 3 options to continue playing!)';

    if(choiceHuman == 0) { // humano eligió piedra 
        document.getElementById('user').src='svg/rockstar_main.svg';
        
        if (opciones[choiceMachine] == 1) { // maquina eligio papel 
            var counter = document.getElementById('textoResultado');
            counter.innerHTML = 'YOU LOOSE!';
            counter.style.color = 'var(--rojo)';
            document.getElementById('counterM').innerHTML = 'MACHINE';
            document.getElementById('numberCounterM').innerHTML = counterMachine++;
            document.getElementById('robot').src='svg/toilet-paper_main.svg';
        } else {
            if (opciones[choiceMachine] == 2) { // maquina eligio tijera 
                var counter = document.getElementById('textoResultado');
                counter.innerHTML = 'YOU WIN!';
                counter.style.color = 'var(--verde)';
                document.getElementById('counterH').innerHTML = 'HUMAN';
                document.getElementById('numberCounterH').innerHTML = counterHuman++;
                document.getElementById('robot').src='svg/scissor_main.svg';
            } else {
                if (opciones[choiceMachine] == 0) { // maquina eligio piedra 
                    var counter = document.getElementById('textoResultado');
                    counter.innerHTML = 'IT\'S A TIE!';
                    counter.style.color = 'var(--blanco)';
                    document.getElementById('robot').src='svg/rockstar_main.svg';
                }
            }
        } 
    }

    if (choiceHuman == 1) { // humano eligió papel 
        document.getElementById('user').src='svg/toilet-paper_main.svg';
        if (opciones[choiceMachine] == 2) { // máquina eligió tijera 
            var counter = document.getElementById('textoResultado');
            counter.innerHTML = 'YOU LOOSE!';
            counter.style.color = 'var(--rojo)';
            document.getElementById('counterM').innerHTML = 'MACHINE';
            document.getElementById('numberCounterM').innerHTML = counterMachine++;
            document.getElementById('robot').src='svg/scissor_main.svg';
        } else {
            if (opciones[choiceMachine] == 0) { // máquina eligió piedra 
                var counter = document.getElementById('textoResultado');
                counter.innerHTML = 'YOU WIN!';
                counter.style.color = 'var(--verde)';
                document.getElementById('counterH').innerHTML = 'HUMAN';
                document.getElementById('numberCounterH').innerHTML = counterHuman++;
                document.getElementById('robot').src='svg/rockstar_main.svg';
            } else {
                if (opciones[choiceMachine] == 1) { // máquina eligió papel 
                    var counter = document.getElementById('textoResultado');
                    counter.innerHTML = 'IT\'S A TIE!';
                    counter.style.color = 'var(--blanco)';
                    document.getElementById('robot').src='svg/toilet-paper_main.svg';
                }
            }
        }
    }

    if (choiceHuman == 2) { // humano eligió tijera 
        document.getElementById('user').src='svg/scissor_main.svg';
        if (opciones[choiceMachine] == 1) { // máquina eligió papel 
            var counter = document.getElementById('textoResultado');
                counter.innerHTML = 'YOU WIN!';
                counter.style.color = 'var(--verde)';
                document.getElementById('counterH').innerHTML = 'HUMAN';
                document.getElementById('numberCounterH').innerHTML = counterHuman++;
                document.getElementById('robot').src='svg/toilet-paper_main.svg';
        
        } else {
            if (opciones[choiceMachine] == 0) { // máquina eligió piedra 
                var counter = document.getElementById('textoResultado');
                counter.innerHTML = 'YOU LOOSE!';
                counter.style.color = 'var(--rojo)';
                document.getElementById('counterM').innerHTML = 'MACHINE';
                document.getElementById('numberCounterM').innerHTML = counterMachine++;
                document.getElementById('robot').src='svg/rockstar_main.svg';
 
            } else {
                if (opciones[choiceMachine] == 2) { // máquina eligió tijera 
                    var counter = document.getElementById('textoResultado');
                    counter.innerHTML = 'IT\'S A TIE!';
                    counter.style.color = 'var(--blanco)';
                    document.getElementById('robot').src='svg/scissor_main.svg';
                }
            }
        }
    }
    if (counterHuman > counterMachine) {
        document.getElementById('counterH').style.color = 'var(--verde)';
        document.getElementById('counterM').style.color = 'var(--rojo)';
        document.getElementById('numberCounterH').style.color = 'var(--verde)';
        document.getElementById('numberCounterM').style.color = 'var(--rojo)';
    } else {
        if (counterHuman < counterMachine) {
            document.getElementById('counterH').style.color = 'var(--rojo)';
            document.getElementById('counterM').style.color = 'var(--verde)';
            document.getElementById('numberCounterH').style.color = 'var(--rojo)';
            document.getElementById('numberCounterM').style.color = 'var(--verde)';
    } else {
        document.getElementById('counterH').style.color = 'var(--blanco)';
        document.getElementById('counterM').style.color = 'var(--blanco)';
        document.getElementById('numberCounterH').style.color = 'var(--blanco)';
        document.getElementById('numberCounterM').style.color = 'var(--blanco)';
    }
    };
    if (counterHuman > 3) {
            var finalBackground = document.getElementById('finalScreen');
            finalBackground.style.display = 'block';
            finalBackground.style.backgroundColor = 'rgba(var(--verde-RGB), 0.8)';
            finalBackground.innerHTML = '<h1>YOU WIN!!</h1>' + '<br><h2>' + 'Human: ' + (counterHuman - 1) + '<br>Machine: ' + (counterMachine - 1) + '<h2>' + '<h4>Click anywhere to play again!</h4>';;
    } else {
        if (counterMachine > 3) {
            var finalBackground = document.getElementById('finalScreen');
            finalBackground.style.display = 'block';
            finalBackground.style.backgroundColor = 'rgba(var(--rojo-RGB), 0.8)';
            finalBackground.innerHTML = '<h1>YOU LOSE!!</h1>' + '<br><h2>' + 'Human: ' + (counterHuman - 1) + '<br>Machine: ' + (counterMachine - 1) + '<h2>' + '<h3>Click anywhere to play again!</h3>';
        }
    }
}
function functionFinalScreen() {
    document.getElementById('finalScreen').style.display = "none";
    location.reload();
}
function reloadGame() {
    location.reload();
}
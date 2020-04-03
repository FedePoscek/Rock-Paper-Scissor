// var options = ["piedra", "papel", "tijera"];

var options = [0, 1, 2];
var choiceMachine;
var counterHuman = 1;
var counterMachine = 1;

function randomNumber(min, max){
    var number = Math.floor(Math.random() * (max - min +1) + min);
    return number;
}

function Humano(choiceHuman) {

    choiceHuman = parseInt(choiceHuman);
    choiceMachine = randomNumber(0,2);

    var counter = document.getElementById('textoResultado');
    var counterM = document.getElementById('counterM');
    var counterH = document.getElementById('counterH');
    var numberCounterM = document.getElementById('numberCounterM');
    var numberCounterH = document.getElementById('numberCounterH');
    var finalBackground = document.getElementById('finalScreen');
    var user = document.getElementById('user');
    var robot = document.getElementById('robot');

    document.getElementById('descriptiveText').innerHTML = '(click in one of 3 options to continue playing!)';

        if(choiceHuman == 0) { // humano eligió piedra 
            user.src='svg/rockstar_main.svg';
            if (options[choiceMachine] == 1) { // máquina eligió papel 
                counter.innerHTML = 'YOU LOST!';
                counter.style.color = 'var(--rojo)';
                counterM.innerHTML = 'MACHINE';
                numberCounterM.innerHTML = counterMachine++;
                robot.src='svg/toilet-paper_main.svg';
            } else {
                if (options[choiceMachine] == 2) { // máquina eligió  tijera 
                    counter.innerHTML = 'YOU WON!';
                    counter.style.color = 'var(--verde)';
                    counterH.innerHTML = 'HUMAN';
                    numberCounterH.innerHTML = counterHuman++;
                    robot.src='svg/scissor_main.svg';
                } else {
                    if (options[choiceMachine] == 0) { // máquina eligió piedra 
                        counter.innerHTML = 'IT\'S A TIE!';
                        counter.style.color = 'var(--blanco)';
                        robot.src='svg/rockstar_main.svg';
                    }
                }
            } 
        }

        if (choiceHuman == 1) { // humano eligió papel 
            user.src='svg/toilet-paper_main.svg';
            if (options[choiceMachine] == 2) { // máquina eligió tijera 
                counter.innerHTML = 'YOU LOST!';
                counter.style.color = 'var(--rojo)';
                counterM.innerHTML = 'MACHINE';
                numberCounterM.innerHTML = counterMachine++;
                robot.src='svg/scissor_main.svg';
            } else {
                if (options[choiceMachine] == 0) { // máquina eligió piedra 
                    counter.innerHTML = 'YOU WON!';
                    counter.style.color = 'var(--verde)';
                    counterH.innerHTML = 'HUMAN';
                    numberCounterH.innerHTML = counterHuman++;
                    robot.src='svg/rockstar_main.svg';
                } else {
                    if (options[choiceMachine] == 1) { // máquina eligió papel 
                        counter.innerHTML = 'IT\'S A TIE!';
                        counter.style.color = 'var(--blanco)';
                        robot.src='svg/toilet-paper_main.svg';
                    }
                }
            }
        }

        if (choiceHuman == 2) { // humano eligió tijera 
            user.src='svg/scissor_main.svg';
            if (options[choiceMachine] == 1) { // máquina eligió papel 
                    counter.innerHTML = 'YOU WON!';
                    counter.style.color = 'var(--verde)';
                    counterH.innerHTML = 'HUMAN';
                    numberCounterH.innerHTML = counterHuman++;
                    robot.src='svg/toilet-paper_main.svg';
            } else {
                if (options[choiceMachine] == 0) { // máquina eligió piedra 
                    counter.innerHTML = 'YOU LOST!';
                    counter.style.color = 'var(--rojo)';
                    counterM.innerHTML = 'MACHINE';
                    numberCounterM.innerHTML = counterMachine++;
                    robot.src='svg/rockstar_main.svg';
                } else {
                    if (options[choiceMachine] == 2) { // máquina eligió tijera 
                        counter.innerHTML = 'IT\'S A TIE!';
                        counter.style.color = 'var(--blanco)';
                        robot.src='svg/scissor_main.svg';
                    }
                }
            }
        }
        if (counterHuman > counterMachine) {
            counterH.style.color = 'var(--verde)';
            counterM.style.color = 'var(--rojo)';
            numberCounterH.style.color = 'var(--verde)';
            numberCounterM.style.color = 'var(--rojo)';
        } else {
            if (counterHuman < counterMachine) {
                counterH.style.color = 'var(--rojo)';
                counterM.style.color = 'var(--verde)';
                numberCounterH.style.color = 'var(--rojo)';
                numberCounterM.style.color = 'var(--verde)';
        } else {
            counterH.style.color = 'var(--blanco)';
            counterM.style.color = 'var(--blanco)';
            numberCounterH.style.color = 'var(--blanco)';
            numberCounterM.style.color = 'var(--blanco)';
        }
        };
        if (counterHuman > 3) {
                finalBackground.style.display = 'block';
                finalBackground.style.backgroundColor = 'rgba(var(--verde-RGB), 0.8)';
                finalBackground.innerHTML = '<h1>YOU WON!!</h1>' + '<br><h2>' + 'Human: ' + (counterHuman - 1) + '<br>Machine: ' + (counterMachine - 1) + '<h2>' + '<h4>Click anywhere to play again!</h4>';;
        } else {
            if (counterMachine > 3) {
                finalBackground.style.display = 'block';
                finalBackground.style.backgroundColor = 'rgba(var(--rojo-RGB), 0.8)';
                finalBackground.innerHTML = '<h1>YOU LOST!!</h1>' + '<br><h2>' + 'Human: ' + (counterHuman - 1) + '<br>Machine: ' + (counterMachine - 1) + '<h2>' + '<h3>Click anywhere to play again!</h3>';
            }
        }
}
function functionFinalScreen() {
    location.reload();
}
function reloadGame() {
    location.reload();
}
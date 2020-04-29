

// var options = ["piedra", "papel", "tijera"];
// counterM == Counter Machine
// counterH == Counter Human
// numberCounterM == Numero del contador Machine
// numberCounterH == Numero del contador Humano

var options = [0, 1, 2],
    choiceMachine,
    counterHuman = 0,
    counterMachine = 0,
    counter = document.getElementById('textoResultado'),
    counterM = document.getElementById('counterM'),
    counterH = document.getElementById('counterH'),
    numberCounterM = document.getElementById('numberCounterM'),
    numberCounterH = document.getElementById('numberCounterH'),
    finalBackground = document.getElementById('finalScreen'),
    user = document.getElementById('user'),
    robot = document.getElementById('robot'),
        
    //Animaciones para los iconos de Robot y User en empates
    animacionRobot = function() {
        robot.animate([
            // keyframes
            { transform: 'rotate(10deg) scale(1)' }, 
            { transform: 'rotate(-10deg) scale(0.9)' },
            { transform: 'rotate(0deg) scale(0.9)' },
            { transform: 'rotate(10deg) scale(0.9)' },
            { transform: 'rotate(-10deg) scale(0.9)' },
            { transform: 'rotate(0deg) scale(1)' },
          ], { 
            // timing options
            duration: 500,
            iterations: 1,
            easing: 'ease', 
          });
        },

    animacionRobotWon = function() {
        robot.animate([
            // keyframes
            { transform: 'translateY(0px)' }, 
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(-35px)' },
            { transform: 'translateY(-5px)' },
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(-5px)' },
            { transform: 'translateY(-2px)' },
            { transform: 'translateY(-4px)' },
            { transform: 'translateY(-2px)' },
            { transform: 'translateY(-1px)' }
          ], { 
            // timing options
            duration: 500,
            iterations: 1,
            easing: 'ease', 
          });
        },

    animacionUser = function() {
        user.animate([
            // keyframes
            { transform: 'rotate(10deg) scale(1)' }, 
            { transform: 'rotate(-10deg) scale(0.9)' },
            { transform: 'rotate(0deg) scale(0.9)' },
            { transform: 'rotate(10deg) scale(0.9)' },
            { transform: 'rotate(-10deg) scale(0.9)' },
            { transform: 'rotate(0deg) scale(1)' },
          ], { 
            // timing options
            duration: 500,
            iterations: 1,
            easing: 'ease', 
          });
        },

    animacionUserWon = function() {
        user.animate([
            // keyframes
            { transform: 'translateY(0px)' }, 
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(-35px)' },
            { transform: 'translateY(-5px)' },
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(-5px)' },
            { transform: 'translateY(-2px)' },
            { transform: 'translateY(-4px)' },
            { transform: 'translateY(-2px)' },
            { transform: 'translateY(-1px)' }
          ], { 
            // timing options
            duration: 500,
            iterations: 1,
            easing: 'ease', 
          });
        },


    //funciones para cambios de icono Machine
    robotPaper = function() {
            robot.src='svg/toilet-paper_main.svg';
        },
    robotScissor = function() {
            robot.src='svg/scissor_main.svg';
        },
    robotRock = function() {
            robot.src='svg/rockstar_main.svg';
        },

    userPaper = function() {
            user.src='svg/toilet-paper_main.svg';
        },
    userScissor = function() {
            user.src='svg/scissor_main.svg';
        },
    userRock = function() {
            user.src='svg/rockstar_main.svg';
        },
    continueText = function() {
        document.getElementById('descriptiveText').textContent = '(click in one of 3 options to continue playing!)';
    };

    

//función para random de elección máquina
function randomNumber(min, max){
    var number = Math.floor(Math.random() * (max - min +1) + min);
        return number;
}

//función para elección humano
function Humano(choiceHuman) {
    choiceMachine = randomNumber(0,2);
    
        if(choiceHuman == 0) { // humano eligió piedra 
            userRock();
            continueText();
            if (options[choiceMachine] == 1) { // máquina eligió papel 
                youLost();
                robotPaper();
                animacionRobotWon();
            } else if (options[choiceMachine] == 2) { // máquina eligió tijera 
                    youWon();
                    robotScissor();
                    animacionUserWon();
                } else if (options[choiceMachine] == 0) { // máquina eligió piedra 
                        itsATie();
                        robotRock();
                        animacionRobot();
                        animacionUser();
                    }
                }
        if (choiceHuman == 1) { // humano eligió papel 
            userPaper();
            continueText();
            if (options[choiceMachine] == 2) { // máquina eligió tijera 
                youLost();
                robotScissor();
                animacionRobotWon();
            } else if (options[choiceMachine] == 0) { // máquina eligió piedra 
                    youWon();
                    robotRock();
                    animacionUserWon();
                } else if (options[choiceMachine] == 1) { // máquina eligió papel 
                        itsATie();
                        robotPaper();
                        animacionRobot();
                        animacionUser();
                    }
                }
        if (choiceHuman == 2) { // humano eligió tijera 
            userScissor();
            continueText();
            if (options[choiceMachine] == 1) { // máquina eligió papel 
                    youWon();
                    robotPaper();
                    animacionUserWon();
            } else if (options[choiceMachine] == 0) { // máquina eligió piedra 
                    youLost();
                    robotRock();
                    animacionRobotWon();
                } else if (options[choiceMachine] == 2) { // máquina eligió tijera 
                        itsATie();
                        robotScissor();
                        animacionRobot();
                        animacionUser();
                    }
                }
}

//función para color de resultados
function ColorCounter() {
    if (counterHuman > counterMachine) {
        counterH.style.color = 'var(--verde)';
        counterM.style.color = 'var(--rojo)';
        numberCounterH.style.color = 'var(--verde)';
        numberCounterM.style.color = 'var(--rojo)';
        } else if (counterHuman < counterMachine) {
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
}

//función para textos de Ganador, Perdedor o Empate
function youWon() {
    counter.textContent = 'YOU WON!';
    counter.style.color = 'var(--verde)';
    counterH.textContent = 'HUMAN';
    numberCounterH.textContent = ++counterHuman;
    ColorCounter();
    CounterResults();

        setTimeout(function(){
            counter.textContent = 'YOU\'RE IN LUCK!!';
            counter.style.color = 'var(--verde)';
        },750);
}
function youLost() {
    counter.textContent = 'YOU LOST!';
    counter.style.color = 'var(--rojo)';
    counterM.textContent = 'MACHINE';
    numberCounterM.textContent = ++counterMachine;
    ColorCounter();
    CounterResults();

        setTimeout(function(){
            counter.textContent = 'WANNA REMATCH??';
            counter.style.color = 'var(--rojo)';
        },750);
}
function itsATie() {
    counter.textContent = 'IT\'S A TIE!';
    counter.style.color = 'var(--blanco)';
    ColorCounter();
    CounterResults();

        setTimeout(function(){
            counter.textContent = 'TIE THIS OFF!!';
            counter.style.color = 'var(--blanco)';
        },750);
}

//función para contador y pantalla final
function CounterResults() {
        if (counterHuman == 3) {
                finalBackground.style.display = 'block';
                finalBackground.style.backgroundColor = 'rgba(var(--verde-RGB), 0.8)';

                // con JavaScript Template Literals
                finalBackground.innerHTML = `
                    <h1>YOU WON!!</h1>
                    <h2>Human: ${counterHuman}</h2>
                    <h2>Machine: ${counterMachine}</h2>
                    <h4>Click anywhere to play again!</h4>
                    `;
                    
            } else {
            if (counterMachine == 3) {
                finalBackground.style.display = 'block';
                finalBackground.style.backgroundColor = 'rgba(var(--rojo-RGB), 0.8)';

                // con JavaScript Template Literals
                finalBackground.innerHTML = `
                    <h1>YOU LOST!!</h1>
                    <h2>Human: ${counterHuman}</h2>
                    <h2>Machine: ${counterMachine}</h2>
                    <h3>Click anywhere to play again!</h3>
                    `;
            }
        }
}

//función para recargar la pantalla y comenzar otra vez
function functionFinalScreen() {
    location.reload();
}
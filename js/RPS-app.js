// var options = ["piedra", "papel", "tijera"];
// counterM == Counter Machine
// counterH == Counter Human
// numberCounterM == Numero del contador Machine
// numberCounterH == Numero del contador Humano
// acumuladoUsuario == Array que acumula las iteraciones del Humano y las traduce en la placa final
// acumuladoMaquina == Array que acumula las iteraciones de la Máquina y las traduce en la placa final

var options = [0, 1, 2],
    acumuladoUsuario = [],
    acumuladoMaquina = [],
    choiceMachine,
    counterHuman = 0,
    counterMachine = 0,
    counter = document.getElementById('textoResultado'),
    counterM = document.getElementById('counterM'),
    counterH = document.getElementById('counterH'),
    numberCounterM = document.getElementById('numberCounterM'),
    numberCounterH = document.getElementById('numberCounterH'),
    finalBackground = document.getElementById('finalScreen');
   
// ------ finalización de declaración de variables globales
        


//función para random de elección máquina
function randomNumber(min, max){
    var number = Math.floor(Math.random() * (max - min +1) + min);
        return number;
}


//función para elección humano
function Humano(choiceHuman) {
    
    // ------ inicio de declaración de variables locales

        var user = document.getElementById('user'),
            robot = document.getElementById('robot'),
                
            //Animaciones para los iconos de Robot y User en empates
            animacionTie = function() {
                robot.animate([
                    // keyframes
                    { transform: 'rotate(10deg) scale(1)' }, 
                    { transform: 'rotate(-10deg) scale(0.9)' },
                    { transform: 'rotate(10deg) scale(0.9)' },
                    { transform: 'rotate(-10deg) scale(0.9)' },
                    { transform: 'rotate(10deg) scale(0.9)' },
                    { transform: 'rotate(0deg) scale(1)' },
                ], { 
                    // timing options
                    duration: 400,
                    iterations: 1,
                    easing: 'linear', 
                });
                user.animate([
                    // keyframes
                    { transform: 'rotate(10deg) scale(1)' }, 
                    { transform: 'rotate(-10deg) scale(0.9)' },
                    { transform: 'rotate(10deg) scale(0.9)' },
                    { transform: 'rotate(-10deg) scale(0.9)' },
                    { transform: 'rotate(10deg) scale(0.9)' },
                    { transform: 'rotate(0deg) scale(1)' },
                ], { 
                    // timing options
                    duration: 400,
                    iterations: 1,
                    easing: 'linear', 
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

    // ------ finalización de declaración de variables locales

    // función para definir si gana Roca, Papel o Tijera y sus consecuencias
    choiceMachine = randomNumber(0,2);
            //este prirmer if es para frenar la función (e inhabilitar los botones) cuando el contador llegue a 3.
        if(counterHuman === 3 || counterMachine === 3){
            return;
        }   
        if(choiceHuman == 0) { // humano eligió piedra 
            userRock();
            continueText();
            acumuladoUsuario.push("Rock");
            if (options[choiceMachine] == 1) { // máquina eligió papel 
                youLost();
                robotPaper();
                animacionRobotWon();
                acumuladoMaquina.push(" loses - Paper wins");
                CounterAnimationM();
            } else if (options[choiceMachine] == 2) { // máquina eligió tijera 
                youWon();
                robotScissor();
                animacionUserWon();
                acumuladoMaquina.push(" wins - Scissors loses");
                CounterAnimationH();
            } else if (options[choiceMachine] == 0) { // máquina eligió piedra 
                itsATie();
                robotRock();
                animacionTie();
                acumuladoUsuario.pop();
            }
        }
        if (choiceHuman == 1) { // humano eligió papel 
            userPaper();
            continueText();
            acumuladoUsuario.push("Paper");
            if (options[choiceMachine] == 2) { // máquina eligió tijera 
                youLost();
                robotScissor();
                animacionRobotWon();
                acumuladoMaquina.push(" loses - Scissors wins");
                CounterAnimationM();
            } else if (options[choiceMachine] == 0) { // máquina eligió piedra 
                youWon();
                robotRock();
                animacionUserWon();
                acumuladoMaquina.push(" wins - Rock loses");
                CounterAnimationH();
            } else if (options[choiceMachine] == 1) { // máquina eligió papel 
                itsATie();
                robotPaper();
                animacionTie();
                acumuladoUsuario.pop();
            }
        }
        if (choiceHuman == 2) { // humano eligió tijera 
            userScissor();
            continueText();
            acumuladoUsuario.push("Scissors");
            if (options[choiceMachine] == 1) { // máquina eligió papel 
                youWon();
                robotPaper();
                animacionUserWon();
                acumuladoMaquina.push(" wins - Paper loses");
                CounterAnimationH();
            } else if (options[choiceMachine] == 0) { // máquina eligió piedra 
                youLost();
                robotRock();
                animacionRobotWon();
                acumuladoMaquina.push(" loses - Rock wins");
                CounterAnimationM();
            } else if (options[choiceMachine] == 2) { // máquina eligió tijera 
                itsATie();
                robotScissor();
                animacionTie();
                acumuladoUsuario.pop();
            }
        }
            console.log("usuario: " + acumuladoUsuario); //testeo en consola
            console.log("maquina: " + acumuladoMaquina); //testeo en consola
}


//función para color de resultados
function ColorCounter() {
    // si va ganando Humano
    if (counterHuman > counterMachine) {
        counterH.style.color = 'var(--verde)';
        counterM.style.color = 'var(--rojo)';
        numberCounterH.style.color = 'var(--verde)';
        numberCounterM.style.color = 'var(--rojo)';
    // si va ganando Máquina    
    } else if (counterHuman < counterMachine) {
        counterH.style.color = 'var(--rojo)';
        counterM.style.color = 'var(--verde)';
        numberCounterH.style.color = 'var(--rojo)';
        numberCounterM.style.color = 'var(--verde)';
    // si van empatando
    } else {
        counterH.style.color = 'var(--blanco)';
        counterM.style.color = 'var(--blanco)';
        numberCounterH.style.color = 'var(--blanco)';
        numberCounterM.style.color = 'var(--blanco)';
    }
}


//función para rotar números si gana el usuario
function CounterAnimationH() {
    numberCounterH.animate([
        // keyframes
        { transform: 'rotateX(0deg)' }, 
        { transform: 'rotateX(180deg)' },
        { transform: 'rotateX(0deg)' }, 
    ], { 
        // timing options
        duration: 200,
        iterations: 1,
        easing: 'ease-out', 
    });
}

//función para rotar números si gana la máquina
function CounterAnimationM() {
    numberCounterM.animate([
        // keyframes
        { transform: 'rotateX(0deg)' }, 
        { transform: 'rotateX(180deg)' },
        { transform: 'rotateX(0deg)' }, 
    ], { 
        // timing options
        duration: 200,
        iterations: 1,
        easing: 'ease-out', 
    });
}


//funciones para textos de Ganador, Perdedor o Empate
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



//función para pantalla final y contador total de ganados y perdidos
function CounterResults() {
        if (counterHuman === 3) {

                setTimeout(function(){
                finalBackground.style.display = 'block';
                finalBackground.style.backgroundColor = 'rgba(var(--verde-RGB), 0.8)';

                // con JavaScript Template Literals
                // para las posiciones [3] y [4] del array, en caso de no haber valor, muestra un espacio vacio
                finalBackground.innerHTML = `
                    <h1>YOU WON!!</h1>
                    <h2>Human: ${counterHuman}</h2>
                    <h2>Machine: ${counterMachine}</h2>
                    <h5>${acumuladoUsuario[0]} ${acumuladoMaquina[0]}</h5>
                    <h5>${acumuladoUsuario[1]} ${acumuladoMaquina[1]}</h5>
                    <h5>${acumuladoUsuario[2]} ${acumuladoMaquina[2]}</h5>
                    <h5>${acumuladoUsuario[3] || " "} ${acumuladoMaquina[3] || " "}</h5>
                    <h5>${acumuladoUsuario[4] || " "} ${acumuladoMaquina[4] || " "}</h5>
                    <h4>Click anywhere to play again!</h4>
                    `;
                },500);

        } else {
            if (counterMachine === 3) {

                setTimeout(function(){
                finalBackground.style.display = 'block';
                finalBackground.style.backgroundColor = 'rgba(var(--rojo-RGB), 0.8)';

                // con JavaScript Template Literals
                // para las posiciones [3] y [4] del array, en caso de no haber valor, muestra un espacio vacio
                finalBackground.innerHTML = `
                    <h1>YOU LOST!!</h1>
                    <h2>Human: ${counterHuman}</h2>
                    <h2>Machine: ${counterMachine}</h2>
                    <h5>${acumuladoUsuario[0]} ${acumuladoMaquina[0]}</h5>
                    <h5>${acumuladoUsuario[1]} ${acumuladoMaquina[1]}</h5>
                    <h5>${acumuladoUsuario[2]} ${acumuladoMaquina[2]}</h5>
                    <h5>${acumuladoUsuario[3] || " "} ${acumuladoMaquina[3] || " "}</h5>
                    <h5>${acumuladoUsuario[4] || " "} ${acumuladoMaquina[4] || " "}</h5>
                    <h3>Click anywhere to play again!</h3>
                    `;
                },500);                
            }
        }
    
}

//función para recargar la pantalla y comenzar otra vez
function functionFinalScreen() {
    location.reload();
}
// función onload para chequear que haya un usuario jugando (solo para "rematch..."")
window.onload = function Splash(event) {
    event.preventDefault();

    if (sessionStorage.getItem("idUser")) {
        document.getElementById('popup_register').style.display = "none";
        let div = document.createElement('div');
            div.innerHTML = sessionStorage.getItem("idUser");
            counterH.appendChild(div);
    } else {
        console.log("NO hay ningún nombre guardado");
    }
};


// REFERENCIA DE VARIABLES
// var options = ["piedra", "papel", "tijera"];
// counterM == Counter Machine
// counterH == Counter Human
// numberCounterM == Numero del contador Machine
// numberCounterH == Numero del contador Humano
// accumulatedUser == Array que acumula las iteraciones del Humano y las traduce en la placa final
// accumulatedMachine == Array que acumula las iteraciones de la Máquina y las traduce en la placa final

var options = [0, 1, 2],
    accumulatedUser = [],
    accumulatedMachine = [],
    choiceMachine,
    counterHuman = 0,
    counterMachine = 0,
    counter = document.getElementById('textoResultado'),
    counterM = document.getElementById('counterM'),
    counterH = document.getElementById('counterH'),
    numberCounterM = document.getElementById('numberCounterM'),
    numberCounterH = document.getElementById('numberCounterH'),
    noNamePlayer = sessionStorage.getItem("idUser") || "HUMAN",
    namePlayer,
    user = document.getElementById('user'),
    robot = document.getElementById('robot');
    
// ------ finalización de declaración de variables globales


// función sigue jugando haciendo click en "rematch..."
function currentGame() {
    location.reload();
    console.log("Seguimos!");
}

// función para recargar la pantalla y comenzar otra vez
function newGame() {
    console.log("Arrancamos otra vez!");
    sessionStorage.removeItem("idUser");
    location.reload();
}
        

// Animaciones
// Animaciones para los iconos en empates
function animationTie(element) {
    element.animate(
    [
        // keyframes
        { transform: 'rotate(10deg) scale(1)' }, 
        { transform: 'rotate(-10deg) scale(0.9)' },
        { transform: 'rotate(10deg) scale(0.9)' },
        { transform: 'rotate(-10deg) scale(0.9)' },
        { transform: 'rotate(10deg) scale(0.9)' },
        { transform: 'rotate(0deg) scale(1)' },
    ], { 
        // tiempos
        duration: 400,
        iterations: 1,
        easing: 'linear', 
    }
)};

// Animaciones para los iconos de Robot y User
function animationWon(element) {
    element.animate(
    [
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
        // tiempos
        duration: 500,
        iterations: 1,
        easing: 'ease', 
    }
)};

// función para rotar números
function CounterAnimation(element) {
    element.animate([
        // keyframes
        { transform: 'rotateX(0deg)' }, 
        { transform: 'rotateX(180deg)' },
        { transform: 'rotateX(0deg)' }, 
    ], { 
        // tiempos
        duration: 200,
        iterations: 1,
        easing: 'ease-out', 
    });
}


// función para la generación del nombre del nuevo jugador
function idHumanPlayer() {
   
    namePlayer = (document.getElementById('inputName').value).toUpperCase();
    sessionStorage.setItem("idUser", namePlayer);
    console.log(`sessionStorage = ${sessionStorage.getItem("idUser")}`);
// Creo un div para cargar el nombre del jugador y si no hay nada va "Human"

    let div = document.createElement('div');
        if (namePlayer){
            div.innerHTML = `${namePlayer}`;
            counterH.appendChild(div);
            console.log(namePlayer);
        } else {
            div.innerHTML = `${noNamePlayer}`;
            counterH.appendChild(div);
            console.log(noNamePlayer);
        };
}

// función para random de elección máquina
function randomNumber(min, max){
    var number = Math.floor(Math.random() * (max - min +1) + min);
        return number;
}

// función para elección humano
function Humano(choiceHuman) {
    
        namePlayer = (document.getElementById('inputName').value).toUpperCase();

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

             //funciones para cambios de icono User
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


    // función para definir si gana Roca, Papel o Tijera y sus consecuencias
    choiceMachine = randomNumber(0,2);
            //este prirmer if es para frenar la función (e inhabilitar los botones) cuando el contador llegue a 3.
        if(counterHuman === 3 || counterMachine === 3){
            return;
        }   
        if(choiceHuman == 0) { // humano eligió piedra 
            userRock();
            continueText();
            accumulatedUser.push("Rock");
            if (options[choiceMachine] == 1) { // máquina eligió papel 
                youLost();
                robotPaper();
                animationWon(robot);
                accumulatedMachine.push(" loses - Paper wins");
                CounterAnimation(numberCounterM);
            } else if (options[choiceMachine] == 2) { // máquina eligió tijera 
                youWon();
                robotScissor();
                animationWon(user);
                accumulatedMachine.push(" wins - Scissors loses");
                CounterAnimation(numberCounterH);
            } else if (options[choiceMachine] == 0) { // máquina eligió piedra 
                itsATie();
                robotRock();
                animationTie(user);
                animationTie(robot);
                accumulatedUser.pop();
            }
        }
        if (choiceHuman == 1) { // humano eligió papel 
            userPaper();
            continueText();
            accumulatedUser.push("Paper");
            if (options[choiceMachine] == 2) { // máquina eligió tijera 
                youLost();
                robotScissor();
                animationWon(robot);
                accumulatedMachine.push(" loses - Scissors wins");
                CounterAnimation(numberCounterM);
            } else if (options[choiceMachine] == 0) { // máquina eligió piedra 
                youWon();
                robotRock();
                animationWon(user);
                accumulatedMachine.push(" wins - Rock loses");
                CounterAnimation(numberCounterH);
            } else if (options[choiceMachine] == 1) { // máquina eligió papel 
                itsATie();
                robotPaper();
                animationTie(user);
                animationTie(robot);
                accumulatedUser.pop();
            }
        }
        if (choiceHuman == 2) { // humano eligió tijera 
            userScissor();
            continueText();
            accumulatedUser.push("Scissors");
            if (options[choiceMachine] == 1) { // máquina eligió papel 
                youWon();
                robotPaper();
                animationWon(user);
                accumulatedMachine.push(" wins - Paper loses");
                CounterAnimation(numberCounterH);
            } else if (options[choiceMachine] == 0) { // máquina eligió piedra 
                youLost();
                robotRock();
                animationWon(robot);
                accumulatedMachine.push(" loses - Rock wins");
                CounterAnimation(numberCounterM);
            } else if (options[choiceMachine] == 2) { // máquina eligió tijera 
                itsATie();
                robotScissor();
                animationTie(user);
                animationTie(robot);
                accumulatedUser.pop();
            }
        }
            console.log("usuario: " + accumulatedUser); //testeo en consola
            console.log("maquina: " + accumulatedMachine); //testeo en consola
}


// función para color de resultados
function ColorCounter() {
    // si va ganando Humano
    if (counterHuman > counterMachine) {
        counterH.style.color = 'var(--verde)';
        counterM.style.color = 'var(--rojo)';
        numberCounterH.style.color = 'var(--verde)';
        numberCounterM.style.color = 'var(--rojo)';
        counterH.textContent = namePlayer || noNamePlayer;
    // si va ganando Máquina    
    } else if (counterHuman < counterMachine) {
        counterH.style.color = 'var(--rojo)';
        counterM.style.color = 'var(--verde)';
        numberCounterH.style.color = 'var(--rojo)';
        numberCounterM.style.color = 'var(--verde)';
        counterH.textContent = namePlayer || noNamePlayer;
    // si van empatando
    } else {
        counterH.style.color = 'var(--blanco)';
        counterM.style.color = 'var(--blanco)';
        numberCounterH.style.color = 'var(--blanco)';
        numberCounterM.style.color = 'var(--blanco)';
        counterH.textContent = namePlayer || noNamePlayer;
    }
}


// funciones para textos de Ganador, Perdedor o Empate
function youWon() {
    counter.textContent = 'YOU WON!';
    counter.style.color = 'var(--verde)';
    counterH.textContent = namePlayer;
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


// función para pantalla final y contador total de ganados y perdidos
function CounterResults() {

    var finalBackground = document.getElementById('finalScreen');
    
    // función para realizar el listado de resultados de las partidas
    function SummaryResults(){
        var result = accumulatedUser.map( (item, ix) => item + accumulatedMachine[ix]+`<br>`);
        console.log(result);
        return `${result}`.replace(/,/g,"");
    }

    if (counterHuman === 3) {
            setTimeout(function(){
            finalBackground.style.display = 'flex';
            finalBackground.style.backgroundColor = 'rgba(var(--verde-RGB), 0.8)';
            finalBackground.innerHTML = `
                <h1>YOU WON!!</h1>
                <h2>${namePlayer || noNamePlayer}: ${counterHuman}</h2>
                <h2>MACHINE: ${counterMachine}</h2>
                <h5>${SummaryResults()}</h5>
                <button class="boton" onclick="currentGame()">WANNA REMATCH, ${sessionStorage.getItem("idUser")}?</button>
                <br>
                <button class="boton" onclick="newGame()">NEW PLAYER!</button>
                `;
            },500);      
    } else {
        if (counterMachine === 3) {
            setTimeout(function(){
            finalBackground.style.display = 'flex';
            finalBackground.style.backgroundColor = 'rgba(var(--rojo-RGB), 0.8)';
            finalBackground.innerHTML = `
                <h1>YOU LOST!!</h1>
                <h2>${namePlayer || noNamePlayer}: ${counterHuman}</h2>
                <h2>MACHINE: ${counterMachine}</h2>
                <h5>${SummaryResults()}</h5>
                <button class="boton" onclick="currentGame()">WANNA REMATCH, ${sessionStorage.getItem("idUser")}?</button>
                <br>
                <button class="boton" onclick="newGame()">NEW PLAYER!</button>
                `;
            },500);     
        }  
    }
}
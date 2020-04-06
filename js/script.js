const buttonPaper = document.getElementById('button-paper'),
    buttonRock = document.getElementById('button-rock'),
    buttonScissors = document.getElementById('button-scissors');

let computerWins = 0, playerWins = 0, argButtonName;

/*
    Wybór przycisku
*/
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  let argMoveId, argComputerMove, argPlayerMove, randomNumber, computerMove, playerMove;

    /*
        Określenie zagranego "ruchu" przez gracza i komuter
    */
    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
            return 'kamień';
        }
    }
  
    /*
        Wyświetlanie wyniku gry
    */
    function displayResult(argPlayerMove, argComputerMove) {
        
        console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
        if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
            printMessage('Wygrywasz!');
            playerWins ++;
            console.log('Gracz wygrał. Dodano 1 do wyniku gracza (playerWins). Obecny wynik gracza: ' + playerWins);
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
            printMessage('Wygrywasz!');
            playerWins ++;
            console.log('Gracz wygrał. Dodano 1 do wyniku gracza (playerWins). Obecny wynik gracza: ' + playerWins);
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
            printMessage('Wygrywasz!');
            playerWins ++;
            console.log('Gracz wygrał. Dodano 1 do wyniku gracza (playerWins). Obecny wynik gracza: ' + playerWins);
        } else if (argPlayerMove == argComputerMove) {
            printMessage('Remis!');
        } else {
            printMessage('Przegrywasz :(');
            computerWins ++;
            console.log('Komputer wygrał. Dodano 1 do wyniku komputera (computerWins). Obecny wynik komputera: ' + computerWins);
        }
        printMessage('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove);
        printMessage('Suma wygranych rund:', "dupa");
        printMessage('Gracz: ' + playerWins);
        printMessage('Komputer: ' + computerWins);
    }
    playerMove = argButtonName;
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
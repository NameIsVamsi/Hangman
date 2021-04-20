(function () {
    "use strict";
    var acceptable, collection, guessCharacter, predict, 
    guessButton, guessedCharacters, matchedCharacters, 
    result, man, characters, numOfGuesses, wordToBeGuessed, 
    numLettersMatched, messages;

    function config() {

        acceptable = "abcdefghijklmnopqrstuvwxyz";
        numOfGuesses = 5;
        collection = ["java", "javascript", "python", "jquery"];
              
        guessedCharacters = matchedCharacters = '';
        numLettersMatched = 0;

        wordToBeGuessed = collection[Math.floor(Math.random() * collection.length)];

        messages = {
            win: 'Winner Winner Chicken Dinner!! You have won!!',
            lose: 'Sorry!! You have lost!! You can play again by clicking the restart button',
            guessed: ' You have already guessed this character please try a new one',
            validLetter: 'Alphabets only please!!'
        };

        result = document.getElementById("output");
        man = document.getElementById("man");
        guessCharacter = document.getElementById("letter");

        man.innerHTML = 'You have ' + numOfGuesses + ' lives remaining';
        result.innerHTML = '';

        document.getElementById("letter").value = '';

        guessButton = document.getElementById("guess");
        guessCharacter.style.display = 'inline';
        guessButton.style.display = 'inline';

        characters = document.getElementById("letters");
        characters.innerHTML = '<li class="current-word">Current word:</li>';

        var letter, i;
        for (i = 0; i < wordToBeGuessed.length; i++) {
            letter = '<li class="letter letter' + wordToBeGuessed.charAt(i).toUpperCase() + '">' 
            + wordToBeGuessed.charAt(i).toUpperCase() + '</li>';
            characters.insertAdjacentHTML('beforeend', letter);
        }
    }

    function gameOver(win) {
        if (!win) {
            result.innerHTML = messages.lose;
            result.classList.add('error');
        } else {
            result.innerHTML = messages.win;
            result.classList.add('win');
        }

        guessCharacter.style.display = guessButton.style.display = 'none';
        guessCharacter.value = '';
    }

    window.onload = config();

    document.getElementById("restart").onclick = config;

    guessCharacter.onclick = function () {
        this.value = '';
    };

    document.getElementById('hangman').onsubmit = function (e) {
        if (e.preventDefault) e.preventDefault();
        result.innerHTML = '';
        result.classList.remove('error', 'warning');
        predict = guessCharacter.value;

        if (predict) {
            if (acceptable.indexOf(predict) > -1) {
                if ((matchedCharacters && matchedCharacters.indexOf(predict) > -1) || (guessedCharacters && guessedCharacters.indexOf(predict) > -1)) {
                    result.innerHTML = '"' + predict.toUpperCase() + '"' + messages.guessed;
                    result.classList.add("warning");
                }
                else if (wordToBeGuessed.indexOf(predict) > -1) {
                    var lettersToShow;
                    lettersToShow = document.querySelectorAll(".letter" + predict.toUpperCase());

                    for (var i = 0; i < lettersToShow.length; i++) {
                        lettersToShow[i].classList.add("correct");
                    }

                    for (var j = 0; j < wordToBeGuessed.length; j++) {
                        if (wordToBeGuessed.charAt(j) === predict) {
                            numLettersMatched += 1;
                        }
                    }

                    matchedCharacters += predict;
                    if (numLettersMatched === wordToBeGuessed.length) {
                        gameOver(true);
                    }
                }
                else {
                    guessedCharacters += predict;
                    numOfGuesses--;
                    man.innerHTML = 'You have ' + numOfGuesses + ' lives remaining';
                    if (numOfGuesses === 0) gameOver();
                }
            }
            else {
                result.classList.add('error');
                result.innerHTML = messages.validLetter;
            }
        }
        else {
            result.classList.add('error');
            result.innerHTML = messages.validLetter;
        }
        return false;
    };
}());
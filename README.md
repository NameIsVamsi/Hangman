# Hangman
Simple Hangman Game using Javascript Html and some CSS

Hangman is a game where user have to guess a word that has been selected randomly by the machine.
In this Project I’ve used DOM object to fetch values from UI and update the UI.
There are two key functions in this project one is ‘config’ which is used to initialize all the prerequisite variables to their initial/default values and the other function(gameOver) is to check if the user has won or lost and check the predicted letter matches with any character of the randomly selected word.
The function gameOver checks if the predicted letter is present in the current word if yes, it updates a variable called ‘matchedCharacters’ and displays it on the UI at that particular position and then proceed on to the next guess. If the predicted letter is matched more than once then it takes care of that as well and updates the UI accordingly. If the predicted letter is not present in the current word then it updates a variable called ‘guessedCharacters’ and this counter is useful in determining the total letters used to guess the word and restrict the user not to use the same letter that he has used to predict no matter if it’s a match or not.
Then there is this variable called ‘numOfGuesses’ where it is unaffected when the user guesses the character correctly and it decrements when the guess is wrong. And when this variable becomes zero it indicates that the user has lost the game.
And there is an associative array which displays the user friendly messages according to the situation I.e, if the user wins it displays user has won and if the user lost it displays user has lost.

And when the game is over the restart button will reset all the variables to their initial values.

![image](https://user-images.githubusercontent.com/72161057/115471270-b0391800-a205-11eb-86bc-d598cb1acf97.png)

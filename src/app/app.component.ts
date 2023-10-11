import { Component, OnInit } from '@angular/core';
import { gameDataOptions, countryInfo } from './gameDataHelpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'geo-scramble';
  countryInfo = countryInfo;
  currentGameData?: (typeof gameDataOptions)[0] & {
    scrambledLandmarkName: string;
  };
  guesses: string[] = [];

  ngOnInit() {
    this.loadGame();
  }

  scrambleWord(word: string) {
    function shuffleWords(word: string): string {
      const words = word.split(' ');
      const shuffledWords = words.map((w) => shuffleString(w));
      return shuffledWords.join(' ');
    }
    function shuffleString(word: string): string {
      const wordArray = word.split('');
      for (let i = wordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = wordArray[i];
        wordArray[i] = wordArray[j];
        wordArray[j] = temp;
      }
      return wordArray.join('');
    }
    return shuffleWords(word);
  }

  loadGame() {
    // pick a random game option from the array and save it to currentGameData
    const randomIndex = Math.floor(Math.random() * gameDataOptions.length);
    this.currentGameData = {
      ...gameDataOptions[randomIndex],
      scrambledLandmarkName: this.scrambleWord(
        gameDataOptions[randomIndex].landmarkName
      ),
    };

    console.log(this.currentGameData);
  }

  onGuessSubmitted(guess: string) {
    console.log(`guess submitted: ${guess}`);
    guess = guess.toLowerCase().replace('the ', '').trim();
    this.guesses.push(guess);
    if (guess === this.currentGameData?.landmarkName) {
      console.log('Correct!');
    }
  }
}

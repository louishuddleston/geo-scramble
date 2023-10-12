import { Component, OnInit } from '@angular/core';
import { gameDataOptions, countryInfo } from './gameDataHelpers';
import scrambleWords from 'src/utils/scrambleWords';

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
    status: 'correct' | 'incorrect' | 'active';
  };
  guesses: string[] = [];

  ngOnInit() {
    this.loadGame();
  }

  loadGame() {
    // pick a random game option from the array and save it to currentGameData
    const randomIndex = Math.floor(Math.random() * gameDataOptions.length);
    this.currentGameData = {
      ...gameDataOptions[randomIndex],
      scrambledLandmarkName: scrambleWords(
        gameDataOptions[randomIndex].landmarkName
      ),
      status: 'active',
    };

    console.log(this.currentGameData);
  }

  onGuessSubmitted(guess: string) {
    if (!this.currentGameData || this.currentGameData.status !== 'active')
      return;
    console.log(`guess submitted: ${guess}`);
    guess = guess.toLowerCase().replace('the ', '').trim();
    this.guesses.push(guess);
    if (guess === this.currentGameData?.landmarkName) {
      console.log('Correct!');
      this.currentGameData.status = 'correct';
    }
    if (this.guesses.length >= 6) {
      this.currentGameData.status = 'incorrect';
    }
  }
}

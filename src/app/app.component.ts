import { Component, OnInit } from '@angular/core';
import { countryInfo } from './gameDataHelpers';
import { GameStateService } from './services/game-state.service';
import { take, tap } from 'rxjs/operators';
import { query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  countryInfo = countryInfo;
  gameState$: GameStateService['gameState$'];
  showInfoModal = false;
  FEATURE_FLAG_DAILY_GAME = JSON.parse(
    process.env['FEATURE_FLAG_DAILY_GAME'] || 'true'
  );

  constructor(private gameStateService: GameStateService) {
    this.gameState$ = gameStateService.getGameState();
  }

  ngOnInit() {
    if (!localStorage.getItem('visited')) {
      this.showInfoModal = true;
      localStorage.setItem('visited', 'true');
    }
  }

  onGuessSubmitted(guess: string) {
    const normalizedGuess = guess
      .toLowerCase()
      .replace(/^the\s+/, '')
      .trim();

    this.gameStateService.gameState$
      .pipe(
        take(1),
        tap((gameState) => {
          if (gameState.status !== 'active') {
            return;
          }

          const updatedState = {
            ...gameState,
            guesses: [...gameState.guesses, normalizedGuess],
          };

          this.gameStateService.setGameState(updatedState);
          
          if (normalizedGuess === gameState.landmarkName) {
            updatedState.status = 'correct';

            const guessInput = document.querySelector('app-guess-input');
            guessInput?.ariaDisabled;
            
          } else if (updatedState.guesses.length >= 6) {
            updatedState.status = 'incorrect';
          }

          if (normalizedGuess !== gameState.landmarkName) {
            this.gameStateService.revealHint();
          }
          
        })
      )
      .subscribe();
  }

  getHintedLandmarkName(): string {
    return this.gameStateService.getHintedLandmarkName();
  }

  newGame() {
    this.gameStateService.resetGame();
  }
}

import { Component } from '@angular/core';
import { countryInfo } from './gameDataHelpers';
import { GameStateService } from './services/game-state.service';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  countryInfo = countryInfo;
  gameState$: GameStateService['gameState$'];
  FEATURE_FLAG_DAILY_GAME = JSON.parse(
    process.env['FEATURE_FLAG_DAILY_GAME'] || 'true'
  );

  constructor(private gameStateService: GameStateService) {
    this.gameState$ = gameStateService.getGameState();
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

          if (normalizedGuess === gameState.landmarkName) {
            updatedState.status = 'correct';
          } else if (updatedState.guesses.length >= 6) {
            updatedState.status = 'incorrect';
          }

          this.gameStateService.setGameState(updatedState);
        })
      )
      .subscribe();
  }

  newGame() {
    this.gameStateService.resetGame();
  }
}

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { GameState } from '../models/game-state.model';
import { gameDataOptions } from '../gameDataHelpers';
import scrambleWords from 'src/utils/scrambleWords';
import dateSeededRandom from 'src/utils/dateSeededRandom';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  private readonly gameState: BehaviorSubject<GameState>;
  public readonly gameState$: Observable<GameState>;

  constructor() {
    const savedState = JSON.parse(localStorage.getItem('gameState') || 'null');
    const dateString = new Date().toISOString().split('T')[0];
    this.gameState = new BehaviorSubject<GameState>(
      savedState?.date === dateString ? savedState : this.getNewGameData()
    );
    this.gameState$ = this.gameState.asObservable();
  }

  private getNewGameData() {
    const FEATURE_FLAG_DAILY_GAME = JSON.parse(
      process.env['FEATURE_FLAG_DAILY_GAME'] || 'true'
    );

    const index = FEATURE_FLAG_DAILY_GAME
      ? dateSeededRandom(gameDataOptions.length)
      : Math.floor(Math.random() * gameDataOptions.length);
    return {
      ...gameDataOptions[index],
      scrambledLandmarkName: scrambleWords(
      gameDataOptions[index].landmarkName,
      FEATURE_FLAG_DAILY_GAME
      ),
      status: 'active',
      guesses: [],
      date: new Date().toISOString().split('T')[0],
      revealedLetters: 0,
    } as GameState;
  }

  resetGame() {
    const newState = this.getNewGameData();
    this.gameState.next(newState);
    localStorage.setItem('gameState', JSON.stringify(newState));
  }

  getGameState() {
    return this.gameState$;
  }

  setGameState(gameState: GameState) {
    this.gameState.next(gameState);
    localStorage.setItem('gameState', JSON.stringify(gameState));
  }

  revealHint() {
    const currentState = this.gameState.getValue();
    const HINT_GUESS_INTERVAL = 2;

    if (currentState.guesses.length % HINT_GUESS_INTERVAL === 0 && currentState.guesses.length > 0 && currentState.status === 'active') {
      if (currentState.revealedLetters < currentState.landmarkName.length) {
        const updatedState = {
          ...currentState,
          revealedLetters: Math.min(currentState.revealedLetters + 1, currentState.landmarkName.length),
        };
        this.setGameState(updatedState);
      }
    }
  }
  
  getHintedLandmarkName(): string {
    const currentState = this.gameState.getValue();
    const landmarkName = currentState.landmarkName;
    let scrambledName = currentState.scrambledLandmarkName.split('');

    // Array to track which indices have been revealed
    const usedIndices: boolean[] = new Array(scrambledName.length).fill(false);
    
    for (let i = 0; i < currentState.revealedLetters; i++) {
      // If the current letter is already in the correct position, mark it as used
      if (scrambledName[i] === landmarkName[i]) {
        usedIndices[i] = true;
        continue;
      }

      const correctLetter = landmarkName[i];
      let indexToSwap = -1;

      // Find the next occurrence of the correct letter that hasn't been used yet
      for (let j = 0; j < scrambledName.length; j++) {
        if (scrambledName[j] === correctLetter && !usedIndices[j]) {
          indexToSwap = j;
          break;
        }
      }

      if (indexToSwap !== -1) {
        // Swap the letters
        [scrambledName[i], scrambledName[indexToSwap]] = [scrambledName[indexToSwap], scrambledName[i]];
        usedIndices[indexToSwap] = true;  // Mark the swapped index as used
      }

      // Mark the current index as used
      usedIndices[i] = true;
    }

    // Construct the final hinted name with the appropriate color for revealed letters
    let result = '';
    for (let i = 0; i < scrambledName.length; i++) {
      if (i < currentState.revealedLetters) {
        result += `<span class="text-emerald-400">${scrambledName[i]}</span>`;
      } else {
        result += scrambledName[i];
      }
    }
    return result;
  }
}
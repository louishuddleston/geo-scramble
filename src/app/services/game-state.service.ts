import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { GameState } from '../models/game-state.model';
import { gameDataOptions } from '../gameDataHelpers';
import scrambleWords from 'src/utils/scrambleWords';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  private readonly gameState: BehaviorSubject<GameState>;
  public readonly gameState$: Observable<GameState>;

  constructor() {
    this.gameState = new BehaviorSubject<GameState>(this.getNewGameData());
    this.gameState$ = this.gameState.asObservable();
  }

  private getNewGameData() {
    const randomIndex = Math.floor(Math.random() * gameDataOptions.length);
    return {
      ...gameDataOptions[randomIndex],
      scrambledLandmarkName: scrambleWords(
        gameDataOptions[randomIndex].landmarkName
      ),
      status: 'active',
      guesses: [],
    } as GameState;
  }

  resetGame() {
    this.gameState.next(this.getNewGameData());
  }

  getGameState() {
    return this.gameState$;
  }

  setGameState(gameState: GameState) {
    this.gameState.next(gameState);
  }
}

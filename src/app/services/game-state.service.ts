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
}

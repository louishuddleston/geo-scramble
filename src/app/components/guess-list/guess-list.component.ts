import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameStateService } from 'src/app/services/game-state.service';

@Component({
  selector: 'app-guess-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table
      class="table w-full text-center"
      *ngIf="gameState$ | async as gameState"
    >
      <thead>
        <tr>
          <th>Guess</th>
          <th>Correct?</th>
        </tr>
      </thead>
      <tbody>
        <tr
          *ngFor="let guess of gameState.guesses"
          [ngClass]="{
            'bg-success': guess === gameState.landmarkName,
            hover: guess !== gameState.landmarkName
          }"
        >
          <th
            [ngClass]="{
              'text-indigo-950': guess === gameState.landmarkName
            }"
          >
            {{ guess }}
          </th>
          <th *ngIf="guess !== gameState.landmarkName">❌</th>
          <th *ngIf="guess === gameState.landmarkName">✅</th>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
    `
      :host {
        @apply w-full;
      }
      th {
        @apply w-1/2;
      }
    `,
  ],
})
export class GuessListComponent {
  gameState$: GameStateService['gameState$'];

  constructor(private gameStateService: GameStateService) {
    this.gameState$ = gameStateService.getGameState();
  }
}

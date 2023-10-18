import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameStateService } from 'src/app/services/game-state.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-share-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="btn btn-success my-3" (click)="share()">Share Result</button>
  `,
  styles: [],
})
export class ShareButtonComponent {
  gameState$: GameStateService['gameState$'];

  constructor(private gameStateService: GameStateService) {
    this.gameState$ = gameStateService.getGameState();
  }

  share() {
    this.gameState$.pipe(take(1)).subscribe((gameState) => {
      const shareText = `I guessed today's GeoScramble landmark in ${gameState.guesses.length} guesses!\nPlay GeoScramble at https://geoscramble.vercel.app`;
      if (navigator.share) {
        navigator.share({
          text: shareText,
        });
      } else if (navigator.clipboard) {
        navigator.clipboard
          .writeText(shareText)
          .then(() => alert('Copied to clipboard!'));
      }
    });
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guess-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table class="table w-full text-center">
      <thead>
        <tr>
          <th>Guess</th>
          <th>Correct?</th>
        </tr>
      </thead>
      <tbody>
        <tr
          *ngFor="let guess of guesses"
          [ngClass]="{
            'bg-success': guess === correctGuess,
            hover: guess !== correctGuess
          }"
        >
          <th [ngClass]="{ 'text-indigo-950': guess === correctGuess }">
            {{ guess }}
          </th>
          <th *ngIf="guess !== correctGuess">❌</th>
          <th *ngIf="guess === correctGuess">✅</th>
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
  @Input() guesses: string[] = [];
  @Input() correctGuess: string = '';
}

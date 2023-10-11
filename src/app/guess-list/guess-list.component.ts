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
        <tr *ngFor="let guess of guesses" class="hover">
          <th>{{ guess }}</th>
          <th *ngIf="guess !== correctGuess">❌</th>
          <th *ngIf="guess === correctGuess">✅</th>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
    `
      :host {
        width: 100%;
      }
    `,
  ],
})
export class GuessListComponent {
  @Input() guesses: string[] = [];
  @Input() correctGuess: string = '';
}

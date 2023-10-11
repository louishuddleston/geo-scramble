import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// TODO: fix form submission

@Component({
  selector: 'app-guess-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form class="flex" (submit)="onGuess()">
      <input
        type="text"
        placeholder="Guess here"
        class="input input-bordered w-full max-w-xs"
        [(ngModel)]="guess"
      />
      <button class="btn btn-primary">Guess</button>
    </form>
  `,
  styles: [
    `
      :host {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 1rem 0;
      }
    `,
  ],
})
export class GuessInputComponent {
  @Output() guessSubmitted = new EventEmitter<string>();
  guess: string = '';

  onGuess() {
    this.guessSubmitted.emit(this.guess.toLowerCase());
    this.guess = '';
  }
}

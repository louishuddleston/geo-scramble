import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form class="flex" (submit)="onGuess($event)">
      <input
        type="text"
        placeholder="Guess here"
        class="input input-bordered w-full max-w-xs"
        [(ngModel)]="guess"
        name="guess"
        autocomplete="off"
      />
      <button class="btn btn-primary">Guess</button>
    </form>
  `,
  styles: [
    `
      :host {
        @apply my-4;
      }
    `,
  ],
})
export class GuessInputComponent {
  @Output() guessSubmitted = new EventEmitter<string>();
  guess: string = '';

  onGuess(event: Event) {
    event.preventDefault();
    if (!this.guess) return;
    this.guessSubmitted.emit(this.guess);
    this.guess = '';
  }
}

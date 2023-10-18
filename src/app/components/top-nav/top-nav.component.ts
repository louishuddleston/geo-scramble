import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="flex justify-center gap-3 mb-4 py-3 items-center">
      <img src="/assets/images/logo.png" alt="GeoScramble Logo" />
      <h1 class="text-4xl mb-5 mt-3">GeoScramble</h1>
      <button
        class="btn btn-outline btn-sm btn-error ml-5 justify-self-end"
        (click)="onClick()"
      >
        ?
      </button>
    </nav>
  `,
  styles: [
    `
      :host {
        @apply w-full;
      }
      img {
        width: 60px;
        height: 60px;
      }
    `,
  ],
})
export class TopNavComponent {
  @Output() showInfoModal = new EventEmitter();

  onClick() {
    this.showInfoModal.emit();
  }
}

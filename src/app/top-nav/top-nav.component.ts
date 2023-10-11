import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav
      class="flex justify-center gap-3 mb-4 py-3 border-solid border-b-1 border-blue-900"
    >
      <img src="/assets/images/logo.png" alt="GeoScramble Logo" />
      <h1 class="text-4xl mb-5 mt-3">GeoScramble</h1>
    </nav>
  `,
  styles: [
    `
      img {
        width: 60px;
        height: 60px;
      }
    `,
  ],
})
export class TopNavComponent {}

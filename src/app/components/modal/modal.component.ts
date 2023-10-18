import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <dialog class="modal" [ngClass]="{ 'modal-open': show }">
      <div class="modal-box">
        <h3 class="font-bold text-lg">How to play:</h3>
        <div class="py-2">
          <ng-content></ng-content>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn" (click)="onClose()">Close</button>
          </form>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button (click)="onClose()">close</button>
      </form>
    </dialog>
  `,
  styles: [],
})
export class ModalComponent {
  @Input() show = false;
  @Output() close = new EventEmitter();

  onClose() {
    this.close.emit();
  }
}

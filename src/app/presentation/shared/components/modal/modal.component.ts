import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  template: `
    @if (isOpen) {
      <div class="modal-overlay" (click)="close.emit()">
        <div class="modal-container" [class]="size" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h2 class="modal-title">{{ title }}</h2>
            <button class="modal-close" (click)="close.emit()">✕</button>
          </div>
          <div class="modal-body">
            <ng-content />
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.2s;
      backdrop-filter: blur(4px);
    }

    .modal-container {
      background: #fff;
      border-radius: 20px;
      width: 90%;
      max-height: 85vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 20px 60px rgba(0,0,0,0.2);
      animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &.sm { max-width: 420px; }
      &.md { max-width: 600px; }
      &.lg { max-width: 800px; }
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 28px 16px;
      border-bottom: 1px solid #eee;
    }

    .modal-title {
      font-size: 18px;
      font-weight: 700;
      color: #2d3436;
      margin: 0;
    }

    .modal-close {
      background: #f1f2f6;
      border: none;
      width: 36px;
      height: 36px;
      border-radius: 10px;
      font-size: 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      color: #636e72;

      &:hover {
        background: #E87722;
        color: #fff;
      }
    }

    .modal-body {
      padding: 24px 28px;
      overflow-y: auto;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px) scale(0.97); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
  `]
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Output() close = new EventEmitter<void>();
}

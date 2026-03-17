import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  template: `
    <div class="stat-card" [style.--accent]="color">
      <div class="stat-icon">{{ icon }}</div>
      <div class="stat-body">
        <span class="stat-value">{{ value }}</span>
        <span class="stat-label">{{ label }}</span>
      </div>
      @if (trend) {
        <span class="stat-trend" [class.up]="trendUp" [class.down]="!trendUp">
          {{ trendUp ? '↑' : '↓' }} {{ trend }}
        </span>
      }
    </div>
  `,
  styles: [`
    .stat-card {
      background: #fff;
      border-radius: 16px;
      padding: clamp(14px, 2vw, 24px);
      display: flex;
      align-items: center;
      gap: clamp(10px, 1.5vw, 16px);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-left: 4px solid var(--accent, #1B3A5C);
      transition: transform 0.2s, box-shadow 0.2s;
      min-width: 0;
      overflow: hidden;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.1);
      }
    }

    .stat-icon {
      font-size: clamp(24px, 3vw, 36px);
      width: clamp(40px, 5vw, 56px);
      height: clamp(40px, 5vw, 56px);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 14px;
      background: color-mix(in srgb, var(--accent) 12%, transparent);
      flex-shrink: 0;
    }

    .stat-body {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
    }

    .stat-value {
      font-size: clamp(18px, 2.2vw, 26px);
      font-weight: 800;
      color: #2d3436;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .stat-label {
      font-size: clamp(11px, 1.2vw, 13px);
      color: #636e72;
      margin-top: 2px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .stat-trend {
      font-size: 12px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 20px;
      flex-shrink: 0;
      white-space: nowrap;

      &.up { background: #d4edda; color: #155724; }
      &.down { background: #f8d7da; color: #721c24; }
    }
  `]
})
export class StatCardComponent {
  @Input() icon = '';
  @Input() value: string | number = 0;
  @Input() label = '';
  @Input() color = '#1B3A5C';
  @Input() trend = '';
  @Input() trendUp = true;
}

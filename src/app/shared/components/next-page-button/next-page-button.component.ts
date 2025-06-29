import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-next-page-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="next-page-section">
      <div class="next-button-wrapper">
        <a [routerLink]="nextPath" class="next-button">
          <div class="button-content">
            <span class="button-text">{{ buttonText }}</span>
            <span class="button-icon">→</span>
          </div>
          <div class="button-subtitle">{{ subtitle }}</div>
        </a>
      </div>
    </div>
  `,
  styles: [`
    .next-page-section {
      padding: 48px 0;
      display: flex;
      justify-content: center;
    }
    
    .next-button-wrapper {
      position: relative;
    }
    
    .next-button {
      display: block;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 20px;
      padding: 20px 32px;
      text-decoration: none;
      color: white;
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;
      min-width: 280px;
      text-align: center;
    }
    
    .next-button:before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      transition: left 0.6s ease;
    }
    
    .next-button:hover:before {
      left: 100%;
    }
    
    .next-button:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.4);
    }
    
    .button-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .button-icon {
      font-size: 20px;
      transition: transform 0.3s ease;
    }
    
    .next-button:hover .button-icon {
      transform: translateX(4px);
    }
    
    .button-subtitle {
      font-size: 14px;
      opacity: 0.8;
      font-weight: 400;
    }
    
    @media (max-width: 768px) {
      .next-button {
        min-width: 240px;
        padding: 16px 24px;
      }
      
      .button-content {
        font-size: 16px;
      }
      
      .button-subtitle {
        font-size: 13px;
      }
    }
  `]
})
export class NextPageButtonComponent {
  @Input() nextPath: string = '';
  @Input() buttonText: string = '';
  @Input() subtitle: string = '';
}
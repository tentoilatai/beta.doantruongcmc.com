import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navigation">
      <div class="nav-container">
        <div class="nav-logo">
          <div class="logo-icon">🎓</div>
          <span class="logo-text">CMC Fundraising</span>
        </div>
        
        <div class="nav-menu" [class.active]="isMenuOpen">
          <a 
            *ngFor="let item of navItems" 
            [routerLink]="item.path"
            class="nav-link"
            [class.active]="currentPath === item.path"
            (click)="closeMenu()"
          >
            <span class="nav-icon">{{ item.icon }}</span>
            <span class="nav-text">{{ item.label }}</span>
          </a>
        </div>
        
        <button class="menu-toggle" (click)="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navigation {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
    }
    
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
    }
    
    .nav-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      color: white;
      font-weight: 600;
      font-size: 18px;
    }
    
    .logo-icon {
      font-size: 24px;
    }
    
    .nav-menu {
      display: flex;
      gap: 8px;
    }
    
    .nav-link {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 12px;
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .nav-link:hover {
      color: white;
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-1px);
    }
    
    .nav-link.active {
      color: white;
      background: rgba(255, 255, 255, 0.15);
    }
    
    .nav-icon {
      font-size: 16px;
    }
    
    .nav-text {
      font-size: 14px;
      white-space: nowrap;
    }
    
    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 4px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
    }
    
    .menu-toggle span {
      width: 24px;
      height: 2px;
      background: white;
      border-radius: 1px;
      transition: all 0.3s ease;
    }
    
    @media (max-width: 768px) {
      .nav-menu {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 16px;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }
      
      .nav-menu.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
      
      .nav-link {
        justify-content: center;
        padding: 12px 16px;
        margin-bottom: 8px;
      }
      
      .menu-toggle {
        display: flex;
      }
      
      .logo-text {
        display: none;
      }
    }
    
    @media (max-width: 480px) {
      .nav-text {
        font-size: 13px;
      }
      
      .nav-icon {
        font-size: 14px;
      }
    }
  `]
})
export class NavigationComponent implements OnInit {
  currentPath = '';
  isMenuOpen = false;
  
  navItems = [
    { path: '/thu-ngo', label: 'Thư Ngỏ', icon: '📝' },
    { path: '/ho-so-tai-tro', label: 'Hồ Sơ', icon: '📋' },
    { path: '/hanh-trinh-sap-toi', label: 'Sắp Tới', icon: '🚀' },
    { path: '/ung-ho', label: 'Ủng Hộ', icon: '💝' },
    { path: '/cong-khai-tai-chinh', label: 'Tài Chính', icon: '📊' },
    { path: '/hanh-trinh-da-qua', label: 'Đã Qua', icon: '✅' },
    { path: '/lien-he', label: 'Liên Hệ', icon: '📞' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentPath = event.url;
    });
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  closeMenu() {
    this.isMenuOpen = false;
  }
}
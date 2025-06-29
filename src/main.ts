import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { NavigationComponent } from './app/shared/components/navigation/navigation.component';
import { AudioControlComponent } from './app/shared/components/audio-control/audio-control.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/thu-ngo', pathMatch: 'full' },
  { 
    path: 'thu-ngo', 
    loadComponent: () => import('./app/pages/thu-ngo/thu-ngo.component').then(m => m.ThuNgoComponent) 
  },
  { 
    path: 'ho-so-tai-tro', 
    loadComponent: () => import('./app/pages/ho-so-tai-tro/ho-so-tai-tro.component').then(m => m.HoSoTaiTroComponent) 
  },
  { 
    path: 'hanh-trinh-sap-toi', 
    loadComponent: () => import('./app/pages/hanh-trinh-sap-toi/hanh-trinh-sap-toi.component').then(m => m.HanhTrinhSapToiComponent) 
  },
  { 
    path: 'ung-ho', 
    loadComponent: () => import('./app/pages/ung-ho/ung-ho.component').then(m => m.UngHoComponent) 
  },
  { 
    path: 'cong-khai-tai-chinh', 
    loadComponent: () => import('./app/pages/cong-khai-tai-chinh/cong-khai-tai-chinh.component').then(m => m.CongKhaiTaiChinhComponent) 
  },
  { 
    path: 'hanh-trinh-da-qua', 
    loadComponent: () => import('./app/pages/hanh-trinh-da-qua/hanh-trinh-da-qua.component').then(m => m.HanhTrinhDaQuaComponent) 
  },
  { 
    path: 'lien-he', 
    loadComponent: () => import('./app/pages/lien-he/lien-he.component').then(m => m.LienHeComponent) 
  },
  { path: '**', redirectTo: '/thu-ngo' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, AudioControlComponent],
  template: `
    <div class="app-container">
      <app-navigation></app-navigation>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <app-audio-control></app-audio-control>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      position: relative;
    }
    
    .main-content {
      position: relative;
      z-index: 1;
    }
  `]
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});
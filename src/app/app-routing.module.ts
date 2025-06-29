import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/thu-ngo', pathMatch: 'full' },
  { 
    path: 'thu-ngo', 
    loadComponent: () => import('./pages/thu-ngo/thu-ngo.component').then(m => m.ThuNgoComponent) 
  },
  { 
    path: 'ho-so-tai-tro', 
    loadComponent: () => import('./pages/ho-so-tai-tro/ho-so-tai-tro.component').then(m => m.HoSoTaiTroComponent) 
  },
  { 
    path: 'hanh-trinh-sap-toi', 
    loadComponent: () => import('./pages/hanh-trinh-sap-toi/hanh-trinh-sap-toi.component').then(m => m.HanhTrinhSapToiComponent) 
  },
  { 
    path: 'ung-ho', 
    loadComponent: () => import('./pages/ung-ho/ung-ho.component').then(m => m.UngHoComponent) 
  },
  { 
    path: 'cong-khai-tai-chinh', 
    loadComponent: () => import('./pages/cong-khai-tai-chinh/cong-khai-tai-chinh.component').then(m => m.CongKhaiTaiChinhComponent) 
  },
  { 
    path: 'hanh-trinh-da-qua', 
    loadComponent: () => import('./pages/hanh-trinh-da-qua/hanh-trinh-da-qua.component').then(m => m.HanhTrinhDaQuaComponent) 
  },
  { 
    path: 'lien-he', 
    loadComponent: () => import('./pages/lien-he/lien-he.component').then(m => m.LienHeComponent) 
  },
  { path: '**', redirectTo: '/thu-ngo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    scrollPositionRestoration: 'top',
    enableTracing: false 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
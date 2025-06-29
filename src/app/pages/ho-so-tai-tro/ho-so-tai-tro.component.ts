import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextPageButtonComponent } from '../../shared/components/next-page-button/next-page-button.component';

@Component({
  selector: 'app-ho-so-tai-tro',
  standalone: true,
  imports: [CommonModule, NextPageButtonComponent],
  template: `
    <div class="page-container page-transition">
      <div class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="badge-icon">📋</span>
              <span>Hồ Sơ Tài Trợ</span>
            </div>
            <h1 class="hero-title">
              <span class="gradient-text">Thông Tin Chi Tiết</span> <br>
              Dự Án Gây Quỹ
            </h1>
            <p class="hero-subtitle">
              Minh bạch - Chuyên nghiệp - Hiệu quả
            </p>
          </div>
        </div>
      </div>

      <div class="content-section section-spacing">
        <div class="container">
          <div class="profile-grid">
            <!-- Organization Info -->
            <div class="glass-card profile-card scroll-reveal">
              <div class="card-header">
                <div class="header-icon">🏛️</div>
                <h3>Thông Tin Tổ Chức</h3>
              </div>
              <div class="info-list">
                <div class="info-item">
                  <span class="info-label">Tên tổ chức:</span>
                  <span class="info-value">Đoàn TNCS HCM Trường ĐH CMC</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Địa chỉ:</span>
                  <span class="info-value">Số 290 An Dương Vương, P.4, Q.5, TP.HCM</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Email:</span>
                  <span class="info-value">doan&#64;cmc.edu.vn</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Điện thoại:</span>
                  <span class="info-value">028 3833 6999</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Website:</span>
                  <span class="info-value">cmc.edu.vn</span>
                </div>
              </div>
            </div>

            <!-- Project Goals -->
            <div class="glass-card profile-card scroll-reveal">
              <div class="card-header">
                <div class="header-icon">🎯</div>
                <h3>Mục Tiêu Dự Án</h3>
              </div>
              <div class="goals-list">
                <div class="goal-item">
                  <div class="goal-icon">💡</div>
                  <div class="goal-content">
                    <h4>Hỗ trợ học bổng</h4>
                    <p>Cấp học bổng cho 100 sinh viên có hoàn cảnh khó khăn</p>
                  </div>
                </div>
                <div class="goal-item">
                  <div class="goal-icon">💻</div>
                  <div class="goal-content">
                    <h4>Trang thiết bị</h4>
                    <p>Mua sắm laptop, máy tính cho phòng học</p>
                  </div>
                </div>
                <div class="goal-item">
                  <div class="goal-icon">🏗️</div>
                  <div class="goal-content">
                    <h4>Cơ sở vật chất</h4>
                    <p>Nâng cấp thư viện và không gian học tập</p>
                  </div>
                </div>
                <div class="goal-item">
                  <div class="goal-icon">🌍</div>
                  <div class="goal-content">
                    <h4>Hoạt động xã hội</h4>
                    <p>Tổ chức các chương trình tình nguyện</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Budget Breakdown -->
            <div class="glass-card profile-card full-width scroll-reveal">
              <div class="card-header">
                <div class="header-icon">💰</div>
                <h3>Phân Bổ Ngân Sách</h3>
              </div>
              <div class="budget-breakdown">
                <div class="budget-item">
                  <div class="budget-info">
                    <span class="budget-category">Học bổng sinh viên</span>
                    <span class="budget-amount">500,000,000 VNĐ</span>
                  </div>
                  <div class="budget-bar">
                    <div class="budget-fill" style="width: 40%"></div>
                  </div>
                  <span class="budget-percentage">40%</span>
                </div>
                
                <div class="budget-item">
                  <div class="budget-info">
                    <span class="budget-category">Trang thiết bị học tập</span>
                    <span class="budget-amount">300,000,000 VNĐ</span>
                  </div>
                  <div class="budget-bar">
                    <div class="budget-fill" style="width: 24%"></div>
                  </div>
                  <span class="budget-percentage">24%</span>
                </div>
                
                <div class="budget-item">
                  <div class="budget-info">
                    <span class="budget-category">Nâng cấp cơ sở vật chất</span>
                    <span class="budget-amount">300,000,000 VNĐ</span>
                  </div>
                  <div class="budget-bar">
                    <div class="budget-fill" style="width: 24%"></div>
                  </div>
                  <span class="budget-percentage">24%</span>
                </div>
                
                <div class="budget-item">
                  <div class="budget-info">
                    <span class="budget-category">Hoạt động tình nguyện</span>
                    <span class="budget-amount">100,000,000 VNĐ</span>
                  </div>
                  <div class="budget-bar">
                    <div class="budget-fill" style="width: 8%"></div>
                  </div>
                  <span class="budget-percentage">8%</span>
                </div>
                
                <div class="budget-item">
                  <div class="budget-info">
                    <span class="budget-category">Quản lý & vận hành</span>
                    <span class="budget-amount">50,000,000 VNĐ</span>
                  </div>
                  <div class="budget-bar">
                    <div class="budget-fill" style="width: 4%"></div>
                  </div>
                  <span class="budget-percentage">4%</span>
                </div>
                
                <div class="budget-total">
                  <span class="total-label">Tổng mục tiêu:</span>
                  <span class="total-amount">1,250,000,000 VNĐ</span>
                </div>
              </div>
            </div>

            <!-- Timeline -->
            <div class="glass-card profile-card full-width scroll-reveal">
              <div class="card-header">
                <div class="header-icon">📅</div>
                <h3>Kế Hoạch Thực Hiện</h3>
              </div>
              <div class="timeline">
                <div class="timeline-item">
                  <div class="timeline-marker completed"></div>
                  <div class="timeline-content">
                    <h4>Giai đoạn 1: Khởi động</h4>
                    <p>Tháng 1-2/2025: Xây dựng kế hoạch và ra mắt dự án</p>
                    <span class="timeline-status completed">Hoàn thành</span>
                  </div>
                </div>
                
                <div class="timeline-item">
                  <div class="timeline-marker current"></div>
                  <div class="timeline-content">
                    <h4>Giai đoạn 2: Gây quỹ</h4>
                    <p>Tháng 3-8/2025: Triển khai các hoạt động gây quỹ</p>
                    <span class="timeline-status current">Đang thực hiện</span>
                  </div>
                </div>
                
                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <h4>Giai đoạn 3: Thực hiện</h4>
                    <p>Tháng 9-12/2025: Triển khai các dự án cụ thể</p>
                    <span class="timeline-status">Sắp tới</span>
                  </div>
                </div>
                
                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <h4>Giai đoạn 4: Báo cáo</h4>
                    <p>Tháng 1/2026: Báo cáo kết quả và tổng kết</p>
                    <span class="timeline-status">Sắp tới</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <app-next-page-button
        nextPath="/hanh-trinh-sap-toi"
        buttonText="Xem Hành Trình Sắp Tới"
        subtitle="Khám phá các kế hoạch tương lai"
      ></app-next-page-button>
    </div>
  `,
  styles: [`
    .page-container {
      min-height: 100vh;
      padding-top: 70px;
    }
    
    .hero-section {
      padding: 80px 0 60px;
      text-align: center;
    }
    
    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 50px;
      padding: 12px 24px;
      color: white;
      font-weight: 500;
      margin-bottom: 32px;
      animation: floating 3s ease-in-out infinite;
    }
    
    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      color: white;
      margin-bottom: 24px;
      line-height: 1.1;
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 400;
    }
    
    .profile-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 32px;
    }
    
    .profile-card {
      padding: 32px;
    }
    
    .full-width {
      grid-column: 1 / -1;
    }
    
    .card-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .header-icon {
      font-size: 24px;
    }
    
    .card-header h3 {
      color: white;
      font-size: 1.5rem;
      margin: 0;
    }
    
    .info-list {
      display: grid;
      gap: 16px;
    }
    
    .info-item {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 16px;
      padding: 12px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .info-label {
      color: rgba(255, 255, 255, 0.7);
      font-weight: 500;
    }
    
    .info-value {
      color: white;
      font-weight: 400;
    }
    
    .goals-list {
      display: grid;
      gap: 20px;
    }
    
    .goal-item {
      display: flex;
      gap: 16px;
      padding: 20px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }
    
    .goal-item:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
    
    .goal-icon {
      font-size: 32px;
      min-width: 40px;
    }
    
    .goal-content h4 {
      color: white;
      margin-bottom: 8px;
      font-size: 1.1rem;
    }
    
    .goal-content p {
      color: rgba(255, 255, 255, 0.8);
      margin: 0;
    }
    
    .budget-breakdown {
      display: grid;
      gap: 20px;
    }
    
    .budget-item {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 16px;
      align-items: center;
      padding: 16px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .budget-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    
    .budget-category {
      color: white;
      font-weight: 500;
    }
    
    .budget-amount {
      color: var(--primary-light);
      font-weight: 600;
    }
    
    .budget-bar {
      width: 100%;
      height: 8px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      overflow: hidden;
    }
    
    .budget-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      border-radius: 4px;
      transition: width 1s ease;
    }
    
    .budget-percentage {
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
      min-width: 40px;
      text-align: right;
    }
    
    .budget-total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      margin-top: 16px;
    }
    
    .total-label {
      color: white;
      font-weight: 600;
      font-size: 1.1rem;
    }
    
    .total-amount {
      color: var(--primary-light);
      font-weight: 700;
      font-size: 1.25rem;
    }
    
    .timeline {
      position: relative;
      padding-left: 32px;
    }
    
    .timeline:before {
      content: '';
      position: absolute;
      left: 15px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: rgba(255, 255, 255, 0.2);
    }
    
    .timeline-item {
      position: relative;
      margin-bottom: 32px;
    }
    
    .timeline-marker {
      position: absolute;
      left: -24px;
      top: 8px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      border: 3px solid rgba(255, 255, 255, 0.5);
    }
    
    .timeline-marker.completed {
      background: var(--success);
      border-color: var(--success);
    }
    
    .timeline-marker.current {
      background: var(--primary);
      border-color: var(--primary);
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
      100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
    }
    
    .timeline-content h4 {
      color: white;
      margin-bottom: 8px;
      font-size: 1.1rem;
    }
    
    .timeline-content p {
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 8px;
    }
    
    .timeline-status {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
    }
    
    .timeline-status.completed {
      background: rgba(16, 185, 129, 0.2);
      color: var(--success);
      border: 1px solid rgba(16, 185, 129, 0.3);
    }
    
    .timeline-status.current {
      background: rgba(34, 197, 94, 0.2);
      color: var(--primary);
      border: 1px solid rgba(34, 197, 94, 0.3);
    }
    
    .timeline-status:not(.completed):not(.current) {
      background: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    @media (max-width: 768px) {
      .profile-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }
      
      .profile-card {
        padding: 24px;
      }
      
      .hero-title {
        font-size: 2.25rem;
      }
      
      .info-item {
        grid-template-columns: 1fr;
        gap: 8px;
      }
      
      .budget-info {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }
      
      .budget-total {
        flex-direction: column;
        gap: 8px;
        text-align: center;
      }
      
      .timeline {
        padding-left: 24px;
      }
      
      .timeline-marker {
        left: -20px;
      }
    }
    
    @media (max-width: 480px) {
      .profile-grid {
        grid-template-columns: 1fr;
      }
      
      .profile-card {
        padding: 20px;
      }
      
      .hero-title {
        font-size: 2rem;
      }
      
      .goal-item {
        flex-direction: column;
        text-align: center;
        gap: 12px;
      }
    }
  `]
})
export class HoSoTaiTroComponent implements OnInit {
  
  ngOnInit() {
    this.setupScrollReveal();
    this.animateBudgetBars();
  }
  
  private setupScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    setTimeout(() => {
      document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
      });
    }, 100);
  }
  
  private animateBudgetBars() {
    setTimeout(() => {
      document.querySelectorAll('.budget-fill').forEach(bar => {
        const width = (bar as HTMLElement).style.width;
        (bar as HTMLElement).style.width = '0%';
        setTimeout(() => {
          (bar as HTMLElement).style.width = width;
        }, 500);
      });
    }, 1000);
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextPageButtonComponent } from '../../shared/components/next-page-button/next-page-button.component';

@Component({
  selector: 'app-cong-khai-tai-chinh',
  standalone: true,
  imports: [CommonModule, NextPageButtonComponent],
  template: `
    <div class="page-container page-transition">
      <div class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="badge-icon">📊</span>
              <span>Công Khai Tài Chính</span>
            </div>
            <h1 class="hero-title">
              <span class="gradient-text">Minh Bạch</span> <br>
              Trong Từng Khoản Chi
            </h1>
            <p class="hero-subtitle">
              Báo cáo chi tiết về việc sử dụng nguồn quỹ từ các nhà tài trợ
            </p>
          </div>
        </div>
      </div>

      <div class="content-section section-spacing">
        <div class="container">
          <!-- Financial Overview -->
          <div class="financial-overview glass-card scroll-reveal">
            <div class="overview-header">
              <h2>Tổng Quan Tài Chính</h2>
              <div class="report-period">
                <span class="period-icon">📅</span>
                <span>Báo cáo tháng {{ currentMonth }}/{{ currentYear }}</span>
              </div>
            </div>
            
            <div class="overview-stats">
              <div class="stat-card income">
                <div class="stat-icon">💰</div>
                <div class="stat-content">
                  <div class="stat-label">Tổng thu</div>
                  <div class="stat-value">{{ totalIncome | number }} VNĐ</div>
                  <div class="stat-change positive">+{{ incomeGrowth }}% so với tháng trước</div>
                </div>
              </div>
              
              <div class="stat-card expense">
                <div class="stat-icon">💸</div>
                <div class="stat-content">
                  <div class="stat-label">Tổng chi</div>
                  <div class="stat-value">{{ totalExpense | number }} VNĐ</div>
                  <div class="stat-change">{{ expenseGrowth > 0 ? '+' : '' }}{{ expenseGrowth }}% so với tháng trước</div>
                </div>
              </div>
              
              <div class="stat-card balance">
                <div class="stat-icon">🏦</div>
                <div class="stat-content">
                  <div class="stat-label">Số dư hiện tại</div>
                  <div class="stat-value">{{ currentBalance | number }} VNĐ</div>
                  <div class="stat-change positive">Tăng {{ balanceGrowth }}% so với tháng trước</div>
                </div>
              </div>
              
              <div class="stat-card target">
                <div class="stat-icon">🎯</div>
                <div class="stat-content">
                  <div class="stat-label">Tiến độ mục tiêu</div>
                  <div class="stat-value">{{ targetProgress }}%</div>
                  <div class="stat-change">{{ targetAmount | number }} VNĐ / {{ totalTarget | number }} VNĐ</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Income Sources -->
          <div class="income-section">
            <h2 class="section-title scroll-reveal">Nguồn Thu</h2>
            <div class="income-grid">
              <div class="income-chart glass-card scroll-reveal">
                <h3>Phân Bổ Nguồn Thu</h3>
                <div class="chart-container">
                  <div class="pie-chart">
                    <div class="pie-slice" 
                         *ngFor="let source of incomeSources; let i = index"
                         [style.--percentage]="source.percentage"
                         [style.--color]="source.color"
                         [style.--start-angle]="getStartAngle(i) + 'deg'">
                    </div>
                  </div>
                  <div class="chart-legend">
                    <div class="legend-item" *ngFor="let source of incomeSources">
                      <div class="legend-color" [style.background-color]="source.color"></div>
                      <div class="legend-content">
                        <div class="legend-label">{{ source.name }}</div>
                        <div class="legend-value">{{ source.amount | number }} VNĐ ({{ source.percentage }}%)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="income-details glass-card scroll-reveal">
                <h3>Chi Tiết Nguồn Thu</h3>
                <div class="income-list">
                  <div class="income-item" *ngFor="let transaction of incomeTransactions">
                    <div class="transaction-info">
                      <div class="transaction-date">{{ transaction.date }}</div>
                      <div class="transaction-description">{{ transaction.description }}</div>
                      <div class="transaction-source">{{ transaction.source }}</div>
                    </div>
                    <div class="transaction-amount income-amount">
                      +{{ transaction.amount | number }} VNĐ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Expenses -->
          <div class="expense-section">
            <h2 class="section-title scroll-reveal">Chi Tiết Chi Tiêu</h2>
            <div class="expense-categories">
              <div class="category-card glass-card scroll-reveal" 
                   *ngFor="let category of expenseCategories; let i = index"
                   [style.animation-delay.ms]="i * 150">
                <div class="category-header">
                  <div class="category-icon">{{ category.icon }}</div>
                  <div class="category-info">
                    <h4>{{ category.name }}</h4>
                    <div class="category-amount">{{ category.amount | number }} VNĐ</div>
                  </div>
                  <div class="category-percentage">{{ category.percentage }}%</div>
                </div>
                
                <div class="category-progress">
                  <div class="progress-bar">
                    <div class="progress-fill" 
                         [style.width.%]="category.percentage"
                         [style.background-color]="category.color">
                    </div>
                  </div>
                </div>
                
                <div class="category-details">
                  <div class="detail-item" *ngFor="let detail of category.details">
                    <span class="detail-description">{{ detail.description }}</span>
                    <span class="detail-amount">{{ detail.amount | number }} VNĐ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Monthly Comparison -->
          <div class="comparison-section glass-card scroll-reveal">
            <h2>So Sánh Theo Tháng</h2>
            <div class="comparison-chart">
              <div class="chart-bars">
                <div class="bar-group" *ngFor="let month of monthlyData">
                  <div class="bar-container">
                    <div class="bar income-bar" 
                         [style.height.%]="(month.income / maxMonthlyValue) * 100">
                      <div class="bar-value">{{ (month.income / 1000000).toFixed(1) }}M</div>
                    </div>
                    <div class="bar expense-bar" 
                         [style.height.%]="(month.expense / maxMonthlyValue) * 100">
                      <div class="bar-value">{{ (month.expense / 1000000).toFixed(1) }}M</div>
                    </div>
                  </div>
                  <div class="bar-label">{{ month.month }}</div>
                </div>
              </div>
              
              <div class="chart-legend-horizontal">
                <div class="legend-item">
                  <div class="legend-color income-color"></div>
                  <span>Thu nhập</span>
                </div>
                <div class="legend-item">
                  <div class="legend-color expense-color"></div>
                  <span>Chi tiêu</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Transparency Commitment -->
          <div class="transparency-section glass-card scroll-reveal">
            <div class="transparency-header">
              <div class="transparency-icon">🔍</div>
              <h2>Cam Kết Minh Bạch</h2>
            </div>
            
            <div class="transparency-content">
              <div class="commitment-grid">
                <div class="commitment-item">
                  <div class="commitment-icon">📋</div>
                  <h4>Báo cáo định kỳ</h4>
                  <p>Công bố báo cáo tài chính hàng tháng với đầy đủ chi tiết</p>
                </div>
                
                <div class="commitment-item">
                  <div class="commitment-icon">🔐</div>
                  <h4>Kiểm toán độc lập</h4>
                  <p>Thuê đơn vị kiểm toán độc lập kiểm tra báo cáo hàng năm</p>
                </div>
                
                <div class="commitment-item">
                  <div class="commitment-icon">📞</div>
                  <h4>Hỗ trợ thông tin</h4>
                  <p>Sẵn sàng giải đáp mọi thắc mắc về việc sử dụng quỹ</p>
                </div>
                
                <div class="commitment-item">
                  <div class="commitment-icon">📸</div>
                  <h4>Minh chứng rõ ràng</h4>
                  <p>Cung cấp hóa đơn, chứng từ cho mọi khoản chi tiêu</p>
                </div>
              </div>
              
              <div class="contact-info">
                <h4>Liên hệ để biết thêm thông tin:</h4>
                <div class="contact-details">
                  <div class="contact-item">
                    <span class="contact-icon">📧</span>
                    <span>Email: doan&#64;cmc.edu.vn</span>
                  </div>
                  <div class="contact-item">
                    <span class="contact-icon">📞</span>
                    <span>Điện thoại: 028 3833 6999</span>
                  </div>
                  <div class="contact-item">
                    <span class="contact-icon">🏢</span>
                    <span>Địa chỉ: Số 290 An Dương Vương, P.4, Q.5, TP.HCM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <app-next-page-button
        nextPath="/hanh-trinh-da-qua"
        buttonText="Xem Hành Trình Đã Qua"
        subtitle="Những thành tựu đã đạt được"
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
    
    .section-title {
      text-align: center;
      color: white;
      font-size: 2.5rem;
      margin-bottom: 48px;
      font-weight: 600;
    }
    
    .financial-overview {
      padding: 40px;
      margin-bottom: 64px;
    }
    
    .overview-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
    }
    
    .overview-header h2 {
      color: white;
      font-size: 2rem;
      margin: 0;
    }
    
    .report-period {
      display: flex;
      align-items: center;
      gap: 8px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
    }
    
    .period-icon {
      font-size: 18px;
    }
    
    .overview-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
    }
    
    .stat-card {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 24px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }
    
    .stat-card:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
    
    .stat-icon {
      font-size: 32px;
      min-width: 40px;
    }
    
    .stat-content {
      flex: 1;
    }
    
    .stat-label {
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
      margin-bottom: 4px;
    }
    
    .stat-value {
      color: white;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 4px;
    }
    
    .stat-change {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.6);
    }
    
    .stat-change.positive {
      color: var(--success);
    }
    
    .income-section {
      margin-bottom: 64px;
    }
    
    .income-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
    
    .income-chart,
    .income-details {
      padding: 32px;
    }
    
    .income-chart h3,
    .income-details h3 {
      color: white;
      font-size: 1.5rem;
      margin-bottom: 24px;
      text-align: center;
    }
    
    .chart-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
    
    .pie-chart {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      position: relative;
      background: conic-gradient(
        var(--primary) 0deg 144deg,
        var(--secondary) 144deg 216deg,
        var(--accent) 216deg 288deg,
        var(--success) 288deg 360deg
      );
    }
    
    .chart-legend {
      width: 100%;
    }
    
    .legend-item {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }
    
    .legend-color {
      width: 16px;
      height: 16px;
      border-radius: 4px;
    }
    
    .legend-content {
      flex: 1;
    }
    
    .legend-label {
      color: white;
      font-weight: 500;
      margin-bottom: 2px;
    }
    
    .legend-value {
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
    }
    
    .income-list {
      max-height: 400px;
      overflow-y: auto;
    }
    
    .income-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 12px;
    }
    
    .transaction-info {
      flex: 1;
    }
    
    .transaction-date {
      color: var(--primary-light);
      font-size: 12px;
      font-weight: 500;
      margin-bottom: 4px;
    }
    
    .transaction-description {
      color: white;
      font-weight: 500;
      margin-bottom: 2px;
    }
    
    .transaction-source {
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
    }
    
    .transaction-amount {
      font-weight: 700;
      font-size: 1.1rem;
    }
    
    .income-amount {
      color: var(--success);
    }
    
    .expense-section {
      margin-bottom: 64px;
    }
    
    .expense-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 32px;
    }
    
    .category-card {
      padding: 32px;
    }
    
    .category-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
    }
    
    .category-icon {
      font-size: 32px;
      min-width: 40px;
    }
    
    .category-info {
      flex: 1;
    }
    
    .category-info h4 {
      color: white;
      font-size: 1.25rem;
      margin-bottom: 4px;
    }
    
    .category-amount {
      color: var(--accent);
      font-weight: 700;
      font-size: 1.1rem;
    }
    
    .category-percentage {
      color: rgba(255, 255, 255, 0.8);
      font-weight: 600;
      font-size: 1.1rem;
    }
    
    .category-progress {
      margin-bottom: 20px;
    }
    
    .progress-bar {
      width: 100%;
      height: 8px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      overflow: hidden;
    }
    
    .progress-fill {
      height: 100%;
      border-radius: 4px;
      transition: width 1.5s ease;
    }
    
    .category-details {
      display: grid;
      gap: 8px;
    }
    
    .detail-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .detail-description {
      color: rgba(255, 255, 255, 0.8);
      font-size: 14px;
    }
    
    .detail-amount {
      color: white;
      font-weight: 500;
      font-size: 14px;
    }
    
    .comparison-section {
      padding: 40px;
      margin-bottom: 64px;
    }
    
    .comparison-section h2 {
      color: white;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 32px;
    }
    
    .comparison-chart {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    
    .chart-bars {
      display: flex;
      justify-content: space-around;
      align-items: end;
      height: 300px;
      padding: 20px 0;
    }
    
    .bar-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    
    .bar-container {
      display: flex;
      gap: 8px;
      align-items: end;
      height: 250px;
    }
    
    .bar {
      width: 24px;
      border-radius: 4px 4px 0 0;
      position: relative;
      transition: height 1.5s ease;
      min-height: 20px;
    }
    
    .income-bar {
      background: linear-gradient(180deg, var(--success), var(--primary));
    }
    
    .expense-bar {
      background: linear-gradient(180deg, var(--accent), var(--error));
    }
    
    .bar-value {
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      color: white;
      font-size: 10px;
      font-weight: 600;
      white-space: nowrap;
    }
    
    .bar-label {
      color: rgba(255, 255, 255, 0.8);
      font-size: 12px;
      font-weight: 500;
      text-align: center;
    }
    
    .chart-legend-horizontal {
      display: flex;
      justify-content: center;
      gap: 32px;
    }
    
    .chart-legend-horizontal .legend-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
    }
    
    .income-color {
      background: linear-gradient(90deg, var(--success), var(--primary));
    }
    
    .expense-color {
      background: linear-gradient(90deg, var(--accent), var(--error));
    }
    
    .transparency-section {
      padding: 48px;
    }
    
    .transparency-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin-bottom: 40px;
    }
    
    .transparency-icon {
      font-size: 32px;
    }
    
    .transparency-header h2 {
      color: white;
      font-size: 2rem;
      margin: 0;
    }
    
    .commitment-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }
    
    .commitment-item {
      text-align: center;
      padding: 24px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }
    
    .commitment-item:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
    
    .commitment-icon {
      font-size: 32px;
      margin-bottom: 16px;
    }
    
    .commitment-item h4 {
      color: white;
      font-size: 1.1rem;
      margin-bottom: 12px;
    }
    
    .commitment-item p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.5;
      margin: 0;
    }
    
    .contact-info {
      text-align: center;
      padding: 32px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .contact-info h4 {
      color: white;
      font-size: 1.25rem;
      margin-bottom: 20px;
    }
    
    .contact-details {
      display: grid;
      gap: 12px;
      max-width: 400px;
      margin: 0 auto;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 12px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
    }
    
    .contact-icon {
      font-size: 16px;
      min-width: 20px;
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.25rem;
      }
      
      .financial-overview {
        padding: 24px;
      }
      
      .overview-header {
        flex-direction: column;
        gap: 16px;
        text-align: center;
      }
      
      .overview-stats {
        grid-template-columns: 1fr;
        gap: 16px;
      }
      
      .income-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }
      
      .expense-categories {
        grid-template-columns: 1fr;
        gap: 24px;
      }
      
      .category-card {
        padding: 24px;
      }
      
      .comparison-section {
        padding: 24px;
      }
      
      .chart-bars {
        height: 250px;
        padding: 10px 0;
      }
      
      .bar-container {
        height: 200px;
      }
      
      .bar {
        width: 20px;
      }
      
      .chart-legend-horizontal {
        gap: 16px;
      }
      
      .transparency-section {
        padding: 32px 24px;
      }
      
      .commitment-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
    
    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }
      
      .stat-card {
        flex-direction: column;
        text-align: center;
        gap: 12px;
      }
      
      .category-header {
        flex-direction: column;
        text-align: center;
        gap: 12px;
      }
      
      .chart-bars {
        height: 200px;
      }
      
      .bar-container {
        height: 150px;
      }
      
      .bar {
        width: 16px;
      }
      
      .chart-legend-horizontal {
        flex-direction: column;
        gap: 12px;
      }
      
      .contact-details {
        gap: 16px;
      }
      
      .contact-item {
        flex-direction: column;
        text-align: center;
        gap: 8px;
      }
    }
  `]
})
export class CongKhaiTaiChinhComponent implements OnInit {
  currentMonth = 3;
  currentYear = 2025;
  
  // Financial Overview Data
  totalIncome = 437500000;
  totalExpense = 125000000;
  currentBalance = 312500000;
  targetProgress = 35;
  targetAmount = 437500000;
  totalTarget = 1250000000;
  
  incomeGrowth = 15.2;
  expenseGrowth = 8.7;
  balanceGrowth = 18.5;
  
  // Income Sources
  incomeSources = [
    { name: 'Cá nhân', amount: 175000000, percentage: 40, color: '#22C55E' },
    { name: 'Doanh nghiệp', amount: 131250000, percentage: 30, color: '#3B82F6' },
    { name: 'Tổ chức', amount: 87500000, percentage: 20, color: '#F97316' },
    { name: 'Khác', amount: 43750000, percentage: 10, color: '#10B981' }
  ];
  
  // Income Transactions
  incomeTransactions = [
    {
      date: '15/03/2025',
      description: 'Tài trợ từ Công ty ABC',
      source: 'Doanh nghiệp',
      amount: 50000000
    },
    {
      date: '12/03/2025',
      description: 'Quyên góp từ cựu sinh viên',
      source: 'Cá nhân',
      amount: 25000000
    },
    {
      date: '10/03/2025',
      description: 'Hỗ trợ từ Quỹ Giáo dục XYZ',
      source: 'Tổ chức',
      amount: 30000000
    },
    {
      date: '08/03/2025',
      description: 'Chuyển khoản qua QR Code',
      source: 'Cá nhân',
      amount: 5000000
    },
    {
      date: '05/03/2025',
      description: 'Tài trợ thiết bị từ Công ty DEF',
      source: 'Doanh nghiệp',
      amount: 15000000
    }
  ];
  
  // Expense Categories
  expenseCategories = [
    {
      name: 'Học bổng sinh viên',
      icon: '🎓',
      amount: 50000000,
      percentage: 40,
      color: '#22C55E',
      details: [
        { description: 'Học bổng học kỳ 1', amount: 30000000 },
        { description: 'Học bổng khuyến khích học tập', amount: 15000000 },
        { description: 'Hỗ trợ sinh viên khó khăn', amount: 5000000 }
      ]
    },
    {
      name: 'Trang thiết bị',
      icon: '💻',
      amount: 30000000,
      percentage: 24,
      color: '#3B82F6',
      details: [
        { description: 'Mua máy tính cho phòng lab', amount: 20000000 },
        { description: 'Thiết bị mạng và phần mềm', amount: 7000000 },
        { description: 'Bảo trì và nâng cấp', amount: 3000000 }
      ]
    },
    {
      name: 'Hoạt động tình nguyện',
      icon: '🤝',
      amount: 25000000,
      percentage: 20,
      color: '#F97316',
      details: [
        { description: 'Chương trình từ thiện', amount: 15000000 },
        { description: 'Hoạt động cộng đồng', amount: 7000000 },
        { description: 'Vật tư và logistics', amount: 3000000 }
      ]
    },
    {
      name: 'Quản lý vận hành',
      icon: '⚙️',
      amount: 20000000,
      percentage: 16,
      color: '#10B981',
      details: [
        { description: 'Chi phí quản lý', amount: 12000000 },
        { description: 'Marketing và truyền thông', amount: 5000000 },
        { description: 'Chi phí khác', amount: 3000000 }
      ]
    }
  ];
  
  // Monthly Comparison Data
  monthlyData = [
    { month: 'T1', income: 150000000, expense: 80000000 },
    { month: 'T2', income: 200000000, expense: 95000000 },
    { month: 'T3', income: 175000000, expense: 125000000 },
    { month: 'T4', income: 0, expense: 0 },
    { month: 'T5', income: 0, expense: 0 },
    { month: 'T6', income: 0, expense: 0 }
  ];
  
  maxMonthlyValue = 200000000;
  
  ngOnInit() {
    this.setupScrollReveal();
    this.animateProgressBars();
    this.animateChartBars();
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
  
  private animateProgressBars() {
    setTimeout(() => {
      document.querySelectorAll('.progress-fill').forEach((bar, index) => {
        const element = bar as HTMLElement;
        const targetWidth = this.expenseCategories[index].percentage + '%';
        element.style.width = '0%';
        setTimeout(() => {
          element.style.width = targetWidth;
        }, 500 + index * 200);
      });
    }, 1000);
  }
  
  private animateChartBars() {
    setTimeout(() => {
      document.querySelectorAll('.bar').forEach(bar => {
        const element = bar as HTMLElement;
        const targetHeight = element.style.height;
        element.style.height = '20px';
        setTimeout(() => {
          element.style.height = targetHeight;
        }, 1500);
      });
    }, 2000);
  }
  
  getStartAngle(index: number): number {
    let angle = 0;
    for (let i = 0; i < index; i++) {
      angle += (this.incomeSources[i].percentage / 100) * 360;
    }
    return angle;
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NextPageButtonComponent } from '../../shared/components/next-page-button/next-page-button.component';

@Component({
  selector: 'app-ung-ho',
  standalone: true,
  imports: [CommonModule, FormsModule, NextPageButtonComponent],
  template: `
    <div class="page-container page-transition">
      <div class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="badge-icon">💝</span>
              <span>Ủng Hộ Dự Án</span>
            </div>
            <h1 class="hero-title">
              <span class="gradient-text">Cùng Nhau Tạo Nên</span> <br>
              Sự Thay Đổi Tích Cực
            </h1>
            <p class="hero-subtitle">
              Mỗi đóng góp của bạn đều có ý nghĩa và tạo ra giá trị lâu dài
            </p>
          </div>
        </div>
      </div>

      <div class="content-section section-spacing">
        <div class="container">
          <!-- QR Code Generator -->
          <div class="qr-generator-section">
            <h2 class="section-title scroll-reveal">Tạo Mã QR Chuyển Khoản</h2>
            
            <div class="qr-generator-card glass-card scroll-reveal">
              <div class="qr-form-section">
                <div class="form-header">
                  <div class="form-icon">📱</div>
                  <h3>Thông Tin Chuyển Khoản</h3>
                </div>
                
                <div class="form-grid">
                  <div class="form-group">
                    <label for="amount">Số tiền ủng hộ (VNĐ) *</label>
                    <div class="input-wrapper">
                      <input 
                        type="number" 
                        id="amount"
                        [(ngModel)]="donationAmount"
                        (input)="onAmountChange()"
                        placeholder="Nhập số tiền"
                        class="form-input amount-input"
                        min="1000"
                      >
                      <span class="input-suffix">VNĐ</span>
                    </div>
                    <div class="input-note">Số tiền tối thiểu: 1,000 VNĐ</div>
                  </div>
                  
                  <div class="form-group">
                    <label for="message">Nội dung chuyển khoản</label>
                    <input 
                      type="text" 
                      id="message"
                      [(ngModel)]="donationMessage"
                      (input)="onMessageChange()"
                      placeholder="Ung ho du an hoc bong CMC"
                      class="form-input"
                      maxlength="100"
                    >
                    <div class="input-note">
                      <span class="note-icon">⚠️</span>
                      Không sử dụng dấu tiếng Việt
                    </div>
                  </div>
                </div>
                
                <div class="quick-amounts">
                  <div class="quick-amounts-label">Số tiền gợi ý:</div>
                  <div class="quick-amounts-grid">
                    <button 
                      *ngFor="let amount of quickAmounts"
                      (click)="setQuickAmount(amount.amount)"
                      class="quick-amount-btn"
                      [class.active]="donationAmount === amount.amount"
                    >
                      <span class="amount-value">{{ formatAmount(amount.amount) }}</span>
                      <span class="amount-label">{{ amount.label }}</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div class="qr-display-section">
                <div class="qr-header">
                  <div class="qr-icon">🎯</div>
                  <h3>Mã QR Chuyển Khoản</h3>
                </div>
                
                <div class="qr-container" *ngIf="qrCodeUrl && donationAmount; else noQrCode">
                  <div class="qr-wrapper">
                    <img [src]="qrCodeUrl" alt="QR Code" class="qr-image" (error)="onQrError()">
                    <div class="qr-overlay">
                      <div class="qr-amount">{{ donationAmount | number }} VNĐ</div>
                    </div>
                  </div>
                  
                  <div class="bank-info-card">
                    <div class="bank-header">
                      <div class="bank-logo">🏦</div>
                      <div class="bank-name">VietinBank</div>
                    </div>
                    <div class="bank-details">
                      <div class="detail-row">
                        <span class="detail-label">Số TK:</span>
                        <span class="detail-value">102004001154967</span>
                      </div>
                      <div class="detail-row">
                        <span class="detail-label">Tên TK:</span>
                        <span class="detail-value">DOAN TNCS HCM TRUONG DH CMC</span>
                      </div>
                      <div class="detail-row">
                        <span class="detail-label">Nội dung:</span>
                        <span class="detail-value">{{ donationMessage || 'Ung ho du an CMC' }}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="qr-actions">
                    <button class="btn btn-primary" (click)="downloadQR()">
                      <span>Tải về QR</span>
                      <span>📥</span>
                    </button>
                    <button class="btn btn-secondary" (click)="shareQR()">
                      <span>Chia sẻ</span>
                      <span>📤</span>
                    </button>
                  </div>
                </div>
                
                <ng-template #noQrCode>
                  <div class="qr-placeholder">
                    <div class="placeholder-animation">
                      <div class="placeholder-icon">📱</div>
                      <div class="placeholder-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <h4>Nhập số tiền để tạo mã QR</h4>
                    <p>Mã QR sẽ được tạo tự động khi bạn nhập số tiền ủng hộ</p>
                  </div>
                </ng-template>
              </div>
            </div>
          </div>
          
          <!-- Instructions -->
          <div class="instructions-section">
            <h2 class="section-title scroll-reveal">Hướng Dẫn Chuyển Khoản</h2>
            
            <div class="instructions-grid">
              <div class="instruction-card glass-card scroll-reveal">
                <div class="instruction-number">1</div>
                <div class="instruction-content">
                  <h4>Mở ứng dụng ngân hàng</h4>
                  <p>Mở ứng dụng mobile banking trên điện thoại của bạn</p>
                </div>
                <div class="instruction-icon">📱</div>
              </div>
              
              <div class="instruction-card glass-card scroll-reveal">
                <div class="instruction-number">2</div>
                <div class="instruction-content">
                  <h4>Quét mã QR</h4>
                  <p>Chọn "Quét mã QR" hoặc "Chuyển khoản QR" trong ứng dụng</p>
                </div>
                <div class="instruction-icon">📷</div>
              </div>
              
              <div class="instruction-card glass-card scroll-reveal">
                <div class="instruction-number">3</div>
                <div class="instruction-content">
                  <h4>Xác nhận thông tin</h4>
                  <p>Kiểm tra số tiền và nội dung chuyển khoản</p>
                </div>
                <div class="instruction-icon">✅</div>
              </div>
              
              <div class="instruction-card glass-card scroll-reveal">
                <div class="instruction-number">4</div>
                <div class="instruction-content">
                  <h4>Hoàn tất giao dịch</h4>
                  <p>Xác nhận chuyển khoản và chụp ảnh màn hình</p>
                </div>
                <div class="instruction-icon">💳</div>
              </div>
            </div>
          </div>

          <!-- Alternative Methods -->
          <div class="alternative-methods">
            <h2 class="section-title scroll-reveal">Hình Thức Ủng Hộ Khác</h2>
            
            <div class="methods-grid">
              <div class="method-card glass-card scroll-reveal">
                <div class="method-icon">🏦</div>
                <h3>Chuyển Khoản Thủ Công</h3>
                <div class="bank-details-manual">
                  <div class="detail-item">
                    <span class="label">Ngân hàng:</span>
                    <span class="value">VietinBank</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">Số TK:</span>
                    <span class="value copyable" (click)="copyToClipboard('102004001154967')">
                      102004001154967
                      <span class="copy-icon">📋</span>
                    </span>
                  </div>
                  <div class="detail-item">
                    <span class="label">Tên TK:</span>
                    <span class="value">DOAN TNCS HCM TRUONG DH CMC</span>
                  </div>
                </div>
                <div class="transfer-note">
                  <div class="note-icon">⚠️</div>
                  <div class="note-content">
                    <strong>Lưu ý:</strong>
                    <p>Sau khi chuyển khoản, vui lòng gửi ảnh chụp màn hình về email: doan&#64;cmc.edu.vn</p>
                  </div>
                </div>
              </div>
              
              <div class="method-card glass-card scroll-reveal">
                <div class="method-icon">🎁</div>
                <h3>Tài Trợ Hiện Vật</h3>
                <div class="method-content">
                  <ul>
                    <li>Sách giáo khoa và tài liệu học tập</li>
                    <li>Máy tính và thiết bị công nghệ</li>
                    <li>Đồ dùng văn phòng phẩm</li>
                    <li>Thiết bị thể thao và giải trí</li>
                  </ul>
                  <a href="tel:02838336999" class="contact-btn">
                    <span>Liên hệ tài trợ</span>
                    <span>📞</span>
                  </a>
                </div>
              </div>
              
              <div class="method-card glass-card scroll-reveal">
                <div class="method-icon">⏰</div>
                <h3>Tình Nguyện Viên</h3>
                <div class="method-content">
                  <ul>
                    <li>Tham gia các hoạt động từ thiện</li>
                    <li>Hỗ trợ tổ chức sự kiện</li>
                    <li>Chia sẻ kiến thức và kỹ năng</li>
                    <li>Truyền thông và marketing</li>
                  </ul>
                  <a href="#" class="contact-btn" (click)="scrollToContact()">
                    <span>Đăng ký ngay</span>
                    <span>🤝</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Impact Visualization -->
          <div class="impact-section glass-card scroll-reveal">
            <div class="impact-header">
              <div class="impact-icon">🌟</div>
              <h2>Tác Động Của Sự Ủng Hộ</h2>
              <p>Xem những gì mà sự đóng góp của bạn có thể tạo ra</p>
            </div>
            
            <div class="impact-calculator" *ngIf="donationAmount">
              <div class="calculator-result">
                <div class="result-amount">{{ donationAmount | number }} VNĐ</div>
                <div class="result-impact">{{ calculateImpact(donationAmount) }}</div>
              </div>
            </div>
            
            <div class="impact-examples">
              <div class="impact-item" *ngFor="let impact of impactExamples">
                <div class="impact-visual">{{ impact.icon }}</div>
                <div class="impact-content">
                  <div class="impact-amount">{{ impact.amount | number }} VNĐ</div>
                  <div class="impact-description">{{ impact.description }}</div>
                </div>
                <div class="impact-progress">
                  <div class="progress-bar">
                    <div class="progress-fill" [style.width.%]="getProgressPercentage(impact.amount)"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Testimonials -->
          <div class="testimonials-section">
            <h2 class="section-title scroll-reveal">Lời Cảm Ơn Từ Sinh Viên</h2>
            <div class="testimonials-carousel">
              <div class="testimonial-card glass-card scroll-reveal" 
                   *ngFor="let testimonial of testimonials; let i = index"
                   [style.animation-delay.ms]="i * 200">
                <div class="testimonial-content">
                  <div class="quote-mark">"</div>
                  <p class="testimonial-text">{{ testimonial.text }}</p>
                  <div class="testimonial-author">
                    <div class="author-avatar">{{ testimonial.avatar }}</div>
                    <div class="author-info">
                      <div class="author-name">{{ testimonial.name }}</div>
                      <div class="author-title">{{ testimonial.title }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <app-next-page-button
        nextPath="/cong-khai-tai-chinh"
        buttonText="Xem Báo Cáo Tài Chính"
        subtitle="Minh bạch trong từng khoản chi"
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
      background: rgba(34, 197, 94, 0.2);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(34, 197, 94, 0.3);
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
    
    .qr-generator-section {
      margin-bottom: 64px;
    }
    
    .qr-generator-card {
      padding: 0;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 600px;
    }
    
    .qr-form-section {
      padding: 40px;
      background: rgba(34, 197, 94, 0.05);
      border-right: 1px solid rgba(34, 197, 94, 0.2);
    }
    
    .form-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 32px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(34, 197, 94, 0.2);
    }
    
    .form-icon {
      font-size: 32px;
    }
    
    .form-header h3 {
      color: white;
      font-size: 1.5rem;
      margin: 0;
    }
    
    .form-grid {
      display: grid;
      gap: 24px;
      margin-bottom: 32px;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
    }
    
    .form-group label {
      color: white;
      font-weight: 500;
      margin-bottom: 8px;
      font-size: 14px;
    }
    
    .input-wrapper {
      position: relative;
    }
    
    .form-input {
      width: 100%;
      padding: 16px;
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(34, 197, 94, 0.3);
      border-radius: 12px;
      color: white;
      font-size: 16px;
      transition: all 0.3s ease;
      font-family: inherit;
    }
    
    .form-input:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.15);
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
    }
    
    .form-input::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    
    .amount-input {
      font-size: 18px;
      font-weight: 600;
      padding-right: 60px;
    }
    
    .input-suffix {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      color: rgba(34, 197, 94, 0.8);
      font-weight: 600;
      font-size: 14px;
    }
    
    .input-note {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.6);
      margin-top: 6px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .note-icon {
      font-size: 14px;
    }
    
    .quick-amounts {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 20px;
      border: 1px solid rgba(34, 197, 94, 0.2);
    }
    
    .quick-amounts-label {
      color: white;
      font-weight: 500;
      margin-bottom: 16px;
      font-size: 14px;
    }
    
    .quick-amounts-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    
    .quick-amount-btn {
      padding: 16px 12px;
      background: rgba(255, 255, 255, 0.05);
      border: 2px solid rgba(34, 197, 94, 0.3);
      border-radius: 12px;
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .quick-amount-btn:hover,
    .quick-amount-btn.active {
      background: rgba(34, 197, 94, 0.2);
      border-color: var(--primary);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(34, 197, 94, 0.3);
    }
    
    .amount-value {
      font-weight: 700;
      font-size: 16px;
      color: var(--primary);
    }
    
    .amount-label {
      font-size: 11px;
      color: rgba(255, 255, 255, 0.7);
    }
    
    .qr-display-section {
      padding: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.02);
    }
    
    .qr-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 32px;
      text-align: center;
    }
    
    .qr-icon {
      font-size: 32px;
    }
    
    .qr-header h3 {
      color: white;
      font-size: 1.5rem;
      margin: 0;
    }
    
    .qr-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      width: 100%;
    }
    
    .qr-wrapper {
      position: relative;
      display: inline-block;
    }
    
    .qr-image {
      width: 280px;
      height: 280px;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(34, 197, 94, 0.3);
      border: 4px solid rgba(34, 197, 94, 0.4);
      transition: all 0.3s ease;
    }
    
    .qr-image:hover {
      transform: scale(1.05);
      box-shadow: 0 25px 80px rgba(34, 197, 94, 0.4);
    }
    
    .qr-overlay {
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--primary);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 14px;
      box-shadow: 0 8px 25px rgba(34, 197, 94, 0.4);
    }
    
    .bank-info-card {
      background: rgba(34, 197, 94, 0.1);
      border: 2px solid rgba(34, 197, 94, 0.3);
      border-radius: 16px;
      padding: 20px;
      width: 100%;
      max-width: 320px;
    }
    
    .bank-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(34, 197, 94, 0.3);
    }
    
    .bank-logo {
      font-size: 24px;
    }
    
    .bank-name {
      color: white;
      font-weight: 600;
      font-size: 16px;
    }
    
    .bank-details {
      display: grid;
      gap: 8px;
    }
    
    .detail-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
    }
    
    .detail-label {
      color: rgba(255, 255, 255, 0.7);
      font-size: 13px;
      font-weight: 500;
    }
    
    .detail-value {
      color: white;
      font-weight: 600;
      font-size: 13px;
      text-align: right;
      max-width: 200px;
      word-break: break-word;
    }
    
    .qr-actions {
      display: flex;
      gap: 12px;
      margin-top: 16px;
    }
    
    .qr-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 400px;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
    }
    
    .placeholder-animation {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin-bottom: 24px;
    }
    
    .placeholder-icon {
      font-size: 64px;
      animation: floating 3s ease-in-out infinite;
    }
    
    .placeholder-dots {
      display: flex;
      gap: 8px;
    }
    
    .placeholder-dots span {
      width: 8px;
      height: 8px;
      background: rgba(34, 197, 94, 0.6);
      border-radius: 50%;
      animation: pulse 1.5s ease-in-out infinite;
    }
    
    .placeholder-dots span:nth-child(2) {
      animation-delay: 0.3s;
    }
    
    .placeholder-dots span:nth-child(3) {
      animation-delay: 0.6s;
    }
    
    .qr-placeholder h4 {
      color: white;
      margin-bottom: 8px;
      font-size: 1.2rem;
    }
    
    .instructions-section {
      margin-bottom: 64px;
    }
    
    .instructions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
    }
    
    .instruction-card {
      padding: 32px 24px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .instruction-number {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 40px;
      height: 40px;
      background: var(--primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 18px;
    }
    
    .instruction-content h4 {
      color: white;
      margin-bottom: 12px;
      font-size: 1.1rem;
    }
    
    .instruction-content p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.5;
      margin: 0;
    }
    
    .instruction-icon {
      font-size: 48px;
      margin-bottom: 20px;
    }
    
    .alternative-methods {
      margin-bottom: 64px;
    }
    
    .methods-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 32px;
    }
    
    .method-card {
      padding: 32px;
      text-align: center;
    }
    
    .method-icon {
      font-size: 48px;
      margin-bottom: 20px;
    }
    
    .method-card h3 {
      color: white;
      margin-bottom: 20px;
      font-size: 1.25rem;
    }
    
    .bank-details-manual {
      text-align: left;
      margin-bottom: 20px;
    }
    
    .detail-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      background: rgba(34, 197, 94, 0.1);
      border-radius: 8px;
      margin-bottom: 8px;
      border: 1px solid rgba(34, 197, 94, 0.2);
    }
    
    .detail-item .label {
      color: rgba(255, 255, 255, 0.7);
      font-weight: 500;
    }
    
    .detail-item .value {
      color: white;
      font-weight: 600;
    }
    
    .copyable {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s ease;
    }
    
    .copyable:hover {
      color: var(--primary);
    }
    
    .copy-icon {
      font-size: 14px;
      opacity: 0.7;
    }
    
    .transfer-note {
      display: flex;
      gap: 12px;
      background: rgba(249, 115, 22, 0.1);
      border: 1px solid rgba(249, 115, 22, 0.3);
      border-radius: 12px;
      padding: 16px;
      margin-top: 16px;
    }
    
    .transfer-note .note-icon {
      font-size: 20px;
      min-width: 20px;
    }
    
    .transfer-note .note-content {
      color: rgba(255, 255, 255, 0.9);
      text-align: left;
    }
    
    .transfer-note strong {
      color: var(--accent);
      display: block;
      margin-bottom: 8px;
    }
    
    .transfer-note p {
      margin: 0;
      font-size: 14px;
      line-height: 1.4;
    }
    
    .method-content ul {
      text-align: left;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 20px;
      padding-left: 20px;
    }
    
    .method-content li {
      margin-bottom: 8px;
      line-height: 1.5;
    }
    
    .contact-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      background: rgba(34, 197, 94, 0.2);
      border: 2px solid rgba(34, 197, 94, 0.4);
      border-radius: 12px;
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    
    .contact-btn:hover {
      background: rgba(34, 197, 94, 0.3);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(34, 197, 94, 0.3);
    }
    
    .impact-section {
      padding: 48px;
      margin-bottom: 64px;
      text-align: center;
    }
    
    .impact-header {
      margin-bottom: 40px;
    }
    
    .impact-icon {
      font-size: 48px;
      margin-bottom: 16px;
    }
    
    .impact-header h2 {
      color: white;
      font-size: 2rem;
      margin-bottom: 12px;
    }
    
    .impact-header p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.1rem;
    }
    
    .impact-calculator {
      background: rgba(34, 197, 94, 0.1);
      border: 2px solid rgba(34, 197, 94, 0.3);
      border-radius: 20px;
      padding: 32px;
      margin-bottom: 40px;
    }
    
    .calculator-result {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    
    .result-amount {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--primary);
    }
    
    .result-impact {
      font-size: 1.2rem;
      color: white;
      font-weight: 500;
    }
    
    .impact-examples {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }
    
    .impact-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 24px;
      background: rgba(34, 197, 94, 0.05);
      border: 1px solid rgba(34, 197, 94, 0.2);
      border-radius: 16px;
      transition: all 0.3s ease;
    }
    
    .impact-item:hover {
      background: rgba(34, 197, 94, 0.1);
      transform: translateY(-2px);
    }
    
    .impact-visual {
      font-size: 32px;
      min-width: 40px;
    }
    
    .impact-content {
      flex: 1;
      text-align: left;
    }
    
    .impact-amount {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 4px;
    }
    
    .impact-description {
      color: rgba(255, 255, 255, 0.8);
      font-size: 14px;
      line-height: 1.4;
    }
    
    .impact-progress {
      width: 60px;
    }
    
    .progress-bar {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 3px;
      overflow: hidden;
    }
    
    .progress-fill {
      height: 100%;
      background: var(--primary);
      border-radius: 3px;
      transition: width 1s ease;
    }
    
    .testimonials-section {
      margin-bottom: 32px;
    }
    
    .testimonials-carousel {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 32px;
    }
    
    .testimonial-card {
      padding: 32px;
    }
    
    .testimonial-content {
      text-align: center;
    }
    
    .quote-mark {
      font-size: 48px;
      color: var(--primary);
      margin-bottom: 16px;
      font-family: Georgia, serif;
    }
    
    .testimonial-text {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 24px;
      font-style: italic;
    }
    
    .testimonial-author {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
    
    .author-avatar {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, var(--primary), #16A34A);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: 600;
      color: white;
    }
    
    .author-info {
      text-align: left;
    }
    
    .author-name {
      color: white;
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .author-title {
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.25rem;
      }
      
      .qr-generator-card {
        grid-template-columns: 1fr;
        min-height: auto;
      }
      
      .qr-form-section {
        border-right: none;
        border-bottom: 1px solid rgba(34, 197, 94, 0.2);
      }
      
      .qr-image {
        width: 220px;
        height: 220px;
      }
      
      .quick-amounts-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .instructions-grid {
        grid-template-columns: 1fr;
      }
      
      .methods-grid {
        grid-template-columns: 1fr;
      }
      
      .impact-examples {
        grid-template-columns: 1fr;
      }
      
      .testimonials-carousel {
        grid-template-columns: 1fr;
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
    
    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }
      
      .qr-form-section,
      .qr-display-section {
        padding: 24px;
      }
      
      .qr-image {
        width: 180px;
        height: 180px;
      }
      
      .quick-amounts-grid {
        grid-template-columns: 1fr;
      }
      
      .qr-actions {
        flex-direction: column;
      }
      
      .impact-item {
        flex-direction: column;
        text-align: center;
        gap: 12px;
      }
      
      .impact-content {
        text-align: center;
      }
    }
  `]
})
export class UngHoComponent implements OnInit {
  donationAmount: number | null = null;
  donationMessage: string = 'Ung ho du an CMC';
  qrCodeUrl: string = '';
  
  quickAmounts = [
    { amount: 50000, label: 'Sách vở' },
    { amount: 100000, label: 'Ăn uống' },
    { amount: 200000, label: 'Học phí' },
    { amount: 500000, label: 'Học bổng' },
    { amount: 1000000, label: 'Thiết bị' },
    { amount: 2000000, label: 'Máy tính' }
  ];
  
  impactExamples = [
    {
      amount: 50000,
      description: 'Cung cấp 1 bộ sách giáo khoa cho sinh viên',
      icon: '📚'
    },
    {
      amount: 200000,
      description: 'Hỗ trợ tiền ăn cho sinh viên khó khăn 1 tháng',
      icon: '🍜'
    },
    {
      amount: 500000,
      description: 'Trang trải 1 kỳ học bổng cho sinh viên nghèo',
      icon: '🎓'
    },
    {
      amount: 2000000,
      description: 'Mua 1 máy tính cho phòng thực hành',
      icon: '💻'
    }
  ];
  
  testimonials = [
    {
      text: 'Nhờ có học bổng từ quỹ, em đã có thể tiếp tục việc học mà không phải lo lắng về tài chính. Em rất biết ơn sự giúp đỡ này.',
      name: 'Nguyễn Văn An',
      title: 'Sinh viên năm 3, Khoa CNTT',
      avatar: 'A'
    },
    {
      text: 'Phòng lab mới với trang thiết bị hiện đại đã giúp chúng em học tập hiệu quả hơn rất nhiều. Cảm ơn các nhà tài trợ!',
      name: 'Trần Thị Bình',
      title: 'Sinh viên năm 2, Khoa Kinh tế',
      avatar: 'B'
    },
    {
      text: 'Các hoạt động tình nguyện đã giúp em phát triển kỹ năng mềm và có thêm nhiều trải nghiệm quý báu.',
      name: 'Lê Minh Cường',
      title: 'Sinh viên năm 4, Khoa Quản trị',
      avatar: 'C'
    }
  ];
  
  ngOnInit() {
    this.setupScrollReveal();
    this.generateQRCode();
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
  
  onAmountChange() {
    this.generateQRCode();
  }
  
  onMessageChange() {
    this.generateQRCode();
  }
  
  setQuickAmount(amount: number) {
    this.donationAmount = amount;
    this.generateQRCode();
  }
  
  generateQRCode() {
    if (!this.donationAmount || this.donationAmount <= 0) {
      this.qrCodeUrl = '';
      return;
    }
    
    const baseUrl = 'https://api.vietqr.io/image/970415-102004001154967-pMY2wMz.jpg';
    const accountName = encodeURIComponent('DOAN TNCS HCM TRUONG DH CMC');
    const amount = this.donationAmount;
    const addInfo = encodeURIComponent(this.donationMessage || 'Ung ho du an CMC');
    
    this.qrCodeUrl = `${baseUrl}?accountName=${accountName}&amount=${amount}&addInfo=${addInfo}`;
  }
  
  formatAmount(amount: number): string {
    if (amount >= 1000000) {
      return (amount / 1000000) + 'M';
    } else if (amount >= 1000) {
      return (amount / 1000) + 'K';
    }
    return amount.toString();
  }
  
  calculateImpact(amount: number): string {
    if (amount >= 2000000) {
      return 'Có thể mua 1 máy tính cho phòng thực hành';
    } else if (amount >= 500000) {
      return 'Có thể trang trải 1 kỳ học bổng';
    } else if (amount >= 200000) {
      return 'Có thể hỗ trợ tiền ăn 1 tháng';
    } else if (amount >= 50000) {
      return 'Có thể mua 1 bộ sách giáo khoa';
    } else {
      return 'Mỗi đóng góp đều có ý nghĩa';
    }
  }
  
  getProgressPercentage(targetAmount: number): number {
    if (!this.donationAmount) return 0;
    return Math.min(100, (this.donationAmount / targetAmount) * 100);
  }
  
  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      // Show success message
      console.log('Copied to clipboard:', text);
    });
  }
  
  downloadQR() {
    if (this.qrCodeUrl) {
      const link = document.createElement('a');
      link.href = this.qrCodeUrl;
      link.download = `QR-Code-${this.donationAmount}-VND.jpg`;
      link.click();
    }
  }
  
  shareQR() {
    if (navigator.share && this.qrCodeUrl) {
      navigator.share({
        title: 'Mã QR Ủng Hộ Dự Án CMC',
        text: `Ủng hộ ${this.donationAmount?.toLocaleString()} VNĐ cho dự án gây quỹ tình nguyện`,
        url: this.qrCodeUrl
      });
    } else {
      this.copyToClipboard(this.qrCodeUrl);
    }
  }
  
  scrollToContact() {
    // Navigate to contact page
    window.location.href = '/lien-he';
  }
  
  onQrError() {
    console.error('Failed to load QR code');
    this.qrCodeUrl = '';
  }
}
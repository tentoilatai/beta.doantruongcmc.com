import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lien-he',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-container page-transition">
      <div class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="badge-icon">📞</span>
              <span>Liên Hệ</span>
            </div>
            <h1 class="hero-title">
              <span class="gradient-text">Kết Nối</span> <br>
              Cùng Chúng Tôi
            </h1>
            <p class="hero-subtitle">
              Hãy liên hệ để cùng nhau tạo nên những thay đổi tích cực
            </p>
          </div>
        </div>
      </div>

      <div class="content-section section-spacing">
        <div class="container">
          <!-- Contact Methods -->
          <div class="contact-methods">
            <div class="method-card glass-card scroll-reveal">
              <div class="method-icon">📧</div>
              <h3>Email</h3>
              <p>Gửi email cho chúng tôi</p>
              <a href="mailto:doan&#64;cmc.edu.vn" class="contact-link">doan&#64;cmc.edu.vn</a>
            </div>
            
            <div class="method-card glass-card scroll-reveal">
              <div class="method-icon">📱</div>
              <h3>Điện thoại</h3>
              <p>Gọi trực tiếp cho chúng tôi</p>
              <a href="tel:02838336999" class="contact-link">028 3833 6999</a>
            </div>
            
            <div class="method-card glass-card scroll-reveal">
              <div class="method-icon">🏢</div>
              <h3>Địa chỉ</h3>
              <p>Đến thăm chúng tôi tại</p>
              <div class="contact-link">Số 290 An Dương Vương<br>P.4, Q.5, TP.HCM</div>
            </div>
            
            <div class="method-card glass-card scroll-reveal">
              <div class="method-icon">🌐</div>
              <h3>Website</h3>
              <p>Tìm hiểu thêm về trường</p>
              <a href="https://cmc.edu.vn" target="_blank" class="contact-link">cmc.edu.vn</a>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-section">
            <div class="form-container glass-card scroll-reveal">
              <div class="form-header">
                <h2>Gửi Tin Nhắn</h2>
                <p>Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại với bạn sớm nhất</p>
              </div>
              
              <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
                <div class="form-row">
                  <div class="form-group">
                    <label for="fullName">Họ và tên *</label>
                    <input 
                      type="text" 
                      id="fullName"
                      name="fullName"
                      [(ngModel)]="formData.fullName"
                      required
                      class="form-input"
                      placeholder="Nhập họ và tên của bạn"
                    >
                  </div>
                  
                  <div class="form-group">
                    <label for="email">Email *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      [(ngModel)]="formData.email"
                      required
                      class="form-input"
                      placeholder="example&#64;email.com"
                    >
                  </div>
                </div>
                
                <div class="form-row">
                  <div class="form-group">
                    <label for="phone">Số điện thoại</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      [(ngModel)]="formData.phone"
                      class="form-input"
                      placeholder="0123 456 789"
                    >
                  </div>
                  
                  <div class="form-group">
                    <label for="subject">Chủ đề</label>
                    <select 
                      id="subject"
                      name="subject"
                      [(ngModel)]="formData.subject"
                      class="form-input"
                    >
                      <option value="">Chọn chủ đề</option>
                      <option value="donation">Ủng hộ tài chính</option>
                      <option value="volunteer">Tham gia tình nguyện</option>
                      <option value="partnership">Hợp tác</option>
                      <option value="information">Yêu cầu thông tin</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="message">Tin nhắn *</label>
                  <textarea 
                    id="message"
                    name="message"
                    [(ngModel)]="formData.message"
                    required
                    class="form-textarea"
                    rows="5"
                    placeholder="Nhập tin nhắn của bạn..."
                  ></textarea>
                </div>
                
                <div class="form-actions">
                  <button 
                    type="submit" 
                    class="btn btn-primary"
                    [disabled]="!contactForm.form.valid || isSubmitting"
                  >
                    <span *ngIf="!isSubmitting">Gửi tin nhắn</span>
                    <span *ngIf="isSubmitting">Đang gửi...</span>
                    <span class="btn-icon">📤</span>
                  </button>
                </div>
              </form>
            </div>
            
            <!-- Contact Info -->
            <div class="contact-info glass-card scroll-reveal">
              <h3>Thông Tin Liên Hệ</h3>
              
              <div class="info-section">
                <h4>🏛️ Đoàn TNCS Hồ Chí Minh</h4>
                <p>Trường Đại học CMC</p>
                <div class="info-details">
                  <div class="info-item">
                    <span class="info-icon">📍</span>
                    <span>Số 290 An Dương Vương, Phường 4, Quận 5, TP.HCM</span>
                  </div>
                  <div class="info-item">
                    <span class="info-icon">📞</span>
                    <span>028 3833 6999</span>
                  </div>
                  <div class="info-item">
                    <span class="info-icon">📧</span>
                    <span>doan&#64;cmc.edu.vn</span>
                  </div>
                  <div class="info-item">
                    <span class="info-icon">🌐</span>
                    <span>cmc.edu.vn</span>
                  </div>
                </div>
              </div>
              
              <div class="info-section">
                <h4>⏰ Giờ Làm Việc</h4>
                <div class="working-hours">
                  <div class="hour-item">
                    <span>Thứ 2 - Thứ 6:</span>
                    <span>8:00 - 17:00</span>
                  </div>
                  <div class="hour-item">
                    <span>Thứ 7:</span>
                    <span>8:00 - 12:00</span>
                  </div>
                  <div class="hour-item">
                    <span>Chủ nhật:</span>
                    <span>Nghỉ</span>
                  </div>
                </div>
              </div>
              
              <div class="info-section">
                <h4>🤝 Kết Nối Với Chúng Tôi</h4>
                <div class="social-links">
                  <a href="#" class="social-link facebook">
                    <span class="social-icon">📘</span>
                    <span>Facebook</span>
                  </a>
                  <a href="#" class="social-link zalo">
                    <span class="social-icon">💬</span>
                    <span>Zalo</span>
                  </a>
                  <a href="#" class="social-link youtube">
                    <span class="social-icon">📺</span>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ Section -->
          <div class="faq-section">
            <h2 class="section-title scroll-reveal">Câu Hỏi Thường Gặp</h2>
            <div class="faq-list">
              <div class="faq-item glass-card scroll-reveal" 
                   *ngFor="let faq of faqs; let i = index"
                   [style.animation-delay.ms]="i * 150">
                <div class="faq-question" (click)="toggleFaq(i)">
                  <span>{{ faq.question }}</span>
                  <span class="faq-toggle" [class.active]="faq.isOpen">+</span>
                </div>
                <div class="faq-answer" [class.open]="faq.isOpen">
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Map Section -->
          <div class="map-section glass-card scroll-reveal">
            <h3>Vị Trí Trường Đại Học CMC</h3>
            <div class="map-container">
              <div class="map-placeholder">
                <div class="map-icon">🗺️</div>
                <p>Bản đồ vị trí trường</p>
                <div class="map-address">
                  <strong>Số 290 An Dương Vương, P.4, Q.5, TP.HCM</strong>
                </div>
                <div class="map-directions">
                  <a href="https://maps.google.com/?q=290+An+Duong+Vuong+District+5+Ho+Chi+Minh+City" 
                     target="_blank" 
                     class="btn btn-secondary">
                    <span>Xem trên Google Maps</span>
                    <span>🧭</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Thank You Message -->
          <div class="thank-you-section glass-card scroll-reveal" *ngIf="showThankYou">
            <div class="thank-you-content">
              <div class="thank-you-icon">✅</div>
              <h3>Cảm ơn bạn đã liên hệ!</h3>
              <p>
                Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi trong vòng 24 giờ. 
                Cảm ơn bạn đã quan tâm đến các hoạt động của Đoàn TNCS HCM Trường ĐH CMC.
              </p>
              <button class="btn btn-primary" (click)="resetForm()">
                <span>Gửi tin nhắn khác</span>
                <span>📝</span>
              </button>
            </div>
          </div>
        </div>
      </div>
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
    
    .contact-methods {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 32px;
      margin-bottom: 64px;
    }
    
    .method-card {
      padding: 32px;
      text-align: center;
      transition: all 0.3s ease;
    }
    
    .method-card:hover {
      transform: translateY(-4px);
    }
    
    .method-icon {
      font-size: 48px;
      margin-bottom: 20px;
    }
    
    .method-card h3 {
      color: white;
      font-size: 1.25rem;
      margin-bottom: 12px;
    }
    
    .method-card p {
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 16px;
    }
    
    .contact-link {
      color: var(--primary);
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    
    .contact-link:hover {
      color: var(--primary-light);
      text-decoration: underline;
    }
    
    .contact-form-section {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 40px;
      margin-bottom: 64px;
    }
    
    .form-container {
      padding: 40px;
    }
    
    .form-header {
      text-align: center;
      margin-bottom: 32px;
    }
    
    .form-header h2 {
      color: white;
      font-size: 2rem;
      margin-bottom: 12px;
    }
    
    .form-header p {
      color: rgba(255, 255, 255, 0.8);
    }
    
    .contact-form {
      display: grid;
      gap: 24px;
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
    }
    
    .form-group label {
      color: white;
      font-weight: 500;
      margin-bottom: 8px;
    }
    
    .form-input,
    .form-textarea {
      padding: 16px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 12px;
      color: white;
      font-size: 16px;
      transition: all 0.3s ease;
      font-family: inherit;
    }
    
    .form-input:focus,
    .form-textarea:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.15);
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
    }
    
    .form-input::placeholder,
    .form-textarea::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    
    .form-textarea {
      resize: vertical;
      min-height: 120px;
    }
    
    .form-actions {
      display: flex;
      justify-content: center;
      margin-top: 16px;
    }
    
    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .contact-info {
      padding: 32px;
    }
    
    .contact-info h3 {
      color: white;
      font-size: 1.5rem;
      margin-bottom: 24px;
      text-align: center;
    }
    
    .info-section {
      margin-bottom: 32px;
    }
    
    .info-section h4 {
      color: white;
      font-size: 1.1rem;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .info-section p {
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 12px;
    }
    
    .info-details {
      display: grid;
      gap: 12px;
    }
    
    .info-item {
      display: flex;
      align-items: center;
      gap: 12px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 14px;
    }
    
    .info-icon {
      font-size: 16px;
      min-width: 20px;
    }
    
    .working-hours {
      display: grid;
      gap: 8px;
    }
    
    .hour-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.8);
      font-size: 14px;
    }
    
    .social-links {
      display: grid;
      gap: 12px;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: all 0.3s ease;
    }
    
    .social-link:hover {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      transform: translateX(4px);
    }
    
    .social-icon {
      font-size: 18px;
    }
    
    .faq-section {
      margin-bottom: 64px;
    }
    
    .faq-list {
      max-width: 800px;
      margin: 0 auto;
      display: grid;
      gap: 16px;
    }
    
    .faq-item {
      padding: 0;
      overflow: hidden;
    }
    
    .faq-question {
      padding: 24px;
      color: white;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.3s ease;
    }
    
    .faq-question:hover {
      background: rgba(255, 255, 255, 0.05);
    }
    
    .faq-toggle {
      font-size: 24px;
      font-weight: 300;
      transition: transform 0.3s ease;
    }
    
    .faq-toggle.active {
      transform: rotate(45deg);
    }
    
    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
    
    .faq-answer.open {
      max-height: 200px;
    }
    
    .faq-answer p {
      padding: 0 24px 24px;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      margin: 0;
    }
    
    .map-section {
      padding: 40px;
      margin-bottom: 64px;
    }
    
    .map-section h3 {
      color: white;
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 24px;
    }
    
    .map-container {
      border-radius: 16px;
      overflow: hidden;
    }
    
    .map-placeholder {
      height: 300px;
      background: rgba(255, 255, 255, 0.05);
      border: 2px dashed rgba(255, 255, 255, 0.3);
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 16px;
    }
    
    .map-icon {
      font-size: 48px;
    }
    
    .map-placeholder p {
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
    }
    
    .map-address {
      color: white;
      font-size: 1.1rem;
    }
    
    .thank-you-section {
      padding: 48px;
      text-align: center;
      margin-bottom: 32px;
    }
    
    .thank-you-content {
      max-width: 500px;
      margin: 0 auto;
    }
    
    .thank-you-icon {
      font-size: 64px;
      margin-bottom: 24px;
    }
    
    .thank-you-content h3 {
      color: white;
      font-size: 2rem;
      margin-bottom: 16px;
    }
    
    .thank-you-content p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      margin-bottom: 32px;
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.25rem;
      }
      
      .contact-methods {
        grid-template-columns: 1fr;
        gap: 24px;
      }
      
      .method-card {
        padding: 24px;
      }
      
      .contact-form-section {
        grid-template-columns: 1fr;
        gap: 32px;
      }
      
      .form-container {
        padding: 32px 24px;
      }
      
      .form-row {
        grid-template-columns: 1fr;
        gap: 16px;
      }
      
      .contact-info {
        padding: 24px;
      }
      
      .map-section {
        padding: 24px;
      }
      
      .map-placeholder {
        height: 250px;
      }
      
      .thank-you-section {
        padding: 32px 24px;
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
    
    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }
      
      .form-container {
        padding: 24px 16px;
      }
      
      .contact-info {
        padding: 20px;
      }
      
      .faq-question {
        padding: 20px;
      }
      
      .faq-answer p {
        padding: 0 20px 20px;
      }
      
      .map-placeholder {
        height: 200px;
      }
      
      .map-icon {
        font-size: 32px;
      }
    }
  `]
})
export class LienHeComponent implements OnInit {
  formData = {
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
  
  isSubmitting = false;
  showThankYou = false;
  
  faqs = [
    {
      question: 'Làm thế nào để ủng hộ quỹ tình nguyện?',
      answer: 'Bạn có thể ủng hộ qua chuyển khoản ngân hàng, QR code, hoặc liên hệ trực tiếp với chúng tôi để biết thêm các hình thức khác.',
      isOpen: false
    },
    {
      question: 'Quỹ được sử dụng như thế nào?',
      answer: 'Quỹ được sử dụng để cấp học bổng, mua sắm thiết bị học tập, tổ chức hoạt động tình nguyện và nâng cấp cơ sở vật chất. Chúng tôi công khai minh bạch mọi khoản chi.',
      isOpen: false
    },
    {
      question: 'Tôi có thể tham gia hoạt động tình nguyện không?',
      answer: 'Chắc chắn rồi! Chúng tôi luôn chào đón các bạn tình nguyện viên. Hãy liên hệ với chúng tôi để biết thêm thông tin về các hoạt động sắp tới.',
      isOpen: false
    },
    {
      question: 'Làm sao để theo dõi tiến độ sử dụng quỹ?',
      answer: 'Chúng tôi công bố báo cáo tài chính hàng tháng trên website và gửi email thông báo đến các nhà tài trợ về tiến độ thực hiện các dự án.',
      isOpen: false
    },
    {
      question: 'Doanh nghiệp có thể hợp tác như thế nào?',
      answer: 'Doanh nghiệp có thể tài trợ tài chính, thiết bị, hoặc tham gia các chương trình CSR. Chúng tôi sẽ tư vấn cụ thể về các hình thức hợp tác phù hợp.',
      isOpen: false
    }
  ];
  
  ngOnInit() {
    this.setupScrollReveal();
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
  
  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.showThankYou = true;
      
      // Scroll to thank you message
      setTimeout(() => {
        document.querySelector('.thank-you-section')?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }, 100);
    }, 2000);
  }
  
  resetForm() {
    this.formData = {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
    this.showThankYou = false;
    
    // Scroll back to form
    document.querySelector('.form-container')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  
  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
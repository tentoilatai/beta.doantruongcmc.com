import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextPageButtonComponent } from '../../shared/components/next-page-button/next-page-button.component';

@Component({
  selector: 'app-thu-ngo',
  standalone: true,
  imports: [CommonModule, NextPageButtonComponent],
  template: `
    <div class="page-container page-transition">
      <div class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="badge-icon">🎓</span>
              <span>Đoàn TNCS Hồ Chí Minh</span>
            </div>
            <h1 class="hero-title">
              Chung Tay Xây Dựng <br>
              <span class="gradient-text">Tương Lai Xanh</span>
            </h1>
            <p class="hero-subtitle">
              Trường Đại học CMC - Nơi Khởi Nguồn Ước Mơ
            </p>
          </div>
        </div>
      </div>

      <div class="content-section section-spacing">
        <div class="container">
          <div class="letter-content">
            <div class="glass-card letter-card scroll-reveal">
              <div class="card-header">
                <div class="header-icon">💌</div>
                <h2>Thư Ngỏ Gây Quỹ Tình Nguyện</h2>
              </div>
              
              <div class="card-body">
                <div class="greeting">
                  <p><strong>Kính gửi:</strong> Quý Ông/Bà, Anh/Chị và các bạn trẻ</p>
                </div>
                
                <div class="letter-body">
                  <p>
                    Với tinh thần "Tình nguyện vì cộng đồng, Hành động vì tương lai", 
                    Đoàn Thanh niên Cộng sản Hồ Chí Minh Trường Đại học CMC xin được 
                    gửi đến Quý vị lời chào trân trọng và lời cảm ơn chân thành.
                  </p>
                  
                  <p>
                    Trong bối cảnh xã hội hiện nay, việc phát triển giáo dục và hỗ trợ 
                    sinh viên có hoàn cảnh khó khăn là một trong những ưu tiên hàng đầu. 
                    Chúng tôi tin rằng, mỗi sinh viên đều xứng đáng có cơ hội học tập 
                    và phát triển bản thân, bất kể xuất thân hay hoàn cảnh gia đình.
                  </p>
                  
                  <p>
                    Quỹ tình nguyện của chúng tôi được thành lập với mục tiêu:
                  </p>
                  
                  <div class="objectives-list">
                    <div class="objective-item">
                      <span class="objective-icon">🎯</span>
                      <span>Hỗ trợ học bổng cho sinh viên có hoàn cảnh khó khăn</span>
                    </div>
                    <div class="objective-item">
                      <span class="objective-icon">📚</span>
                      <span>Trang bị thiết bị học tập và công nghệ</span>
                    </div>
                    <div class="objective-item">
                      <span class="objective-icon">🤝</span>
                      <span>Tổ chức các hoạt động tình nguyện phục vụ cộng đồng</span>
                    </div>
                    <div class="objective-item">
                      <span class="objective-icon">🌱</span>
                      <span>Phát triển các dự án bền vững cho tương lai</span>
                    </div>
                  </div>
                  
                  <p>
                    Chúng tôi kính mong nhận được sự ủng hộ và đồng hành của Quý vị 
                    trong hành trình ý nghĩa này. Mỗi đóng góp của Quý vị, dù lớn hay nhỏ, 
                    đều là những viên gạch quý giá xây dựng nên tương lai tươi sáng 
                    cho thế hệ trẻ Việt Nam.
                  </p>
                  
                  <div class="signature">
                    <div class="signature-content">
                      <p><strong>Trân trọng cảm ơn!</strong></p>
                      <p class="signature-title">Ban Chấp hành Đoàn TNCS HCM</p>
                      <p class="signature-org">Trường Đại học CMC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <app-next-page-button
        nextPath="/ho-so-tai-tro"
        buttonText="Xem Hồ Sơ Tài Trợ"
        subtitle="Tìm hiểu chi tiết về dự án"
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
      position: relative;
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
    
    .badge-icon {
      font-size: 20px;
    }
    
    .hero-title {
      font-size: 3.5rem;
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
    
    .letter-content {
      max-width: 900px;
      margin: 0 auto;
    }
    
    .letter-card {
      padding: 48px;
      text-align: left;
    }
    
    .card-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 32px;
      padding-bottom: 24px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .header-icon {
      font-size: 32px;
    }
    
    .card-header h2 {
      color: white;
      font-size: 2rem;
      margin: 0;
    }
    
    .card-body {
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.8;
    }
    
    .greeting {
      margin-bottom: 24px;
      font-size: 1.1rem;
    }
    
    .letter-body p {
      margin-bottom: 20px;
      font-size: 16px;
    }
    
    .objectives-list {
      margin: 24px 0;
      display: grid;
      gap: 16px;
    }
    
    .objective-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .objective-icon {
      font-size: 20px;
      min-width: 24px;
    }
    
    .signature {
      margin-top: 40px;
      text-align: right;
    }
    
    .signature-content {
      display: inline-block;
      padding: 24px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .signature-title {
      font-weight: 600;
      margin: 8px 0 4px;
    }
    
    .signature-org {
      font-style: italic;
      opacity: 0.8;
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .letter-card {
        padding: 32px 24px;
      }
      
      .card-header {
        flex-direction: column;
        text-align: center;
        gap: 12px;
      }
      
      .card-header h2 {
        font-size: 1.75rem;
      }
      
      .objectives-list {
        gap: 12px;
      }
      
      .objective-item {
        padding: 12px;
      }
      
      .signature {
        text-align: center;
      }
    }
    
    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }
      
      .hero-badge {
        padding: 10px 20px;
        font-size: 14px;
      }
      
      .letter-card {
        padding: 24px 16px;
      }
    }
  `]
})
export class ThuNgoComponent implements OnInit {
  
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
}
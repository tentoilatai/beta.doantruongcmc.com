import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextPageButtonComponent } from '../../shared/components/next-page-button/next-page-button.component';

@Component({
  selector: 'app-hanh-trinh-sap-toi',
  standalone: true,
  imports: [CommonModule, NextPageButtonComponent],
  template: `
    <div class="page-container page-transition">
      <div class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="badge-icon">🚀</span>
              <span>Hành Trình Sắp Tới</span>
            </div>
            <h1 class="hero-title">
              <span class="gradient-text">Kế Hoạch Tương Lai</span> <br>
              Những Dự Án Ý Nghĩa
            </h1>
            <p class="hero-subtitle">
              Cùng nhau xây dựng tương lai tươi sáng cho sinh viên CMC
            </p>
          </div>
        </div>
      </div>

      <div class="content-section section-spacing">
        <div class="container">
          <!-- Progress Overview -->
          <div class="progress-overview glass-card scroll-reveal">
            <div class="progress-header">
              <h2>Tiến Độ Tổng Quan</h2>
              <div class="progress-stats">
                <div class="stat-item">
                  <span class="stat-number">{{ currentProgress }}%</span>
                  <span class="stat-label">Hoàn thành</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ raisedAmount | number }}</span>
                  <span class="stat-label">VNĐ đã quyên góp</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ supporters }}</span>
                  <span class="stat-label">Người ủng hộ</span>
                </div>
              </div>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar">
                <div class="progress-fill" [style.width.%]="currentProgress"></div>
              </div>
              <div class="progress-info">
                <span>{{ raisedAmount | number }} VNĐ / {{ targetAmount | number }} VNĐ</span>
              </div>
            </div>
          </div>

          <!-- Upcoming Projects -->
          <div class="projects-section">
            <h2 class="section-title scroll-reveal">Các Dự Án Sắp Triển Khai</h2>
            <div class="projects-grid">
              <div *ngFor="let project of upcomingProjects; let i = index" 
                   class="project-card glass-card scroll-reveal"
                   [style.animation-delay.ms]="i * 200">
                <div class="project-header">
                  <div class="project-icon">{{ project.icon }}</div>
                  <div class="project-status" [class]="project.status">
                    {{ getStatusText(project.status) }}
                  </div>
                </div>
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-details">
                  <div class="detail-item">
                    <span class="detail-icon">💰</span>
                    <span class="detail-text">{{ project.budget | number }} VNĐ</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-icon">📅</span>
                    <span class="detail-text">{{ project.startDate }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-icon">👥</span>
                    <span class="detail-text">{{ project.beneficiaries }} người thụ hưởng</span>
                  </div>
                </div>
                <div class="project-progress">
                  <div class="progress-label">
                    <span>Tiến độ chuẩn bị</span>
                    <span>{{ project.preparationProgress }}%</span>
                  </div>
                  <div class="mini-progress-bar">
                    <div class="mini-progress-fill" [style.width.%]="project.preparationProgress"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline -->
          <div class="timeline-section scroll-reveal">
            <h2 class="section-title">Lộ Trình Thực Hiện</h2>
            <div class="timeline-container">
              <div class="timeline">
                <div *ngFor="let milestone of milestones; let i = index" 
                     class="timeline-item"
                     [class.completed]="milestone.completed"
                     [class.current]="milestone.current">
                  <div class="timeline-marker">
                    <span class="marker-icon">{{ milestone.icon }}</span>
                  </div>
                  <div class="timeline-content">
                    <div class="timeline-date">{{ milestone.date }}</div>
                    <h4 class="timeline-title">{{ milestone.title }}</h4>
                    <p class="timeline-description">{{ milestone.description }}</p>
                    <div class="timeline-tasks" *ngIf="milestone.tasks.length > 0">
                      <h5>Nhiệm vụ chính:</h5>
                      <ul>
                        <li *ngFor="let task of milestone.tasks" 
                            [class.completed]="task.completed">
                          <span class="task-icon">{{ task.completed ? '✅' : '⏳' }}</span>
                          {{ task.name }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Call to Action -->
          <div class="cta-section glass-card scroll-reveal">
            <div class="cta-content">
              <div class="cta-icon">🤝</div>
              <h2>Tham Gia Cùng Chúng Tôi</h2>
              <p>
                Hành trình ý nghĩa này cần sự đồng hành của mọi người. 
                Mỗi đóng góp của bạn sẽ góp phần tạo nên những thay đổi tích cực 
                cho cộng đồng sinh viên và xã hội.
              </p>
              <div class="cta-actions">
                <a href="#" class="btn btn-primary" (click)="scrollToTop()">
                  <span>Ủng Hộ Ngay</span>
                  <span>💝</span>
                </a>
                <a href="#" class="btn btn-secondary">
                  <span>Tìm Hiểu Thêm</span>
                  <span>📚</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <app-next-page-button
        nextPath="/ung-ho"
        buttonText="Ủng Hộ Dự Án"
        subtitle="Góp phần tạo nên sự thay đổi"
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
    
    .progress-overview {
      padding: 40px;
      margin-bottom: 64px;
    }
    
    .progress-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
    }
    
    .progress-header h2 {
      color: white;
      font-size: 2rem;
      margin: 0;
    }
    
    .progress-stats {
      display: flex;
      gap: 32px;
    }
    
    .stat-item {
      text-align: center;
    }
    
    .stat-number {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-light);
      margin-bottom: 4px;
    }
    
    .stat-label {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.9rem;
    }
    
    .progress-bar-container {
      position: relative;
    }
    
    .progress-bar {
      width: 100%;
      height: 12px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 6px;
      overflow: hidden;
    }
    
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      border-radius: 6px;
      transition: width 2s ease;
    }
    
    .progress-info {
      display: flex;
      justify-content: center;
      margin-top: 12px;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
    }
    
    .projects-section {
      margin-bottom: 64px;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 32px;
    }
    
    .project-card {
      padding: 32px;
      position: relative;
      overflow: hidden;
    }
    
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    
    .project-icon {
      font-size: 48px;
    }
    
    .project-status {
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }
    
    .project-status.planning {
      background: rgba(249, 115, 22, 0.2);
      color: var(--accent);
      border: 1px solid rgba(249, 115, 22, 0.3);
    }
    
    .project-status.preparation {
      background: rgba(59, 130, 246, 0.2);
      color: var(--secondary);
      border: 1px solid rgba(59, 130, 246, 0.3);
    }
    
    .project-status.ready {
      background: rgba(34, 197, 94, 0.2);
      color: var(--primary);
      border: 1px solid rgba(34, 197, 94, 0.3);
    }
    
    .project-title {
      color: white;
      font-size: 1.5rem;
      margin-bottom: 16px;
      font-weight: 600;
    }
    
    .project-description {
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 24px;
      line-height: 1.6;
    }
    
    .project-details {
      display: grid;
      gap: 12px;
      margin-bottom: 24px;
    }
    
    .detail-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .detail-icon {
      font-size: 18px;
      min-width: 20px;
    }
    
    .detail-text {
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
    }
    
    .project-progress {
      margin-top: 20px;
    }
    
    .progress-label {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      color: rgba(255, 255, 255, 0.9);
      font-size: 0.9rem;
    }
    
    .mini-progress-bar {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 3px;
      overflow: hidden;
    }
    
    .mini-progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent), var(--primary));
      border-radius: 3px;
      transition: width 1.5s ease;
    }
    
    .timeline-section {
      margin-bottom: 64px;
    }
    
    .timeline-container {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .timeline {
      position: relative;
      padding-left: 40px;
    }
    
    .timeline:before {
      content: '';
      position: absolute;
      left: 20px;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(180deg, var(--primary), var(--secondary), var(--accent));
      border-radius: 2px;
    }
    
    .timeline-item {
      position: relative;
      margin-bottom: 48px;
      padding: 24px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }
    
    .timeline-item:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(8px);
    }
    
    .timeline-item.completed {
      border-color: rgba(34, 197, 94, 0.3);
      background: rgba(34, 197, 94, 0.05);
    }
    
    .timeline-item.current {
      border-color: rgba(59, 130, 246, 0.3);
      background: rgba(59, 130, 246, 0.05);
      animation: pulse-border 2s infinite;
    }
    
    @keyframes pulse-border {
      0% { border-color: rgba(59, 130, 246, 0.3); }
      50% { border-color: rgba(59, 130, 246, 0.6); }
      100% { border-color: rgba(59, 130, 246, 0.3); }
    }
    
    .timeline-marker {
      position: absolute;
      left: -32px;
      top: 24px;
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
    }
    
    .timeline-item.completed .timeline-marker {
      background: var(--success);
      border-color: var(--success);
    }
    
    .timeline-item.current .timeline-marker {
      background: var(--secondary);
      border-color: var(--secondary);
      animation: pulse 2s infinite;
    }
    
    .marker-icon {
      font-size: 18px;
    }
    
    .timeline-date {
      color: var(--primary-light);
      font-weight: 600;
      font-size: 0.9rem;
      margin-bottom: 8px;
    }
    
    .timeline-title {
      color: white;
      font-size: 1.25rem;
      margin-bottom: 12px;
      font-weight: 600;
    }
    
    .timeline-description {
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 16px;
      line-height: 1.6;
    }
    
    .timeline-tasks h5 {
      color: white;
      font-size: 1rem;
      margin-bottom: 8px;
    }
    
    .timeline-tasks ul {
      list-style: none;
      padding: 0;
    }
    
    .timeline-tasks li {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 0;
      color: rgba(255, 255, 255, 0.8);
    }
    
    .timeline-tasks li.completed {
      color: var(--success);
    }
    
    .task-icon {
      font-size: 14px;
      min-width: 16px;
    }
    
    .cta-section {
      padding: 48px;
      text-align: center;
      margin-bottom: 32px;
    }
    
    .cta-content {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .cta-icon {
      font-size: 64px;
      margin-bottom: 24px;
    }
    
    .cta-content h2 {
      color: white;
      font-size: 2rem;
      margin-bottom: 16px;
    }
    
    .cta-content p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 32px;
    }
    
    .cta-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.25rem;
      }
      
      .progress-header {
        flex-direction: column;
        gap: 24px;
        text-align: center;
      }
      
      .progress-stats {
        gap: 16px;
      }
      
      .stat-number {
        font-size: 1.5rem;
      }
      
      .projects-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }
      
      .project-card {
        padding: 24px;
      }
      
      .timeline {
        padding-left: 32px;
      }
      
      .timeline-marker {
        left: -28px;
        width: 32px;
        height: 32px;
      }
      
      .marker-icon {
        font-size: 14px;
      }
      
      .cta-section {
        padding: 32px 24px;
      }
      
      .cta-actions {
        flex-direction: column;
        align-items: center;
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
    
    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }
      
      .progress-stats {
        flex-direction: column;
        gap: 16px;
      }
      
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .project-card {
        padding: 20px;
      }
      
      .project-header {
        flex-direction: column;
        gap: 16px;
        text-align: center;
      }
      
      .timeline-item {
        padding: 20px;
      }
      
      .timeline-item:hover {
        transform: none;
      }
    }
  `]
})
export class HanhTrinhSapToiComponent implements OnInit {
  currentProgress = 35;
  raisedAmount = 437500000;
  targetAmount = 1250000000;
  supporters = 287;
  
  upcomingProjects = [
    {
      icon: '🎓',
      title: 'Chương Trình Học Bổng Xuất Sắc',
      description: 'Trao 50 suất học bổng toàn phần cho sinh viên có thành tích học tập xuất sắc nhưng hoàn cảnh khó khăn.',
      budget: 250000000,
      startDate: 'Tháng 4/2025',
      beneficiaries: 50,
      status: 'preparation',
      preparationProgress: 75
    },
    {
      icon: '💻',
      title: 'Phòng Lab Công Nghệ Hiện Đại',
      description: 'Xây dựng phòng thực hành với 40 máy tính cấu hình cao và các thiết bị công nghệ tiên tiến.',
      budget: 200000000,
      startDate: 'Tháng 5/2025',
      beneficiaries: 500,
      status: 'planning',
      preparationProgress: 45
    },
    {
      icon: '📚',
      title: 'Thư Viện Số Thông Minh',
      description: 'Nâng cấp thư viện với hệ thống quản lý thông minh và kho tài liệu điện tử phong phú.',
      budget: 150000000,
      startDate: 'Tháng 6/2025',
      beneficiaries: 1000,
      status: 'ready',
      preparationProgress: 90
    },
    {
      icon: '🌱',
      title: 'Dự Án Xanh - Sạch - Đẹp',
      description: 'Trồng cây xanh, lắp đặt hệ thống năng lượng mặt trời và tạo không gian học tập thân thiện.',
      budget: 100000000,
      startDate: 'Tháng 7/2025',
      beneficiaries: 2000,
      status: 'planning',
      preparationProgress: 30
    }
  ];
  
  milestones = [
    {
      date: 'Tháng 1/2025',
      title: 'Khởi động dự án',
      description: 'Ra mắt chương trình gây quỹ và thiết lập các mục tiêu cụ thể.',
      icon: '🚀',
      completed: true,
      current: false,
      tasks: [
        { name: 'Lập kế hoạch chi tiết', completed: true },
        { name: 'Thiết kế website và tài liệu', completed: true },
        { name: 'Tổ chức lễ ra mắt', completed: true }
      ]
    },
    {
      date: 'Tháng 2-3/2025',
      title: 'Giai đoạn tuyên truyền',
      description: 'Triển khai các hoạt động truyền thông và kêu gọi sự ủng hộ từ cộng đồng.',
      icon: '📢',
      completed: false,
      current: true,
      tasks: [
        { name: 'Chiến dịch truyền thông online', completed: true },
        { name: 'Tổ chức sự kiện gây quỹ', completed: false },
        { name: 'Kết nối với các đơn vị tài trợ', completed: false }
      ]
    },
    {
      date: 'Tháng 4-6/2025',
      title: 'Triển khai dự án đầu tiên',
      description: 'Bắt đầu thực hiện các dự án ưu tiên với ngân sách đã huy động được.',
      icon: '🔨',
      completed: false,
      current: false,
      tasks: [
        { name: 'Trao học bổng đợt 1', completed: false },
        { name: 'Xây dựng phòng lab', completed: false },
        { name: 'Nâng cấp thư viện', completed: false }
      ]
    },
    {
      date: 'Tháng 7-9/2025',
      title: 'Mở rộng hoạt động',
      description: 'Triển khai các dự án quy mô lớn hơn và mở rộng phạm vi tác động.',
      icon: '📈',
      completed: false,
      current: false,
      tasks: [
        { name: 'Dự án môi trường xanh', completed: false },
        { name: 'Chương trình tình nguyện', completed: false },
        { name: 'Hợp tác quốc tế', completed: false }
      ]
    },
    {
      date: 'Tháng 10-12/2025',
      title: 'Đánh giá và tổng kết',
      description: 'Báo cáo kết quả, đánh giá tác động và lên kế hoạch cho giai đoạn tiếp theo.',
      icon: '📊',
      completed: false,
      current: false,
      tasks: [
        { name: 'Báo cáo tài chính minh bạch', completed: false },
        { name: 'Khảo sát hài lòng', completed: false },
        { name: 'Kế hoạch năm tiếp theo', completed: false }
      ]
    }
  ];
  
  ngOnInit() {
    this.setupScrollReveal();
    this.animateProgressBars();
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
      // Animate main progress bar
      const progressFill = document.querySelector('.progress-fill') as HTMLElement;
      if (progressFill) {
        progressFill.style.width = '0%';
        setTimeout(() => {
          progressFill.style.width = this.currentProgress + '%';
        }, 500);
      }
      
      // Animate mini progress bars
      document.querySelectorAll('.mini-progress-fill').forEach((bar, index) => {
        const element = bar as HTMLElement;
        const targetWidth = this.upcomingProjects[index].preparationProgress + '%';
        element.style.width = '0%';
        setTimeout(() => {
          element.style.width = targetWidth;
        }, 1000 + index * 200);
      });
    }, 1000);
  }
  
  getStatusText(status: string): string {
    switch (status) {
      case 'planning': return 'Đang lên kế hoạch';
      case 'preparation': return 'Đang chuẩn bị';
      case 'ready': return 'Sẵn sàng';
      default: return 'Chưa xác định';
    }
  }
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
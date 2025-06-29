import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextPageButtonComponent } from '../../shared/components/next-page-button/next-page-button.component';

@Component({
  selector: 'app-hanh-trinh-da-qua',
  standalone: true,
  imports: [CommonModule, NextPageButtonComponent],
  template: `
    <div class="page-container page-transition">
      <div class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="badge-icon">✅</span>
              <span>Hành Trình Đã Qua</span>
            </div>
            <h1 class="hero-title">
              <span class="gradient-text">Những Thành Tựu</span> <br>
              Đã Đạt Được
            </h1>
            <p class="hero-subtitle">
              Cùng nhìn lại những kết quả tích cực từ sự đóng góp của cộng đồng
            </p>
          </div>
        </div>
      </div>

      <div class="content-section section-spacing">
        <div class="container">
          <!-- Achievement Stats -->
          <div class="stats-overview glass-card scroll-reveal">
            <h2>Tổng Quan Thành Tựu</h2>
            <div class="stats-grid">
              <div class="stat-item" *ngFor="let stat of achievementStats; let i = index"
                   [style.animation-delay.ms]="i * 200">
                <div class="stat-icon">{{ stat.icon }}</div>
                <div class="stat-content">
                  <div class="stat-number" [attr.data-target]="stat.value">{{ stat.displayValue }}</div>
                  <div class="stat-label">{{ stat.label }}</div>
                  <div class="stat-description">{{ stat.description }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Completed Projects -->
          <div class="projects-section">
            <h2 class="section-title scroll-reveal">Các Dự Án Đã Hoàn Thành</h2>
            <div class="projects-timeline">
              <div class="timeline-line"></div>
              <div class="project-item scroll-reveal" 
                   *ngFor="let project of completedProjects; let i = index"
                   [class.left]="i % 2 === 0"
                   [class.right]="i % 2 === 1"
                   [style.animation-delay.ms]="i * 300">
                <div class="project-card glass-card">
                  <div class="project-header">
                    <div class="project-icon">{{ project.icon }}</div>
                    <div class="project-date">{{ project.completedDate }}</div>
                  </div>
                  <h3 class="project-title">{{ project.title }}</h3>
                  <p class="project-description">{{ project.description }}</p>
                  
                  <div class="project-metrics">
                    <div class="metric-item" *ngFor="let metric of project.metrics">
                      <div class="metric-value">{{ metric.value }}</div>
                      <div class="metric-label">{{ metric.label }}</div>
                    </div>
                  </div>
                  
                  <div class="project-impact">
                    <h4>Tác động:</h4>
                    <ul>
                      <li *ngFor="let impact of project.impacts">{{ impact }}</li>
                    </ul>
                  </div>
                  
                  <div class="project-gallery" *ngIf="project.images.length > 0">
                    <div class="gallery-item" *ngFor="let image of project.images">
                      <div class="image-placeholder">{{ image.placeholder }}</div>
                      <div class="image-caption">{{ image.caption }}</div>
                    </div>
                  </div>
                </div>
                <div class="timeline-marker">
                  <div class="marker-dot"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Success Stories -->
          <div class="stories-section">
            <h2 class="section-title scroll-reveal">Câu Chuyện Thành Công</h2>
            <div class="stories-grid">
              <div class="story-card glass-card scroll-reveal" 
                   *ngFor="let story of successStories; let i = index"
                   [style.animation-delay.ms]="i * 250">
                <div class="story-header">
                  <div class="story-avatar">{{ story.avatar }}</div>
                  <div class="story-info">
                    <h4 class="story-name">{{ story.name }}</h4>
                    <div class="story-title">{{ story.title }}</div>
                  </div>
                </div>
                
                <div class="story-content">
                  <div class="story-quote">"</div>
                  <p class="story-text">{{ story.story }}</p>
                </div>
                
                <div class="story-achievement">
                  <div class="achievement-icon">🏆</div>
                  <div class="achievement-text">{{ story.achievement }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Impact Visualization -->
          <div class="impact-section glass-card scroll-reveal">
            <h2>Tác Động Tích Cực</h2>
            <div class="impact-visualization">
              <div class="impact-circles">
                <div class="impact-circle primary" 
                     [style.animation-delay]="'0.5s'">
                  <div class="circle-content">
                    <div class="circle-number">{{ beneficiaries }}</div>
                    <div class="circle-label">Người thụ hưởng</div>
                  </div>
                </div>
                
                <div class="impact-circle secondary"
                     [style.animation-delay]="'1s'">
                  <div class="circle-content">
                    <div class="circle-number">{{ scholarships }}</div>
                    <div class="circle-label">Học bổng</div>
                  </div>
                </div>
                
                <div class="impact-circle accent"
                     [style.animation-delay]="'1.5s'">
                  <div class="circle-content">
                    <div class="circle-number">{{ facilities }}</div>
                    <div class="circle-label">Cơ sở vật chất</div>
                  </div>
                </div>
              </div>
              
              <div class="impact-connections">
                <svg class="connection-svg" viewBox="0 0 400 200">
                  <path class="connection-line" d="M100,100 Q200,50 300,100" 
                        stroke="rgba(255,255,255,0.3)" stroke-width="2" fill="none"/>
                  <path class="connection-line" d="M100,100 Q200,150 300,100" 
                        stroke="rgba(255,255,255,0.3)" stroke-width="2" fill="none"/>
                </svg>
              </div>
            </div>
            
            <div class="impact-description">
              <p>
                Từ khi bắt đầu hoạt động, chúng tôi đã tạo ra những thay đổi tích cực 
                trong cộng đồng sinh viên và xã hội. Mỗi dự án không chỉ giải quyết 
                vấn đề trước mắt mà còn tạo ra giá trị bền vững cho tương lai.
              </p>
            </div>
          </div>

          <!-- Recognition & Awards -->
          <div class="recognition-section">
            <h2 class="section-title scroll-reveal">Ghi Nhận & Khen Thưởng</h2>
            <div class="recognition-grid">
              <div class="recognition-item glass-card scroll-reveal"
                   *ngFor="let award of awards; let i = index"
                   [style.animation-delay.ms]="i * 200">
                <div class="award-icon">{{ award.icon }}</div>
                <h4 class="award-title">{{ award.title }}</h4>
                <div class="award-organization">{{ award.organization }}</div>
                <div class="award-date">{{ award.date }}</div>
                <p class="award-description">{{ award.description }}</p>
              </div>
            </div>
          </div>

          <!-- Future Vision -->
          <div class="vision-section glass-card scroll-reveal">
            <div class="vision-header">
              <div class="vision-icon">🌟</div>
              <h2>Tầm Nhìn Tương Lai</h2>
            </div>
            
            <div class="vision-content">
              <p class="vision-text">
                Với những thành tựu đã đạt được, chúng tôi tiếp tục hướng tới mục tiêu 
                xây dựng một cộng đồng giáo dục mạnh mẽ, nơi mọi sinh viên đều có cơ hội 
                phát triển tối đa tiềm năng của mình.
              </p>
              
              <div class="vision-goals">
                <div class="goal-item" *ngFor="let goal of futureGoals">
                  <div class="goal-icon">{{ goal.icon }}</div>
                  <div class="goal-content">
                    <h4>{{ goal.title }}</h4>
                    <p>{{ goal.description }}</p>
                  </div>
                </div>
              </div>
              
              <div class="vision-cta">
                <p>Hãy cùng chúng tôi tiếp tục hành trình ý nghĩa này!</p>
                <a href="#" class="btn btn-primary" (click)="scrollToTop()">
                  <span>Tham Gia Ngay</span>
                  <span>🚀</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <app-next-page-button
        nextPath="/lien-he"
        buttonText="Liên Hệ Với Chúng Tôi"
        subtitle="Kết nối và hợp tác cùng nhau"
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
    
    .stats-overview {
      padding: 48px;
      margin-bottom: 64px;
      text-align: center;
    }
    
    .stats-overview h2 {
      color: white;
      font-size: 2rem;
      margin-bottom: 40px;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 32px;
    }
    
    .stat-item {
      text-align: center;
      padding: 24px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
      animation: fadeInUp 0.6s ease-out;
    }
    
    .stat-item:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-4px);
    }
    
    .stat-icon {
      font-size: 48px;
      margin-bottom: 16px;
    }
    
    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 8px;
      animation: countUp 2s ease-out;
    }
    
    .stat-label {
      color: white;
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: 8px;
    }
    
    .stat-description {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
    }
    
    .projects-section {
      margin-bottom: 64px;
    }
    
    .projects-timeline {
      position: relative;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .timeline-line {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(180deg, var(--primary), var(--secondary), var(--accent));
      transform: translateX(-50%);
      border-radius: 2px;
    }
    
    .project-item {
      position: relative;
      margin-bottom: 80px;
      width: 45%;
    }
    
    .project-item.left {
      left: 0;
    }
    
    .project-item.right {
      left: 55%;
    }
    
    .project-card {
      padding: 32px;
      position: relative;
    }
    
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    
    .project-icon {
      font-size: 32px;
    }
    
    .project-date {
      color: var(--primary-light);
      font-weight: 600;
      font-size: 0.9rem;
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
    
    .project-metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    
    .metric-item {
      text-align: center;
      padding: 16px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .metric-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 4px;
    }
    
    .metric-label {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.8rem;
    }
    
    .project-impact {
      margin-bottom: 24px;
    }
    
    .project-impact h4 {
      color: white;
      font-size: 1.1rem;
      margin-bottom: 12px;
    }
    
    .project-impact ul {
      list-style: none;
      padding: 0;
    }
    
    .project-impact li {
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 8px;
      padding-left: 20px;
      position: relative;
    }
    
    .project-impact li:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--success);
      font-weight: bold;
    }
    
    .project-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 12px;
    }
    
    .gallery-item {
      text-align: center;
    }
    
    .image-placeholder {
      width: 100%;
      height: 80px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      margin-bottom: 8px;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .image-caption {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.8rem;
    }
    
    .timeline-marker {
      position: absolute;
      top: 32px;
      width: 20px;
      height: 20px;
    }
    
    .project-item.left .timeline-marker {
      right: -60px;
    }
    
    .project-item.right .timeline-marker {
      left: -60px;
    }
    
    .marker-dot {
      width: 20px;
      height: 20px;
      background: var(--primary);
      border-radius: 50%;
      border: 4px solid rgba(255, 255, 255, 0.2);
      animation: pulse 2s infinite;
    }
    
    .stories-section {
      margin-bottom: 64px;
    }
    
    .stories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 32px;
    }
    
    .story-card {
      padding: 32px;
      position: relative;
    }
    
    .story-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
    }
    
    .story-avatar {
      width: 60px;
      height: 60px;
      background: var(--gradient-primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: 600;
      color: white;
    }
    
    .story-info {
      flex: 1;
    }
    
    .story-name {
      color: white;
      font-size: 1.25rem;
      margin-bottom: 4px;
    }
    
    .story-title {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
    }
    
    .story-content {
      position: relative;
      margin-bottom: 24px;
    }
    
    .story-quote {
      font-size: 48px;
      color: var(--primary);
      position: absolute;
      top: -10px;
      left: -10px;
      font-family: Georgia, serif;
    }
    
    .story-text {
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.6;
      font-style: italic;
      padding-left: 20px;
      margin: 0;
    }
    
    .story-achievement {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .achievement-icon {
      font-size: 24px;
    }
    
    .achievement-text {
      color: var(--primary);
      font-weight: 600;
    }
    
    .impact-section {
      padding: 48px;
      margin-bottom: 64px;
      text-align: center;
    }
    
    .impact-section h2 {
      color: white;
      font-size: 2rem;
      margin-bottom: 40px;
    }
    
    .impact-visualization {
      position: relative;
      margin-bottom: 40px;
    }
    
    .impact-circles {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 40px;
      position: relative;
      z-index: 2;
    }
    
    .impact-circle {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      animation: scaleIn 1s ease-out both;
    }
    
    .impact-circle.primary {
      background: var(--gradient-primary);
    }
    
    .impact-circle.secondary {
      background: linear-gradient(135deg, var(--secondary), var(--accent));
    }
    
    .impact-circle.accent {
      background: linear-gradient(135deg, var(--accent), var(--error));
    }
    
    .circle-content {
      text-align: center;
      color: white;
    }
    
    .circle-number {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 8px;
    }
    
    .circle-label {
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    .impact-connections {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }
    
    .connection-svg {
      width: 100%;
      height: 100%;
    }
    
    .connection-line {
      stroke-dasharray: 5,5;
      animation: dash 2s linear infinite;
    }
    
    @keyframes dash {
      to {
        stroke-dashoffset: -10;
      }
    }
    
    .impact-description {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .impact-description p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      font-size: 1.1rem;
    }
    
    .recognition-section {
      margin-bottom: 64px;
    }
    
    .recognition-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 32px;
    }
    
    .recognition-item {
      padding: 32px;
      text-align: center;
      transition: all 0.3s ease;
    }
    
    .recognition-item:hover {
      transform: translateY(-4px);
    }
    
    .award-icon {
      font-size: 48px;
      margin-bottom: 20px;
    }
    
    .award-title {
      color: white;
      font-size: 1.25rem;
      margin-bottom: 12px;
    }
    
    .award-organization {
      color: var(--primary);
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .award-date {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
      margin-bottom: 16px;
    }
    
    .award-description {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.5;
      margin: 0;
    }
    
    .vision-section {
      padding: 48px;
      text-align: center;
    }
    
    .vision-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin-bottom: 32px;
    }
    
    .vision-icon {
      font-size: 32px;
    }
    
    .vision-header h2 {
      color: white;
      font-size: 2rem;
      margin: 0;
    }
    
    .vision-text {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 40px;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .vision-goals {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }
    
    .goal-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 24px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      text-align: left;
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
      font-size: 1.1rem;
      margin-bottom: 8px;
    }
    
    .goal-content p {
      color: rgba(255, 255, 255, 0.8);
      margin: 0;
      line-height: 1.5;
    }
    
    .vision-cta {
      padding: 32px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .vision-cta p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.1rem;
      margin-bottom: 24px;
    }
    
    @keyframes countUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes scaleIn {
      from { transform: scale(0); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.25rem;
      }
      
      .stats-overview {
        padding: 32px 24px;
      }
      
      .stats-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 20px;
      }
      
      .stat-number {
        font-size: 2rem;
      }
      
      .timeline-line {
        left: 30px;
      }
      
      .project-item {
        width: calc(100% - 60px);
        left: 60px !important;
      }
      
      .project-item .timeline-marker {
        left: -50px !important;
      }
      
      .project-card {
        padding: 24px;
      }
      
      .stories-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }
      
      .story-card {
        padding: 24px;
      }
      
      .impact-section {
        padding: 32px 24px;
      }
      
      .impact-circles {
        flex-direction: column;
        gap: 32px;
      }
      
      .impact-circle {
        width: 120px;
        height: 120px;
      }
      
      .circle-number {
        font-size: 1.5rem;
      }
      
      .recognition-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }
      
      .recognition-item {
        padding: 24px;
      }
      
      .vision-section {
        padding: 32px 24px;
      }
      
      .vision-goals {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      
      .goal-item {
        flex-direction: column;
        text-align: center;
        gap: 12px;
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
    
    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }
      
      .stats-grid {
        grid-template-columns: 1fr;
      }
      
      .project-metrics {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .story-header {
        flex-direction: column;
        text-align: center;
        gap: 12px;
      }
      
      .impact-circle {
        width: 100px;
        height: 100px;
      }
      
      .circle-number {
        font-size: 1.25rem;
      }
      
      .circle-label {
        font-size: 0.8rem;
      }
    }
  `]
})
export class HanhTrinhDaQuaComponent implements OnInit {
  // Achievement Statistics
  achievementStats = [
    {
      icon: '🎓',
      value: 125,
      displayValue: '125',
      label: 'Học bổng đã trao',
      description: 'Sinh viên được hỗ trợ học phí'
    },
    {
      icon: '💻',
      value: 3,
      displayValue: '3',
      label: 'Phòng lab hiện đại',
      description: 'Trang bị đầy đủ thiết bị'
    },
    {
      icon: '🤝',
      value: 15,
      displayValue: '15',
      label: 'Chương trình tình nguyện',
      description: 'Hoạt động phục vụ cộng đồng'
    },
    {
      icon: '🏆',
      value: 8,
      displayValue: '8',
      label: 'Giải thưởng',
      description: 'Ghi nhận từ các tổ chức'
    }
  ];
  
  // Completed Projects
  completedProjects = [
    {
      icon: '🎓',
      title: 'Chương Trình Học Bổng Đầu Tiên',
      description: 'Trao 50 suất học bổng toàn phần cho sinh viên có hoàn cảnh khó khăn nhưng thành tích học tập xuất sắc.',
      completedDate: 'Tháng 12/2024',
      metrics: [
        { value: '50', label: 'Học bổng' },
        { value: '500M', label: 'VNĐ' },
        { value: '4.2', label: 'GPA TB' }
      ],
      impacts: [
        'Giúp 50 sinh viên tiếp tục việc học',
        'Nâng cao chất lượng học tập',
        'Tạo động lực cho cộng đồng sinh viên'
      ],
      images: [
        { placeholder: '📸', caption: 'Lễ trao học bổng' },
        { placeholder: '🎉', caption: 'Sinh viên nhận học bổng' },
        { placeholder: '📊', caption: 'Kết quả học tập' }
      ]
    },
    {
      icon: '💻',
      title: 'Phòng Lab Công Nghệ Thông Tin',
      description: 'Xây dựng phòng thực hành với 30 máy tính cấu hình cao và các phần mềm chuyên ngành.',
      completedDate: 'Tháng 10/2024',
      metrics: [
        { value: '30', label: 'Máy tính' },
        { value: '200M', label: 'VNĐ' },
        { value: '300', label: 'Sinh viên' }
      ],
      impacts: [
        'Nâng cao chất lượng thực hành',
        'Tăng khả năng tiếp cận công nghệ',
        'Cải thiện kỹ năng lập trình'
      ],
      images: [
        { placeholder: '🖥️', caption: 'Phòng lab mới' },
        { placeholder: '👨‍💻', caption: 'Sinh viên thực hành' },
        { placeholder: '⚡', caption: 'Thiết bị hiện đại' }
      ]
    },
    {
      icon: '📚',
      title: 'Nâng Cấp Thư Viện Số',
      description: 'Hiện đại hóa thư viện với hệ thống quản lý thông minh và kho tài liệu điện tử phong phú.',
      completedDate: 'Tháng 8/2024',
      metrics: [
        { value: '5000', label: 'Tài liệu' },
        { value: '150M', label: 'VNĐ' },
        { value: '800', label: 'Người dùng' }
      ],
      impacts: [
        'Dễ dàng truy cập tài liệu học tập',
        'Tiết kiệm thời gian nghiên cứu',
        'Nâng cao hiệu quả học tập'
      ],
      images: [
        { placeholder: '📖', caption: 'Thư viện số' },
        { placeholder: '🔍', caption: 'Hệ thống tìm kiếm' },
        { placeholder: '📱', caption: 'Ứng dụng mobile' }
      ]
    }
  ];
  
  // Success Stories
  successStories = [
    {
      name: 'Nguyễn Văn An',
      title: 'Sinh viên năm 4, Khoa CNTT',
      avatar: 'A',
      story: 'Nhờ có học bổng từ quỹ, em đã có thể hoàn thành chương trình đại học mà không phải lo lắng về tài chính. Hiện tại em đã có việc làm tốt và sẵn sàng đóng góp lại cho cộng đồng.',
      achievement: 'Tốt nghiệp loại Xuất sắc, nhận việc tại công ty công nghệ hàng đầu'
    },
    {
      name: 'Trần Thị Bình',
      title: 'Cựu sinh viên, Khoa Kinh tế',
      avatar: 'B',
      story: 'Phòng lab hiện đại đã giúp em có cơ hội thực hành với các công nghệ mới nhất. Điều này đã tạo nên lợi thế cạnh tranh lớn khi em tham gia thị trường lao động.',
      achievement: 'Khởi nghiệp thành công, tạo việc làm cho 20 người'
    },
    {
      name: 'Lê Minh Cường',
      title: 'Sinh viên năm 3, Khoa Quản trị',
      avatar: 'C',
      story: 'Tham gia các hoạt động tình nguyện đã giúp em phát triển kỹ năng lãnh đạo và làm việc nhóm. Em cảm thấy mình trưởng thành hơn rất nhiều qua những trải nghiệm này.',
      achievement: 'Được bầu làm Chủ tịch Hội sinh viên khoa'
    }
  ];
  
  // Impact Numbers
  beneficiaries = 1250;
  scholarships = 125;
  facilities = 8;
  
  // Awards and Recognition
  awards = [
    {
      icon: '🏆',
      title: 'Giải thưởng Tổ chức Tình nguyện Xuất sắc',
      organization: 'Thành đoàn TP.HCM',
      date: 'Tháng 12/2024',
      description: 'Ghi nhận những đóng góp tích cực cho cộng đồng và xã hội'
    },
    {
      icon: '🥇',
      title: 'Chứng nhận Minh bạch Tài chính',
      organization: 'Sở Giáo dục & Đào tạo',
      date: 'Tháng 11/2024',
      description: 'Công nhận việc quản lý và sử dụng quỹ một cách minh bạch'
    },
    {
      icon: '⭐',
      title: 'Danh hiệu Đơn vị Tiên tiến',
      organization: 'Trường Đại học CMC',
      date: 'Tháng 10/2024',
      description: 'Xuất sắc trong công tác Đoàn và phong trào sinh viên'
    },
    {
      icon: '🎖️',
      title: 'Bằng khen Hoạt động Xã hội',
      organization: 'UBND Quận 5',
      date: 'Tháng 9/2024',
      description: 'Đóng góp tích cực cho sự phát triển của địa phương'
    }
  ];
  
  // Future Goals
  futureGoals = [
    {
      icon: '🌍',
      title: 'Mở rộng quy mô',
      description: 'Tăng số lượng sinh viên được hỗ trợ lên 500 người/năm'
    },
    {
      icon: '🤖',
      title: 'Công nghệ tiên tiến',
      description: 'Đầu tư vào AI, IoT và các công nghệ 4.0'
    },
    {
      icon: '🌱',
      title: 'Phát triển bền vững',
      description: 'Xây dựng campus xanh và thân thiện môi trường'
    },
    {
      icon: '🤝',
      title: 'Hợp tác quốc tế',
      description: 'Kết nối với các trường đại học và tổ chức trên thế giới'
    }
  ];
  
  ngOnInit() {
    this.setupScrollReveal();
    this.animateCounters();
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
  
  private animateCounters() {
    setTimeout(() => {
      document.querySelectorAll('.stat-number').forEach(counter => {
        const target = parseInt((counter as HTMLElement).getAttribute('data-target') || '0');
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          (counter as HTMLElement).textContent = Math.floor(current).toString();
        }, 40);
      });
    }, 1000);
  }
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
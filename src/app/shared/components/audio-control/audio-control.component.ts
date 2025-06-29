import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-audio-control',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="audio-control">
      <button 
        class="audio-toggle"
        (click)="toggleAudio()"
        [title]="isPlaying ? 'Tắt nhạc' : 'Bật nhạc'"
      >
        <span class="audio-icon">{{ isPlaying ? '🔊' : '🔇' }}</span>
      </button>
      
      <div class="volume-control" *ngIf="showVolumeControl">
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.1"
          [value]="volume"
          (input)="onVolumeChange($event)"
          class="volume-slider"
        >
      </div>
    </div>
  `,
  styles: [`
    .audio-control {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 1000;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .audio-toggle {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: rgba(34, 197, 94, 0.9);
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 255, 255, 0.3);
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 32px rgba(34, 197, 94, 0.3);
    }
    
    .audio-toggle:hover {
      background: rgba(34, 197, 94, 1);
      transform: scale(1.1);
      box-shadow: 0 12px 40px rgba(34, 197, 94, 0.4);
    }
    
    .audio-icon {
      font-size: 20px;
    }
    
    .volume-control {
      background: rgba(34, 197, 94, 0.9);
      backdrop-filter: blur(10px);
      border-radius: 25px;
      padding: 8px 16px;
      border: 2px solid rgba(255, 255, 255, 0.3);
    }
    
    .volume-slider {
      width: 80px;
      height: 4px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 2px;
      outline: none;
      cursor: pointer;
    }
    
    .volume-slider::-webkit-slider-thumb {
      appearance: none;
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    
    .volume-slider::-moz-range-thumb {
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      border: none;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    
    @media (max-width: 768px) {
      .audio-control {
        bottom: 16px;
        right: 16px;
      }
      
      .audio-toggle {
        width: 48px;
        height: 48px;
      }
      
      .audio-icon {
        font-size: 18px;
      }
      
      .volume-slider {
        width: 60px;
      }
    }
  `]
})
export class AudioControlComponent implements OnInit {
  isPlaying = false;
  volume = 0.3;
  showVolumeControl = false;

  constructor(private audioService: AudioService) {}

  ngOnInit() {
    this.volume = this.audioService.getVolume();
    this.isPlaying = this.audioService.isCurrentlyPlaying();
    
    // Tự động phát nhạc sau 2 giây (để tránh lỗi autoplay policy)
    setTimeout(() => {
      this.audioService.play().then(() => {
        this.isPlaying = true;
      });
    }, 2000);
  }

  toggleAudio() {
    this.audioService.toggle();
    this.isPlaying = this.audioService.isCurrentlyPlaying();
    this.showVolumeControl = !this.showVolumeControl;
    
    // Ẩn volume control sau 3 giây
    if (this.showVolumeControl) {
      setTimeout(() => {
        this.showVolumeControl = false;
      }, 3000);
    }
  }

  onVolumeChange(event: any) {
    const volume = parseFloat(event.target.value);
    this.volume = volume;
    this.audioService.setVolume(volume);
  }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;
  private volume = 0.3;

  constructor() {
    this.initializeAudio();
  }

  private initializeAudio() {
    // Sử dụng một file nhạc nền miễn phí từ internet
    // Bạn có thể thay thế URL này bằng file nhạc của riêng bạn
    const audioUrl = 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav';
    
    this.audio = new Audio();
    this.audio.loop = true;
    this.audio.volume = this.volume;
    this.audio.preload = 'auto';
    
    // Sử dụng một URL nhạc nền phù hợp hơn (instrumental, relaxing)
    // Đây là placeholder - bạn nên upload file nhạc của riêng mình
    this.audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT';
  }

  async play() {
    if (this.audio && !this.isPlaying) {
      try {
        await this.audio.play();
        this.isPlaying = true;
      } catch (error) {
        console.log('Không thể phát nhạc tự động:', error);
      }
    }
  }

  pause() {
    if (this.audio && this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
    if (this.audio) {
      this.audio.volume = this.volume;
    }
  }

  getVolume(): number {
    return this.volume;
  }

  isCurrentlyPlaying(): boolean {
    return this.isPlaying;
  }
}
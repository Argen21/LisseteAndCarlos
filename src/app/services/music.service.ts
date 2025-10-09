import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
private audio: HTMLAudioElement | null = null;

  private isPlayingSubject = new BehaviorSubject<boolean>(false);
  private currentTimeSubject = new BehaviorSubject<number>(0);
  private durationSubject = new BehaviorSubject<number>(0);

  isPlaying$ = this.isPlayingSubject.asObservable();
  currentTime$ = this.currentTimeSubject.asObservable();
  duration$ = this.durationSubject.asObservable();

  init(src: string) {
    if (this.audio) {
      this.audio.pause();
      this.audio.src = '';
    }

    this.audio = new Audio(src);

    this.audio.addEventListener('timeupdate', () => {
      this.currentTimeSubject.next(this.audio!.currentTime);
    });

    this.audio.addEventListener('loadedmetadata', () => {
      this.durationSubject.next(this.audio!.duration);
    });

    this.audio.addEventListener('play', () => {
      this.isPlayingSubject.next(true);
    });

    this.audio.addEventListener('pause', () => {
      this.isPlayingSubject.next(false);
    });
  }

  togglePlay() {
    if (!this.audio) return;
    this.audio.paused ? this.audio.play() : this.audio.pause();
  }

  seek(time: number) {
    if (!this.audio) return;
    this.audio.currentTime = time;
  }

}

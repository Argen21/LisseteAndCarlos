import {  Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'music-component',
  imports: [CommonModule],
  templateUrl: './music-component.component.html',
  styleUrl: './music-component.component.scss',
})
export class MusicComponentComponent implements OnInit{

  constructor(public musicService: MusicService,){}

  ngOnInit(): void {
    this.musicService.init("https://res.cloudinary.com/dxxf2jyg8/video/upload/v1759969639/music-lis_yn6pdq.mp3");
  }

  formatTime(time: number | null): string {
    const safeTime = time ?? 0;
    const minutes = Math.floor(safeTime / 60);
    const seconds = Math.floor(safeTime % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }

}

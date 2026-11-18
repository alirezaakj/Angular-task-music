import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Track {
  title: string;
  artist: string;
}

interface Mood {
  name: string;
  icon: string;
  description: string;
  tracks: Track[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  moods: Mood[] = [
    {
      name: 'Chill',
      icon: '☾',
      description: 'Take a breath and let the day slow down.',
      tracks: [
        { title: 'Sunset Lover', artist: 'Petit Biscuit' },
        { title: 'Ocean Eyes', artist: 'Billie Eilish' },
        { title: 'Pink + White', artist: 'Frank Ocean' },
      ],
    },
    {
      name: 'Happy',
      icon: '☀',
      description: 'A little brightness for wherever you are.',
      tracks: [
        { title: 'Lovely Day', artist: 'Bill Withers' },
        { title: 'Put Your Records On', artist: 'Corinne Bailey Rae' },
        { title: 'Good as Hell', artist: 'Lizzo' },
      ],
    },
    {
      name: 'Focused',
      icon: '✦',
      description: 'Find your rhythm and stay in the zone.',
      tracks: [
        { title: 'Intro', artist: 'The xx' },
        { title: 'A Walk', artist: 'Tycho' },
        { title: 'Open Eye Signal', artist: 'Jon Hopkins' },
      ],
    },
  ];

  selectedMood: Mood = this.moods[0];
  selectedTrackIndex: number = 0;

  get currentTrack(): Track {
    return this.selectedMood.tracks[this.selectedTrackIndex];
  }

  chooseMood(mood: Mood): void {
    this.selectedMood = mood;
    this.selectedTrackIndex = 0;
  }

  nextTrack(): void {
    if (this.selectedTrackIndex < this.selectedMood.tracks.length - 1) {
      this.selectedTrackIndex++;
    } else {
      this.selectedTrackIndex = 0;
    }
  }
}

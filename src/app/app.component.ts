import { Component } from '@angular/core';
import { JokeListComponent } from './jokes/joke-list/joke-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JokeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

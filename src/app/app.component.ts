import { Component } from '@angular/core';
import { JokeListComponent } from './jokes/joke-list/joke-list.component';
import { DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Joke } from './model/joke';
import { ShortTextPipe } from './pipes/short-text.pipe';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JokeListComponent, UpperCasePipe, LowerCasePipe, DatePipe, JsonPipe, ShortTextPipe, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jokes application with lifecycle hooks demo'
  startDate: Date
  joke: Joke = new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)")

  constructor() {
    setInterval(() => { this.startDate = new Date() }, 1000)
  }

}

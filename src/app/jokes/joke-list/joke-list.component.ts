import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Joke } from '../../model/joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  standalone: true,
  imports: [NgFor, JokeComponent],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.css'
})
export class JokeListComponent {

  jokes: Joke[] = []

  addJoke() {
    this.jokes.unshift(
      new Joke(
        "What did the cheese say when it looked in the mirror",
        "Hello-me (Halloumi)"
      )
    );
  }

  deleteJoke() {
    this.jokes = [];
  }

}

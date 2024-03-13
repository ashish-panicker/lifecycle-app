import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Joke } from '../../model/joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  standalone: true,
  imports: [NgFor, JokeComponent],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.css'
})
export class JokeListComponent implements AfterViewInit {

  /**
   * <a href='https://angular.io/api/core/ViewChild'>View Child</a>
   */
  @ViewChild(JokeComponent) jokeViewChild: JokeComponent
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>
  @ViewChild("title") title: ElementRef

  jokes: Joke[] = [
    new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
    new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)")
  ]

  constructor() {
    console.log(`constructor - jokeViewChild is ${this.jokeViewChild}`);
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild.joke}`);
    this.jokeViewChildren.forEach(child => console.log(`Joke is -> ${child.joke} ${child.data.punchline}`))
    console.log(`ngAfterViewInit - ElementRef value is ${this.title.nativeElement.innerText}`);
    console.log(`ngAfterViewInit - ElementRef value is ${this.title.nativeElement}`);
    this.title.nativeElement.innerText = 'Jokes AfterViewInit'
    console.log(`ngAfterViewInit - ElementRef value is ${this.title.nativeElement.innerText}`);
  }

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

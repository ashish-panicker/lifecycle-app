import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Joke } from '../../model/joke';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent implements OnInit, OnDestroy, OnChanges {

  @Input() data: Joke = new Joke('', '');
  @Input() joke: string = ''

  constructor() {
    // console.log(`Joke component constructor ${new Date()}`)
  }

  ngOnInit(): void {
    // console.log(`Joke component ngOnInit`)
  }

  ngOnDestroy(): void {
    // console.log(`Joke component ngOnDestroy`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['joke']) {
      // console.log(`${changes['joke'].previousValue} to ${changes['joke'].currentValue}`)
    // }
  }

}

/**
 * Interfaces
    OnChanges
    A lifecycle hook that is called when any data-bound property of a directive changes.
    
    OnInit
    A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.

    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    
    OnDestroy
    A lifecycle hook that is called when a directive, pipe, or service is destroyed.                
 */
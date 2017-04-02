import { Component } from '@angular/core';

export class Hero{
  id: number;
  name:string;
}

const HEROS: Hero[] = [
  {id: 1, name: 'Chetak'},
  {id: 2, name: 'Tommy'},
  {id: 3, name: 'Prakash'},
  {id: 4, name: 'Rajesh'},
  {id: 5, name: 'Amitabh'},
  {id: 6, name: 'Sukumar'},
  {id: 7, name: 'James'},
  {id: 8, name: 'Bob'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})


export class AppComponent {
  title = 'Hero app';
  heros = HEROS;
  myHero;

  onSelect = function(hero){
    this.myHero = hero;
  }
}

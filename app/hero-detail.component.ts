import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/views/home/hero-detail.html',
  inputs: ['hero']
})
export class HeroDetailComponent {
  public hero: Hero;
}
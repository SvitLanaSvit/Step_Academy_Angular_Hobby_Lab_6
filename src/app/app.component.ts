import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'strange hobby';
  discription: string = 'My strange hobby may be that even though I am studying to become a software developer, I read a lot of medical literature, watch a lot of medical content and am fascinated by observation during surgery. I collect medical instruments and literature. I was present at heavy dressings with open bones, and also assisted in suturing soft tissues with severe lacerations. I think this is a rather strange hobby.';
  isWhite: boolean = false;
  isBlack: boolean = true;
  photosUrl: string[] = [
    '../assets/med.jpg',
    '../assets/med2.webp'
  ]
  name: string = 'Svitlana';
}

import { Component } from '@angular/core';
import { FoodpostsService } from './services/foodposts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodblog';
  constructor(public _foodservice: FoodpostsService){
    this._foodservice.showImage = true;
  }
}

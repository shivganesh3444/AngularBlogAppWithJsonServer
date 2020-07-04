import { Component, OnInit } from '@angular/core';
import { FoodpostsService } from 'src/app/services/foodposts.service';

@Component({
  selector: 'app-readpost',
  templateUrl: './readpost.component.html',
  styleUrls: ['./readpost.component.css']
})
export class ReadpostComponent implements OnInit {

  foodpostsdata: any;
  constructor(private _foodpostsservice: FoodpostsService) { 
    this._foodpostsservice.showImage = false;
  }

  ngOnInit(): void {
    this.retrieveFoodPosts();
  }

  retrieveFoodPosts(){
    this._foodpostsservice.retrieveFoodPosts().subscribe(res=>{
      this.foodpostsdata = res;
    },
    err => {
      console.error("Error occured at component level"+err);
    }
    )
  }

}

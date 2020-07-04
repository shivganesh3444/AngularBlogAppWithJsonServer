import { Component, OnInit } from '@angular/core';
import { FoodpostsService } from 'src/app/services/foodposts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
   Title: string;
   Description: string;
  constructor(private _foodpostsservice: FoodpostsService,private toastr: ToastrService) {
    this._foodpostsservice.showImage = false;
   }

  ngOnInit(): void {
  }

  saveFoodPost(){
    var request = {
      "Title": this.Title,
      "Description": this.Description
    }
    this._foodpostsservice.saveFoodPost(request).subscribe(res=>{
      this.toastr.success("Post Saved Successfully!","Foog Blog");
    },
    err => {
      console.error("Error occured at component level"+err);
    }
    )
  }

}

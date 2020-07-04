import { Component, OnInit } from '@angular/core';
import { FoodpostsService } from 'src/app/services/foodposts.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editfoodpost',
  templateUrl: './editfoodpost.component.html',
  styleUrls: ['./editfoodpost.component.css']
})
export class EditfoodpostComponent implements OnInit {

  id:number;
  Title: string;
  Description: string;
  constructor(private _foodpostsservice: FoodpostsService,private toastr: ToastrService,private route: ActivatedRoute) {
    this._foodpostsservice.showImage = false;
    this.id = this.route.snapshot.params.id;
   }

  ngOnInit(): void {
    this.retrieveFoodPostByID(this.id);
  }
  retrieveFoodPostByID(id: number){
    this._foodpostsservice.retrieveFoodPostById(id).subscribe(res=>{
    this.Title = res.Title;
    this.Description = res.Description;
  },
  err => {
    console.error("Error occured at component level"+err);
  }
  )
}
  updateFoodPost(){
    var request = {
      "id":this.id,
      "Title": this.Title,
      "Description": this.Description
    }
    this._foodpostsservice.updateFoodPost(request).subscribe(res=>{
      this.toastr.info("Post Updated Successfully!","Foog Blog");
    },
    err => {
      console.error("Error occured at component level"+err);
    }
    )
  }

}

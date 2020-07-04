import { Component, OnInit } from '@angular/core';
import { FoodpostsService } from 'src/app/services/foodposts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deletepost',
  templateUrl: './deletepost.component.html',
  styleUrls: ['./deletepost.component.css']
})
export class DeletepostComponent implements OnInit {

  foodpostsdata: any;
  constructor(private _foodpostsservice: FoodpostsService,private toastr: ToastrService) {
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

  deletePost(id:number){
    if(confirm("Are you sure to delete this post?"))
    {
      this.deleteFoodPost(id);
    }
  }

  deleteFoodPost(postid:number){
    this._foodpostsservice.deleteFoodPost(postid).subscribe(res=>{
      this.toastr.warning("Post Deleted Successfully!","Food Blog");
    },
    err => {
      console.error(err);
    }
    )
  }
}

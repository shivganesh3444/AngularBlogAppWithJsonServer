import { Component, OnInit } from '@angular/core';
import { FoodpostsService } from 'src/app/services/foodposts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  firstName:string;
  lastName:string;
  Email: string;
  Phone: number;
  Address: string;
  yourMessage: string;
  Gender: string;

  constructor(public _foodservice:FoodpostsService,private toastr: ToastrService) {
    this._foodservice.showImage = false;
   }

  ngOnInit(): void {
  }

  saveContactUs(){
    var request={
      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.Email,
      "phone": this.Phone,
      "address": this.Address,
      "gender": this.Gender,
      "message": this.yourMessage
    }
    this._foodservice.saveContactUs(request).subscribe(res=>{
      this.toastr.success("Thank you for contacting us!","Food Blog");
    },
    err => { 
      console.error(err);
    }
    )
  }

}

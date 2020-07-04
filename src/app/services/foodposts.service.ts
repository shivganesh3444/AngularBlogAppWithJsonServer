import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodpostsService {

  public showImage: boolean = false;
  foodserviceurl: string ="http://localhost:3000/Post";
  contactusserviceurl: string = "http://localhost:3000/ContactUs";

  constructor(private _httpClient: HttpClient) { }

  //This method is used to fetch food posts from db.json file
  retrieveFoodPosts():any{
    return this._httpClient.get(this.foodserviceurl).pipe(
      map(res => { 
        return res;
      },
      err => {
        console.error("Error occured at service level: "+ err);
      }
      )
    )
  }

   //This method is used to fetch food posts from db.json file
   retrieveFoodPostById(id:number):any{
    return this._httpClient.get(this.foodserviceurl+'/'+id).pipe(
      map(res => { 
        return res;
      },
      err => {
        console.error("Error occured at service level: "+ err);
      }
      )
    )
  }

  //This method is used to save food post into db.json file
  saveFoodPost(foodpost):any{
    return this._httpClient.post(this.foodserviceurl,foodpost).pipe(
      map(res=>{
        return res;
      },
      err => {
        console.error(err);
      }
      )
    )
  }

  //This method is used to update food post into db.json file
  updateFoodPost(foodpost):any{
    return this._httpClient.put(this.foodserviceurl+'/'+foodpost.id,foodpost).pipe(
      map(res=>{
        return res;
      },
      err => {
        console.error(err);
      }
      )
    )
  }

  //This method is used to delete food post from db.json file
  deleteFoodPost(id:number):any{
    return this._httpClient.delete(this.foodserviceurl+'/'+id).pipe(
      map(res=>{
        return res;
      },
      err => {
        console.error(err);
      }
      )
    )
  }

  //This method is used to save contact us info into db.json file
  saveContactUs(contactus):any{
    return this._httpClient.post(this.contactusserviceurl,contactus).pipe(
      map(res=>{
        return res;
      },
      err => {
        console.error(err);
      }
      )
    )
  }


}

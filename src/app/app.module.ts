import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { ReadpostComponent } from './components/readpost/readpost.component';
import { DeletepostComponent } from './components/deletepost/deletepost.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FoodBlogRouterModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditfoodpostComponent } from './components/editfoodpost/editfoodpost.component';



@NgModule({
  declarations: [
    AppComponent,
    CreatepostComponent,
    ReadpostComponent,
    DeletepostComponent,
    ContactusComponent,
    EditfoodpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FoodBlogRouterModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

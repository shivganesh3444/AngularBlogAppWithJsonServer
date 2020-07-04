import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { ReadpostComponent } from './components/readpost/readpost.component';
import { DeletepostComponent } from './components/deletepost/deletepost.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { EditfoodpostComponent } from './components/editfoodpost/editfoodpost.component';

const routes: Routes = [
    { path:'', redirectTo:'', pathMatch:'full' },
    { path: 'create',component: CreatepostComponent},
    { path: 'read',component: ReadpostComponent},
    { path: 'delete',component: DeletepostComponent},
    { path: 'contact',component: ContactusComponent},
    { path:'editpost/:id', component: EditfoodpostComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class FoodBlogRouterModule{

}
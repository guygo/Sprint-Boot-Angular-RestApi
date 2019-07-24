import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowItemsComponent } from './Item/show-items/show-items.component';
import { ShowItemComponent } from './Item/show-item/show-item.component';
import { AddItemComponent } from './Item/add-item/add-item.component';


const routes: Routes = [
  {path:'showItem/:itemNo',component:ShowItemComponent},
  {path:'',component:ShowItemsComponent},
  {path:'createitem',component:AddItemComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

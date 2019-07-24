import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../module/Item';

import {MatTableDataSource} from '@angular/material/table';
import {  Subscription } from 'rxjs';
@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrls: ['./show-items.component.css']
})
export class ShowItemsComponent implements OnInit,OnDestroy{
  items:Item[]=[];
  private itemsSub: Subscription;

  dataSource;
  displayedColumns: string[] = ['Item No', 'name', 'inventory code', 'amount','deposit','withdraw','delete'];
  constructor(public itemService: ItemService) { 
   
  }
  
  ngOnInit() {

    this.itemService.getItems();
    this.itemsSub=this.itemService.getItemUpdateListener().subscribe((items:Item[])=>{
    this.items=items;
    this.dataSource=new MatTableDataSource<Item>(this.items);
    });
  }
  
  withdraw(itemNo){
    this.itemService.witdrawItem(itemNo).subscribe(res=>{
     
      this.items.find(x => x.itemNo === itemNo).amount=res.amount;

      this.dataSource=new MatTableDataSource<Item>(this.items);
    });
  }
  deposit(itemNo){
   
    this.itemService.depositItem(itemNo).subscribe(res=>{
     
      this.items.find(x => x.itemNo === itemNo).amount=res.amount;

      this.dataSource=new MatTableDataSource<Item>(this.items);
    });
  }
  delete(itemNo){
   
    this.itemService.deleteItem(itemNo).subscribe(res=>{
     
      this.items=res;

      this.dataSource=new MatTableDataSource<Item>(this.items);
    });
  }
  ngOnDestroy() {
    this.itemsSub.unsubscribe();
  }

}

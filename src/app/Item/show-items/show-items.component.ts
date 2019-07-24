import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../module/Item';

import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrls: ['./show-items.component.css']
})
export class ShowItemsComponent implements OnInit {
  items:Item[];
  dataSource;
  displayedColumns: string[] = ['Item No', 'name', 'inventory code', 'amount','deposit','withdraw','delete'];
  constructor(public itemService: ItemService) { 
   
  }

  ngOnInit() {
    this.itemService.getItems().subscribe(res=>{
     
      this.items=res;
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
}

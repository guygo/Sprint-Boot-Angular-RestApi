import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../module/Item';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent implements OnInit {
  item:Item;
  itemNo:string;
  constructor(public itemService: ItemService,public route:ActivatedRoute) { }

  ngOnInit() {
   this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      
      if(paramMap.get('itemNo')!=undefined)
      {
        this.itemNo=paramMap.get('itemNo');
        this.itemService.getItemByItemNo(this.itemNo).subscribe(res=>{
         this.item=res;
         
        });
        
      }
     
    });
  }

}

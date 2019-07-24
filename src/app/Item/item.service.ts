import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Subject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { Item } from './module/Item';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  private ItemUpdate= new Subject<Item[]>();
  apiURL: string = 'http://localhost:8080/api/v1/items';
  
  constructor(private httpClient: HttpClient) {}
  public  postItem(item:Item)
  {
    
    return this.httpClient.post(`${this.apiURL}/`,item);
    
  }
  getItemUpdateListener()
  {
    return this.ItemUpdate.asObservable(); 
  } 
  deleteItem(ItemNo)
  {
    return this.httpClient.delete<Item[]>(`${this.apiURL}/`+ItemNo);
  }
  depositItem(ItemNo)
  {
    return this.httpClient.put<Item>(`${this.apiURL}/deposit/`+ItemNo,null);
  }
  witdrawItem(ItemNo)
  {
   
   
    return this.httpClient.put<Item>(`${this.apiURL}/withdraw/`+ItemNo,null);
  }
  
  public getItemByItemNo(ItemNo)
  {
    return this.httpClient.get<Item>(`${this.apiURL}/`+ItemNo);
  }
  
  public  getItems()
  {
    return this.httpClient.get<Item[]>(`${this.apiURL}/`).subscribe(items=>{
 
    this.ItemUpdate.next(items);
  
  });
  }
  
}



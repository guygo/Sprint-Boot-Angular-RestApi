import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemService } from '../item.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  form:FormGroup
  constructor(public itemService: ItemService,private router:Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      inventoryCode: new FormControl(null, { validators: [Validators.required] }),
      amount: new FormControl(null, { validators: [Validators.required] })
      
    });
  }
  onSaveItem(){
    
    if(this.form.invalid)
    {
      return;
    }
    this.router.navigate(["/"]);
    this.itemService.postItem(this.form.value).subscribe(res=>{
      if(res=='success'){
        this.router.navigate(["/"]);
      }
      else
      {
        alert('failed in creating item');
      }
  });
    
  }

}

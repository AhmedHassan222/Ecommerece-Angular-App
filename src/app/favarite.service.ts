import { Injectable, OnInit } from '@angular/core';
import { IProducts } from './Iproducts';

@Injectable({
  providedIn: 'root'
})
export class FavariteService {
  favariteArr:IProducts[] = [];
  constructor() { }
  addItem(item:IProducts):void {
    //code to add to favarite in local storage
    if(!this.favariteArr.includes(item))
    {
      this.favariteArr.push(item);
      localStorage.setItem('favariteArr',JSON.stringify(this.favariteArr))
    }
    console.log(this.favariteArr)
  }
  removeItem(item:IProducts):void{
    if(localStorage.getItem('favariteArr') != null)
      {
        this.favariteArr = JSON.parse(localStorage.getItem('favariteArr')!);
        this.favariteArr.splice(item.id , 1)
      }
  }
  clearAll():void{
    //code for delete all
  }
}

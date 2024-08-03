import { Component, OnInit } from '@angular/core';
import { IProducts } from '../Iproducts';
import { FavariteService } from '../favarite.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favarite',
  standalone: true,
  imports: [],
  templateUrl: './favarite.component.html',
  styleUrl: './favarite.component.scss'
})
export class FavariteComponent implements OnInit {
  products:IProducts[]= [];
  items:number[] = [1,2,3,4]
  constructor(private _FavariteService:FavariteService){}
  ngOnInit(): void {
    if(localStorage.getItem('favariteArr') != null)
      this.products = JSON.parse(localStorage.getItem('favariteArr')!)
  }
  addItemToFavarite(item:IProducts):void 
  {
    this._FavariteService.addItem(item);
  }
}

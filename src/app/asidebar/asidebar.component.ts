import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../products.service';
import { IProducts } from '../Iproducts';
import { FavariteService } from '../favarite.service';

@Component({
  selector: 'app-asidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './asidebar.component.html',
  styleUrl: './asidebar.component.scss'
})
export class AsidebarComponent implements OnInit{
  constructor(private _ProductsService:ProductsService , private _FavariteService:FavariteService){}
  products:IProducts[]= [];
  matchesProducts:IProducts[] = [];
  type:string = 'allproduct'
  ngOnInit(): void {
    this._ProductsService.getProductsByType(this.type).subscribe({
      next:(response)=> this.products = response
    })
  }
  search(word:string){
    if(word)
      this.matchesProducts = this.products.filter((product)=> product.name.toLocaleLowerCase().includes(word.toLocaleLowerCase()))
    else 
      this.matchesProducts = [];
  }
  addItemToFavarite(item:IProducts):void{
    this._FavariteService.addItem(item);
  }

}

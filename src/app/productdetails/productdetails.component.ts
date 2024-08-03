import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from '../products.service';
import { IProducts } from '../Iproducts';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent implements OnInit {
  type:any='';
  id:any='';
  products:IProducts[]= [];
  productsDetils:IProducts[] = [];
  items:number[] = [1]
constructor(private _ActivatedRoute:ActivatedRoute, private _ProductService:ProductsService){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((result:ParamMap)=>{
      this.type = result.get('type')
      this.id = result.get('id')
      this._ProductService.getProductsByType(this.type).subscribe({
        next:(response)=>{
          this.products =  response;
          this.productsDetils = this.products.filter((product)=>product.id === Number(this.id));
        }

      })
    })
  }
}

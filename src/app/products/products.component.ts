import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProducts } from '../Iproducts';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { FavariteService } from '../favarite.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products:IProducts[]=[];
  category:any ='';
  type:string='';
  items:number[] = [1,2,3,4,5,6,7,8]
  error:string = '';
  favariteArr:IProducts[]=[];
  constructor(private _ProductsService:ProductsService , private _activeRoute:ActivatedRoute , private router: Router , private _FavariteService:FavariteService){}
  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe((result:ParamMap)=>{
      this.products = [];
      this.category = result.get('category');
      switch(this.category){
        case 'laptop':
          this.type = 'computers';
          break;
        case 'televisions':
          this.type = 'televisions';
          break;
        case 'headphones':
          this.type = 'headphones';
          break;
        case 'cameras':
          this.type = 'cameras';
          break;
        case 'microwave':
          this.type = 'kitchen';
          break;
        case 'shaver':
          this.type = 'personalcare';
          break;
        case 'accessories':
          this.type = 'accessories';
          break;
        case 'tablets':
          this.type = 'mobilesandtablets';
          break;
        case 'airconditioner':
          this.type = 'homeappliances';
          break;
        default:
          this.router.navigate(['/notfound'])
          
      }
      this._ProductsService.getProductsByType(this.type).subscribe({
        next:(response)=>this.products =  response
      })
    })
    if(localStorage.getItem('favariteArr') != null)
    {
      this.favariteArr = JSON.parse(localStorage.getItem('favariteArr')!);
    }
    
  }

  addItemToFavarite(item:IProducts):void{
    this._FavariteService.addItem(item)
  }

  removeFromFavarite(item:IProducts):void{
  
  }
  
}

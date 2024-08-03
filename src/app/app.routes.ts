import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FavariteComponent } from './favarite/favarite.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'' , redirectTo:'home', pathMatch:'full'},
    {path:'home', component: HomeComponent , title:'eMarket - Home Page'},
    {path:'login', component:LoginComponent, title: 'eMarket - Login Page'},
    {path:'register',component:RegisterComponent,title:'eMarket - Register Page'},
    {path:'favarite',  component:FavariteComponent,title:'eMarket - Favarite Products'},
    {path:'products/:category',component:ProductsComponent , title:'eMarket - Products'},
    {path:'productdetails/:type/:id',component:ProductdetailsComponent,title:'eMarket - product details'},
    {path:'cart',component:CartComponent,title:'eMarket - Shopping Cart Page'},
    {path:'checkout',component:CheckoutComponent,title:'eMarket - Checkout'},
    {path:'asidebar',component:AsidebarComponent,title:'eMarket - Search for Product'},
    {path:'**',component:NotfoundComponent,title:'eMarket - 404 - Notfound Page'}
];

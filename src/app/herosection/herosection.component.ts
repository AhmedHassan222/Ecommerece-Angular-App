import { Component } from '@angular/core';
import { ICategory } from '../icategory';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-herosection',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.scss'
})
export class HerosectionComponent {
  Categories:ICategory[] = [
    { id:1,img: '../../assets/laptop.jfif', name: "laptop", link: '/products/laptop' },
    { id:2,img: '../../assets/Camera.jfif', name: "camera", link: '/products/Cameras' },
    { id:3,img: '../../assets/Television.jfif', name: "television", link: '/products/televisions' },
    { id:4,img: '../../assets/Airconditioner.jfif', name: "airconditioner", link: '/products/airconditioner' },
    { id:5,img: '../../assets/microwave.jfif', name: "microwave", link: '/products/microwave' },
    { id:6,img: '../../assets/Shaver.jfif', name: "Shaver", link: '/products/shaver' },
    { id:7,img: '../../assets/Tablet.jfif', name: "tablet", link: '/products/tablets' },
    { id:8,img: '../../assets/Headphone.jfif', name: "Headphone", link: '/products/headphones' },
    { id:9,img: '../../assets/Accessories.jfif', name: "Accessories", link: '/products/accessories' },
]
}

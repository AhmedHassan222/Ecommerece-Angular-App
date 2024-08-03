import { Component } from '@angular/core';
import { HerosectionComponent } from "../herosection/herosection.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HerosectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

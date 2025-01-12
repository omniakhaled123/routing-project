import { Component, Input } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-home',
  imports: [
    StarComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homecolor:string='white'
}

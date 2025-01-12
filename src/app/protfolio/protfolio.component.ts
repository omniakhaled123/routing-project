import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-protfolio',
  imports: [StarComponent],
  templateUrl: './protfolio.component.html',
  styleUrl: './protfolio.component.css'
})
export class ProtfolioComponent {


protfolioimgs:string[]=[
  'poert1.png',
  'port2.png',
  'port3.png',
  'poert1.png',
  'port2.png',
  'port3.png',
]

mark:boolean=true;
src:string='';

hideimg(element:EventTarget|null , img:HTMLImageElement):void{
if (element==img)return;
this.mark=true;
}
}

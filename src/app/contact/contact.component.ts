import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-contact',
  imports: [StarComponent , FormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
userName:string='';
userAge!:number ;
userEmail:string='';
userPassword:string='';

}

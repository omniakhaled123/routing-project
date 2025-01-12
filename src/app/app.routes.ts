import { AboutComponent } from './about/about.component';

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:"full"},
    {path:'home',component:HomeComponent,title:"Home"},
    {path:'about',component:AboutComponent,title:"About"},
    {path:'Protfolio',component:ProtfolioComponent,title:"Protfolio"},
    {path:'contact',component:ContactComponent,title:"Contact"}

];

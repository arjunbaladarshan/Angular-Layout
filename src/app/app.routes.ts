import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"faculty",component:MainContentComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent}

];

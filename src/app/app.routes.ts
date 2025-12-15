import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home';
import { Products } from './Pages/products/products';
import { SingleviewList } from './Pages/singleview-list/singleview-list';
import { Contact } from './Pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },     

  { path: 'products', component: Products },
  { path: 'singleview-list/:id', component: SingleviewList },
  { path: 'contact', component: Contact },

  { path: '**', redirectTo: '' } 
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  // {
  //   path: 'about', component: AboutComponent, children: [

  //     { path: 'company', component: AboutCompanyComponent },
  //     { path: 'me', component: AboutMeComponent }
  //   ]
  // },

  // { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  // { path: '**', component: NoPageComponent },   //Wild Card Page (Default Page if page not available.)
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

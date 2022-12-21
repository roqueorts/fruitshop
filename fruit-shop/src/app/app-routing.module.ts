import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';

const routes: Routes = [{ path: 'products', component: ProductListComponent },
{ path: 'addproduct', component: ProductFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

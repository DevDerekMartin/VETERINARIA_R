import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path :'Inicio-Sesion',
    loadChildren: () => import ('../app/Admin/admin.module').then(M => M.AdminModule)
  },
  {
    path :'Registro',
    loadChildren: () => import ('../app/Products/products.module').then(M => M.ProductsModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }

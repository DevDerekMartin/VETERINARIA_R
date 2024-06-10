import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FProductosComponent } from './Registro_Usuario/fproductos.component';
import { FCitaPetComponent } from './fcita-pet/fcita-pet.component';

import { FMedicamentosComponent } from './f-medicamentos/f-medicamentos.component';

const routes: Routes = [
  {
    path:'Usuario', component:FProductosComponent 
  },
  {
    path:'Cita/Mascota',component:FCitaPetComponent
  },
  {
    path:'Medicamento',component:FMedicamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

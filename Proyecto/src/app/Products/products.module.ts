import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FProductosComponent } from './Registro_Usuario/fproductos.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { FCitaPetComponent } from './fcita-pet/fcita-pet.component';


//MODULOS DE ANGULAR PRIMENG
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel'; // Importa FloatLabelModule aquí
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { DropdownModule } from 'primeng/dropdown';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import {StyleClassModule} from 'primeng/styleclass';
import { FMedicamentosComponent } from './f-medicamentos/f-medicamentos.component';

@NgModule({
  declarations: [
    FProductosComponent,
    FCitaPetComponent,
    FMedicamentosComponent,
  ],
  imports: [
    CascadeSelectModule,
    InputTextModule,FloatLabelModule,
    ButtonModule,
    SplitterModule,
    DropdownModule,
    BreadcrumbModule,
    StyleClassModule,
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ImageModule,
    FileUploadModule,
    ToastModule,
    CalendarModule,
    
  ]
})
export class ProductsModule { }

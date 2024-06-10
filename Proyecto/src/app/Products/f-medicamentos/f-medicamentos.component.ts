import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-f-medicamentos',
  templateUrl: './f-medicamentos.component.html',
  styleUrls: ['./f-medicamentos.component.css']
})
export class FMedicamentosComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      association: ['', Validators.required],
      formulation: ['', Validators.required],
      commercialPresentation: ['', Validators.required],
      doseAdministration: ['', Validators.required],
      productDescription: ['', Validators.required],
      productImage: ['', Validators.required],
      indications: ['', Validators.required],
    });
  }

  onSubmit(): void {
    // Aquí puedes manejar la lógica para enviar el formulario
    if (this.productForm.valid) {
      console.log(this.productForm.value);
    } else {
      console.error('El formulario no es válido');
    }
  }
}

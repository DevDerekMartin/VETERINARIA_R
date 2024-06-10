import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fproductos',
  templateUrl: './fproductos.component.html',
  styleUrls: ['./fproductos.component.css']
})
export class FProductosComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      photo: [''],
      paternalSurname: ['', Validators.required],
      maternalSurname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      expirationDate: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      cardHolderName: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      // Procesar la información del formulario
      console.log(this.userForm.value);
    } else {
      // Manejar el formulario inválido
      console.log('Formulario inválido');
    }
  }
}

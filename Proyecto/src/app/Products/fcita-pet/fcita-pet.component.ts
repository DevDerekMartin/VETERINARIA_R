import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api'; // Importa MenuItem de PrimeNG

@Component({
  selector: 'app-fcita-pet',
  templateUrl: './fcita-pet.component.html',
  styleUrls: ['./fcita-pet.component.css']
})
export class FCitaPetComponent implements OnInit {
  // VARIABLES DEL MENU
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  // VARIABLES DE TIPO CONSULTA
  Consulta_V: any[] | undefined;
  Consulta_FC: FormControl = new FormControl(null);

  formGroup: FormGroup = new FormGroup({});
  dropdownOptions: any[] = []; // Inicializa el array de opciones

  ngOnInit() {
    // Inicializa el menú
    this.items = [
      { label: 'Metodo de pago' },
      { label: 'Registro de mascota' },
      { label: 'Finalizacón del registro' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    // Inicializa el formulario
    this.formGroup = new FormGroup({
      Consulta_FC: this.Consulta_FC, // Asigna el FormControl Consulta_FC al formulario
      Name_FC: new FormControl(''),
      Fecha_FC: new FormControl(''),
      Motivo_FC: new FormControl(''),
      Animal_FC: new FormControl(''),
      Breed_FC: new FormControl('')
    });

    // Inicializa las opciones de consulta
    this.Consulta_V = [
      {
        name: 'Chequeo General',
        code: 'CG',
        states: [
          {
            name: 'Controles',
            cities: [
              { cname: 'Chequeo de ojos, oídos, nariz y garganta', code: 'CG-CONT' },
              { cname: 'Examen de piel y pelaje', code: 'CG-PIEL' },
              { cname: 'Evaluación de vacunas', code: 'CG-VAC' },
              { cname: 'Revisión gastrointestinal', code: 'CG-GASTRO' },
              { cname: 'Evaluación dental', code: 'CG-DENTAL' },
              { cname: 'Pruebas de laboratorio', code: 'CG-LAB' },
              { cname: 'Evaluación ortopédica', code: 'CG-ORTO' },
              { cname: 'Evaluación cardiovascular', code: 'CG-CARDIO' }
            ]
          }
        ]
      },
      // Otras opciones de consulta aquí...
      {
        name: 'Vacunación',
        code: 'VAC',
        states: [
          {
            name: 'Tipo de Vacuna',
            cities: [
              { cname: 'Vacuna contra la rabia', code: 'VAC-RAB' },
              { cname: 'Vacuna polivalente', code: 'VAC-POL' },
              { cname: 'Vacuna contra la leptospirosis', code: 'VAC-LEP' }
            ]
          }
        ]
      },
      {
        name: 'Control de Parásitos',
        code: 'PARA',
        states: [
          {
            name: 'Tipo de Control',
            cities: [
              { cname: 'Control de pulgas', code: 'PARA-PUL' },
              { cname: 'Control de garrapatas', code: 'PARA-GAR' },
              { cname: 'Desparasitación interna', code: 'PARA-DESIN' }
            ]
          }
        ]
      },
      {
        name: 'Chequeo de Cachorro',
        code: 'CC',
        states: [
          {
            name: 'Tipo de Chequeo',
            cities: [
              { cname: 'Examen físico', code: 'CC-EF' },
              { cname: 'Vacunas iniciales', code: 'CC-VI' },
              { cname: 'Desparasitación', code: 'CC-DES' },
              { cname: 'Evaluación de comportamiento', code: 'CC-EC' },
              { cname: 'Microchip y Registro', code: 'CC-MR' }
            ]
          }
        ]
      },
      {
        name: 'Consulta por Enfermedad',
        code: 'ENF',
        states: [
          {
            name: 'Tipo de Consulta',
            cities: [
              { cname: 'Evaluación general', code: 'ENF-EG' }
            ]
          }
        ]
      },
      {
        name: 'Cirugía',
        code: 'CIR',
        states: [
          {
            name: 'Tipo de Cirugía',
            cities: [
              { cname: 'Evaluación prequirúrgica', code: 'CIR-PRE' },
              { cname: 'Evaluación postquirúrgica', code: 'CIR-POST' }
            ]
          }
        ]
      },
      {
        name: 'Dentales',
        code: 'DEN',
        states: [
          {
            name: 'Tipo de Control Dental',
            cities: [
              { cname: 'Limpieza dental', code: 'DEN-LIM' },
              { cname: 'Evaluación dental', code: 'DEN-EVAL' },
              { cname: 'Evaluación pre-operativa', code: 'DEN-PREOP' },
              { cname: 'Extracción de caries', code: 'DEN-CARIES' }
            ]
          }
        ]
      }
    ];

    // Inicializa las opciones del dropdown
    this.dropdownOptions = [
      { label: 'Gato', value: 'Gato' },
      { label: 'Perro', value: 'Perro' },
      { label: 'Ave', value: 'Ave' },
      { label: 'Conejo', value: 'Conejo' }
    ];
  }
}

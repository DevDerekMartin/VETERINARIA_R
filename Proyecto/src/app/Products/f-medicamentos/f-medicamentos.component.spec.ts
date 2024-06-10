import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FMedicamentosComponent } from './f-medicamentos.component';

describe('FMedicamentosComponent', () => {
  let component: FMedicamentosComponent;
  let fixture: ComponentFixture<FMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FMedicamentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

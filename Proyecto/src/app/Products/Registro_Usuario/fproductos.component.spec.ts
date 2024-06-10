import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FProductosComponent } from './fproductos.component';

describe('FProductosComponent', () => {
  let component: FProductosComponent;
  let fixture: ComponentFixture<FProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

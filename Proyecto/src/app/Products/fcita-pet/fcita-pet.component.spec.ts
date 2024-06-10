import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCitaPetComponent } from './fcita-pet.component';

describe('FCitaPetComponent', () => {
  let component: FCitaPetComponent;
  let fixture: ComponentFixture<FCitaPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FCitaPetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FCitaPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

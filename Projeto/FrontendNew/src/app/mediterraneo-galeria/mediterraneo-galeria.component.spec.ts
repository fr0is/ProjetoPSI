import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediterraneoGaleriaComponent } from './mediterraneo-galeria.component';

describe('MediterraneoGaleriaComponent', () => {
  let component: MediterraneoGaleriaComponent;
  let fixture: ComponentFixture<MediterraneoGaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediterraneoGaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediterraneoGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

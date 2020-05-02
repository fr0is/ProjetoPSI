import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediterraneoQuartosSuiteSeniorComponent } from './mediterraneo-quartos-suite-senior.component';

describe('MediterraneoQuartosSuiteSeniorComponent', () => {
  let component: MediterraneoQuartosSuiteSeniorComponent;
  let fixture: ComponentFixture<MediterraneoQuartosSuiteSeniorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediterraneoQuartosSuiteSeniorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediterraneoQuartosSuiteSeniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

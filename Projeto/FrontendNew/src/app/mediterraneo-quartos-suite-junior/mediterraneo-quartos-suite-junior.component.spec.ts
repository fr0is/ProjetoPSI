import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediterraneoQuartosSuiteJuniorComponent } from './mediterraneo-quartos-suite-junior.component';

describe('MediterraneoQuartosSuiteJuniorComponent', () => {
  let component: MediterraneoQuartosSuiteJuniorComponent;
  let fixture: ComponentFixture<MediterraneoQuartosSuiteJuniorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediterraneoQuartosSuiteJuniorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediterraneoQuartosSuiteJuniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

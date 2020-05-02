import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediterraneoQuartosStandardComponent } from './mediterraneo-quartos-standard.component';

describe('MediterraneoQuartosStandardComponent', () => {
  let component: MediterraneoQuartosStandardComponent;
  let fixture: ComponentFixture<MediterraneoQuartosStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediterraneoQuartosStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediterraneoQuartosStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

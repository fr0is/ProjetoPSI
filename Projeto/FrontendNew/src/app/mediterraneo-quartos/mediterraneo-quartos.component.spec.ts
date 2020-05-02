import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediterraneoQuartosComponent } from './mediterraneo-quartos.component';

describe('MediterraneoQuartosComponent', () => {
  let component: MediterraneoQuartosComponent;
  let fixture: ComponentFixture<MediterraneoQuartosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediterraneoQuartosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediterraneoQuartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

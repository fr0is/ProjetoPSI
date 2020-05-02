import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediterraneoQuartosServicosComponent } from './mediterraneo-quartos-servicos.component';

describe('MediterraneoQuartosServicosComponent', () => {
  let component: MediterraneoQuartosServicosComponent;
  let fixture: ComponentFixture<MediterraneoQuartosServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediterraneoQuartosServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediterraneoQuartosServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

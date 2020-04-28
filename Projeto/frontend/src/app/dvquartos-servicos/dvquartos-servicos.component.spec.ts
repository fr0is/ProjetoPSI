import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DVQuartosServicosComponent } from './dvquartos-servicos.component';

describe('DVQuartosServicosComponent', () => {
  let component: DVQuartosServicosComponent;
  let fixture: ComponentFixture<DVQuartosServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DVQuartosServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DVQuartosServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

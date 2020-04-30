import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvquartosServicosComponent } from './dvquartos-servicos.component';

describe('DvquartosServicosComponent', () => {
  let component: DvquartosServicosComponent;
  let fixture: ComponentFixture<DvquartosServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvquartosServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvquartosServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

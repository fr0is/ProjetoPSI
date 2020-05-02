import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarQuartosServicosComponent } from './mar-quartos-servicos.component';

describe('MarQuartosServicosComponent', () => {
  let component: MarQuartosServicosComponent;
  let fixture: ComponentFixture<MarQuartosServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarQuartosServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarQuartosServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

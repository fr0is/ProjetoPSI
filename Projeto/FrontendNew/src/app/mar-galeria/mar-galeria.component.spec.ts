import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarGaleriaComponent } from './mar-galeria.component';

describe('MarGaleriaComponent', () => {
  let component: MarGaleriaComponent;
  let fixture: ComponentFixture<MarGaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarGaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

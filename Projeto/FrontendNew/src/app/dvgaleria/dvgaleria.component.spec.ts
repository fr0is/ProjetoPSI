import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DVGaleriaComponent } from './dvgaleria.component';

describe('DVGaleriaComponent', () => {
  let component: DVGaleriaComponent;
  let fixture: ComponentFixture<DVGaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DVGaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DVGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

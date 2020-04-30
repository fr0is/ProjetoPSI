import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediterraneoComponent } from './mediterraneo.component';

describe('MediterraneoComponent', () => {
  let component: MediterraneoComponent;
  let fixture: ComponentFixture<MediterraneoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediterraneoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediterraneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

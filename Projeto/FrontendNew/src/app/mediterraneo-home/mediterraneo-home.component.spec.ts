import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediterraneoHomeComponent } from './mediterraneo-home.component';

describe('MediterraneoHomeComponent', () => {
  let component: MediterraneoHomeComponent;
  let fixture: ComponentFixture<MediterraneoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediterraneoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediterraneoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

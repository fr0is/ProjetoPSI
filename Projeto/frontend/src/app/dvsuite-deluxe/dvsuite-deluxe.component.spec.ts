import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DVSuiteDeluxeComponent } from './dvsuite-deluxe.component';

describe('DVSuiteDeluxeComponent', () => {
  let component: DVSuiteDeluxeComponent;
  let fixture: ComponentFixture<DVSuiteDeluxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DVSuiteDeluxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DVSuiteDeluxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

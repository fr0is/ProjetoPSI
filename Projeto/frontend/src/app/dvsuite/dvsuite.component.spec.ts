import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DVSuiteComponent } from './dvsuite.component';

describe('DVSuiteComponent', () => {
  let component: DVSuiteComponent;
  let fixture: ComponentFixture<DVSuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DVSuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DVSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

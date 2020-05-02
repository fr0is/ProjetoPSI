import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarSuiteJuniorComponent } from './mar-suite-junior.component';

describe('MarSuiteJuniorComponent', () => {
  let component: MarSuiteJuniorComponent;
  let fixture: ComponentFixture<MarSuiteJuniorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarSuiteJuniorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarSuiteJuniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

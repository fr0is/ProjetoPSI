import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarSuiteJuniorSuperiorComponent } from './mar-suite-junior-superior.component';

describe('MarSuiteJuniorSuperiorComponent', () => {
  let component: MarSuiteJuniorSuperiorComponent;
  let fixture: ComponentFixture<MarSuiteJuniorSuperiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarSuiteJuniorSuperiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarSuiteJuniorSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

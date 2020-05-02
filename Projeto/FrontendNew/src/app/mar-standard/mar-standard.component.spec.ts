import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarStandardComponent } from './mar-standard.component';

describe('MarStandardComponent', () => {
  let component: MarStandardComponent;
  let fixture: ComponentFixture<MarStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

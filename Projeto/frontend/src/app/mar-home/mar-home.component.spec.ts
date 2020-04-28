import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarHomeComponent } from './mar-home.component';

describe('MarHomeComponent', () => {
  let component: MarHomeComponent;
  let fixture: ComponentFixture<MarHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

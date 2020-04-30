import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvsuiteDeluxeComponent } from './dvsuite-deluxe.component';

describe('DvsuiteDeluxeComponent', () => {
  let component: DvsuiteDeluxeComponent;
  let fixture: ComponentFixture<DvsuiteDeluxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvsuiteDeluxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvsuiteDeluxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

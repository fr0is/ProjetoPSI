import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvHomeComponent } from './dv-home.component';

describe('DvHomeComponent', () => {
  let component: DvHomeComponent;
  let fixture: ComponentFixture<DvHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

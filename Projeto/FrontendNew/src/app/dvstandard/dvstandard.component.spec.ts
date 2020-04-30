import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvstandardComponent } from './dvstandard.component';

describe('DvstandardComponent', () => {
  let component: DvstandardComponent;
  let fixture: ComponentFixture<DvstandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvstandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvstandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

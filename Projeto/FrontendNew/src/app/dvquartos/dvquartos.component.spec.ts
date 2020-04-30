import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvquartosComponent } from './dvquartos.component';

describe('DvquartosComponent', () => {
  let component: DvquartosComponent;
  let fixture: ComponentFixture<DvquartosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvquartosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvquartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

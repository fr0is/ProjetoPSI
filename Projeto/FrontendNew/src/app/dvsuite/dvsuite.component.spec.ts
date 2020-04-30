import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvsuiteComponent } from './dvsuite.component';

describe('DvsuiteComponent', () => {
  let component: DvsuiteComponent;
  let fixture: ComponentFixture<DvsuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvsuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvsuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

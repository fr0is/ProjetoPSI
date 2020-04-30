import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DVStandardComponent } from './dvstandard.component';

describe('DVStandardComponent', () => {
  let component: DVStandardComponent;
  let fixture: ComponentFixture<DVStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DVStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DVStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AVerOMarComponent } from './a-ver-omar.component';

describe('AVerOMarComponent', () => {
  let component: AVerOMarComponent;
  let fixture: ComponentFixture<AVerOMarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AVerOMarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AVerOMarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoMBComponent } from './cartao-mb.component';

describe('CartaoMBComponent', () => {
  let component: CartaoMBComponent;
  let fixture: ComponentFixture<CartaoMBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoMBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoMBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarQuartosComponent } from './mar-quartos.component';

describe('MarQuartosComponent', () => {
  let component: MarQuartosComponent;
  let fixture: ComponentFixture<MarQuartosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarQuartosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarQuartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

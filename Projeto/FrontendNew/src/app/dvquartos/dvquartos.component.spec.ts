import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DVQuartosComponent } from './dVQuartos.component';

describe('DVQuartosComponent', () => {
  let component: DVQuartosComponent;
  let fixture: ComponentFixture<DVQuartosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DVQuartosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DVQuartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

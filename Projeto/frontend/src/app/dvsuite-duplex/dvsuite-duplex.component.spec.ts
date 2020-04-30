import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DVSuiteDuplexComponent } from './dvsuite-duplex.component';

describe('DVSuiteDuplexComponent', () => {
  let component: DVSuiteDuplexComponent;
  let fixture: ComponentFixture<DVSuiteDuplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DVSuiteDuplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DVSuiteDuplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

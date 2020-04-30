import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvsuiteDuplexComponent } from './dvsuite-duplex.component';

describe('DvsuiteDuplexComponent', () => {
  let component: DvsuiteDuplexComponent;
  let fixture: ComponentFixture<DvsuiteDuplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvsuiteDuplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvsuiteDuplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

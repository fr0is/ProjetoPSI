import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteMoradasListaComponent } from './cliente-moradas-lista.component';

describe('ClienteMoradasListaComponent', () => {
  let component: ClienteMoradasListaComponent;
  let fixture: ComponentFixture<ClienteMoradasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteMoradasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteMoradasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

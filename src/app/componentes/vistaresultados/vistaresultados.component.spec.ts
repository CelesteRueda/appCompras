import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaresultadosComponent } from './vistaresultados.component';

describe('VistaresultadosComponent', () => {
  let component: VistaresultadosComponent;
  let fixture: ComponentFixture<VistaresultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaresultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaresultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

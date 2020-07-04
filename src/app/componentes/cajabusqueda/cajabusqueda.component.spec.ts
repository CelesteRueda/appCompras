import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajabusquedaComponent } from './cajabusqueda.component';

describe('CajabusquedaComponent', () => {
  let component: CajabusquedaComponent;
  let fixture: ComponentFixture<CajabusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajabusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajabusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

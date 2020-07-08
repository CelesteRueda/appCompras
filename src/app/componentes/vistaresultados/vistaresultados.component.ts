import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vistaresultados',
  templateUrl: './vistaresultados.component.html',
  styleUrls: ['./vistaresultados.component.css']
})
export class VistaresultadosComponent implements OnInit {
  
  @Input () data: any;
  @Output () clickDetalles = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  Descripcion(dato){
    this.clickDetalles.emit(dato);
    console.log(dato)
  }

}

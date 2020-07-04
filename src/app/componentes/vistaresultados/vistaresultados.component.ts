import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vistaresultados',
  templateUrl: './vistaresultados.component.html',
  styleUrls: ['./vistaresultados.component.css']
})
export class VistaresultadosComponent implements OnInit {

  @Input () Data: any;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {

  @Input () data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
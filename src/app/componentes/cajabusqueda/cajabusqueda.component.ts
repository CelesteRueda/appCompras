import { Component, OnInit } from '@angular/core';
import { TestService } from '../../servicios/test.service';

@Component({
  selector: 'app-cajabusqueda',
  templateUrl: './cajabusqueda.component.html',
  styleUrls: ['./cajabusqueda.component.css']
})
export class CajabusquedaComponent implements OnInit {

  datosBusqueda: string;
  resultados: any;
  infoCargada: boolean = false;
  datosProducto: any;
  detalleProducto: any;
  infoDetalle: boolean = false;

  constructor(private testservice: TestService) { }

  getResultados() {
    this.testservice.getBusqueda(this.datosBusqueda).subscribe((data:any) =>{ 
      this.resultados = data
      this.infoCargada= true
      console.log('RESULTADOS',this.resultados)
    });
  }

  datoId(id){
    this.datosProducto = id
    this.getDetallesProducto()
    console.log('ID',id)
  }

  getDetallesProducto(){
    this.testservice.getId(this.datosProducto).subscribe((data:any) =>{
      this.detalleProducto = data
      this.infoDetalle= true
      this.infoCargada= false
      console.log(this.detalleProducto)
    });
  }

  ngOnInit(): void {
  }

}
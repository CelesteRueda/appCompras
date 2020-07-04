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

  constructor(private testservice: TestService) { }

  getResultados() {
    this.testservice.getBusqueda(this.datosBusqueda).subscribe((data:any) =>{ 
      this.resultados = data
      this.infoCargada= true
      //console.log('POUY',this.resultados)
    });
   }

  ngOnInit(): void {
  }

}

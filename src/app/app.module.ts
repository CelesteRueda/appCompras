import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CajabusquedaComponent } from './componentes/cajabusqueda/cajabusqueda.component';
import { VistaresultadosComponent } from './componentes/vistaresultados/vistaresultados.component';
import { DetalleproductoComponent } from './componentes/detalleproducto/detalleproducto.component';
import { TestService } from './servicios/test.service';

@NgModule({
  declarations: [
    AppComponent,
    CajabusquedaComponent,
    VistaresultadosComponent,
    DetalleproductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CajabusquedaComponent } from './componentes/cajabusqueda/cajabusqueda.component';
import { VistaresultadosComponent } from './componentes/vistaresultados/vistaresultados.component';
import { DetalleproductoComponent } from './componentes/detalleproducto/detalleproducto.component';
import { TestService } from './servicios/test.service';

const routes: Routes = [
    {path: '', component: CajabusquedaComponent},
    {path: 'sites/MLA/search?q=', component: VistaresultadosComponent},
    {path: 'items/', component: DetalleproductoComponent}
];

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
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

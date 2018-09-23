import { FundamentacionComponent } from './fundamentacion/fundamentacion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias/noticias.component';
import { InstitucionalComponent } from './institucional/institucional.component';





const routes: Routes = [
  { path: 'fundamentacion', component: FundamentacionComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'institucional', component: InstitucionalComponent }
];

export const routingModule: NgModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

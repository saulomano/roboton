import { FundamentacionComponent } from './fundamentacion/fundamentacion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  { path: 'fundamentacion', component: FundamentacionComponent }
];

export const routingModule: NgModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente0Component } from './componente0/componente0.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';

const routes: Routes = [
  {path: '', component: Componente0Component},
  {path: 'componente1', component: Componente1Component},
  {path: 'componente2', component: Componente2Component},
  {path: 'componente1/:id', component: Componente1Component},
  {path: 'componente2/:id/:titulo', component: Componente2Component},
  {path: '**', component: Componente0Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

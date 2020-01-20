import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClientesComponent } from './pages/clientes/clientes.component';


const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'cliente/:id', component: ClienteComponent },
  { path: '**', pathMatch: 'full', component: ClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

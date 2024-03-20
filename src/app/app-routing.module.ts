import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'gestortareas'},
  {
    path:'gestortareas',loadChildren: () => import('./Components/gestion-tareas/components/gestion-tareas.module').then(m => m.GestionTareasModule)
  },
  { path: '**', redirectTo: 'gestortareas' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

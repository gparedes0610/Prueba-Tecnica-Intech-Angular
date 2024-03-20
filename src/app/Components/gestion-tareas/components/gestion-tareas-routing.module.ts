import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { GestorTareasContainerComponent } from '../layout/container/gestor-tareas-container.component'
import { GestionTareasTareasComponent } from './gestion-tareas-tareas/gestion-tareas-tareas.component'

const routes: Routes = [
  {
    path: '',
    component: GestorTareasContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: GestionTareasTareasComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionTareasRoutingModule {}

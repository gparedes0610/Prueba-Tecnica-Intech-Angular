import { NgModule } from '@angular/core';
import { GestionTareasRoutingModule } from './gestion-tareas-routing.module';
import { GestionTareasTareasComponent } from './gestion-tareas-tareas/gestion-tareas-tareas.component';
import { GestionTareasLayoutModule } from '../layout/gestion-tareas-layout.module';
import { CommonModule } from '@angular/common';
import { GestionTareasTitleComponent } from './gestion-tareas-title/gestion-tareas-title.component';

@NgModule({
  imports: [
    CommonModule,
    GestionTareasRoutingModule,
    GestionTareasLayoutModule,
  ],
  declarations: [GestionTareasTareasComponent,GestionTareasTitleComponent],
})
export class GestionTareasModule { }

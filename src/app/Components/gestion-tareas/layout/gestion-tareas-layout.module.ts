import { PrimeNgModule } from 'src/app/Ui-controls/prime-ng/prime-ng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestorTareasContainerComponent } from './container/gestor-tareas-container.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [GestorTareasContainerComponent],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ],exports:[
    PrimeNgModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GestionTareasLayoutModule { }

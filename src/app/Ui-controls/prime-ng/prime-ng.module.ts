
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';   
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { BadgeModule } from 'primeng/badge';
import { ToolbarModule } from 'primeng/toolbar';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ToastModule,
    BadgeModule,
    ToolbarModule
  ],
  exports:[
    ButtonModule,
    AccordionModule,
    DropdownModule,
    TableModule,
    ToastModule,
    BadgeModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gestion-tareas-title',
  templateUrl: './gestion-tareas-title.component.html',
  styleUrls: ['./gestion-tareas-title.component.css']
})
export class GestionTareasTitleComponent {
  @Input() title=''
}

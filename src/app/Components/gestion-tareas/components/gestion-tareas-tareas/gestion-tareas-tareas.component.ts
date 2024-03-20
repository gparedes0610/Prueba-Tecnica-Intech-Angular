import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MessageService } from 'primeng/api'
import { Priority } from 'src/app/Core/Models/Priority'
import { State } from 'src/app/Core/Models/State'
import { Task } from 'src/app/Core/Models/Taks'
@Component({
  selector: 'app-card',
  templateUrl: './gestion-tareas-tareas.component.html',
  styleUrls: ['./gestion-tareas-tareas.component.css'],
  providers: [MessageService],
})
export class GestionTareasTareasComponent implements OnInit {
  title='Gestion de tareas RIK'
  taskForm!: FormGroup
  priorities: Priority[] = [
    { label: 'Alta', value: 'alta' },
    { label: 'Media', value: 'media' },
    { label: 'Baja', value: 'baja' },
  ]
  state: State[] = [
    { label: 'Pendiente', value: 'pendiente' },
    { label: 'Completada', value: 'completada' },
  ]
  tasks: Task[] = []
  selectedTask: any

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
  ) {}
  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Aceptado',
      detail: 'Tarea agregada',
    })
  }
  showEdit() {
    this.messageService.add({
      severity: 'success',
      summary: 'Editado',
      detail: 'Tarea editada con exito',
    })
  }
  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Eliminado',
      detail: 'Tarea Eliminada',
    })
  }
  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      state: ['', Validators.required],
      tags: [''],
    })
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks)
    }
  }

  onSubmit() {
    if (this.taskForm.valid) {
      if (this.selectedTask) {
        // Actualizar tarea existente
        const updatedTask = this.taskForm.value
        const index = this.tasks.indexOf(this.selectedTask)
        if (index !== -1) {
          this.tasks[index] = updatedTask
        }
        this.selectedTask = null
        this.showEdit()
      } else {
        // Agregar nueva tarea
        const newTask = this.taskForm.value
        this.tasks.push(newTask)
        this.showSuccess()
      }
      this.taskForm.reset()

      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }

  editTask(task: any) {
    this.selectedTask = task
    this.taskForm.patchValue({
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
      state: task.state,
      tags: task.tags,
    })
  }

  deleteTask(task: any) {
    const index = this.tasks.indexOf(task)
    if (index !== -1) {
      this.showError()
      this.tasks.splice(index, 1)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }

  selectedPriority!: Priority
  selectedState!: State

  filterTasksByPriority() {
    //console.log('selectedPriority ->',this.selectedPriority);
    if (this.selectedPriority) {
      return this.tasks.filter(
        (task) => task.priority.value === this.selectedPriority.value,
      )
    }
    return this.tasks
  }
  filterTasksByPriorityAndState() {
    // Filtrar tareas por prioridad y estado seleccionados
    if (this.selectedPriority && this.selectedState) {
      return this.tasks.filter(
        (task) =>
          task.priority.value === this.selectedPriority.value &&
          task.state.value === this.selectedState.value,
      )
    } else if (this.selectedPriority) {
      return this.tasks.filter(
        (task) => task.priority.value === this.selectedPriority.value,
      )
    } else if (this.selectedState) {
      return this.tasks.filter(
        (task) => task.state.value === this.selectedState.value,
      )
    }
    return this.tasks
  }

  getBadgeSeverity(priorityLabel: string): any {
    if (priorityLabel === 'Alta') {
      return 'danger';
    } else if (priorityLabel === 'Media') {
      return 'warning';
    } else {
      return 'success';
    }
  }
}

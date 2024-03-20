import { State } from "./State"

export interface Task {
  title: string
  description: string
  dueDate: any
  priority: any
  tags: string
  state: State;
}

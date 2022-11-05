import { Task } from '../app/models/tasks.model';

export interface AppState {
    readonly tasks: Task[];
}
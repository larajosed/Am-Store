import { Task } from '../models/tasks.model'
import * as TaskActions from './tasks.actions'

// 2 - Estado inicial
const initialState: Task = {
    name: 'First Task',
    state: 'Pending'
}

// 3 - Switch con las funciones puras
export function taskReducer(state: Task[] = [initialState], action: TaskActions.Actions) {
    switch (action.type) {
        case TaskActions.ADD_TASK:
            return [...state, action.payload];
        default:
            return state;
    }
}
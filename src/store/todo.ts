import { createStore, createApi } from 'effector';
import { ITodo } from '../interfaces/todo';

export const $todos = createStore<ITodo[]>([]);
export const { addTodo } = createApi($todos, {
    addTodo: (todos: ITodo[], newTodo: ITodo) => [...todos, newTodo]
});
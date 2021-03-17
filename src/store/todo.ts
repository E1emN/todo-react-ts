import { createStore, createApi } from 'effector';
import { ITodo } from '../interfaces/todo';

export const $todos = createStore<ITodo[]>([]);

export const { addTodo, compliteTodo, deleteTodo } = createApi($todos, {
    addTodo: (todos, newTodo: ITodo) => [...todos, newTodo],
    compliteTodo: (todos, id: string) => 
        todos.map(todo => {
        if (todo.id === id) {
            todo.isComplited = !todo.isComplited
        };
        return todo
    }),
    deleteTodo: (todos, id: string) => todos.filter((todo) => todo.id !== id)
});
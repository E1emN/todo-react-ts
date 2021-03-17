import React, { useEffect } from 'react';
import './todoList.scss';
import closeIcon from '../../assests/icons/close.svg';
import checkmarkIcon from '../../assests/icons/check-mark.svg';
import { useStore } from 'effector-react';
import { $todos, compliteTodo, deleteTodo } from '../../store/todo';
import { ITodo } from '../../interfaces/todo';

export const TodoList: React.FC = () => {

    const todos = useStore($todos);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    return(
        <div className="todo-list">
            <div className="todo-list__container">
                <ul className="todo-list__list">
                    {todos.map((todo: ITodo) => (
                        <li key={todo.id}>
                            <div 
                                className={todo.isComplited ? 'todo-list__list-check todo-list__list-check_checked' : 'todo-list__list-check'}
                                onClick={() => compliteTodo(todo.id)}
                            >
                                <img alt="" src={checkmarkIcon} />
                            </div>
                            <span className={todo.isComplited ? 'todo-list__list-text todo-list__list-text_complited' : 'todo-list__list-text'}>
                                {todo.todo}
                            </span>
                            <img alt="" src={closeIcon} className="todo-list__list-delete" onClick={() => deleteTodo(todo.id)}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};
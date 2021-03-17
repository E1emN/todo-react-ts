import React from 'react';
import './todoForm.scss';
import { useFormik } from 'formik';
import { $todos, addTodo } from '../../store/todo';
import { useStore } from 'effector-react';
import { nanoid } from 'nanoid';

interface IFormValues {
    todo: string
}

export const TodoForm: React.FC = () => {

    const todos = useStore($todos);
    console.log(todos);
    const formik = useFormik<IFormValues>({
        initialValues: {
            todo: ''
        },
        onSubmit: (values: IFormValues) => {
            addTodo({
                todo: values.todo,
                id: nanoid(),
                isComplited: false
            })
            formik.resetForm();
        }
    });

    return(
        <div className="todo-form">
            <div className="todo-form__container">
                <form className="todo-form__form" onSubmit={formik.handleSubmit}>
                    <input
                        value={formik.values.todo}
                        name="todo"
                        placeholder="Write todo here..."
                        onChange={formik.handleChange}
                        autoComplete="off" 
                    />
                    <button type="submit">
                        Add
                    </button>
                </form>
            </div>
        </div>
    )
};
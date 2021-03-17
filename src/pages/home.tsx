import React from 'react';
import { Header } from '../components/Header/header';
import { TodoForm } from '../components/TodoForm/todoForm';
import { TodoList } from '../components/TodoList/todoList';

const HomePage: React.FC = () => {
    return(
        <>
            <Header/>
            <TodoForm />
            <TodoList />
        </>
    )
};

export default HomePage;
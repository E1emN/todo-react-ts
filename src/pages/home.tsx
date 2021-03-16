import React from 'react';
import { Header } from '../components/Header/header';
import { TodoForm } from '../components/TodoForm/todoForm';

const HomePage: React.FC = () => {
    return(
        <>
            <Header/>
            <TodoForm />
        </>
    )
};

export default HomePage;
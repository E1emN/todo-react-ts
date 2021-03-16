import React from 'react';
import './header.scss';

export const Header: React.FC = () => {
 
    return(
        <header className="header">
            <div className="header__container">
                <h2 className="header__title">
                    Todo
                </h2>
                <ul className="header__nav">
                    <li>Main</li>
                    <li>Information</li>
                </ul>
            </div>
        </header>
    )
};
import React from 'react';
import './header.scss';

interface HeaderPropTypes {
    greeting: string,
    cool: number
}

export const Header: React.FC<HeaderPropTypes> = (props) => {

    const { greeting, cool } = props;
 
    return(
        <header>
            {greeting} {cool}
        </header>
    )
};
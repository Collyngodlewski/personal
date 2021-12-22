import React from 'react';
import {Link} from 'react-router-dom';
import { StyledHeader } from './Styling/Styling';
export default function Header(){

    return(
        <StyledHeader>
            <nav className='desktopView'>
                <Link to='/'>
                    <h2>Collyn</h2>
                </Link>
                <Link to ='/about'>
                    <h2>Resume</h2>
                </Link>
                <Link to='/projects'>
                    <h2>Projects</h2>
                </Link>
                <Link to='/contact'>
                    <h2>Contact</h2>
                </Link>
            </nav>
        </StyledHeader>
        

    )

}
import React from 'react';
import { StyledHome } from './Styling/Styling';
import { StyledAnimation } from './Styling/Styling'
export default function Home (){

    return(

        <StyledHome>
            <StyledAnimation>
            <p class='name'>Collyn <br></br> Godlewski</p>
            
            <p class="line-1 anim-typewriter">Full Stack Web Developer.</p>
            </StyledAnimation>
        </StyledHome>
        

    )

}
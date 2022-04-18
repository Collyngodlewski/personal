import React from 'react';
import { StyledHome } from './Styling/Styling';
import { StyledAnimation } from './Styling/Styling'
import Socials from './Socials';
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
export default function Home (){

    return(
      <div>
        <StyledHome>
            
            <StyledAnimation>
            
            <p class='name'>Collyn Godlewski</p>
            
            <p class="line-1 anim-typewriter">Full Stack Web Developer.</p>
            </StyledAnimation>
         
        </StyledHome>

        <Socials />
        </div>
      
    )

}
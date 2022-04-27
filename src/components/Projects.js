import React from 'react';
import { StyledProjects } from './Styling/Styling';
import potLuckPlanner from '../Assests/potluck_planner.JPG';
import Fitness from '../Assests/fitness.JPG';
import Underdogs from '../Assests/UnderdogDevs.JPG';
import Personal from '../Assests/personal.JPG'


export default function Projects (){

    return(
        <StyledProjects>
       <div className="card-container">
        <div class="card">
            <img src={potLuckPlanner} alt="Potluck Planner"/>
            <h3>Potluck Planner</h3>
            <a href="https://github.com/Build-Week-ft-potluck-planner-8/front-end" target="_blank" rel="noreferrer">Github</a>
            <a href="https://front-end-pearl-eight.vercel.app/" target="_blank" rel="noreferrer">Website</a>
            
        </div>

        <div class="card">
            <img src={Underdogs} alt="Underdog Devs"/>
            <h3>Underdog Devs</h3>
            <a href="https://github.com/BloomTech-Labs/underdog-devs-fe-a"target="_blank" rel="noreferrer">Github</a>
            <a href="https://www.underdogdevs.org/"target="_blank" rel="noreferrer">Website</a>
        </div>
        <div class="card">
            <img src={Fitness} alt="Anywhere Fitness"/>
            <h3>Anywhere Fitness</h3>
            <a href="https://github.com/Collyngodlewski/back-end" target="_blank" rel="noreferrer">Github</a>
            <a href="#" target="_blank" rel="noreferrer">Website</a>
        </div>
        <div class="card">
            <img src={Personal} alt="Personal Site"/>
            <h3>Personal Site</h3>
            <a href="https://github.com/Collyngodlewski/personal"target="_blank" rel="noreferrer">Github</a>
            <a href="https://collyngodlewski.vercel.app/"target="_blank" rel="noreferrer">Website</a>
        </div>
        </div>
         </StyledProjects>
     
    )

}
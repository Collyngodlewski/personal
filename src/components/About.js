import React from 'react';
import { StyledResume } from './Styling/Styling';
import Resume from '../Assests/resume.JPG';
import { Button } from 'antd';

export default function About(){

    return(

        <StyledResume>
            
            <img src={ Resume } alt="Resume"/> 
            <Button type="primary">Download</Button>
            
        </StyledResume>

    )

}
import React, { useState } from 'react';
import { StyledResume } from './Styling/Styling';
import Resume from '../Assests/Resume.pdf'
import { Button } from 'antd';
import { Document, pdfjs, Page} from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



export default function About(){


    return(
        <StyledResume>
       

            <div class="resume-container">
            <iframe src="https://drive.google.com/file/d/1s5-1UPsUY2vwLIaikQRuaIx7YVWpWbpV/preview" width="640" height="800" allow="autoplay"></iframe>
            </div>

        </StyledResume>

    )

}
import React, { useState } from 'react';
import { StyledResume } from './Styling/Styling';
import Resume from '../Assests/Resume.pdf'
import { Button } from 'antd';
import { Document, pdfjs, Page } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



export default function About(){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    return(
        <StyledResume>
            
            {/* <img src={ Resume } alt="Resume"/>  */}
            
            <Document 
            file={Resume} onLoadSuccess={onDocumentLoadSuccess} className="pdf-resume">
                <Page className="Pages-css" pageNumber={pageNumber}/>
                </Document>
                <Button type="primary">Download</Button>
            
        </StyledResume>

    )

}
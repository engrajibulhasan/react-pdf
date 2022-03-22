import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

export default function Sample() {
  const [file, setFile] = useState('./sample.pdf');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    console.log(numPages,"Number of pages");
    setNumPages(numPages);
  }

  return (
    <>
    <div className='' style={{display:'flex',justifyContent:'center'}}>
      <Document file={file}  onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      
      
    </div>
    <div>
    <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={()=>setPageNumber(pageNumber-1)}> Prev </button> | <button onClick={()=>setPageNumber(pageNumber+1)}>Next</button>
      </div>
    </>
  );
}

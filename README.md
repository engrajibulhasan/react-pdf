# react-pdf | Reading Pdf file uising React
I have faced some issues while using **react-pdf** and resoved those issues here. You can clone/fork this project and reuse easily or follw the **instructions below**.

### Dependencies 
- [React PDF](https://github.com/wojtekmaj/react-pdf)

### How to use
> Create new project ```npx create-react-app my-app```

> Install react-pdf using  ```npm install react-pdf``` or ```yarn add react-pdf```

> Create ```pdf.worker.js``` inside public directory and  put those code from  [pdf.worker.js](https://github.com/engrajibulhasan/react-pdf/blob/master/public/pdf.worker.js)

> Create a [script](https://github.com/engrajibulhasan/react-pdf/tree/master/scripts) directory and add those fille.

### Sample Example code

```js
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
``` 

I have added Paginations and filtering for making it more useful.
Read [react-pdf](https://github.com/wojtekmaj/react-pdf) documentation for more advanced work.

Developer profile [www.rajibulhasan.me](https://rajibulhasan.me)



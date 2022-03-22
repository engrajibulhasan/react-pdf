# react-pdf | Reading Pdf file uising React
I have faced some issues while using **react-pdf** and resoved those issues here. You can clone/fork this project and reuse easily or follw the **instructions below**.

### Dependencies 
- [React PDF](https://github.com/wojtekmaj/react-pdf)
### How to use
> Create new project ```js npx create-react-app my-app```

> Install react-pdf using  ```js npm install react-pdf``` or ```yarn add react-pdf```

> Sample Example

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
### Extra's
I have added Paginations and filtering for making it more useful.
Read [react-pdf](https://github.com/wojtekmaj/react-pdf) documentation for more advanced work.

You can checkout my profile [www.rajibulhasan.me](https://rajibulhasan.me)



import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import ModalPagination from "./modal-pagination/ModalPagination";
import ModalPreview from "./modal/ModalPreview";
pdfjs.GlobalWorkerOptions.workerSrc = "pdf.worker.js";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};

export default function Sample() {
  // Handle File
  const [file, setFile] = useState("./sample.pdf");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  // Handle File Ends

  // Handle Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Handle Modal ends

  // Handle Pagination Modal
  const [showPaginationModal, setShowPaginationModal] = useState(false);
  const handleClosePaginationModal = () => setShowPaginationModal(false);
  const handleShowPaginationModal = () => setShowPaginationModal(true);
  // Handle Pagination Modal ends

  function onDocumentLoadSuccess({ numPages }) {
    console.log(numPages, "Number of pages");
    setNumPages(numPages);
  }
  console.log(show,"showing");
  return (
    <Container>
      <h1>Modal</h1>
      <Button variant="secondary" className="mr-2" onClick={handleShow}>
        Modal
      </Button>
      <Button variant="secondary" className="m-2" onClick={handleShowPaginationModal}>
        Modal With Pegination
      </Button>
      
      <ModalPreview show={show} handleClose={handleClose} file={file} onDocumentLoadSuccess={onDocumentLoadSuccess} pageNumber={pageNumber}/>
      <ModalPagination show={showPaginationModal} handleClose={handleClosePaginationModal} file={file} onDocumentLoadSuccess={onDocumentLoadSuccess} pageNumber={pageNumber} numPages={numPages} setPageNumber={setPageNumber}/>
      
      <hr />
      <h1>Basic</h1>
      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button onClick={() => setPageNumber(pageNumber - 1)}> Prev </button> |
        <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
      </div>
    </Container>
  );
}

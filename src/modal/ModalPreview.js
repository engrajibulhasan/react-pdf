import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Document, Page } from "react-pdf";

function ModalPreview({
  show,
  handleClose,
  file,
  onDocumentLoadSuccess,
  pageNumber,
}) {
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>File Previewing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} scale="1.3" renderMode="svg" />
          </Document>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalPreview;

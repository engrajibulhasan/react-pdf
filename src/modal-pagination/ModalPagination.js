import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Document, Page } from "react-pdf";
import {
  faAngleLeft,
  faAngleRight,
  faClose,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function ModalPagination({
  show,
  handleClose,
  file,
  onDocumentLoadSuccess,
  pageNumber,
  numPages,
  setPageNumber
}) {
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header >
          <Modal.Title>Pagination Modal</Modal.Title>
          <div className="d-flex justify-content-end align-items-center">
          <p className="p-0 m-0 px-2"> Page {pageNumber} of {numPages} </p>
          {numPages>1&&
            <div>
              {pageNumber>1&&<Button variant="primary" onClick={() => setPageNumber(pageNumber - 1)}><FontAwesomeIcon icon={faAngleLeft }/> Prev</Button>} &nbsp;
              {pageNumber!=numPages&&<Button variant="primary"   onClick={() => setPageNumber(pageNumber + 1)}> Next <FontAwesomeIcon icon={faAngleRight }/></Button>}
            </div>
          }
          <Button variant="secondary"  onClick={handleClose} className="mx-2"> <FontAwesomeIcon icon={faClose }/>  </Button>

          
          </div>
          
        </Modal.Header>
        <Modal.Body>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} scale="1.3" renderMode="svg" />
          </Document>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          {numPages>1&&
            <div>
              {pageNumber>1&&<Button variant="primary" onClick={() => setPageNumber(pageNumber - 1)}><FontAwesomeIcon icon={faAngleLeft }/> Prev</Button>} 
              {pageNumber!=numPages&&<Button variant="primary"  className="mx-2" onClick={() => setPageNumber(pageNumber + 1)}> Next <FontAwesomeIcon icon={faAngleRight }/></Button>}
            </div>
          }
          <p> Page {pageNumber} of {numPages} </p>
          <Button variant="secondary"  onClick={handleClose}> Close  </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalPagination;

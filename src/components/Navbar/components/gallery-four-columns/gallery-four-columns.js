import React, { useState } from "react";
import "./gallery-four-columns.css"; 
import Ftr from './../../../Ftr/ftr'
import img from './../../../../images/pic.jpg'
import img1 from "./../../../../images/1-min.jpg"; 
import img2 from "./../../../../images/2-min.jpg"; 
import img3 from "./../../../../images/3-min.jpg"; 
import img4 from "./../../../../images/4-min.jpg"; 
import img5 from "./../../../../images/5-min.jpg"; 
import img6 from "./../../../../images/6-min.jpg"; 
import { Container, Row, Col, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlassPlus} from '@fortawesome/free-solid-svg-icons'
function GalleryFourColumns() {
  const images = {
    all: [img1, img2, img3, img4, img5, img6],
    freight: [img3],
    transport: [img1],
    shipment: [img5],
    Materials: [img2, img6],
  };
  const [currentCategory, setCurrentCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleShowModal = (img) => {
    setSelectedImage(img);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <Container fluid style={{padding: '0'}}>
      <Row className='Gallery_4_Row'>
        <Col xs={12} className="p-0">
          <img src={img} id='img_4_Columns' alt="Header Background" />
          <h1>Gallery</h1>
        </Col>
      </Row>

      <hr id='hr_gallery_4_Columns' />
      <Row id="row-buttons">
        <div className="filter-buttons">
          <button onClick={() => setCurrentCategory("all")}>View All</button>
          <button onClick={() => setCurrentCategory("freight")}>Freight Forwarding</button>
          <button onClick={() => setCurrentCategory("transport")}>Transport</button>
          <button onClick={() => setCurrentCategory("shipment")}>Shipment</button>
          <button onClick={() => setCurrentCategory("Materials")}>Materials</button>
        </div>
      </Row>
      <Row id="gallery-grid-row">
        <Col>
          <div className="gallery-container">
            <div className="gallery-grid">
              {images[currentCategory].map((img, index) => (
                <div className="gallery-image-container" onClick={() => handleShowModal(img)}>
                <img src={img} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
                <div className="icon-overlay">
                    <span className="search-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                    </span>
                </div>
            </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleCloseModal} centered className="gallery-4-columns-modal">
        <Modal.Body>
          {selectedImage && <img src={selectedImage} alt="Selected" style={{ width: '100%' }} />}
        </Modal.Body>
      </Modal>
      <Row style={{ marginTop: '50px'}}>
        <Ftr />
      </Row>
    </Container>
  );
}

export default GalleryFourColumns;
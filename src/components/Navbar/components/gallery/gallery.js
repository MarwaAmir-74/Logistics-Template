import { Container ,Row ,Col ,Carousel} from 'react-bootstrap'
import './gallery.css'
import React from 'react'
import img from './../../../../images/pic.jpg'
import img1 from './../../../../images/pd1-min.jpg'
import img2 from './../../../../images/pd2-min.jpg'
import img3 from './../../../../images/pd3-min.jpg'
import Ftr from './../../../Ftr/ftr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobe,faGrip} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faTwitter,faSkype,faGooglePlusG} from '@fortawesome/free-brands-svg-icons'

export default function Gallery() {
  return (
    <Container fluid style={{padding: '0'}}>
        <Row className='Gallery_Row'>
            <Col xs={12} className="p-0" >
                <img src={img} id='img'/>
                <h1>Testimonials</h1>
            </Col>
        </Row>
        <Row id='Gallery_Carousel_row_2'>
        <hr id='hr_gallery'/>

            <Carousel id='Gallery_Carousel'>
                <Carousel.Item>
                    <img src={img1}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3}/>
                </Carousel.Item>
            </Carousel>
        </Row>
        <Row id='Gallery_row_3'>
            <Col lg={12} md={12} sm={12} xs={12}><h2>Ocean Cargo Still Faces Stif Headwinds</h2></Col>
            <Col lg={10} md={12} sm={12} xs={12}>
            <p>Curabitur efficitur nisl odio, non blandit metus luctus quis. Vivamus lobortis et ipsum non mattis. Nullam quis sollicitudin mauris. Suspendisse dignissim a tortor id aliquet. Cras quis commodo dui. Curabitur dapibus facilisis elit placerat auctor. In sapien risus, viverra sit amet eros laoreet, viverra euismod ex. Nam sed eros convallis, commodo magna et, dignissim ex. Maecenas sodales nulla augue, sed suscipit arcu pharetra sed. Aenean a sem placerat quam vehicula blandit. Mauris id massa posuere, dapibus erat in, consequat tellus. Nunc fermentum laoreet quam a bibendum. Nunc quis sapien vel nunc iaculis elementum ut et neque. Pellentesque nisl est, lacinia non mollis a, pretium quis magna. Pellentesque eget nibh ornare mi vestibulum ultricies. Aliquam erat volutpat.</p>
            <p> Mauris ultricies dolor efficitur sem porta, quis fringilla libero hendrerit. Pellentesque eu risus odio. Nullam sed justo quis felis elementum sagittis. Integer lectus nunc, gravida id pharetra ut, vulputate sit amet risus. Nunc in enim viverra, pretium metus quis, tempus felis. Integer viverra nulla quis tempor pharetra. Donec dapibus tempor arcu, ut condimentum tortor feugiat id. Nam venenatis consectetur sem, non tempor urna porta egestas. Integer tempus eros vitae orci blandit tempus. Ut pharetra, diam nec bibendum sodales, urna orci aliquet augue, quis efficitur ipsum ipsum a nulla. Pellentesque ornare a mauris at mattis.</p>
            <p>Donec dapibus tempor arcu, ut condimentum tortor feugiat id. Nam venenatis consectetur sem, non tempor urna porta egestas. Integer tempus eros vitae orci blandit tempus. Ut pharetra, diam nec bibendum sodales, urna orci aliquet augue, quis efficitur ipsum ipsum a nulla. Pellentesque ornare a mauris at mattis.</p>
            <div id='Gallery_Icons'>
                <FontAwesomeIcon icon={faFacebookF} className='GalleryIcon' />
                <FontAwesomeIcon icon={faTwitter} className='GalleryIcon' />
                <FontAwesomeIcon icon={faGlobe} className='GalleryIcon' />
                <FontAwesomeIcon icon={faSkype} className='GalleryIcon' />
                <FontAwesomeIcon icon={faGooglePlusG} className='GalleryIcon' />
            </div>
            </Col>
            <Col lg={2} md={12} sm={12} xs={12} id="Gallery_row_4">
          <p><span className="label">Category :</span> Integer</p>
          <p><span className="label">Client :</span>Integer tempus </p>
          <p><span className="label">Date :</span> July 26, 2017</p>
          <p>
            <span className="label">Rating :</span>
            <span className="stars">★★★★★</span>
          </p>
        </Col>
        </Row>
        <Row id='Gallery_row_5'>
        <FontAwesomeIcon icon={faGrip} style={{marginBottom:'40px',height: '25px'}}/>
            <span id='Gallery_row_5_span'></span>
        </Row>
        <Ftr/>
    </Container>
  )
}
  
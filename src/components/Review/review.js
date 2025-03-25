import React from 'react'
import './review.css'
import { Container,Carousel} from 'react-bootstrap'
import img1 from './../../images/slider-1-min.jpg'
import img2 from './../../images/slider-2-min.jpg'
import img3 from './../../images/slider-3-min.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteRight} from "@fortawesome/free-solid-svg-icons"
export default function Review() {
  return (
    <div> 
    <Container fluid style={{padding:'0',margin:'0'}} id='Container_r'>
        <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <div className='div' id='div_1'>
                    <FontAwesomeIcon icon={faQuoteRight} className='icOn'/>
                        <h3>Their performance on our project was extremely successful. As a result of this collaboration, the project was built with exceptional quality & delivered.
                        </h3>
                        <h5>Orlando E. Dougles</h5>
                        <h6>
                        CEO, Green Valley Inc, London</h6>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                 <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <div className='div'>
                    <FontAwesomeIcon icon={faQuoteRight} className='icOn'/>
                        <h3>The shipping process with this crew was a pleasurable experience! They did all in time and with no safety incidents. Thank you so much guys!
                        </h3>
                        <h5>Emilia Crena</h5>
                        <h6>CEO, VIP Construction, Australia</h6>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <div className='div'>
                    <FontAwesomeIcon icon={faQuoteRight} className='icOn'/>
                    <h3>These guys are just the coolest company ever!
                    They were aware of our transported for road and tail and well as complextransport services.</h3><h5>Magdalena Donowan</h5><h6>CFD Engineer</h6></div>
                    </Carousel.Caption>
                </Carousel.Item> 
            </Carousel>
        </Container>
        </div>
  )
}

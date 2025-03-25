import React from 'react'
import './slider.css'
import { Container, Row, Col, Button,Carousel} from 'react-bootstrap';
import slide1 from './../../images/slide3-min.jpg'
import slide2 from './../../images/slide1-min.jpg'
import slide3 from './../../images/slide2-min.jpg'
export default function Slider() {
  return (
    <div> 
<Container fluid className='nomargin-nopadding' id='Container'>

        <Row>
            <Col lg={12}  xs={12} md={12} id='col'>
                <Carousel data-bs-theme="dark" >
                    <Carousel.Item>
                    <img  className="d-block w-100" src={slide1} alt="First slide"/>
                    <Carousel.Caption>
                    <Container className='Container-of-carsoul'>
                    <h2 className='title-of-carsoul'>WE CARE ABOUT YOUR CARGO</h2>
                            <h4 className='h4-of-carsoul'>Dedicated employees, working in 06 regional around the globe, deliver operational
                            </h4>
                            <Button className='btn-of-carsoul'>About us</Button>
                            <Button className='btn-of-carsoul'>Request Quote</Button>
                    </Container>
                    </Carousel.Caption>
                    </Carousel.Item> 
                     <Carousel.Item>
                    <img className="d-block w-100"
                        src={slide2}
                        alt="Second slide"/>
                    <Carousel.Caption>
                    <Container className='Container-of-carsoul'>
                            <h2 className='title-of-carsoul'>WORLDWIDE LOGISTIC SERVICES
                            </h2>
                            <h4 className='h4-of-carsoul'>
                            Dedicated employees, working in 06 regional around the globe, deliver operational</h4>
                            <Button className='btn-of-carsoul'>About us</Button>
                            <Button className='btn-of-carsoul'>Request Quote</Button>
                        </Container>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        <Container id='con-of-third-carsoul'>
                        <h2 className='title-of-carsoul-3'>SHARED & DEDICATED WAREHOUSING</h2>
                        <h4 className='h4-of-carsoul'>Dedicated employees, working in 06 regional around the globe, deliver operational
                                </h4>
                                <Button className='btn-of-carsoul'>About us</Button>
                                <Button className='btn-of-carsoul'>Request Quote</Button>
                            </Container>
                        </Carousel.Caption>
                    </Carousel.Item> 
                </Carousel>
            </Col>
        </Row>
   </Container>
   </div>
  )
}


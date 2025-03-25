import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteRight,faStar} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import Ftr from './../../../Ftr/ftr'
import {Card,Button , Col, Container, Row } from 'react-bootstrap';
import img from './../../../../images/pic.jpg'
import './pages.css'
export function Testimonials() {
  return (
    <>
    <Container fluid className="p-0 m-0" id='Testimonials'>
        <Row className='Testimonials_img'>
            <Col  xs={12} className="p-0" >
                <img src={img} id='img'/>
                <Col md={12} sm={12} xs={12}>
                    <h1>Testimonials</h1>
                </Col>
            </Col>
        </Row>

        <Row id='main-row' >
        <hr id='Testimonials_hr'/>
        <Row className='Testimonials_Row'>
            <Col lg={10} md={10} sm={10} className='Testimonials_Col'>
                <div className='icons'>
                    <div className='doubleQuote_div'>
                        <FontAwesomeIcon icon={faQuoteRight}className='doubleQuote_icon' />
                    </div>
                    <div className='stars_div'>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                    </div>
                </div>

                <div className='text'>
                    <p>These guys are just the coolest company ever! They were aware of our transported for road and tail and well as complex transport services.</p>
                <h4>Maryam Adam</h4>
                <h5>CEO, London</h5>
                </div>
            </Col>
        </Row>
        <Row className='Testimonials_Row'>
            <Col lg={10} md={10} sm={10} className='Testimonials_Col'>
            <div className='icons'>
                    <div className='doubleQuote_div'>
                        <FontAwesomeIcon icon={faQuoteRight}className='doubleQuote_icon' />
                    </div>
                    <div className='stars_div'>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                    </div>
                </div>
                <div className='text'>
                    <p>These guys are just the coolest company ever! They were aware of our transported for road and tail and well as complex transport services.</p>
                <h4>Maryam Adam</h4>
                <h5>CEO, London</h5>
                </div>
            </Col>
        </Row>
        <Row  className='Testimonials_Row'>
            <Col lg={10} md={10} sm={10} className='Testimonials_Col'>
            <div className='icons'>
                    <div className='doubleQuote_div'>
                        <FontAwesomeIcon icon={faQuoteRight}className='doubleQuote_icon' />
                    </div>
                    <div className='stars_div'>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                    </div>
                </div>
                <div className='text'>
                    <p>These guys are just the coolest company ever! They were aware of our transported for road and tail and well as complex transport services.</p>
                <h4>Maryam Adam</h4>
                <h5>CEO, London</h5>
                </div>
            </Col>
        </Row>
        <Row  className='Testimonials_Row'>
            <Col lg={10} md={10} sm={10} className='Testimonials_Col'>
                <div className='icons'>
                    <div className='doubleQuote_div'>
                        <FontAwesomeIcon icon={faQuoteRight}className='doubleQuote_icon' />
                    </div>
                    <div className='stars_div'>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                    </div>
                </div>
                <div className='text'>
                    <p>These guys are just the coolest company ever! They were aware of our transported for road and tail and well as complex transport services.</p>
                <h4>Maryam Adam</h4>
                <h5>CEO, London</h5>
                </div>
            </Col>
        </Row>
        <Row  className='Testimonials_Row'>
            <Col lg={10} md={10} sm={10} className='Testimonials_Col'>
                <div className='icons'>
                    <div className='doubleQuote_div'>
                        <FontAwesomeIcon icon={faQuoteRight}className='doubleQuote_icon' />
                    </div>
                    <div className='stars_div'>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                        <FontAwesomeIcon icon={faStar} className='Stars_icon'/>
                    </div>
                </div>
                <div className='text'>
                    <p>These guys are just the coolest company ever! They were aware of our transported for road and tail and well as complex transport services.</p>
                <h4>Maryam Adam</h4>
                <h5>CEO, London</h5>
                </div>
            </Col>
        </Row>
        </Row>
        <Row>
            <Ftr/>
        </Row>
    </Container>
    </>
  )
}

export function OurPrices() {
  return (
    <>
    <Container fluid className="p-0 m-0" id='Prices_container'>
        <Row id='Prices_img'>
            <Col xs={12} className="p-0" >
                <img src={img} id='img'/>
                <h1>Our Prices</h1>
            </Col>
        </Row>
        <Row className='Row_Card'>
                    <hr id='Prices_container_hr' />
            <Col lg={3} md={10} sm={12} xs={12} className='CardCol'>
                <Card style={{ width: '24rem' }} className='Card_1_3'>
                <div className='cardHeader_1_3'>
                    <h3 >STARTER PLAN</h3>
                    <div className='price'>
                        <span className="currency">$</span>
                        <span className='number'>0</span>
                        <span className='month'>/ Month</span>
                    </div>
                    <p className="description">Suitable for sites that does not receive much traffic.</p>
                </div>
                <div className="features" style={{backgroundColor:'white'}}>
                    <p>512MB Memory</p>                     
                    <p>1 Core Processor</p>                     
                    <p>20GB SSD Disk</p>                     
                    <p>1TB Data Transfer</p>                     
                    <p>1 Year Free Support</p>
                    <Button className='btn1_3'>LJoin Now</Button>
                 </div>
                </Card>
            </Col>


            <Col lg={3} md={10} sm={12} xs={12} className='CardCol'>
                <Card style={{ width: '24rem' }} className='Card_2'>
                <div className='cardHeader_2'>
                    <h3 >STARTER PLAN</h3>
                    <div className='price-2-3'>
                        <span className="currency">$</span>
                        <span className='number'>50</span>
                        <span className='month'>/ Month</span>
                    </div>
                    <p className="description_2">Suitable for sites that does not receive much traffic.</p>
                </div>
                <div className="features_2" style={{backgroundColor:'white'}}>
                    <p>4GB Memory</p>                     
                    <p> Core Processor</p>                     
                    <p>80GB SSD Disk</p>                     
                    <p>10TB Data Transfer</p>                     
                    <p>50 Year Free Support</p>                     
                    <Button id='btn_2'>Join Now</Button>
                    </div>
                </Card>
            </Col>


            <Col lg={3} md={10} sm={12} xs={10} className='CardCol'>
                <Card style={{ width: '24rem' }} className='Card_1_3' id='card-3'>
                <div className='cardHeader_1_3'>
                    <h3 >STARTER PLAN</h3>
                    <div className='price-2-3'>
                        <span className="currency">$</span>
                        <span className='number'>90</span>
                        <span className='month'>/ Month</span>
                    </div>
                    <p className="description">Suitable for sites that does not receive much traffic.</p>
                </div>
                <div className="features" style={{backgroundColor:'white'}}>
                    <p>8MB Memory</p>
                    <p>4 Core Processor</p>                     
                    <p>160GB SSD Disk</p>                     
                    <p>20TB Data Transfer</p>                     
                    <p>Lifetime Free Support</p>                     
                    <Button className='btn1_3'>Join Now</Button>
                    </div>
                </Card>
            </Col>

        </Row>

    <Ftr/>   
    </Container> 


    </>
  )
}

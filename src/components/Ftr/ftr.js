import React from 'react'
import './ftr.css'
import { Col, Container ,Row ,Button ,InputGroup } from 'react-bootstrap'
import logo from './../../images/logo-light-min.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock ,faPhoneVolume ,faLocationDot ,faAngleRight ,faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
function Ftr() {
  return (
    <div><Container fluid id='Ftr'>
     <Row id='ftr_row' className='d-flex'>
        <Col lg={3} md={12} sm={12} style={{marginBottom:'10px'}}><img src={logo} alt="" /></Col>
        <Col lg={3} md={12} sm={12} style={{marginBottom:'10px'}}><span> <FontAwesomeIcon icon={faLocationDot} className='icon'/>
          </span>  <h5 className='ftr-text'>Address : Cargo Hub</h5>
          <p> NEWYORK 10012, USA </p>
        </Col>


        <Col lg={3} md={12} sm={12} style={{marginBottom:'10px'}}> <span> <FontAwesomeIcon icon={faPhoneVolume} className='icon' />
          </span> <h5 className='ftr-text'>Toll Free Number:</h5>
          <p>080 020 3040</p>
        </Col>


        <Col lg={3} md={12} sm={12} style={{marginBottom:'10px'}}><span> <FontAwesomeIcon icon={faClock} className='icon' />
          </span><h5 className='ftr-text'>Opening Hours </h5>
          <p>MON – FRI: 8AM – 5PM </p>
        </Col>
      </Row>
      <hr style={{marginTop:'-10px'}}/>
      <Row>
        <Col lg={4} md={12} sm={12}><h4>About Cargo</h4> <p> Cargo HUB Logistics Services is a global supplier of transport and logistics    solutions. We have offices in more than 20 countries and an international network of partners and agents.</p>
          <FontAwesomeIcon  className='socialIcon' icon={faTwitter} />
          <FontAwesomeIcon  className='socialIcon' icon={faFacebookF} />
          <FontAwesomeIcon  className='socialIcon' icon={faTwitter} />
          <FontAwesomeIcon  className='socialIcon' icon={faFacebookF} />
        </Col>
        <Col lg={4} md={12} sm={12} ><h4>Useful Links</h4>
        <ol>
            <li><FontAwesomeIcon icon={faAngleRight} />    <a href="">All Services</a></li>
            <li><FontAwesomeIcon icon={faAngleRight} />    <a href="">Ground Transport</a></li>
            <li><FontAwesomeIcon icon={faAngleRight} />    <a href="">Cargo Service</a></li>
            <li><FontAwesomeIcon icon={faAngleRight} />    <a href="">Warehousing</a></li>
            <li><FontAwesomeIcon icon={faAngleRight} />    <a href="">Warehousing Road Freight Forwarding</a></li>
            <li><FontAwesomeIcon icon={faAngleRight} />    <a href="">Ocean Freight Forwarding</a></li>
        </ol>
        </Col>
        <Col lg={4} md={12} sm={12} ><h4>Our Newsletter</h4> <p> Sign up today for tips and latest news and exclusive special offers.</p>
        <InputGroup className="mb-3"  sm={12}>
        <input type="text" placeholder='Enter your Email' id='input_email' />
        <Button md={11} sm={12} style={{borderRadius:'0px' ,backgroundColor:' #ff0000 ' ,border:'none'}}>
        Button
        </Button>
    </InputGroup>
        <p>We don’t do spam and Your mail id very confidential.</p>
        </Col>
        <Col></Col>
    </Row>
</Container>
    </div>
  )
}

export default Ftr
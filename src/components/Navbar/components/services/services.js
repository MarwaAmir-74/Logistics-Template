import React from 'react'
import img from './../../../../images/pic.jpg'
import { Col, Container ,Row ,Card } from 'react-bootstrap'
import cardimg1 from './../../../../images/serv-1.jpg'
import cardimg2 from './../../../../images/serv-2.jpg'
import cardimg3 from './../../../../images/serv-3.jpg'
import Ftr from './../../../Ftr/ftr'
import './services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBriefcaseMedical ,faGear,faVirus ,faShirt} from '@fortawesome/free-solid-svg-icons'
export default function OceanFreightForwarding() {
  return (
    <>
    <Container fluid id='containerO' className="p-0 m-0">
        <Row>
            <Col xs={12} className="p-0">
                <img src={img} id='img'/>
                <Col md={12} sm={12} xs={12}>
                 <h1>Ocean Freight Forwarding</h1>
                </Col>
            </Col>
        </Row>
        <Row id='row-o-2'>
         <hr/>
        <Card style={{ width: '25rem' }} className='ochanCard' sm={12}>
          <Card.Img variant="top" src={cardimg1} className='ochanCardImg' />
          <Card.Body>
            <Card.Title className='card_title'>Full Container Load</Card.Title>
            <h6 className='Ocean_h6'>Cargo Hub Ocean Direct</h6>
            <Card.Text className='cardText'>
            There anyone who loves or pursue desire to obtain pains of itself, because it is pain, but occasionally circumstances.
              <ul>
                <li>Consignee direct delivery</li>
                <li>Suitable for all kinds of commodities</li>
                <li>Tailored alternatives available</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }} className='ochanCard' >
          <Card.Img variant="top" src={cardimg2} className='ochanCardImg' />
          <Card.Body>
            <Card.Title className='card_title'>Less than Container</Card.Title>
            <h6 className='Ocean_h6'>Cargo Hub Ocean Direct</h6>
            <Card.Text className='cardText'>
              Which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes.
              <ul>
                <li>95% in-house network operation</li>
                <li>Scheduled & guaranteed departures</li>
                <li>National and Multi National Gateway</li>
              </ul>
           </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '25rem' }} className='ochanCard'>
          <Card.Img variant="top" src={cardimg3} className='ochanCardImg' />
          <Card.Body>
            <Card.Title className='card_title'>Conventional Load</Card.Title>
            <h6 className='Ocean_h6'>Cargo Hub Ocean Direct</h6>
            <Card.Text className='cardText'>
            Master-builder of human happiness one rejects, dislikes, or avoids pleasure itself, because it is pleasure.            
            <ul>
              <li>Customized conventional load</li>
              <li>Available for roll-on / roll-off cargo</li>
              <li>Available for break-bulk cargo</li>
            </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        </Row>

        <Row id='row-o-3' >
          <Col style={{marginTop:'80px'}}>
            <h2>Industry Covered</h2>
            <span id='span'></span>
            <p style={{textAlign: 'center'}}>Cargo HUB is more than logistics.</p>
            <p style={{textAlign: 'center'}}> We can also optimize your packaging, manage your materials sourcing, and so much more.</p>
            <Row className='firstrow'>

              <Col lg={6} sm={12} >
              <span className='Span_Icon'>
              <FontAwesomeIcon icon={faShirt} className='Icon_O'/></span>
              <h4 className='p_h4_right'>Textile Logistics</h4>
              <p className='p_h4_right'>Expound the actual teaching of the great explorer the truth master-builder of human happiness.</p>
              </Col>
              <Col lg={6} sm={12}>
              <span className='Span_Icon' style={{float :'left'}}>
              <FontAwesomeIcon icon={faBriefcaseMedical} className='Icon_O'/></span>
              <h4>Healthcare Center</h4>
              <p className='p_left'>Desires to obtain pain of itsel because it is pain but because occasionally seds circumstances occur.</p>
              </Col>
            </Row>

            <Row className='firstrow'>
              <Col lg={6} sm={12}>
              <span className='Span_Icon'>
              <FontAwesomeIcon icon={faVirus} className='Icon_O'/></span>
              <h4 className='p_h4_right' >Chemical Factory</h4>
              <p className='p_h4_right'>Expound the actual teaching of the great explorer the truth master-builder of human happiness.</p>
              </Col>
            <Col lg={6} sm={12}>
              <span className='Span_Icon' style={{float :'left'}}>
              <FontAwesomeIcon icon={faGear} className='Icon_O'/></span>
              <h4>Automative Company</h4>
              <p className='p_left'>Desires to obtain pain of itself, because it is pain, but because occasionally seds circumstances occur.</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row fluid> 
          <Ftr/>
        </Row>
    </Container>
    </>
  )
}

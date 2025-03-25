import React from 'react'
import { Col, Container, Row ,Form, Button } from 'react-bootstrap'
import img from './../../../../images/pic.jpg'
import img2 from './../../../../images/cargocar-min.jpg'
import Ftr from './../../../Ftr/ftr'
import './request-a-quote.css'
export default function Request_a_quote() {
  return (
    <>
    <Container fluid className="p-0 m-0" id='Request_Container'>
        <Row className='Gallery_Row'>
            <Col xs={12} className="p-0">
            <img src={img} id='img' alt="Header Background" />
            <Col md={12} sm={12} xs={12}><h1>Request a Quote</h1></Col>
            </Col>
        </Row>
        <hr id='hr_Request_a_quote'/>
        <Row className='Request_Row'>
          <Col md={8}>
              <div id='h2-div'>
                <h2>Request a Quote</h2>
              </div>
              <p>We’re always interested in new projects, big or small. Send us an email and we’ll get in touch shortly, or phone between 8:00 am and 7:00 pm Monday to Saturday.</p>
          </Col>
          <Col md={4}>
            <img src={img2} id='cargocar' />
          </Col>
        </Row>


      <Row id='Form-row'>
          <Form>
            <Row>
              <Col lg={4} md={12} sm={12} xs={12} className='Form-col-1'>
              <label>First Name<span>*</span></label>
                <Form.Control size="lg" type="text" placeholder="First Name" />
              </Col>
              <Col lg={4}  md={12} sm={12} xs={12}  className='Form-col-1'>
              <label>Last Name<span>*</span></label>
                <Form.Control size="lg" type="text" placeholder="Last Name" />
              </Col>
              <Col lg={4}  md={12} sm={12} xs={12}  className='Form-col-1'>
              <label>Email Address<span>*</span></label>              
                <Form.Control size="lg" type="text" placeholder="Email Address" />
              </Col>

              <Col md={8} sm={12} xs={12} style={{paddingRight: '0'}}>
                  <div className='div_form'>
                    <label>City Departure</label>
                    <Form.Control size="lg" type="text"  /></div>
                  <div className='div_form-2'>
                    <label>Delivery City</label>
                    <Form.Control size="lg" type="text" id='input'/></div>
                  <div className='div_form'>
                    <label>Parcel Type</label> 

                    <Form.Select size="lg"><option>Large select</option></Form.Select></div>
                  <div className='div_form-2'>
                    <label>Weight.(kg)</label>
                    <Form.Control size="lg" type="text" /></div>
                  <Form.Group className='textarea_form' controlId="exampleForm.ControlTextarea1" style={{marginBottom:'20px'}}>
                    <Form.Label style={{marginTop:'30px'}}>Special info</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
              </Col>
              <Col md={4} sm={12} xs={12} style={{paddingTop:'20px'}}>
                    <label >Weight</label>
                <div className='Form-Check-div'>
                  <Form.Check label={`Warehousing Services`}className='Form-Check'/>
                  <Form.Check label={`Road Transportation`}className='Form-Check'/>
                  <Form.Check label={`Air Transportation`}className='Form-Check'/>
                  <Form.Check label={`Sea Transportation`}className='Form-Check'/>
                  <Form.Check label={`Logistics Planing`}className='Form-Check'/>
                </div>
                <div>
                    <Button id='Form-btn'>Submit</Button>
                </div>
              </Col>

            </Row>
        </Form>
        </Row>

        <Row > 
          <Ftr/>
        </Row>
    </Container>
    </>    
)
}

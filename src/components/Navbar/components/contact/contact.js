import React from 'react'
import img from './../../../../images/pic.jpg'
import { Col, Container ,Row ,Form, Button} from 'react-bootstrap'
import Ftr from './../../../Ftr/ftr'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {faLocationDot,faPhoneVolume ,faEnvelope,faShareNodes} from '@fortawesome/free-solid-svg-icons'
import {faPinterest ,faFacebookF,faGooglePlusG ,faTwitter,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import './contact.css'
export default function Contact() {
  return (
    <>
        <Container fluid className="p-0 m-0" id='Contact-Container'>
            <Row>
                <Col xs={12} className="p-0">
                    <img src={img} id='img'/>
                    <h1>Ocean Freight Forwarding</h1>
                </Col>
            </Row>
            <hr id='hr-Contact'/>
            <Row id='Row-2-contact'>
            <Col lg={8} md={8} sm={12} xs={12}>
                <div id='h2-div-contact'>
                    <h2>CONTACT DETAILS</h2>
                </div>
                <div id='p-div-contact'>
                    <p>We’re always interested in new projects, big or small.
                    Send us an email and we’ll get in touch shortly, or phone between 8:00 am and 7:00 pm Monday to Saturday.</p>
                </div>
                 <Row >
                    <Col lg={6} md={12} sm={12} xs={12} >
                    <Col className='div_contact' md={12} sm={12} xs={12} >
                        <span className='contact-icon-span'>
                        <FontAwesomeIcon icon={faLocationDot} className='contact-icon'/>
                        </span>
                        <div className='desc-div'>
                            <h4>Visit our office</h4>
                            <p>244 ,Los Angeles, California City </p>
                        </div>

                    </Col>
                    <Col className='div_contact'  md={12} sm={12} xs={12}>
                        <span className='contact-icon-span'>
                        <FontAwesomeIcon icon={faEnvelope}className='contact-icon' />
                        </span>
                        <div className='desc-div'>
                            <h4>Mail Us at</h4>
                            <p>Mailus@gmail.com
                            Wesupportyou@gmail.com</p>
                        </div>                        
                   </Col>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                    <Col className='div_contact' md={12} sm={12} xs={12} >
                        <span className='contact-icon-span'>
                        <FontAwesomeIcon icon={faPhoneVolume} className='contact-icon'/>
                        </span>
                        <div className='desc-div'>
                            <h4>Call us on</h4>
                            <p>Office: +11987654321 & +10987654321</p>
                        </div>
                    </Col>
                    <Col className='div_contact' md={12} sm={12} xs={12} >
                         <span className='contact-icon-span'>
                            <FontAwesomeIcon icon={faShareNodes} className='contact-icon'/>
                        </span>
                        <div className='desc-div'>
                            <h4>We are social</h4>
                       </div>
                            <div id='social-icon-div'>
                            <span><FontAwesomeIcon icon={faFacebookF} className='social_icon'/></span>
                            <span><FontAwesomeIcon icon={faTwitter} className='social_icon'/></span>
                            <span><FontAwesomeIcon icon={faGooglePlusG} className='social_icon'/></span>
                            <span><FontAwesomeIcon icon={faPinterest} className='social_icon'/></span>
                            <span><FontAwesomeIcon icon={faLinkedinIn} className='social_icon'/></span>
                        </div>
                    </Col>
                    </Col>
                </Row>
            </Col>
            <Col lg={4} md={12} sm={12} xs={12} id='Working-Hours-col'>
                <div id='Working-Hours'>
                    <h3>WORKING HOURS</h3>
                    <p>Pleasure and praising pain was born and will give you a complete happiness.</p>
                    <ul>
                        <li>Monday
                            <span>9:00 am – 17.00 pm</span>
                        </li>
                        <li>
                            Tuesday
                            <span>9:00 am – 18.00 pm</span>
                        </li>
                        <li>
                            Wednesday
                            <span>9:00 am – 18.00 pm</span>
                        </li>
                        <li>
                            Thurs & Friday
                            <span>10:00 am – 16.00 pm</span>
                        </li>
                        <li>Sat & Sunday
                            <span style={{color:'red'}}>Closed</span>
                        </li>
                    </ul>
                </div>
            </Col> 
            </Row>






            <Row id='Row-4-contact'>
                <div id='h2-div-contact'>
                    <h2>LEAVE YOUR MESSAGE</h2>
                </div>
                <p>We’re always interested in new projects, big or small. Send us an email and we’ll get in touch shortly, or phone between 8:00 am and 7:00 pm Monday to Saturday.</p>
            </Row>
            <Row id='Row-5-contact'>
                <Col lg={6}  md={12} sm={12} xs={12}>  
                    <div className='div_form'>
                        <Form.Control size="lg" type="text"  />
                    </div>
                    <div className='div_form'>
                        <Form.Control size="lg" type="text" id='input'/>
                    </div>
                    <div className='div_form'>
                        <Form.Control size="lg" type="text" id='input'/>
                    </div>
                </Col>
                <Col lg={6}  md={12} sm={12} xs={12}>
                    <Form.Group className='textarea_form' controlId="exampleForm.ControlTextarea1" >
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    </Col>
                    <Col style={{display:'flex',justifyContent:'center'}}>
                    <Button id='btn'>Submit</Button>
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row> 
                <Ftr/>
            </Row>
        </Container>
    </>
  )
}
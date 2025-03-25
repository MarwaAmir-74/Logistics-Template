import React from 'react'
import './hdrinfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faGooglePlusG, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col, Dropdown, Navbar, Nav} from 'react-bootstrap';
export default function HdrInformation() {
  return (
    <div>
       <Container fluid style={{margin:'0',padding:'0'}} id='container'>
          <Row >
            <Col>
              <Navbar bg="light" data-bs-theme="light"  id='Navbar'>
                <Container>
                    <Nav className="me-auto" >
                     <Dropdown >
                        <Dropdown.Toggle variant="link" className='Dropdown' id="dropdown-basic">
                          <FontAwesomeIcon icon={faGlobe} style={{ marginRight: '10px',color:'red' }} />
                          Newyork Office
                        </Dropdown.Toggle>
                      </Dropdown>
                      <Nav href="#home" className='nav'>         
                        <FontAwesomeIcon icon={faEnvelope} id='contactIcon' />Phone +012 345 6789
                      </Nav>
                      <Nav href="#home" className='nav'>
                        <FontAwesomeIcon icon={faPhoneVolume} id='contactIcon'  />Mail@CargoHub.com
                      </Nav>
                      <Nav href="#home"  className='nav'>
                      <FontAwesomeIcon icon={faPhoneVolume} id='contactIcon' /> Cargo Hub, NY 10012, USA
                      </Nav>
                      <Nav  href="#home" id='nav_icon' >
                      <FontAwesomeIcon className='social-icon'icon={faFacebookF} />
                      <FontAwesomeIcon className='social-icon'icon={faYoutube}/>
                      <FontAwesomeIcon className='social-icon' icon={faInstagram}/>
                      <FontAwesomeIcon className='social-icon'icon={faGooglePlusG} />
                      <FontAwesomeIcon className='social-icon'icon={faYoutube}/>
                      <FontAwesomeIcon  className='social-icon' icon={faSkype}/>
                      </Nav>
                    </Nav>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
    </div>
  )
}
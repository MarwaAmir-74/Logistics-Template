import React from 'react'
import { Container ,Col ,Row} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShip, faTruckFront ,faJetFighterUp } from '@fortawesome/free-solid-svg-icons'
import './welcomeSection.css'
function WelcomeSection() {
  return (
    <div><Container id='Container_w'>
    <Row><h4>Welcome <span id='span_border'>to</span> Cargo<span style={{color:'red'}}>Hub</span> </h4>
       {/* <span id='span_of_bottom_border' ></span> */}
     </Row>
     <Row ><p>Cargo HUB is more than logistics.</p>
       <p> We can also optimize your packaging, manage your materials sourcing, and so much more.</p></Row>
     <Row style={{gap:'30px',justifyContent:'center' }}>
         <Col   lg={3}  md={12} sm={12}  id='Col' >
           <FontAwesomeIcon icon={faShip}  id='icon'/>
           <h5>Air Freight Forwarding</h5>
           <h6>As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation</h6>
         </Col>
         <Col   lg={3}  md={12} sm={12} id='Col'>
           <FontAwesomeIcon icon={faJetFighterUp} id='icon'/>
           <h5>Air Freight Forwarding</h5>
           <h6>As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation</h6>
         </Col>
         <Col lg={3} md={12} sm={12} id='Col'>
           <FontAwesomeIcon icon={faTruckFront}  id='icon'/>
           <h5>Air Freight Forwarding</h5>
           <h6>As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation</h6>
         </Col>
     </Row>
 </Container>
 </div>
  )
}

export default WelcomeSection
import './services.css'
import React from 'react'
import { Container ,Col ,Row} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faBoxOpen ,faFerry,faTruckPlane ,faHouse ,faDoorClosed ,faCar ,faUser ,faMapPin} from'@fortawesome/free-solid-svg-icons'
function Services() {
  return (
    <div><Container id='Container_s' fluid >
    <Row className='row_s'>
    <Col  lg={3}  md={12}sm={12}><h2 style={{fontSize:'40px'}}>Our Special SERVICES</h2></Col>
    <Col lg={7} md={12} sm={12} id='borderLeft'><p  className='p_s'  >Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices.</p></Col>
    </Row>
    
    <Row className='row_s'  >
        <Col className='Col_s' lg={3} md={11}sm={12} ><FontAwesomeIcon className='icon_s' icon={faBoxOpen} />
        
         <div className="text-content"><h5>Packaging And Storage</h5><p  className='p_s'>Package and store your things effectively and securely to make sure them in storage.</p></div>
        </Col>
        <Col className='Col_s'lg={3} md={11}sm={12} ><FontAwesomeIcon className='icon_s' icon={faFerry} /> <div className="text-content"><h5>Packaging And Storage</h5><p  className='p_s'>Package and store your things effectively and securely to make sure them in storage.</p></div></Col>
        <Col className='Col_s' lg={3} md={11}sm={12}><FontAwesomeIcon className='icon_s' icon={faTruckPlane} /> <div className="text-content"><h5>Packaging And Storage</h5><p  className='p_s'>Package and store your things effectively and securely to make sure them in storage.</p></div></Col>
    </Row>
    <Row className='row_s'>
        <Col className='Col_s'lg={3} md={12}sm={12}><FontAwesomeIcon className='icon_s' icon={faHouse} /> <div className="text-content"><h5>Door to Door Delivery</h5><p  className='p_s'>Our expertise in transport management and planning allows us to design a solution.</p></div></Col>
        <Col className='Col_s' lg={3} md={12}sm={12}><FontAwesomeIcon className='icon_s' icon={faDoorClosed} /> <div className="text-content"><h5>Worldwide Transport</h5><p  className='p_s'>
        Specialises in international freight forwarding of merchandise and associated general logistic services.</p></div></Col>
        <Col className='Col_s'lg={3} md={12}sm={12} ><FontAwesomeIcon className='icon_s' icon={faCar} /> <div className="text-content"><h5>Ground Transport</h5><p  className='p_s'>
        Ground transportation options for all visitors, no matter your needs, schedule or destination.</p></div></Col>
    </Row>
</Container>
</div>
  )
}

export default Services
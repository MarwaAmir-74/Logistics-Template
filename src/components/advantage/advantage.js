import React from 'react'
import './advantage.css'
import { Container ,Col ,Row ,Form ,Button ,FloatingLabel} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faBoxOpen ,faUser ,faMapPin ,faTruck} from'@fortawesome/free-solid-svg-icons'
function Advantage() {
  return (
    <div>
     <Container fluid className='container_Ad'>
        <Row style={{justifyContent:'center'}} >
        <Col lg={5}  md={6} sm={12} className='Col_1' >
            <h2> Why Choosing us?</h2>
            <div style={{border:'red solid 3px' ,width:'60px'}}></div>
            <div>
                <span  className='span_icon'><FontAwesomeIcon icon={faTruck} /></span>
                <h5>Global supply Chain Solutions</h5>
                <p>Efficiently unleash cross-media information without cross-media value.</p>
                <span id='icon_border_1'> </span>
            </div>
            <div>
                <span className='span_icon'><FontAwesomeIcon icon={faUser} /></span>
                    <h5>24 Hours - Technical Support</h5>
                <p>Specialises in international freight forwarding of merchandise and associated logistic services</p>
                <span className='icon_border_2'> </span>
            </div>
            <div>
                <span className='span_icon'><FontAwesomeIcon icon={faMapPin} /></span>
                <h5>
                Mobile Shipment Tracking</h5>
                <p>We Offers intellgent concepts for road and tail and well as complex special transport services</p>
                <span className='icon_border_3'> </span>
            </div>
            <div>
                <span className='span_icon' ><FontAwesomeIcon icon={faBoxOpen} /></span>
                <h5>Careful Handling of Valuable Goods</h5>
                <p>Cargo HUB are transported at some stage of their journey along the world’s roads</p>
            </div>
        </Col>
        <Col lg={5} md={6} sm={12} style={{backgroundColor:'#f7f7f7',justifyContent:"center"}} className='d-flex'>            
            <Form noValidate style={{marginLeft:'60px'}}>
                <Row className="mb-3">
                    <h2 >
                    REQUEST A QUOTE
                    </h2>
                    <div style={{border:'red solid 3px' ,width:'60px'}}></div>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} md="5" controlId="formGridState" >
                    <Form.Label></Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Services</option>
                        <option>Services 1</option>
                        <option>Services 2</option>
                    </Form.Select>
                    </Form.Group> 
                    <Form.Group as={Col} md="5" controlId="validationCustom05">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Delivery City*" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} md="5" controlId="validationCustom05">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Distance" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="5" controlId="validationCustom03">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Weight" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                    <Row  className="mb-3">
                    <Form.Group as={Col} md="5" controlId="validationCustom04">
                    <Form.Label> </Form.Label>
                    <Form.Control type="text" placeholder="Name" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="5" controlId="validationCustom04">
                    <Form.Label> </Form.Label>
                    <Form.Control type="text" placeholder="Email" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="validationCustom04">
                    <Form.Label> </Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" label="Messages">
                    <Form.Control
                    as="textarea"  placeholder="Leave a comment here" style={{ height: '200px' }}/>
                </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row  className="mb-3">
                <Form.Group className="mb-3">
                    <Button id='button' type="submit" >Submit</Button>
                </Form.Group>
                </Row>
            </Form>
        </Col>
        </Row>
    </Container>
  </div>
  )
}

export default Advantage
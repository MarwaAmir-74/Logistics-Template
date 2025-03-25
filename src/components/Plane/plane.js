import './plane.css'
import React from 'react'
import { Container ,Col ,Row } from 'react-bootstrap'

export default function Plane() {
  return (
    <div>
        <Container fluid id='Container_p' >
            <Row className='row_p'>
                <Col> <h2>Cargo <span style={{color:'red'}}>Hub</span> is a Global Supplier of Transport and logistics Solutions.</h2></Col>
            </Row>
            <Row id='second_row' >
                <Col lg={2} md={12} sm={12} >9800<h6>Delivered Package</h6></Col>
                <Col lg={2} md={12} sm={12}  >230 <h6>Office Wordwide</h6></Col>
                <Col lg={2} md={12} sm={12} >1200 <h6>Employees</h6></Col>
                <Col lg={2} md={12} sm={12} >5200 <h6>Tons of Goods</h6></Col>
            </Row>
        </Container>
      </div>
  )
}


import React from 'react';
import './blog-two-columns.css';
import { Col, Container, Row, Card } from 'react-bootstrap';
import img from './../../../../images/pic.jpg';
import Blog1 from './../../../../images/1-min.jpg';
import Blog2 from './../../../../images/2-min.jpg';
import Blog3 from './../../../../images/3-min.jpg';
import Blog4 from './../../../../images/4-min.jpg';
import Blog5 from './../../../../images/5-min.jpg';
import Blog6 from './../../../../images/6-min.jpg';
import Blog7 from './../../../../images/7-min.jpg';
import Blog8 from './../../../../images/8-min.jpg';
import Ftr from './../../../Ftr/ftr'
export default function Blog_two_columns() {
    return (
        <>
        <Container fluid className="p-0 m-0">
            <Row className='Container-Blog'>
                <Col xs={12} className="p-0">
                <img src={img} id='img' alt="Header Background" />
                <h1>Blog</h1>
                </Col>
            </Row>
                <hr id='hr_Blog'/>
            <Row className='Blog_Row'>
                <Card style={{ width: '41rem' }} className='blog-card'>
                    <div className="image-wrapper">
                        <Card.Img variant="top" src={Blog1} className='Blog_Card-Img'/>
                    </div>
                    <Card.Body>
                        <p>by <span>steel</span></p>
                        <h3>We introduce new boat and flight service</h3>
                        <a>Read more..</a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '41rem' }} className='blog-card'>
                    <div className="image-wrapper">
                        <Card.Img variant="top" src={Blog2} className='Blog_Card-Img'/>
                    </div>
                    <Card.Body>
                        <p>by <span>steel</span></p>
                        <h3>We introduce new boat and flight service</h3>
                        <a>Read more..</a>
                    </Card.Body>
                </Card>
            </Row>
            <Row className='Blog_Row'>
                <Card style={{ width: '41rem' }} className='blog-card'>
                    <div className="image-wrapper">
                        <Card.Img variant="top" src={Blog3} className='Blog_Card-Img'/>
                    </div>
                    <Card.Body>
                        <p>by <span>steel</span></p>
                        <h3>We introduce new boat and flight service</h3>
                        <a>Read more..</a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '41rem' }} className='blog-card'>
                    <div className="image-wrapper">
                        <Card.Img variant="top" src={Blog4} className='Blog_Card-Img'/>
                    </div>
                    <Card.Body>
                        <p>by <span>steel</span></p>
                        <h3>We introduce new boat and flight service</h3>
                        <a>Read more..</a>
                    </Card.Body>
                </Card>
            </Row>
            <Row className='Blog_Row'>
                <Card style={{ width: '41rem' }} className='blog-card'>
                    <div className="image-wrapper">
                        <Card.Img variant="top" src={Blog5} className='Blog_Card-Img'/>
                    </div>
                    <Card.Body>
                        <p>by <span>steel</span></p>
                        <h3>We introduce new boat and flight service</h3>
                        <a>Read more..</a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '41rem' }} className='blog-card'>
                    <div className="image-wrapper">
                        <Card.Img variant="top" src={Blog6} className='Blog_Card-Img'/>
                    </div>
                    <Card.Body>
                        <p>by <span>steel</span></p>
                        <h3>We introduce new boat and flight service</h3>
                        <a>Read more..</a>
                    </Card.Body>
                </Card>
            </Row>
            <Row className='Blog_Row'>
                <Card style={{ width: '41rem' }} className='blog-card'>
                    <div className="image-wrapper">
                        <Card.Img variant="top" src={Blog7} className='Blog_Card-Img'/>
                    </div>
                    <Card.Body>
                        <p>by <span>steel</span></p>
                        <h3>We introduce new boat and flight service</h3>
                        <a>Read more..</a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '41rem' }} className='blog-card'>
                    <div className="image-wrapper">
                        <Card.Img variant="top" src={Blog8} className='Blog_Card-Img'/>
                    </div>
                    <Card.Body>
                        <p>by <span>steel</span></p>
                        <h3>We introduce new boat and flight service</h3>
                        <a>Read more..</a>
                    </Card.Body>
                </Card>
            </Row>
            <Row> 
                <Ftr/>
            </Row>
        </Container>
        </>    
    );
}
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './featuredNews.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Card, Container, Row} from 'react-bootstrap';
import card1 from './../../images/blog-1.jpg';
import card2 from './../../images/blog-5.jpg';
import card3 from './../../images/blog-44.jpg';
import card4 from './../../images/blog-3.jpg';
import card5 from './../../images/blog-6.jpg';
import card6 from './../../images/blog-4.jpg';
export default function FeaturedNews() {
  return (
  <Container fluid id='FeaturedNews-Container' style={{maxWidth:'1250px'}}>
    <div className="featured-news-section">
        <Row id='FeaturedNew-row-1'>
          <h2>Featured News</h2>
        </Row>
        <Row className="justify-content-center" id='FeaturedNew-row-2'>
        <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          1024: { slidesPerView: 3 }, 
          768: { slidesPerView: 2 },  
          480: { slidesPerView: 1 }   
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper">
            <SwiperSlide>
              <Card style={{ width: '26rem' }} className="shadow-sm">
                <Card.Img variant="top" src={card1} alt="Slide 1" />
                <Card.Body>
                  <Card.Title>We introduce new boat and flight service</Card.Title>
                  <Card.Text className='Card-Text'>Read more..</Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card style={{ width: '26rem' }} className="shadow-sm">
                <Card.Img variant="top" src={card2} alt="Slide 2" />
                <Card.Body>
                  <Card.Title>We introduce new boat and flight service</Card.Title>
                  <Card.Text className='Card-Text'>Read more..</Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card style={{ width: '26rem' }} className="shadow-sm">
                <Card.Img variant="top" src={card3} alt="Slide 3" />
                <Card.Body>
                  <Card.Title>We introduce new boat and flight service</Card.Title>
                  <Card.Text className='Card-Text'>Read more..</Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card style={{ width: '26rem' }} className="shadow-sm">
                <Card.Img variant="top" src={card4} alt="Slide 4" />
                <Card.Body>
                  <Card.Title>We introduce new boat and flight service</Card.Title>
                  <Card.Text className='Card-Text'>Read more..</Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card style={{ width: '26rem' }} className="shadow-sm">
                <Card.Img variant="top" src={card5} alt="Slide 5" />
                <Card.Body>
                  <Card.Title>We introduce new boat and flight service</Card.Title>
                  <Card.Text className='Card-Text'>Read more..</Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card style={{ width: '26rem' }} className="shadow-sm">
                <Card.Img variant="top" src={card6} alt="Slide 6" />
                <Card.Body>
                  <Card.Title>We introduce new boat and flight service</Card.Title>
                  <Card.Text  className='Card-Text'>Read more..</Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Row>
    </div>    
 </Container>
  );
}

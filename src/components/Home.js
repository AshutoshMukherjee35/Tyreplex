import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import BrandCarousel from './BrandCarousel';
import ServiceCarousel from './ServiceCarousel';
import GoogleReviews from './GoogleReviews';
import TyreSection from './TyreCard files/TyreSection';
import PaymentModes from './PaymentModes';
import QuestionSection from './QuestionSection';

const Home = () => {
  return (
    <div className="home-container">
      {/* Image Scrolling Carousel */}
      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300-w450"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300-w450"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300-w450"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* Store Details Section */}
      <div className="store-details mb-4">
        <div className="d-flex align-items-center">
          <span className="badge bg-success me-2">4.9</span>
          <div className="d-flex align-items-center">
            <span className="me-2">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span className="me-2">2278 Reviews</span>
            <Button variant="outline-secondary" size="sm">Rate</Button>
          </div>
        </div>
        <p>PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014</p>
        <p>Open - Monday to Sunday - 10:00AM to 8:00PM</p>
        <Button variant="outline-danger" className="mt-2">Get Directions</Button>
      </div>
      {/* Google Reviews Section */}
      <GoogleReviews />
       {/* Brands Scrolling Section */}
      <BrandCarousel />
      {/* service carousel */}
      <ServiceCarousel />
      {/**TyreSection */}
      <TyreSection />
      {/* {Payment modes} */}
      <PaymentModes />
      {/* question section */}
      <QuestionSection/>
    </div>
  );
}

export default Home;

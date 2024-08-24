import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


const GoogleReviews = () => {
  // Reviews data array
  const reviews = [
    {
      initials: 'Md',
      name: 'Md Nasir',
      text: 'Excellent service from start to finish. 100% satisfaction...',
    },
    {
      initials: 'R',
      name: 'Rohit Bhati',
      text: 'Went for Tyre change. Ultimate service by shoppe boys...',
    },
    {
      initials: 'P',
      name: 'Pradeep Kumar',
      text: 'Best tyre shop in Indirapuram. Good dealing with customer...',
    },
    // Add more reviews as needed...
  ];

  // ReviewCard component (nested within GoogleReviews)
  const ReviewCard = ({ initials, name, text }) => {
    return (
      <Card className="review-card">
        <Card.Body className="d-flex align-items-center">
          <div className="initial-circle me-3">{initials}</div>
          <div>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="google-reviews">
      <h4>2278 Google Reviews</h4>
      <Carousel indicators={false} className="google-review-carousel">
        {reviews.map((review, index) => (
          <Carousel.Item key={index}>
            <ReviewCard 
              initials={review.initials} 
              name={review.name} 
              text={review.text} 
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default GoogleReviews;

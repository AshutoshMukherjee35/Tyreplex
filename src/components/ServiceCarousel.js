import React from 'react';
import Card from 'react-bootstrap/Card';

const services = [
  { name: "Wheel Balancing", imgSrc: "https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100", id: 1 },
  { name: "Wheel Alignment", imgSrc: "https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100", id: 2 },
  { name: "Tire Replacement", imgSrc: "https://via.placeholder.com/150x50?text=Tire+Replacement", id: 3 },
  { name: "Brake Service", imgSrc: "https://via.placeholder.com/150x50?text=Brake+Service", id: 4 },
  { name: "Oil Change", imgSrc: "https://via.placeholder.com/150x50?text=Oil+Change", id: 5 },
];

const ServiceCarousel = () => {
    return (
      <div className="services-section mt-4">
        <h4>Services Offered</h4>
        <div className="services-container d-flex flex-row overflow-auto">
          {services.map((service, id) => (
            <Card key={id} className="service-card me-3" style={{ minWidth: '300px' }}>
              <Card.Img variant="top" src={service.imgSrc} style={{ width: '100%', objectFit: "cover" }} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className='text-center'>{service.name}</Card.Title>
                <button className='btn btn-danger mt-auto'>Book Now</button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  };

export default ServiceCarousel;

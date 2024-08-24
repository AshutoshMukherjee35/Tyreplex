import React from 'react';
import Card from 'react-bootstrap/Card';
import './BrandCarousel.css';

const brands = [
  { name: "MRF", imgSrc: "https://via.placeholder.com/150x50?text=MRF", id: 1 },
  { name: "CEAT", imgSrc: "https://via.placeholder.com/150x50?text=CEAT", id: 2 },
  { name: "Goodyear", imgSrc: "https://via.placeholder.com/150x50?text=Goodyear", id: 3 },
  { name: "Apollo", imgSrc: "https://via.placeholder.com/150x50?text=Apollo", id: 4 },
  { name: "Bridgestone", imgSrc: "https://via.placeholder.com/150x50?text=Bridgestone", id: 5 },
  { name: "JK Tyre", imgSrc: "https://via.placeholder.com/150x50?text=JK+Tyre", id: 6 },
  { name: "JK Tyre", imgSrc: "https://via.placeholder.com/150x50?text=JK+Tyre", id: 7 },
  { name: "JK Tyre", imgSrc: "https://via.placeholder.com/150x50?text=JK+Tyre", id: 8 },
  { name: "JK Tyre", imgSrc: "https://via.placeholder.com/150x50?text=JK+Tyre", id: 9 },
  { name: "JK Tyre", imgSrc: "https://via.placeholder.com/150x50?text=JK+Tyre", id: 10 },
  { name: "JK Tyre", imgSrc: "https://via.placeholder.com/150x50?text=JK+Tyre", id: 11 },
  { name: "JK Tyre", imgSrc: "https://via.placeholder.com/150x50?text=JK+Tyre", id: 12 },
  { name: "JK Tyre", imgSrc: "https://via.placeholder.com/150x50?text=JK+Tyre", id: 13 },
  { name: "JK Tyre", imgSrc: "https://via.placeholder.com/150x50?text=JK+Tyre", id: 14 },
  { name: "JK Tyre", imgSrc: "https://via.placeholder.com/150x50?text=JK+Tyre", id: 15 },
  // Add more brands as needed
];

const BrandCarousel = () => {
  return (
    <div className="brands-section mt-4">
      <h4>Deals in</h4>
      <div className="brands-container d-flex flex-row overflow-auto">
        {brands.map((brand, id) => (
          <Card key={id} className="brand-card me-3" style={{ minWidth: '150px', height: '100px' }}>
            <Card.Img variant="top" src={brand.imgSrc} style={{ width: '100%', height: '50px' }} />
            <Card.Body>
              <Card.Title>{brand.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;

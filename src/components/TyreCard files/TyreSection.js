import React from 'react';
import Container from 'react-bootstrap/Container';
import TyreFilter from './TyreFilter';
import TyreGrid from './TyreGrid';

const tyres = [
  {
    brand: 'Apollo',
    brandLogo: 'https://via.placeholder.com/50x20?text=Apollo',
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 320,
    price: 3136,
    offer: 'Offer available',
    type: 'Tube Type',
    warranty: '5 Year Warranty',
  },
  {
    brand: 'Apollo',
    brandLogo: 'https://via.placeholder.com/50x20?text=Apollo',
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 320,
    price: 3136,
    offer: 'Offer available',
    type: 'Tube Type',
    warranty: '5 Year Warranty',
  },
  {
    brand: 'Apollo',
    brandLogo: 'https://via.placeholder.com/50x20?text=Apollo',
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 320,
    price: 3136,
    offer: 'Offer available',
    type: 'Tube Type',
    warranty: '5 Year Warranty',
  },
  {
    brand: 'Apollo',
    brandLogo: 'https://via.placeholder.com/50x20?text=Apollo',
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 320,
    price: 3136,
    offer: 'Offer available',
    type: 'Tube Type',
    warranty: '5 Year Warranty',
  },
  {
    brand: 'Apollo',
    brandLogo: 'https://via.placeholder.com/50x20?text=Apollo',
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 320,
    price: 3136,
    offer: 'Offer available',
    type: 'Tube Type',
    warranty: '5 Year Warranty',
  },
  {
    brand: 'Apollo',
    brandLogo: 'https://via.placeholder.com/50x20?text=Apollo',
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 320,
    price: 3136,
    offer: 'Offer available',
    type: 'Tube Type',
    warranty: '5 Year Warranty',
  },
  {
    brand: 'Apollo',
    brandLogo: 'https://via.placeholder.com/50x20?text=Apollo',
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 320,
    price: 3136,
    offer: 'Offer available',
    type: 'Tube Type',
    warranty: '5 Year Warranty',
  },
  {
    brand: 'Apollo',
    brandLogo: 'https://via.placeholder.com/50x20?text=Apollo',
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 320,
    price: 3136,
    offer: 'Offer available',
    type: 'Tube Type',
    warranty: '5 Year Warranty',
  },
  {
    brand: 'Apollo',
    brandLogo: 'https://via.placeholder.com/50x20?text=Apollo',
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 320,
    price: 3136,
    offer: 'Offer available',
    type: 'Tube Type',
    warranty: '5 Year Warranty',
  }
  // Add more tyres as needed...
];

const TyreSection = () => {
  return (
    <Container className="tyre-section my-4">
      <TyreFilter />
      <TyreGrid tyres={tyres} />
      <div className="text-center mt-4">
        <button className="btn btn-outline-secondary">View more</button>
      </div>
    </Container>
  );
};

export default TyreSection;

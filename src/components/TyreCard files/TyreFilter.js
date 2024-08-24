import React from 'react';
import Form from 'react-bootstrap/Form';

const TyreFilter = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h4>Tyres sold by this Dealer</h4>
      <div className="d-flex align-items-center">
        <Form.Select className="me-2">
          <option>Filter By</option>
          <option value="price">Price</option>
          <option value="popularity">Popularity</option>
        </Form.Select>
        <Form.Select>
          <option>Most Popular</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="lowToHigh">Price: Low to High</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default TyreFilter;

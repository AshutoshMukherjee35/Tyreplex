import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TyreCard from './TyreCard';

const TyreGrid = ({ tyres }) => {
  return (
    <Row>
      {tyres.map((tyre, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={4}>
          <TyreCard tyre={tyre} />
        </Col>
      ))}
    </Row>
  );
};

export default TyreGrid;

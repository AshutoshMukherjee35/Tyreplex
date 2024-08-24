import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


const TyreCard = ({ tyre }) => {
  return (
    <Card className="tyre-card shadow-sm mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <img src={tyre.brandLogo} alt={tyre.brand} className="brand-logo" />
        <Badge bg="warning" text="dark">
          {tyre.warranty}
        </Badge>
      </Card.Header>
      <Card.Body>
        <Card.Title>{tyre.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{tyre.size}</Card.Subtitle>
        <div className="d-flex align-items-center mb-2">
          <Badge bg="success" className="me-2">
            {tyre.rating}
          </Badge>
          <span>{tyre.reviews} Reviews</span>
        </div>
        <Card.Text className="price">
          ₹ {tyre.price.toLocaleString()}
        </Card.Text>
        <Card.Text className="text-success">{tyre.offer}</Card.Text>
        <Card.Text>{tyre.type}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TyreCard;

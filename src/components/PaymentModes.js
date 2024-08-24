import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const paymentOptions = [
  'Deposit to Account',
  'Credit Card/Debit Card',
  'Wallets (PayTM/PhonePe/Amazon etc.)',
  'Net Banking',
  'UPI'
];

const PaymentModes = () => {
  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <h5 className="card-title">Payment Mode</h5>
          <Row>
            {paymentOptions.map((option, index) => (
              <Col key={index} md={6}>
                <ul className="list-unstyled">
                  <li>✅ {option}</li>
                </ul>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PaymentModes;

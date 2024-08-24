import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Image } from 'react-bootstrap';

const QuestionSection = () => {
  return (
    <Container fluid className="py-4" style={{ backgroundColor: '#FFF4C3', width: '93%' }}>
      <Row className="align-items-center">
        <Col md={9}>
          <h5>Have a question about Tyres?</h5>
          <p>Get an answer in 24 hours from our experts.</p>
          <Form>
            <Form.Group controlId="question">
              <Form.Control
                type="text"
                placeholder="Ask or search your question"
                style={{
                  borderRadius: '50px',
                  border: '2px solid #FFCD03',
                  paddingLeft: '20px',
                }}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col md={3} className="text-center">
          <Image
            src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60"
            roundedCircle
            style={{ width: '100px', height: '100px' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionSection;

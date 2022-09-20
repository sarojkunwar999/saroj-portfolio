import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <>
      <section className='contactHolder'>
        <Fade button>
          <Container>
            <Row className='justify-content-center'>
              <Col md={5}>
                <section className='formWrapper'>
                  <h2>
                    Lets Talk, <strong className='cpr'>Say Hi !</strong>{' '}
                  </h2>
                  <p>
                    Drop your message below, and let me know if you are
                    intrested to work together.
                  </p>

                  <Form>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                      <Form.Label>Full name</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Full name'
                        required
                      />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Enter email'
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      className='mb-3'
                      controlId='exampleForm.ControlTextarea1'
                    >
                      <Form.Label>Message</Form.Label>
                      <Form.Control as='textarea' rows={3} required />
                    </Form.Group>
                    <button
                      className='bton bton--primary bton--full'
                      type='submit'
                    >
                      Submit
                    </button>
                  </Form>
                </section>
              </Col>
            </Row>
          </Container>
        </Fade>
      </section>
    </>
  );
};

export default About;

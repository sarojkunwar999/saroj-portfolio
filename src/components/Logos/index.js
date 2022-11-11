import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import L1 from '../../Images/logos/l1.png';
import L2 from '../../Images/logos/l2.png';
import L3 from '../../Images/logos/l3.png';
import L4 from '../../Images/logos/l4.png';
import L5 from '../../Images/logos/l5.png';
import L6 from '../../Images/logos/l6.png';
import L7 from '../../Images/logos/l7.png';
import L8 from '../../Images/logos/l8.png';
import L9 from '../../Images/logos/l9.png';
import L10 from '../../Images/logos/l10.png';
import L11 from '../../Images/logos/l11.jpg';
import L12 from '../../Images/logos/l12.png';
import L13 from '../../Images/logos/l13.png';

import { Fade } from 'react-reveal';

const Logos = () => {
  return (
    <Container>
      <section className='skillsHolder'>
        <h2>Logos</h2>
        <Row>
          <Col lg={2} md={3} xs={12}>
            <Fade>
              <section className='skillsHolder-item' title='figma'>
                <img src={L1} alt='' />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={12}>
            <Fade>
              <section className='skillsHolder-item' title='figma'>
                <img src={L2} alt='' />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={12}>
            <Fade>
              <section className='skillsHolder-item' title='figma'>
                <img src={L3} alt='' />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={12}>
            <Fade>
              <section className='skillsHolder-item' title='figma'>
                <img src={L4} alt='' />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={12}>
            <Fade>
              <section className='skillsHolder-item' title='figma'>
                <img src={L5} alt='' />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={12}>
            <Fade>
              <section className='skillsHolder-item' title='figma'>
                <img src={L6} alt='' />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={12}>
            <Fade>
              <section className='skillsHolder-item' title='figma'>
                <img src={L7} alt='' />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={12}>
            <Fade>
              <section className='skillsHolder-item' title='figma'>
                <img src={L8} alt='' />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={12}>
            <Fade>
              <section className='skillsHolder-item' title='figma'>
                <img src={L9} alt='' />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={12}>
            <Fade>
              <section className='skillsHolder-item' title='figma'>
                <img src={L10} alt='' />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={12}>
            <Fade>
              <section className='skillsHolder-item' title='figma'>
                <img src={L11} alt='' />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={12}>
            <Fade>
              <section className='skillsHolder-item' title='figma'>
                <img src={L12} alt='' />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={12}>
            <Fade>
              <section className='skillsHolder-item' title='figma'>
                <img src={L13} alt='' />
              </section>
            </Fade>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Logos;

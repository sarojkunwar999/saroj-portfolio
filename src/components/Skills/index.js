import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Html from '../../Images/skills/html.png';
import Css from '../../Images/skills/css.png';
import Js from '../../Images/skills/js.png';
import Figma from '../../Images/skills/figma.png';
import Illustrator from '../../Images/skills/illustrator.png';
import Github from '../../Images/skills/github.png';

const Skills = () => {
  return (
    <Container>
      <section className='skillsHolder'>
        <Row className='justify-content-between'>
          <Col md={2}>
            <section className='skillsHolder-item'>
              <img src={Html} alt='' />
            </section>
          </Col>
          <Col md={2}>
            <section className='skillsHolder-item'>
              <img src={Css} alt='' />
            </section>
          </Col>
          <Col md={2}>
            <section className='skillsHolder-item'>
              <img src={Js} alt='' />
            </section>
          </Col>
          <Col md={2}>
            <section className='skillsHolder-item'>
              <img src={Figma} alt='' />
            </section>
          </Col>
          <Col md={2}>
            <section className='skillsHolder-item'>
              <img src={Illustrator} alt='' />
            </section>
          </Col>
          <Col md={2}>
            <section className='skillsHolder-item'>
              <img src={Github} alt='' />
            </section>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Skills;

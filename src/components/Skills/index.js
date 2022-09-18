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
    <section className='skillsHolder'>
      <Container>
        <Row className='justify-content-between'>
          <Col>
            <img src={Html} alt='' />
          </Col>
          <Col>
            <img src={Css} alt='' />
          </Col>
          <Col>
            <img src={Js} alt='' />
          </Col>
          <Col>
            <img src={Figma} alt='' />
          </Col>
          <Col>
            <img src={Illustrator} alt='' />
          </Col>
          <Col>
            <img src={Github} alt='' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;

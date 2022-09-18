import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Html from '../../Images/skills/html.png';
import Css from '../../Images/skills/css.png';
import Js from '../../Images/skills/js.png';
import Figma from '../../Images/skills/figma.png';
import Illustrator from '../../Images/skills/illustrator.png';
import Github from '../../Images/skills/github.png';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { GrReactjs } from 'react-icons/gr';
import { TbBrandCss3 } from 'react-icons/tb';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaFigma } from 'react-icons/fa';
import { DiIllustrator } from 'react-icons/di';
import { DiPhotoshop } from 'react-icons/di';
import { FiGithub } from 'react-icons/fi';
import { DiSass } from 'react-icons/di';
import { GrGraphQl } from 'react-icons/gr';

const Skills = () => {
  return (
    <Container>
      <section className='skillsHolder'>
        <h2>Skills</h2>
        <Row>
          <Col md={2}>
            <section className='skillsHolder-item' title='figma'>
              <FaFigma />
            </section>
          </Col>
          {/* <Col md={2}>
            <section className='skillsHolder-item' title='React'>
              <GrReactjs />
            </section>
          </Col> */}
          <Col md={2}>
            <section className='skillsHolder-item' title='HTML'>
              <AiOutlineHtml5 />
            </section>
          </Col>
          <Col md={2}>
            <section className='skillsHolder-item' title='css'>
              <TbBrandCss3 />
            </section>
          </Col>
          <Col md={2}>
            <section className='skillsHolder-item' title='js'>
              <TbBrandJavascript />
            </section>
          </Col>
          <Col md={2}>
            <section className='skillsHolder-item' title='sass'>
              <DiSass />
            </section>
          </Col>
          {/* <Col md={2}>
            <section className='skillsHolder-item' title='graphQL'>
              <GrGraphQl />
            </section>
          </Col> */}
          <Col md={2}>
            <section className='skillsHolder-item' title='illustrator'>
              <DiIllustrator />
            </section>
          </Col>
          <Col md={2}>
            <section className='skillsHolder-item' title='photoshop'>
              <DiPhotoshop />
            </section>
          </Col>
          <Col md={2}>
            <section className='skillsHolder-item' title='github'>
              <FiGithub />
            </section>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Skills;

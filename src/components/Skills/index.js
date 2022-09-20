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
import { SiAdobexd } from 'react-icons/si';
import { TbBrandTailwind } from 'react-icons/tb';
import Zoom from 'react-reveal/Zoom';
import { Fade } from 'react-reveal';

const Skills = () => {
  return (
    <Container>
      <section className='skillsHolder'>
        <h2>Skills</h2>
        <Row>
          <Col lg={2} md={3} xs={6}>
            <Fade>
              <section className='skillsHolder-item' title='figma'>
                <FaFigma />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade>
              <section className='skillsHolder-item' title='React'>
                <GrReactjs />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={50}>
              <section className='skillsHolder-item' title='HTML'>
                <AiOutlineHtml5 />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={100}>
              <section className='skillsHolder-item' title='css'>
                <TbBrandCss3 />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={150}>
              <section className='skillsHolder-item' title='js'>
                <TbBrandJavascript />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={200}>
              <section className='skillsHolder-item' title='sass'>
                <DiSass />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={250}>
              <section className='skillsHolder-item' title='tailwind'>
                <TbBrandTailwind />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={300}>
              <section className='skillsHolder-item' title='graphQL'>
                <GrGraphQl />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={350}>
              <section className='skillsHolder-item' title='illustrator'>
                <DiIllustrator />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={400}>
              <section className='skillsHolder-item' title='photoshop'>
                <DiPhotoshop />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={450}>
              <section className='skillsHolder-item' title='github'>
                <FiGithub />
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={500}>
              <section className='skillsHolder-item' title='adobe xd'>
                <SiAdobexd />
              </section>
            </Fade>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Skills;

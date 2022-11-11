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
                <div className='mt-3'>Figma</div>
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade>
              <section className='skillsHolder-item' title='React'>
                <GrReactjs />
                <div className='mt-3'>React</div>
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={50}>
              <section className='skillsHolder-item' title='HTML'>
                <AiOutlineHtml5 />
                <div className='mt-3'>HTML</div>
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={100}>
              <section className='skillsHolder-item' title='css'>
                <TbBrandCss3 />
                <div className='mt-3'>Css</div>
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={150}>
              <section className='skillsHolder-item' title='js'>
                <TbBrandJavascript />
                <div className='mt-3'>JS</div>
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={200}>
              <section className='skillsHolder-item' title='sass'>
                <DiSass />
                <div className='mt-3'>Saas</div>
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={250}>
              <section className='skillsHolder-item' title='tailwind'>
                <TbBrandTailwind />
                <div className='mt-3'>Tailwind Css</div>
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={300}>
              <section className='skillsHolder-item' title='graphQL'>
                <GrGraphQl />
                <div className='mt-3'>Graph QL</div>
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={350}>
              <section className='skillsHolder-item' title='illustrator'>
                <DiIllustrator />
                <div className='mt-3'> Illustrator</div>
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={400}>
              <section className='skillsHolder-item' title='photoshop'>
                <DiPhotoshop />
                <div className='mt-3'> Photoshop</div>
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={450}>
              <section className='skillsHolder-item' title='github'>
                <FiGithub />
                <div className='mt-3'>Git Hub</div>
              </section>
            </Fade>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <Fade delay={500}>
              <section className='skillsHolder-item' title='adobe xd'>
                <SiAdobexd />
                <div className='mt-3'>XD</div>
              </section>
            </Fade>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Skills;

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ResearchApproach from '../../Images/designapproach.png';
import ReqSrory from '../../Images/research/reqstory.png';
import Personas from '../../Images/research/personas.png';
import IA from '../../Images/research/IA.png';
import UF from '../../Images/research/uf.png';
import WF1 from '../../Images/research/wireframe.png';
import WF2 from '../../Images/research/wireframe2.png';
import UI1 from '../../Images/research/UI.png';
import UI2 from '../../Images/research/uiimage.png';
import StyleGuide from '../../Images/research/styleguide.png';
import Prototype from '../../Images/research/prototype.png';
import { Slide } from 'react-reveal';

const HowWork = () => {
  return (
    <>
      <Container>
        <section className='howWrapper'>
          <h2 className='howWrapper--title'>Problem ---> Solution</h2>
          <section className='workWay'>
            <h3> Research Approach </h3>
            <figure>{<img src={ResearchApproach} alt='' />}</figure>
            <section className='workItems'>
              <Row>
                <h3> Requirement Story & User Personas </h3>
                <Col md={6}>
                  <Slide bottom>
                    <figure>
                      <img src={ReqSrory} alt='' />
                    </figure>
                  </Slide>
                </Col>
                <Col md={6}>
                  <Slide bottom>
                    <figure>
                      <img src={Personas} alt='' />
                    </figure>
                  </Slide>
                </Col>
              </Row>
            </section>
            <section className='workItems'>
              <Row>
                <h3> Information Architectures & User Flows </h3>
                <Col md={6}>
                  <Slide bottom>
                    <figure>
                      <img src={IA} alt='' />
                    </figure>
                  </Slide>
                </Col>
                <Col md={6}>
                  <Slide bottom>
                    <figure>
                      <img src={UF} alt='' />
                    </figure>
                  </Slide>
                </Col>
              </Row>
            </section>
            <section className='workItems'>
              <Row>
                <h3> Wireframes and UI</h3>
                <Col md={6}>
                  <Slide bottom>
                    <figure>
                      <img src={WF1} alt='' />
                    </figure>
                  </Slide>
                </Col>
                <Col md={6}>
                  <Slide bottom>
                    <figure>
                      <img src={UI2} alt='' />
                    </figure>
                  </Slide>
                </Col>
                <Col md={6}>
                  <Slide bottom>
                    <figure>
                      <img src={UI1} alt='' />
                    </figure>
                  </Slide>
                </Col>
                <Col md={6}>
                  <Slide bottom>
                    <figure>
                      <img src={WF2} alt='' />
                    </figure>
                  </Slide>
                </Col>
                <section className='workItems'>
                  <Row>
                    <h3> Styleguide and Prototype </h3>
                    <Col md={6}>
                      <Slide bottom>
                        <figure>
                          <img src={Prototype} alt='' />
                        </figure>
                      </Slide>
                    </Col>
                    <Col md={6}>
                      <Slide bottom>
                        <figure>
                          <img src={StyleGuide} alt='' />
                        </figure>
                      </Slide>
                    </Col>
                  </Row>
                </section>
              </Row>
            </section>
          </section>
        </section>
      </Container>
    </>
  );
};

export default HowWork;

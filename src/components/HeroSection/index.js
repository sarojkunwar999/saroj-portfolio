import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroImage from '../../Images/heroImage.png';
import Linkedin from '../../Images/Linkedin.png';
import ResearchGate from '../../Images/researchGate.png';
import Github from '../../Images/github.png';
import Dribble from '../../Images/Dribbble.png';

const index = () => {
  return (
    <section className='homeWrapper'>
      <Container>
        <Row className='justify-content-between'>
          <Col md={7}>
            <h1 className='homeWrapper-title'>
              Hi, I am <strong className='cpr'>Saroj Kunwar </strong>
              <br /> Researcher . Designer . Developer
            </h1>
            <p className='homeWrapper-desc'>
              I'm passionate about improving the lives of others through design.
              I'm constantly learning new things everyday.
            </p>

            <section className='homeWrapper-buttons'></section>
            <button className='bton bton--primary bton--lg '>
              {' '}
              Let's Talk{' '}
            </button>
            <button className='bton bton--nacked bton--lg ms-3'>
              Download Resume
            </button>
          </Col>
          <Col md={4}>
            <figure className='homeWrapper-image'>
              <img src={HeroImage} alt='' />
            </figure>
          </Col>
          <Col md={1}>
            <section className='homeWrapper-social'>
              <ul>
                <li>
                  <Link to='/'>
                    <img src={Linkedin} alt='' />{' '}
                  </Link>{' '}
                </li>
                <li>
                  <Link to='/'>
                    <img src={ResearchGate} alt='' />{' '}
                  </Link>{' '}
                </li>
                <li>
                  <Link to='/'>
                    <img src={Github} alt='' />{' '}
                  </Link>{' '}
                </li>
                <li>
                  <Link to='/'>
                    <img src={Linkedin} alt='' />{' '}
                  </Link>{' '}
                </li>
                <li>
                  <Link to='/'>
                    <img src={Dribble} alt='' />{' '}
                  </Link>{' '}
                </li>

                <li className='socialLine'></li>
                <li className='scroll'> SCROLL DOWN </li>
              </ul>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default index;

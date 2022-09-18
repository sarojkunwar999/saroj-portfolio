import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroImage from '../../Images/heroImage.png';
import Linkedin from '../../Images/Linkedin.png';
import ResearchGate from '../../Images/researchGate.png';
import Github from '../../Images/github.png';
import Dribble from '../../Images/Dribbble.png';
import Resume from '../../Images/resume/Resume.pdf';
import { AiOutlineDownload } from 'react-icons/ai';

const index = () => {
  return (
    <section className='homeWrapper'>
      <Container>
        <Row className='justify-content-between'>
          <Col md={6}>
            <h1 className='homeWrapper-title'>
              Hi, I am <strong className='cpr'>Saroj Kunwar </strong>
              <br />
            </h1>
            <section className='homeWrapper-subtitle'>
              {' '}
              Researcher . Designer . Developer
            </section>
            <p className='homeWrapper-desc'>
              I'm passionate about improving the lives of others through design.
              I'm constantly learning new things everyday. I'm passionate about
              improving the lives of others through design. I'm constantly
              learning new things everyday.
            </p>

            <section className='homeWrapper-buttons'>
              <Link to='/contact'>
                <button className='bton bton--primary bton--lg '>
                  {' '}
                  Let's Talk{' '}
                </button>
              </Link>

              <a href={Resume} download='Resume.pdf'>
                <button className='bton bton--nacked bton--lg ms-3 downloadButton '>
                  <AiOutlineDownload /> Download Resume
                </button>
              </a>
            </section>
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

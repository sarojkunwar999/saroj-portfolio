import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroImage from '../../Images/heroImage.png';
// import Linkedin from '../../Images/Linkedin.png';
// import ResearchGate from '../../Images/researchGate.png';
// import Medium from '../../Images/medium.png';
// import Dribble from '../../Images/Dribbble.png';
import Resume from '../../Images/resume/Resume.pdf';
// import Resume from '../../Images/resume/resume_laxmi.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiResearchgate } from 'react-icons/si';
import { FaMediumM } from 'react-icons/fa';
import { BsDribbble } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import Slide from 'react-reveal/Slide';

const index = () => {
  return (
    <section className='homeWrapper'>
      <Container>
        <Row className='justify-content-between'>
          <Col md={6} xs={{ order: 'last' }} sm={{ order: 'first' }}>
            <Slide left delay={20}>
              <h1 className='homeWrapper-title'>
                Hi, I am <strong className='cpr'>Saroj kunwar</strong>
                <br />
              </h1>
            </Slide>

            <Slide left delay={50}>
              <section className='homeWrapper-subtitle'>
                {' '}
                Researcher . Designer . Developer
              </section>
            </Slide>
            <Slide left delay={100}>
              <p className='homeWrapper-desc'>
                My interest in research, design, and developing solutions has
                always motivated me for innovations. Providing Business solutons
                with technology and making people's lives better has always been
                my priority.
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
            </Slide>
          </Col>
          <Col md={4}>
            <Slide right>
              <figure className='homeWrapper-image'>
                <img src={HeroImage} alt='' />
              </figure>
            </Slide>
          </Col>
          <Col md={1}>
            <section className='homeWrapper-social'>
              <ul>
                <li>
                  <a
                    href={'https://www.linkedin.com/in/er-saroj-kunwar/'}
                    target='_new'
                  >
                    <Slide top delay={250}>
                      <FaLinkedinIn />
                    </Slide>
                  </a>{' '}
                </li>
                <li>
                  <a
                    href={'https://www.researchgate.net/profile/Saroj-Kunwar-2'}
                    target='_new'
                  >
                    <Slide top delay={200}>
                      <SiResearchgate />
                    </Slide>
                  </a>{' '}
                </li>

                <li>
                  <a href={'https://github.com/sarojkunwar999'} target='_new'>
                    <Slide top delay={150}>
                      <FiGithub />
                    </Slide>
                  </a>{' '}
                </li>
                <li>
                  <a href={'https://medium.com/@sarojkunwar999'} target='_new'>
                    <Slide top delay={100}>
                      <FaMediumM />
                    </Slide>
                  </a>{' '}
                </li>
                <li>
                  <a href={'https://dribbble.com/sarojunwar999'} target='_new'>
                    <Slide top delay={50}>
                      <BsDribbble />
                    </Slide>
                  </a>{' '}
                </li>
                <Slide bottom>
                  <li className='socialLine'></li>
                  <li className='scroll'> SCROLL DOWN </li>
                </Slide>
              </ul>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default index;

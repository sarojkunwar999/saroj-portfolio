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

const index = () => {
  return (
    <section className='homeWrapper'>
      <Container>
        <Row className='justify-content-between'>
          <Col md={6}>
            <h1 className='homeWrapper-title'>
              Hi, I am <strong className='cpr'>Saroj kunwar</strong>
              <br />
            </h1>
            <section className='homeWrapper-subtitle'>
              {' '}
              Researcher . Designer . Developer
            </section>
            <p className='homeWrapper-desc'>
              My interest in research, design, and developing solutions
              motivated me to dive into Design Having 4 years of experience in
              the design industry and improving the lives of people through
              design. I keep discovering new things and encountering problems
              that require better solutions every day.
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
                  <a
                    href={'https://www.linkedin.com/in/er-saroj-kunwar/'}
                    target='_new'
                  >
                    <FaLinkedinIn />
                  </a>{' '}
                </li>
                <li>
                  <a
                    href={'https://www.researchgate.net/profile/Saroj-Kunwar-2'}
                    target='_new'
                  >
                    <SiResearchgate />
                  </a>{' '}
                </li>

                <li>
                  <a href={'https://github.com/sarojkunwar999'} target='_new'>
                    <FiGithub />
                  </a>{' '}
                </li>
                <li>
                  <a href={'https://medium.com/@sarojkunwar999'} target='_new'>
                    <FaMediumM />
                  </a>{' '}
                </li>
                <li>
                  <a href={'https://dribbble.com/sarojunwar999'} target='_new'>
                    <BsDribbble />
                  </a>{' '}
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

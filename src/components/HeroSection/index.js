import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroImage from '../../Images/heroImage.png';
import Linkedin from '../../Images/Linkedin.png';
import ResearchGate from '../../Images/researchGate.png';
import Medium from '../../Images/medium.png';
import Dribble from '../../Images/Dribbble.png';
// import Resume from '../../Images/resume/Resume.pdf';
import Resume from '../../Images/resume/resume_laxmi.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaMediumM } from 'react-icons/fa';
import { BsDribbble } from 'react-icons/bs';

const index = () => {
  return (
    <section className='homeWrapper'>
      <Container>
        <Row className='justify-content-between'>
          <Col md={6}>
            <h1 className='homeWrapper-title'>
              Hi, I am <strong className='cpr'>Laxmee Pandey</strong>
              <br /> UI/UX Designer
            </h1>
            {/* <section className='homeWrapper-subtitle'>
              {' '}
              Researcher . Designer . Developer
            </section> */}
            <p className='homeWrapper-desc'>
              I enjoy developing thoughtful solutions that combine the
              emotional, functional, and aesthetic spectrums and have the
              opportunity to improve people's lives.
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
                    href={'https://www.linkedin.com/in/laxmi-pandey-5a30b31a1/'}
                    target='_new'
                  >
                    <FaLinkedinIn />
                  </a>{' '}
                </li>
                <li>
                  <a href={'https://medium.com/@pandeylaxmee3'} target='_new'>
                    <FaMediumM />
                  </a>{' '}
                </li>
                <li>
                  <a href={'https://dribbble.com/laxmee'} target='_new'>
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

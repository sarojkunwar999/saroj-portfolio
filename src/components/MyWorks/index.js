import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import TunaImage from '../../Images/tunaImage.png';
import WebNetworks from '../../Images/web networks app.png';
import HotelPauwa from '../../Images/hotelpauwa.png';
import Sajhamenu from '../../Images/sajhamenu.png';
import AllElectricall from '../../Images/allelectricall.png';
import Siyasteel from '../../Images/siyasteel.png';

import Paicho from '../../Images/paichopasal.png';
import Rucir from '../../Images/rucir.png';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const MyWorks = () => {
  return (
    <section className='worksWrapper'>
      <Container>
        <section className='flex-between mb-5'>
          <h2 className='worksWrapper-title'>Some of My Recent Works</h2>

          <Link to='/projects'>
            <button className='bton bton--sm bton--nacked'>
              View all Projects
            </button>
          </Link>
        </section>
      </Container>
      <Container>
        <section className='cardsHolder'>
          <Row className='justify-content-between'>
            <Col lg={5} md={12}>
              <section className='cardsHolder-pills'>
                <span>UX Research</span>
                <span>UI Design</span>
                <span>Web Development</span>
              </section>

              <section className='cardsHolder-desc'>
                <Slide left>
                  <h3 className='cardsHolder-desc-title'>Tuna Technology</h3>
                </Slide>
                <Slide left delay={100}>
                  <p className='cardsHolder-desc-paragraph'>
                    Tuna Technology is a cutting-edge tech company that was
                    founded to assist businesses in overcoming obstacles and
                    increasing their ability to compete in the market.
                    <br />
                    In this project I was involved in UX testing, UI Design and
                    front end development. A design system was implemented in
                    this project for overall consistent architecture of the
                    project.
                  </p>
                </Slide>
                <a
                  href='https://www.tunatechnology.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Slide left delay={200}>
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </Slide>
                </a>
                <a
                  href='https://www.researchgate.net/publication/363364494_UIUX_Research_Methodologies_and_findings_Tuna_Technology'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Slide left delay={200}>
                    <button className='bton bton--md bton--secondary ms-0 ms-sm-2 mt-2 mt-sm-0'>
                      Case Study
                    </button>
                  </Slide>
                </a>
              </section>
            </Col>
            <Col lg={6} md={12}>
              <Fade right>
                <figure className='cardsHolder-image'>
                  <img src={TunaImage} alt='' />
                </figure>
              </Fade>
            </Col>
          </Row>
        </section>
      </Container>

      <Container>
        <section className='cardsHolder'>
          <Row className='justify-content-between'>
            <Col lg={5} md={12}>
              <section className='cardsHolder-pills'>
                <span>web development</span>
                <span>QR Ordering</span>
                <span>UX Research</span>
              </section>

              <section className='cardsHolder-desc'>
                <Slide left>
                  <h3 className='cardsHolder-desc-title'>Sajha Menu</h3>
                </Slide>
                <Slide left delay={100}>
                  <p className='cardsHolder-desc-paragraph'>
                    Sajha Menu is A QR Based Food Ordering SAAS Product for
                    restaurants.
                    <br />
                    In this project I was involved in UX research, Information
                    Architecture and User Flow Design, Data Driven decisions
                    making, UI Design and front end development. A design system
                    was implemented in this project for overall consistent
                    architecture of the project.
                  </p>
                </Slide>

                <a
                  href='https://www.sajhamenu.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Slide left delay={200}>
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </Slide>
                </a>
                <a
                  href='https://www.researchgate.net/publication/363480056_Data_Driven_Decision_on_UX_of_QR_code_based_food_ordering_system'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Slide left delay={200}>
                    <button className='bton bton--md bton--secondary ms-0 ms-sm-2 mt-2 mt-sm-0'>
                      Case Study
                    </button>
                  </Slide>
                </a>
              </section>
            </Col>
            <Col lg={6} md={12}>
              <Fade right>
                <figure className='cardsHolder-image'>
                  <img src={Sajhamenu} alt='' />
                </figure>
              </Fade>
            </Col>
          </Row>
        </section>
      </Container>
      <Container>
        <section className='cardsHolder'>
          <Row className='justify-content-between'>
            <Col lg={5} md={12} xs={{ order: 'last' }}>
              <section className='cardsHolder-pills'>
                <span>ecommerce</span>
                <span>web development</span>
                <span>UI design</span>
              </section>

              <section className='cardsHolder-desc'>
                <Slide right>
                  <h3 className='cardsHolder-desc-title'>Rucir Ecommerce</h3>
                </Slide>
                <Slide right delay={100}>
                  <p className='cardsHolder-desc-paragraph'>
                    Rucri is a B2B wellness product selling company based in
                    canada. This website is an ecommerce website particularly
                    focused on selling products in large quantities
                    <br />
                    In this project I was involved in UX research, User
                    Interviews, Use Case Diagrams, UX testing, Information
                    Architecture and User Flow Design, Data Driven decisions
                    making, UI Design and front end development.
                  </p>
                </Slide>

                <a
                  href='https://rucir.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Slide right delay={200}>
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </Slide>
                </a>
              </section>
            </Col>
            <Col lg={6} md={12}>
              <Fade left>
                <figure className='cardsHolder-image'>
                  <img src={Rucir} alt='' />
                </figure>
              </Fade>
            </Col>
          </Row>
        </section>
      </Container>

      <Container>
        <section className='cardsHolder'>
          <Row className='justify-content-between'>
            <Col lg={5} md={12} xs={{ order: 'last' }}>
              <section className='cardsHolder-pills'>
                <span>Mobile App</span>
                <span>App UI</span>
                <span>App UX</span>
              </section>

              <section className='cardsHolder-desc'>
                <Slide right>
                  <h3 className='cardsHolder-desc-title'>Web Networks App</h3>
                </Slide>
                <Slide right delay={100}>
                  <p className='cardsHolder-desc-paragraph'>
                    Web networks is a ISP service provider in Nepal. We provided
                    a mobile app solution for users of Web Networks.
                    <br />
                    In this project I was involved in UX research, Ideation, IA,
                    Userflows, style guide, App UI design and UX testing
                  </p>
                </Slide>

                <a
                  href='https://play.google.com/store/apps/details?id=np.com.webnet.webnetworks'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Slide right delay={200}>
                    <button className='bton bton--md bton--ghost'>
                      View App
                    </button>
                  </Slide>
                </a>
              </section>
            </Col>
            <Col lg={6} md={12}>
              <Fade left>
                <figure className='cardsHolder-image'>
                  <img src={WebNetworks} alt='' />
                </figure>
              </Fade>
            </Col>
          </Row>
        </section>
      </Container>
      <Container>
        <section className='cardsHolder'>
          <Row className='justify-content-between'>
            <Col lg={5} md={12}>
              <section className='cardsHolder-pills'>
                <span>web development</span>
                <span>UI design</span>
                <span>portfolio</span>
              </section>

              <section className='cardsHolder-desc'>
                <Slide left>
                  <h3 className='cardsHolder-desc-title'>Paicho Website</h3>
                </Slide>
                <Slide left delay={100}>
                  <p className='cardsHolder-desc-paragraph'>
                    Paicho Pasal is an agro-based company from province 5
                    established with a mission to best utilize the products from
                    farmers and make Nepal a Self-sustainable country
                    <br />
                    In this project I was involved in UX research, Survays ,
                    Information Architecture and User Flow Design, UI Design,
                    responsive design and full development of the project. front
                    end development.
                  </p>
                </Slide>

                <a
                  href='https://www.paicho.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Slide left delay={200}>
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </Slide>
                </a>
              </section>
            </Col>
            <Col lg={6} md={12}>
              <Fade right>
                <figure className='cardsHolder-image'>
                  <img src={Paicho} alt='' />
                </figure>
              </Fade>
            </Col>
          </Row>
        </section>
      </Container>
      <Container>
        <section className='cardsHolder'>
          <Row className='justify-content-between'>
            <Col lg={5} md={12} xs={{ order: 'last' }}>
              <section className='cardsHolder-pills'>
                <span>web development</span>
                <span>UX Research</span>
                <span>UI Design</span>
              </section>

              <section className='cardsHolder-desc'>
                <Slide right>
                  <h3 className='cardsHolder-desc-title'>All Electricall</h3>
                </Slide>
                <Slide right delay={100}>
                  <p className='cardsHolder-desc-paragraph'>
                    All Electrical provides all electrical services from design,
                    construction/installation, maintenance & repair to emergency
                    24/7 service.
                    <br />
                    In this project I was involves in UX research and survays,
                    requirement gathering, Information Architecture, UI Design
                    and Implementation.
                  </p>
                </Slide>

                <a
                  href='https://www.allelectrical.ca/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Slide right delay={200}>
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </Slide>
                </a>
              </section>
            </Col>
            <Col lg={6} md={12}>
              <Fade left>
                <figure className='cardsHolder-image'>
                  <img src={AllElectricall} alt='' />
                </figure>
              </Fade>
            </Col>
          </Row>
        </section>
      </Container>
      <Container>
        <section className='cardsHolder'>
          <Row className='justify-content-between'>
            <Col lg={5} md={12} xs={{ order: 'last' }}>
              <section className='cardsHolder-pills'>
                <span>web development</span>
                <span>Hotel Booking</span>
              </section>

              <section className='cardsHolder-desc'>
                <Slide right>
                  <h3 className='cardsHolder-desc-title'>
                    Hotel Pauwa Website
                  </h3>
                </Slide>
                <Slide right delay={100}>
                  <p className='cardsHolder-desc-paragraph'>
                    Hotel Pauwa is established to provide the place to stay and
                    take rest with the environment of Nepalese taste, culture
                    and hospitality to all the people across the globe. <br />
                    In this website I was involved in User Interviews and
                    empathy mapping, making user personas, Developing UI and UX
                    testing.
                  </p>
                </Slide>

                <a
                  href='https://www.hotelpauwa.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Slide right delay={200}>
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </Slide>
                </a>
              </section>
            </Col>
            <Col lg={6} md={12}>
              <Fade left>
                <figure className='cardsHolder-image'>
                  <img src={HotelPauwa} alt='' />
                </figure>
              </Fade>
            </Col>
          </Row>
        </section>
      </Container>
      <Fade bottom>
        <Container>
          <section className='cardsHolder'>
            <Row className='justify-content-between'>
              <Col md={6}>
                <figure className='cardsHolder-image'>
                  <img src={Siyasteel} alt='' />
                </figure>
              </Col>
              <Col md={5}>
                <section className='cardsHolder-pills'>
                  <span>web design</span>
                  <span>ecommerce</span>
                </section>

                <section className='cardsHolder-desc'>
                  <h3 className='cardsHolder-desc-title'>SIYA STEEL</h3>
                  <p className='cardsHolder-desc-paragraph'>
                    SIYA STEEL industries pvt. ltd. is a furniture manufacture
                    company that is mainly focused on manufacturing steel based
                    closets and almaris. <br />
                    In this project I was involved in UX research, Information
                    Architecture and User Flow Design, Data Driven decisions
                    making, UI Design and front end development. A design system
                    was implemented in this project for overall consistent
                    architecture of the project.
                  </p>
                  <a
                    href='https://www.siyasteel.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </a>
                </section>
              </Col>
            </Row>
          </section>
        </Container>
      </Fade>
    </section>
  );
};

export default MyWorks;

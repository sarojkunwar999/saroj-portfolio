import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import TunaImage from '../../Images/tunaImage.png';
import HotelPauwa from '../../Images/hotelpauwa.png';
import Sajhamenu from '../../Images/sajhamenu.png';
import AllElectricall from '../../Images/allelectricall.png';
import Paicho from '../../Images/paichopasal.png';
import Rucir from '../../Images/rucir.png';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const MyWorks = () => {
  return (
    <section className='worksWrapper'>
      <Container>
        <h2 className='worksWrapper-title'>Some of My Recent Works</h2>
      </Container>
      <Container>
        <section className='cardsHolder'>
          <Row className='justify-content-between'>
            <Col md={5}>
              <section className='cardsHolder-pills'>
                <span>web development</span>
                <span>QR Ordering</span>
              </section>

              <section className='cardsHolder-desc'>
                <Slide left>
                  <h3 className='cardsHolder-desc-title'>Sajha Menu</h3>
                </Slide>
                <Slide left delay={100}>
                  <p className='cardsHolder-desc-paragraph'>
                    Sajha Menu has one primary objective that is to upsell your
                    food by presenting it in the best way possible. Its
                    simplistic, easy to use, interface creates a fluid
                    experience that keeps your guests engaged and ordering more
                    .
                  </p>
                </Slide>

                <a href='https://www.hotelpauwa.com/' target='_new'>
                  <Slide left delay={200}>
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </Slide>
                </a>
                <a
                  href='https://www.researchgate.net/publication/363480056_Data_Driven_Decision_on_UX_of_QR_code_based_food_ordering_system'
                  target='_new'
                >
                  <Slide left delay={200}>
                    <button className='bton bton--md bton--secondary ms-2'>
                      Case Study
                    </button>
                  </Slide>
                </a>
              </section>
            </Col>
            <Col md={6}>
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
            <Col md={5}>
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
                    increasing their ability to compete in the market
                  </p>
                </Slide>
                <a href='https://www.tunatechnology.com/' target='_new'>
                  <Slide left delay={200}>
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </Slide>
                </a>
              </section>
            </Col>
            <Col md={6}>
              <Fade right>
                <figure>
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
            <Col md={5} xs={{ order: 'last' }}>
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
                    and hospitality to all the people across the globe.
                  </p>
                </Slide>

                <a href='https://www.hotelpauwa.com/' target='_new'>
                  <Slide right delay={200}>
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </Slide>
                </a>
              </section>
            </Col>
            <Col md={6}>
              <Fade left>
                <figure className='cardsHolder-image'>
                  <img src={HotelPauwa} alt='' />
                </figure>
              </Fade>
            </Col>
          </Row>
        </section>
      </Container>
      <Container>
        <section className='cardsHolder'>
          <Row className='justify-content-between'>
            <Col md={5} xs={{ order: 'last' }}>
              <section className='cardsHolder-pills'>
                <span>web development</span>
              </section>

              <section className='cardsHolder-desc'>
                <Slide right>
                  <h3 className='cardsHolder-desc-title'>All ELectricall</h3>
                </Slide>
                <Slide right delay={100}>
                  <p className='cardsHolder-desc-paragraph'>
                    All Electrical is a licensed and insured full-service
                    electrical solutions provider serving the Greater Toronto
                    and Hamilton Area(GTHA).We provide all electrical services
                    from design, construction/installation, maintenance & repair
                    to emergency 24/7 service.
                  </p>
                </Slide>

                <a href='https://www.allelectrical.ca/' target='_new'>
                  <Slide right delay={200}>
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </Slide>
                </a>
              </section>
            </Col>
            <Col md={6}>
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
            <Col md={5}>
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
                  </p>
                </Slide>

                <a href='https://www.paicho.com/' target='_new'>
                  <Slide left delay={200}>
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </Slide>
                </a>
              </section>
            </Col>
            <Col md={6}>
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
            <Col md={5} xs={{ order: 'last' }}>
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
                  </p>
                </Slide>

                <a href='https://rucir.ca/' target='_new'>
                  <Slide right delay={200}>
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </Slide>
                </a>
              </section>
            </Col>
            <Col md={6}>
              <Fade left>
                <figure className='cardsHolder-image'>
                  <img src={Rucir} alt='' />
                </figure>
              </Fade>
            </Col>
          </Row>
        </section>
      </Container>
    </section>
  );
};

export default MyWorks;

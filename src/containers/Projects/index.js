import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TunaImage from '../../Images/tunaImage.png';
import Hotelpauwa from '../../Images/hotelpauwa.png';
import Siyasteel from '../../Images/siyasteel.png';
import Pashupati from '../../Images/pashupati.png';
import SajhaMenu from '../../Images/sajhamenu.png';
import TunaERP from '../../Images/tunaerp.png';
import AllElectricall from '../../Images/allelectricall.png';
import PaichoPasal from '../../Images/paichopasal.png';
import Fade from 'react-reveal/Fade';

const Projects = () => {
  return (
    <section className='worksWrapper projects'>
      <Container>
        <h2 className='worksWrapper-title'>My Featured Projects</h2>
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
                    closets and almaris. We are established with a motto
                    "Remember us for best quality". We have wide varity of
                    products and we guarentee life long quality and service.
                  </p>
                  <a href='https://www.siyasteel.com/' target='_new'>
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
      <Fade bottom>
        <Container>
          <section className='cardsHolder'>
            <Row className='justify-content-between'>
              <Col md={5}>
                <section className='cardsHolder-pills'>
                  <span>web design</span>
                  <span>UI</span>
                  <span>Printformats</span>
                </section>

                <section className='cardsHolder-desc'>
                  <h3 className='cardsHolder-desc-title'>Tuna ERP Solution</h3>
                  <p className='cardsHolder-desc-paragraph'>
                    Manage accounting, inventory, operations, distribution,
                    Human Rresource and more from a single application.
                  </p>
                  <a href='https://tuna-erp.com/' target='_new'>
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </a>
                </section>
              </Col>
              <Col md={6}>
                <figure className='cardsHolder-image'>
                  <img src={TunaERP} alt='' />
                </figure>
              </Col>
            </Row>
          </section>
        </Container>
      </Fade>

      <Fade bottom>
        <Container>
          <section className='cardsHolder'>
            <Row className='justify-content-between'>
              <Col md={6}>
                <figure className='cardsHolder-image'>
                  <img src={AllElectricall} alt='' />
                </figure>
              </Col>
              <Col md={5}>
                <section className='cardsHolder-pills'>
                  <span>web design</span>
                  <span>Lead Generation</span>
                </section>

                <section className='cardsHolder-desc'>
                  <h3 className='cardsHolder-desc-title'>
                    All Electricall Website
                  </h3>
                  <p className='cardsHolder-desc-paragraph'>
                    All Electrical is a licensed and insured full-service
                    electrical solutions provider serving the Greater Toronto
                    and Hamilton Area(GTHA).We provide all electrical services
                    from design, construction/installation, maintenance & repair
                    to emergency 24/7 service.
                  </p>
                  <a href='https://www.allelectrical.ca/' target='_new'>
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
      <Fade bottom>
        <Container>
          <section className='cardsHolder'>
            <Row className='justify-content-between'>
              <Col md={5}>
                <section className='cardsHolder-pills'>
                  <span>web design</span>
                  <span>Portfolio Website</span>
                </section>

                <section className='cardsHolder-desc'>
                  <h3 className='cardsHolder-desc-title'>
                    Paicho Pasal Website
                  </h3>
                  <p className='cardsHolder-desc-paragraph'>
                    Paicho Pasal is an agro based company from province 5
                    established with a mission to best utilize the products from
                    farmers and make Nepal a Self-sustainable country.
                  </p>
                  <a href='https://www.paicho.com/' target='_new'>
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </a>
                </section>
              </Col>
              <Col md={6}>
                <figure className='cardsHolder-image'>
                  <img src={PaichoPasal} alt='' />
                </figure>
              </Col>
            </Row>
          </section>
        </Container>
      </Fade>
      <Fade bottom>
        <Container>
          <section className='cardsHolder'>
            <Row className='justify-content-between'>
              <Col md={6}>
                <figure className='cardsHolder-image'>
                  <img src={Hotelpauwa} alt='' />
                </figure>
              </Col>
              <Col md={5}>
                <section className='cardsHolder-pills'>
                  <span>web design</span>
                  <span>Hotel Booking</span>
                </section>

                <section className='cardsHolder-desc'>
                  <h3 className='cardsHolder-desc-title'>
                    Hotel Pauwa Website
                  </h3>
                  <p className='cardsHolder-desc-paragraph'>
                    Hotel Pauwa is established to provide the place to stay and
                    take rest with the environment of Nepalese taste, culture
                    and hospitality to all the people across the globe.
                  </p>
                  <a href='https://www.hotelpauwa.com/' target='_new'>
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

      <Fade bottom>
        <Container>
          <section className='cardsHolder'>
            <Row className='justify-content-between'>
              <Col md={5}>
                <section className='cardsHolder-pills'>
                  <span>web design</span>
                </section>

                <section className='cardsHolder-desc'>
                  <h3 className='cardsHolder-desc-title'>Sajha Menu</h3>
                  <p className='cardsHolder-desc-paragraph'>
                    Sajha Menu has one primary objective that is to upsell your
                    food by presenting it in the best way possible. Its
                    simplistic, easy to use, interface creates a fluid
                    experience that keeps your guests engaged and ordering more
                  </p>

                  <a href='https://www.sajhamenu.com/' target='_new'>
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </a>
                  <a href='https://www.paicho.com/' target='_new'>
                    <button className='bton bton--md bton--secondary ms-0 ms-sm-2 mt-2 mt-sm-0'>
                      case study
                    </button>
                  </a>
                </section>
              </Col>
              <Col md={6}>
                <figure className='cardsHolder-image'>
                  <img src={SajhaMenu} alt='' />
                </figure>
              </Col>
            </Row>
          </section>
        </Container>
      </Fade>
      <Fade bottom>
        <Container>
          <section className='cardsHolder'>
            <Row className='justify-content-between'>
              <Col md={5} xs={{ order: 'last' }}>
                <section className='cardsHolder-pills'>
                  <span>web design</span>
                </section>

                <section className='cardsHolder-desc'>
                  <h3 className='cardsHolder-desc-title'>Pashupati Printing</h3>
                  <p className='cardsHolder-desc-paragraph'>
                    We have set up a press in Butwal and also in Chitwan and
                    have been doing printing work in Chitwan for the last five
                    years. We have set up a press in Butwal and also in Chitwan
                    and have been doing printing work in Chitwan for the last
                    five year
                  </p>
                  <a href='https://www.pashupatipress.com/' target='_new'>
                    <button className='bton bton--md bton--ghost'>
                      View Project
                    </button>
                  </a>
                </section>
              </Col>
              <Col md={6}>
                <figure className='cardsHolder-image'>
                  <img src={Pashupati} alt='' />
                </figure>
              </Col>
            </Row>
          </section>
        </Container>
      </Fade>
    </section>
  );
};

export default Projects;

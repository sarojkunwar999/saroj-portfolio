import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import TunaImage from '../../Images/tunaImage.png';
import Pashupati from '../../Images/pashupati.png';
import Paicho from '../../Images/paicho.png';

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
                <span>UX Research</span>
                <span>UI Design</span>
                <span>Web Development</span>
              </section>

              <section className='cardsHolder-desc'>
                <h3 className='cardsHolder-desc-title'>Tuna Technology</h3>
                <p className='cardsHolder-desc-paragraph'>
                  Tuna Technology is a cutting-edge tech company that was
                  founded to assist businesses in overcoming obstacles and
                  increasing their ability to compete in the market
                </p>
                <a href='https://www.tunatechnology.com/' target='_new'>
                  <button className='bton bton--md bton--ghost'>
                    View Project
                  </button>
                </a>
              </section>
            </Col>
            <Col md={6}>
              <figure>
                <img src={TunaImage} alt='' />
              </figure>
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
                <h3 className='cardsHolder-desc-title'>Pashupati Printing</h3>
                <p className='cardsHolder-desc-paragraph'>
                  Pashupati Printing Press is a printing and packaging company.
                  A user-friendly website enables users to quickly and easily
                  inquire about the services they need.
                </p>
                <a href='https://www.pashupatipress.com/' target='_new'>
                  <button className='bton bton--md bton--ghost'>
                    View Project
                  </button>
                </a>
              </section>
            </Col>
            <Col md={6}>
              <figure>
                <img src={Pashupati} alt='' />
              </figure>
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
              </section>

              <section className='cardsHolder-desc'>
                <h3 className='cardsHolder-desc-title'>Paicho Ecommerce</h3>
                <p className='cardsHolder-desc-paragraph'>
                  Paicho Pasal is an agro-based company from province 5
                  established with a mission to best utilize the products from
                  farmers and make Nepal a Self-sustainable country
                </p>

                <a href='https://www.paicho.com/' target='_new'>
                  <button className='bton bton--md bton--ghost'>
                    View Project
                  </button>
                </a>
              </section>
            </Col>
            <Col md={6}>
              <figure>
                <img src={Paicho} alt='' />
              </figure>
            </Col>
          </Row>
        </section>
      </Container>
    </section>
  );
};

export default MyWorks;

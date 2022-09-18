import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import TunaImage from '../../Images/tunaImage.png';
import Pashupati from '../../Images/pashupati.png';

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
                <span>web design</span>
              </section>

              <section className='cardsHolder-desc'>
                <h3 className='cardsHolder-desc-title'>Tuna Technology</h3>
                <p className='cardsHolder-desc-paragraph'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae illum tempore veniam aliquam nihil reprehenderit
                  cumque suscipit quaerat. Rerum perferendis quasi fugiat?
                </p>
                <button className='bton bton--md bton--ghost'>
                  View Project
                </button>
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
                <span>web design</span>
              </section>

              <section className='cardsHolder-desc'>
                <h3 className='cardsHolder-desc-title'>Tuna Technology</h3>
                <p className='cardsHolder-desc-paragraph'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae illum tempore veniam aliquam nihil reprehenderit
                  cumque suscipit quaerat. Rerum perferendis quasi fugiat?
                </p>
                <button className='bton bton--md bton--ghost'>
                  View Project
                </button>
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
            <Col md={5} xs={{ order: 'last' }}>
              <section className='cardsHolder-pills'>
                <span>web design</span>
              </section>

              <section className='cardsHolder-desc'>
                <h3 className='cardsHolder-desc-title'>Tuna Technology</h3>
                <p className='cardsHolder-desc-paragraph'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae illum tempore veniam aliquam nihil reprehenderit
                  cumque suscipit quaerat. Rerum perferendis quasi fugiat?
                </p>
                <button className='bton bton--md bton--ghost'>
                  View Project
                </button>
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
            <Col md={5} xs={{ order: 'last' }}>
              <section className='cardsHolder-pills'>
                <span>web design</span>
              </section>

              <section className='cardsHolder-desc'>
                <h3 className='cardsHolder-desc-title'>Tuna Technology</h3>
                <p className='cardsHolder-desc-paragraph'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae illum tempore veniam aliquam nihil reprehenderit
                  cumque suscipit quaerat. Rerum perferendis quasi fugiat?
                </p>
                <button className='bton bton--md bton--ghost'>
                  View Project
                </button>
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
    </section>
  );
};

export default MyWorks;

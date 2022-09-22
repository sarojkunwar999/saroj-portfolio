import React from 'react';
import { Container } from 'react-bootstrap';
import Email from '../Images/emailIcon.png';

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <section className='footerWrapper'>
            <a>
              <img src={Email} alt='' /> <span>sarojkunwar999@gmail.com</span>
            </a>
            <section>
              copyright © {new Date().getFullYear()} . ALl Rights Reserved
            </section>
          </section>
        </Container>
      </footer>
    </>
  );
};

export default Footer;

import React from 'react';
import { Container } from 'react-bootstrap';
import Email from '../Images/emailIcon.png';

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <section className='footerWrapper'>
            <section>
              <img src={Email} alt='' /> <span>pandeylaxmee3@gmail.com</span>
            </section>
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

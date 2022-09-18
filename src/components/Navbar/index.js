import React, { useState } from 'react';
import { CloseButton, Container, Dropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

//image here

import BrandImage from '../../Images/brandImage.png';

const Navbar = () => {
  const [navInfo, setNavInfo] = useState(false);
  return (
    <>
      <Container>
        <nav className=' navWrapper'>
          <figure className='navWrapper__navBrand'>
            <Link to='/'>
              <img src={BrandImage} alt='' />
            </Link>
          </figure>

          <ul className='navWrapper__navItems'>
            <li className='navWrapper__navItems--items'>
              <NavLink
                className={(navData) =>
                  navData.isActive ? 'activeSidebar' : 'notActive'
                }
                to='/'
              >
                Home
              </NavLink>
            </li>

            <li className='navWrapper__navItems--items'>
              <NavLink
                className={(navData) =>
                  navData.isActive ? 'activeSidebar' : 'notActive'
                }
                to='/projects'
              >
                Projects
              </NavLink>
            </li>
            <li className='navWrapper__navItems--items'>
              <NavLink
                className={(navData) =>
                  navData.isActive ? 'activeSidebar' : 'notActive'
                }
                to='/contact'
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <section className='navWrapper__mdNav'>
            <section className='nav_mdInfo'>
              {
                <button className='open_mdNav' onClick={() => setNavInfo(true)}>
                  &#9776;
                </button>
              }
            </section>
            {
              <section
                className={`mdNav_list_container ${navInfo && ' showmdNav'}`}
              >
                <ul className='mdNav_list'>
                  <li>
                    <figure className='mdnavBrand'>
                      <Link to='/'>
                        {/* <img src={BrandImage} alt='' /> */}
                      </Link>
                    </figure>
                    <div className='close_mdNav_container'>
                      <button
                        className='close_mdNav'
                        onClick={() => setNavInfo(false)}
                      >
                        <CloseButton />{' '}
                      </button>
                    </div>
                  </li>

                  <li
                    className='navWrapper__navItems--items'
                    onClick={() => setNavInfo(false)}
                  >
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? 'activeSidebar' : 'notActive'
                      }
                      to='/'
                    >
                      Home
                    </NavLink>
                  </li>
                  <li
                    className='navWrapper__navItems--items'
                    onClick={() => setNavInfo(false)}
                  >
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? 'activeSidebar' : 'notActive'
                      }
                      to='/products'
                    >
                      Products
                    </NavLink>
                  </li>
                  <li
                    className='navWrapper__navItems--items'
                    onClick={() => setNavInfo(false)}
                  >
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? 'activeSidebar' : 'notActive'
                      }
                      to='/gallery'
                    >
                      Gallery
                    </NavLink>
                  </li>
                  <li
                    className='navWrapper__navItems--items'
                    onClick={() => setNavInfo(false)}
                  >
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? 'activeSidebar' : 'notActive'
                      }
                      to='/outlets'
                    >
                      Outlets
                    </NavLink>
                  </li>
                  <li
                    className='navWrapper__navItems--items'
                    onClick={() => setNavInfo(false)}
                  >
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? 'activeSidebar' : 'notActive'
                      }
                      to='/factory'
                    >
                      Factory
                    </NavLink>
                  </li>

                  <li className='navWrapper__navItems--items'>
                    <section role='navDrop'>
                      <Dropdown>
                        <Dropdown.Toggle variant='success' id='dropdown-basic'>
                          About Us
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href='/company-overview'>
                            Company Overview
                          </Dropdown.Item>
                          <Dropdown.Item href='/board-profile'>
                            Board Profile
                          </Dropdown.Item>
                          <Dropdown.Item href='/teams'>Our Team</Dropdown.Item>
                          <Dropdown.Item href='/news'>
                            Paicho On Media{' '}
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </section>
                  </li>
                  <li
                    className='navWrapper__navItems--items'
                    onClick={() => setNavInfo(false)}
                  >
                    {' '}
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? 'activeSidebar' : 'notActive'
                      }
                      to='/contact'
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </section>
            }
          </section>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;

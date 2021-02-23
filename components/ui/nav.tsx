import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsCollection } from '@react-icons/all-files/bs/BsCollection';
import { BsNewspaper } from '@react-icons/all-files/bs/BsNewspaper';
import { BsFillHouseFill } from '@react-icons/all-files/bs/BsFillHouseFill';
import { IconContext } from '@react-icons/all-files/lib';

const NavSection = () => {
  return (
    <>
      <SC.Nav>
        <SC.NavLists>
          <SC.NavItem>
            <Link href="/" passHref>
              <SC.NavLink>
                <SC.Logo src="/Logo.svg" alt="Logo" width={55} height={55} />
              </SC.NavLink>
            </Link>
          </SC.NavItem>

          <SC.NavItem>
            <Link href="/" passHref>
              <SC.NavLink>
                <IconContext.Provider
                  value={{
                    color: 'white',
                    size: '25px',
                    style: { alignContent: 'center' },
                  }}
                >
                  <div>
                    <BsFillHouseFill title="Home" />
                  </div>
                </IconContext.Provider>
                Home
              </SC.NavLink>
            </Link>
          </SC.NavItem>
          <SC.NavItem initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/projects" passHref>
              <SC.NavLink>
                <IconContext.Provider
                  value={{
                    color: 'white',
                    size: '25px',
                    style: { alignContent: 'center' },
                  }}
                >
                  <div>
                    <BsCollection title="Projects" />
                  </div>
                </IconContext.Provider>
                Projects
              </SC.NavLink>
            </Link>
          </SC.NavItem>
          <SC.NavItem initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/blog" passHref>
              <SC.NavLink>
                <IconContext.Provider
                  value={{
                    color: 'white',
                    size: '25px',
                    style: { alignContent: 'center' },
                  }}
                >
                  <div>
                    <BsNewspaper title="Blog" />
                  </div>
                </IconContext.Provider>
                Blog
              </SC.NavLink>
            </Link>
          </SC.NavItem>
        </SC.NavLists>
      </SC.Nav>
    </>
  );
};

export default NavSection;

class SC {
  static Container = styled.div`
    margin: 0 auto;
  `;

  static Nav = styled.nav`
    display: block;
    position: fixed;
    bottom: 0%;
    width: 100%;
    background-color: rgba(180, 104, 128, 1);
    padding: 0.15rem 0;
    filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
    z-index: 999;
    @media screen and (min-width: 1024px) {
      position: static;
      height: 4.688rem;
    }
  `;
  static Logo = styled(Image)`
    display: inline;
    width: fit-content;
    padding: 1rem 0 0 5rem;
    margin: 0.75rem 0;
  `;

  static NavLists = styled(motion.ul)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: inherit;
    margin: auto 0;
    padding: 1rem 0 0;
    list-style-type: none;
    @media screen and (min-width: 960px) {
      margin-right: 7rem;
      padding: 0.25rem 0 0;
    }
  `;

  static NavItem = styled(motion.li)`
    justify-content: space-evenly;
    border-radius: 12px;
    text-align: center;
    width: fit-content;
    padding: 0 0.8rem;
    @media screen and (min-width: 1024px) {
      display: flex;
      justify-content: normal;
      background-color: rgba(0, 0, 0, 0);
      margin: 0 auto;
      height: auto;
      border-radius: 0;
      &:nth-child(1) {
        margin-left: 5rem;
        flex: 5 2 4%;
      }
    }
  `;

  static NavLink = styled(motion.a)`
    font-family: 'Raleway', sans-serif;
    font-size: clamp(0.75rem, 2vw, 1.125rem);
    font-weight: bold;
    text-transform: uppercase;
    color: rgba(248, 249, 255, 1);
    text-decoration: none;
  `;
}

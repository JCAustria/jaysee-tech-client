import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Nav = styled(motion.nav)`
  background-color: rgba(195, 102, 131, 1);
  padding: 0.45rem 0;
  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
  @media screen and (min-width: 1024px) {
    height: 6.75rem;
    /* background-color: rgba(9, 143, 185, 1); */
  }
`;

export const SideBar = styled(motion.aside)`
  position: fixed;
  right: 5vw;
  bottom: 12vh;
  @media screen and (min-width: 768px) { 
    bottom:20vh;
  }
`;
export const NavButton = styled(motion.button)`
  cursor: pointer;
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 50px;
  height: 50px;
  border-radius: 999px;
  z-index: 999;
  border: none;
  background-color: rgba(195, 102, 131, 1);
  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
`;
export const Logo = styled(Image)`
  display:inline;
    width: fit-content;
    margin:0;
`;

export const Bar = styled(motion.div)`
  margin: 0.45rem auto;
  width: 30px;
  height: 2px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
`;
export const NavLists = styled(motion.ul)`
  display: flex;
  height: inherit;
  flex-direction: column;
  margin: auto 0;
  padding: 0;
  list-style-type: none;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const NavItem = styled(motion.li)`
  margin: 0.5rem 0;
  padding: 0.625rem 0.75rem 0.625rem 0.75rem;
  width: 100%;
  height: 75%;
  border-radius: 20px;
  background-color: rgba(195, 102, 131, 1);
  @media screen and (min-width: 1024px) {
    display:flex;
    background-color: rgba(0, 0, 0, 0);
    padding: 0 0.25rem;
    margin: 0, 0.25rem;
    height: auto;
    border-radius: 0; 
    flex: 0.3 0 8%;
    &:nth-child(1){
      margin-left: 1.5rem;
      flex: 5 2 5%;
    }
  }
`;

export const NavLink = styled(motion.a)`
  font-family: 'Raleway', sans-serif;
  font-size: 2.25rem;
  font-weight: lighter;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
`;

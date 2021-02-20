import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
class SC {
  static Container = styled.div`
    margin: 0 auto;
  `;

  static Nav = styled.nav`
    position: fixed;
    bottom: 0%;
    background-color: rgba(180, 104, 128, 1);
    padding: 0.15rem 0;
    width: 100%;
    filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
    @media screen and (min-width: 1024px) {
      position: static;
      height: 75px;
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
    font-size: clamp(16px, 2vw, 20px);
    font-weight: bold;
    text-transform: uppercase;
    color: rgba(248, 249, 255, 1);
    text-decoration: none;
  `;
}

export default SC;

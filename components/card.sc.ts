import styled from "styled-components";
import { motion } from 'framer-motion';
class SC {
  static CoverIMG = styled('img')`
  display:inline;
    width:50%;
    height: auto;
    padding-bottom: 2rem;
    max-height: 400px;
    border-radius:15px;
  `;
  static Card = styled(motion.article)`
    display:grid;
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: 1fr;
    color: #fff;
    background-color: #222;
    border-radius: 15px;
    filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
    @media screen and (min-width:960px) {
    }
  `;
  static Caption = styled(motion.figcaption)`
    display:inline-block;
  `
  static CardTop = styled(motion.figure)`
    display:inline;
    margin: 0;
  `;
  static CardBottom = styled(motion.section)`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom: auto;
  `;
  static Heading = styled(motion.h1)`
    font-family: 'Raleway',sans-serif;
    font-size: 1.2rem;
    text-align:center;
    text-transform: capitalize;
  `;
  static Anchor = styled(motion.a)`
    color: #222;
    text-decoration:none;
    font-size: 1.2rem;
    background-color: #fff;
    padding: 0.8rem;
    margin: 1rem 0;
    border-radius: 15px;
    cursor: pointer;
    @media screen and (min-width: 960px) {
      font-size: 1.6rem;
      margin: 1.5rem;
    }
  `
}
export default SC;

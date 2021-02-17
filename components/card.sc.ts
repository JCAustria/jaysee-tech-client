import styled from "styled-components";
import { motion } from 'framer-motion';
import Image from 'next/image';
class SC {
  static CoverIMG = styled('img')`
  width:100%;
  height: 60%;`
  static Card = styled(motion.div)`
    color: #fff;
    background-color: #222;
    width: 300px;
    height: 300px;
    margin: 1rem 1rem;
  `;
  static Wrapper = styled(motion.div)`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-gap: 1rem;
  `;
  static Heading = styled(motion.h1)`
  font-family: 'Raleway',sans-serif;
  font-size: 1.2rem;
  text-align:center;
  `;
}
export default SC;

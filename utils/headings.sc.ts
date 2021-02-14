import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Title = styled(motion.h1)`
  color: rgba(255, 255, 255, 1);
  font-family: 'Raleway', sans-serif;
  font-size: 4rem;
  font-weight: bold;
  @media screen and (min-width: 1024px) { 
  font-size: 6rem;
  }
`;


export const SubTitle = styled(motion.h2)`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: rgba(255, 255, 255, 1);
  font-size: 2.25rem;
  @media screen and (min-width: 1024px) {
  font-size: 3rem;
  }
`;

export const Heading3 = styled(motion.h3)`
  font-family: 'Raleway', sans-serif;
  font-size: 2.5rem;
`;

export const Heading4 = styled(motion.h4)`
  font-family: 'Raleway', sans-serif;
  font-size: 2.25rem;
`;

export const Heading5 = styled(motion.h5)`
  font-family: 'Raleway', sans-serif;
  font-size: 1.75rem;
`;

export const Heading6 = styled(motion.h6)`
  font-family: 'Raleway', sans-serif;
  font-size: 1.25rem;
`;
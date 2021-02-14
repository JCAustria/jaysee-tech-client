import { motion } from 'framer-motion';
import styled from 'styled-components';
import { SubTitle, Title } from '@/utils/headings.sc';

export const Header = styled(motion.header)`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 2rem 2rem;
  background-color: rgba(9, 143, 185, 1);
  @media screen and (min-width: 1024px) {
  }
`;

export const HeaderName = styled(Title)`
  margin: 0;
  letter-spacing: -3px;
`;
export const HeaderEN = styled(SubTitle)`
  margin: 0;
  letter-spacing: -3px;
`;

export const HeaderJP = styled(HeaderEN)`
  font-family: 'Noto Sans JP', sans-serif;
  margin: 0;
  letter-spacing: -6px;
`;


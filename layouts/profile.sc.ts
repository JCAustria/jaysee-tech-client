import styled from 'styled-components';
import { SubTitle } from '@/utils/headings.sc';
import { TextP } from '@/utils/text-blocks.sc';

export const ProfileHeader = styled(SubTitle)`
  font-family: 'Raleway', sans-serif;
  font-size: 1.4rem;
  @media screen and (min-width:1024px){
    font-size: 1.2rem;
  }
`;

export const ProfileInfo = styled(TextP)`
  font-size: 1rem;
  font-weight: 300;
`;

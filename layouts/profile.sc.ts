import styled from 'styled-components';
import { SubTitle } from '@/utils/headings.sc';
import { TextP } from '@/utils/text-blocks.sc';

class SC {
  static ProfileHeader = styled(SubTitle)`
    font-family: 'Raleway', sans-serif;
    font-size: 1.4rem;
    @media screen and (min-width:1024px){
      font-size: 3rem;
    }
  `;

  static ProfileInfo = styled(TextP)`
    font-size: 1rem;
    font-weight: 300;
    @media screen and (min-width: 1024px){
      font-size: 1.6rem;
      max-width: 1100px;
    }
  `;
}

export default SC;

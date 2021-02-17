import styled from 'styled-components';
import * as U from '@/utils/display.sc';
import SC from './hero.sc';
const Hero = () => {
  return (
    <>
      <SC.Header>
        <SC.HeaderName initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          John Carlo Austria
        </SC.HeaderName>
        <SC.HeaderEN initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Frontend Developer
        </SC.HeaderEN>
        <SC.HeaderJP initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          フロントエンドの開発者
        </SC.HeaderJP>
      </SC.Header>
    </>
  );
};
const HeaderIcons = styled('div')`
  background-color: rgba(9, 143, 185, 1);
  grid-column: span 1 / span 1;
`;
export default Hero;

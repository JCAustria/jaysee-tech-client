import Link from 'next/link';
import SC from './hero.sc';

const Hero = () => {
  return (
    <>
      <SC.Header>
        <SC.Container>
          <SC.HeaderMed>Hi! I am,</SC.HeaderMed>
          <SC.HeaderBig>John Carlo Austria</SC.HeaderBig>
          <SC.HeaderSM> and I am a Frontend Developer!</SC.HeaderSM>
        </SC.Container>
        <SC.ContainerBtn>
          <Link href="/contact" passHref>
            <SC.ContactBtn>Let’s work together</SC.ContactBtn>
          </Link>
        </SC.ContainerBtn>
      </SC.Header>
    </>
  );
};
export default Hero;

import Link from 'next/link';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

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

const textFlex = css`
  display: flex;
  justify-content: center;
  text-align: center;
  @media screen and (min-width: 960px) {
    justify-content: normal;
    text-align: left;
    margin: 0;
  }
`;
const textDefault = css`
  font-family: 'Raleway', sans-serif;
  color: rgba(248, 249, 255, 1);
`;

class SC {
  static Container = styled.div`
    padding: 3rem 1rem;
    margin: 0 auto;
    width: fit-content;
    @media screen and (min-width: 960px) {
      padding: 4rem 0 0 5rem;
      margin: 0;
    }
  `;

  static ContainerBtn = styled.div`
    padding: 2rem 1rem;
    margin: 0 auto;
    width: fit-content;
    @media screen and (min-width: 960px) {
      padding: 1rem 0 15rem 5rem;
      margin: 0;
    }
  `;

  static Header = styled.header`
    background: rgba(9, 98, 126, 1);
    @media screen and (min-width: 1024px) {
      background: linear-gradient(
        90deg,
        rgba(9, 98, 126, 1) 20%,
        rgba(60, 124, 144, 1) 90%
      );
    }
  `;

  static HeaderBig = styled.h1`
    ${textFlex}
    max-width: 500px;
    font-weight: 900;
    letter-spacing: -3px;
    color: rgba(248, 249, 255, 1);
    font-size: clamp(64px, 6vw, 96px);
    margin: 0 auto;
  `;
  static HeaderMed = styled.span`
    ${textFlex}
    color: rgba(231, 231, 231, 1);
    font-size: clamp(36px, 5vw, 48px);
    font-weight: 700;
    letter-spacing: -3px;
    max-width: 320px;
    margin: 0 auto;
  `;

  static HeaderSM = styled.h2`
    display: flex;
    justify-content: center;
    ${textDefault}
    font-size: clamp(16px, 3vw, 36px);
    text-align: center;
    letter-spacing: 1px;
    margin: 0 auto;
    width: clamp(240px, 45vw, 480px);
    @media screen and (min-width: 960px) {
      justify-content: normal;
      text-align: left;
      margin: 0;
    }
  `;

  static ContactBtn = styled.a`
    cursor: pointer;
    display: block;
    ${textDefault}
    font-weight: 600;
    font-size: clamp(14px, 3vw, 31px);
    background: rgba(180, 104, 128, 1);
    padding: 1.2rem;
    border-radius: 10px;
    margin: 4rem auto;
    max-width: 360px;
    filter: drop-shadow(2px 7px 9px rgba(0, 0, 0, 0.35));
    letter-spacing: -0.02em;
    font-style: normal;
    text-decoration: none;
  `;
}

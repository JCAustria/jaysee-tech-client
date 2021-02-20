import styled, { css } from 'styled-components';

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

const marginCenterLR = css`
  margin: 0 auto;
`;

const marginCenterUD = css`
  margin: auto 0;
`;
class SC {
  static Container = styled.div`
    padding: 2rem 1rem;
    ${marginCenterLR}
    width: fit-content;
    @media screen and (min-width: 960px) {
      padding: 4rem 0 0 5rem;
      margin: 0;
    }
  `;

  static ContainerBtn = styled.div`
    padding: 2rem 1rem;
    ${marginCenterLR}
    width: fit-content;
    @media screen and (min-width: 960px) {
      padding: 1rem 0 0 5rem;
      margin: 0;
    }
  `;

  static Header = styled.header`
    background: rgba(9, 98, 126, 1);
    height: 100vh;
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
    ${marginCenterLR}
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
    font-weight: 600;
    ${textDefault}
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

export default SC;

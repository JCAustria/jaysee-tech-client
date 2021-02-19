import styled, { css } from 'styled-components';

const fontFamily = css`
  font-family: 'Merriweather', serif;
`;
const fontColor = css`
  color: rgba(30, 59, 86, 1);
`;

const textLayout = css`
  display: block;
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

const textContainer = css`
  padding: 0.75rem 1rem;
`;
class SC {
  static Contents = styled.section`
    ${fontFamily}
    ${fontColor}
    ${textContainer}
    background-color: rgba(248,249,255,1);
    margin: 0;
  `;
  static Header = styled.h2`
    ${textLayout}
    letter-spacing: -0.8px;
    font-size: clamp(24px, 4vw, 72px);
    font-weight: 900;
    max-width: 320px;
    @media screen and (min-width: 1024px) {
      padding: 2rem 0;
      margin: 0;
      max-width: 750px;
    }
  `;

  static Info = styled.p`
    ${textLayout}
    ${textContainer}
    font-weight: 400;
    letter-spacing: 0.5px;
    text-align: left;
    font-size: clamp(16px, 2vw, 24px);
    @media screen and (min-width: 1024px) {
      margin: 0;
      max-width: 800px;
    }
  `;
  static Question = styled.span`
    ${textLayout}
    padding: 1.75rem 1.5rem;
    font-weight: 600;
    font-size: clamp(18px, 2vw, 36px);
  `;
}

export default SC;

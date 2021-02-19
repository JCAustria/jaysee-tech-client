import styled, { css } from 'styled-components';

const fontFamily = css`
  font-family: 'Merriweather', serif;
`;
const fontColor = css`
  color: rgba(30,59,86,1);
`;

const textLayout = css`
  display: block;
  margin: 1.75rem auto;
  text-align:center;
`

const container = css`
  padding: 0 1.5rem;
`
class SC {
  static Contents = styled.section`
    ${fontFamily}
    ${fontColor}
    background-color: rgba(248,249,255,1);
    height: 100vh;
    margin: 0;
  `
  static Header = styled.h2`
    ${textLayout}
    font-weight: 900;
  `;

  static Info = styled.p`
    ${textLayout}
    ${container}
    font-weight: 400;
    text-align: left;
    @media screen and (min-width: 1024px){
      max-width: 1100px;
    }
  `;
  static Question = styled.span`
      ${textLayout}
      ${container}
  `;
}

export default SC;

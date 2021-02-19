import styled from 'styled-components';
// import U from 'utils/headings.sc';
class SC {
  static Container = styled.div`
    padding: 2rem 1rem;
    margin: 0 auto;
    width: fit-content;
    @media screen and (min-width: 960px) {
      padding: 4rem  0 0 5rem;
      margin: 0;
    }
  `;

  static Header = styled.header`
    height: 100vh;
    margin: 0;
    background:linear-gradient(180deg, rgba(9,143,185,1) 0%, rgba(143,174,184,1) 100%);
  `;
  static HeaderBig = styled.h1`
    display:flex;
    justify-content:center;
    text-align:center;
    max-width: 500px;
    margin-right: 0;
    font-weight: 900;
    letter-spacing: -3px;
    color: rgba(248,249,255,1);
    font-size: clamp(64px, 6vw, 96px);
    margin: 0 auto;
    @media screen and (min-width: 960px) {
      justify-content: normal;
      text-align: left;
      margin: 0;
    }
  `;
  static HeaderMed = styled.span`
    display: flex;
    justify-content:center;
    text-align:center;
    color: rgba(231, 231, 231, 1);
    font-family: 'Raleway', sans-serif;
    font-size: clamp(36px, 5vw, 48px);
    font-weight: 700;
    letter-spacing: -3px;
    max-width:320px;
    margin: 0 auto;
    @media screen and (min-width: 960px) {
      justify-content: normal;
      text-align:left;
      margin: 0 ;
    }
  `;

  static HeaderSM = styled.h2`
    display: flex;
    justify-content: center;
    color: rgba(248,249,255,1);
    font-family: 'Raleway', sans-serif;
    font-size: clamp(16px, 3vw, 36px);
    text-align: center;
    letter-spacing: 1px;
    margin: 0 auto;
    width: clamp(240px, 45vw, 480px);
    @media screen and (min-width: 960px) {
      justify-content: normal;
      text-align:left;
      margin: 0;
    }
  `;

  static ContactBtn = styled.a`
    cursor: pointer;
    display: block;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: clamp(14px, 3vw, 31px);
    color: rgba(248,249,255,1);
    background: rgba(180,104,128,1);
    padding: 1.2rem;
    border-radius: 10px;
    margin: 4rem auto;
    max-width: 360px;
    filter: drop-shadow(2px 7px 9px rgba(0, 0, 0, 0.35));
  `;

}

export default SC;

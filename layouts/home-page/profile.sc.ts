import styled from 'styled-components';

class SC {
  static ProfileContents = styled.section`
    background-color: rgba(248,249,255,1);
    height: 100vh;
    margin: 0;
  `
  static ProfileHeader = styled.h2`
    font-family: 'Raleway', sans-serif;
    margin: 0;
  `;

  static ProfileInfo = styled.p`
    font-weight: 300;
    @media screen and (min-width: 1024px){
      max-width: 1100px;
    }
  `;
}

export default SC;

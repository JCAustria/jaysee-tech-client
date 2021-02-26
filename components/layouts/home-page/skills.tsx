import { createMedia } from '@artsy/fresnel';
import styled from '@emotion/styled';
import { DiCss3 } from '@react-icons/all-files/di/DiCss3';
import { DiHtml5 } from '@react-icons/all-files/di/DiHtml5';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { IconContext } from '@react-icons/all-files/lib';
import { SCProps } from 'types/styled-component';
import Card from 'components/ui/card';
// TODO: Make code cleaner
// TODO: Reduce line of codes
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 320,
    md: 960,
    lg: 1024,
    xl: 1196,
  },
});
const SkillsSection = () => {
  return (
    <>
      <Content>
        <Container>
          <Article>
            <HeadingBig>Skills</HeadingBig>
            <ParagraphBig>
              With my knowledge of these technologies. We can create beautiful,
              responsive websites that will help improve your business.
            </ParagraphBig>
            <ParagraphMedium>
              If you have a good business, then you deserve a good website that
              will help your business grow! That is why you would want good
              developers that will make it true!
            </ParagraphMedium>
          </Article>
          <Card>
            <MediaContextProvider>
              <Media lessThan="md">
                <CardContentMobile />
              </Media>
            </MediaContextProvider>
            <MediaContextProvider>
              <Media greaterThan="md">
                <CardContentDesktop />
              </Media>
            </MediaContextProvider>
          </Card>
        </Container>
      </Content>
    </>
  );
};
const CardContentDesktop = () => {
  return (
    <CardContainer>
      <IconContext.Provider value={{ size: '120px' }}>
        <IconContainer>
          <DiHtml5 color="rgb(227,76,38)" title="Html5 Logo" />
          <ParagraphBig>HTML5</ParagraphBig>
        </IconContainer>
        <IconContainer>
          <DiCss3 color="rgb(41,101,241)" title="CSS3 Logo" />
          <ParagraphBig>CSS3</ParagraphBig>
        </IconContainer>
        <IconContainer>
          <DiReact color="rgb(96,218,251)" title="React Logo" />
          <ParagraphBig>React</ParagraphBig>
        </IconContainer>
        <IconContainer>
          <DiJavascript1 color="rgb(214,218,79)" title="Javascript Logo" />
          <ParagraphBig>JavaScript</ParagraphBig>
        </IconContainer>
      </IconContext.Provider>
    </CardContainer>
  );
};

const CardContentMobile: React.FC = () => {
  return (
    <IconContext.Provider value={{ size: '80px' }}>
      <IconHTML>
        <ParagraphBig>HTML5</ParagraphBig>
      </IconHTML>
      <IconContainer>
        <DiCss3 color="rgb(41,101,241)" title="CSS3 Logo" />
        <ParagraphBig>CSS3</ParagraphBig>
      </IconContainer>
      <IconContainer>
        <DiReact color="rgb(96,218,251)" title="React Logo" />
        <ParagraphBig>React</ParagraphBig>
      </IconContainer>
      <IconContainer>
        <DiJavascript1 color="rgb(214,218,79)" title="Javascript Logo" />
        <ParagraphBig>JavaScript</ParagraphBig>
      </IconContainer>
    </IconContext.Provider>
  );
};
const IconHTML: React.FC = ({ children }) => {
  return (
    <IconContainer>
      <DiHtml5 color="rgb(227,76,38)" title="Html5 Logo" />
      {children}
    </IconContainer>
  );
};

export default SkillsSection;

// display: inline-block;
// padding: 2rem 3rem;
// height: fit-content;
// border-radius: 20px;
// margin: 0 auto;
// filter: drop-shadow(0px 15px 16px rgba(0, 0, 0, 0.25));
// @media screen and (min-width: 60em) {
//   padding: 2rem;
// }

const Content = styled.section`
  background-color: rgba(230, 171, 35, 1);
`;
const HeadingBig = styled.h1`
  font-family: 'Roboto Mono', monospace;
  font-size: clamp(36px, 4vw, 96px);
  color: rgba(30, 59, 86, 1);
  margin: 0;
`;
const Container = styled.div<SCProps>`
  display: grid;
  padding: 2rem 0;
  @media screen and (min-width: 60em) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const CardContainer = styled.div`
  padding: 1rem;
  margin: 0 auto;
`;
const IconContainer = styled.div`
  display: inline-grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
`;

const ParagraphBig = styled.p<SCProps>`
  color: rgba(30, 59, 86, 1);
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  font-size: clamp(18px, 5vw, 48px);
`;
const ParagraphMedium = styled.p<SCProps>`
  color: rgba(30, 59, 86, 1);
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  font-size: clamp(0.8rem, 4vw, 1.25rem);
`;
const Article = styled.article<SCProps>`
  padding: 2rem;
  text-align: center;
  @media screen and (min-width: 60em) {
    text-align: left;
    width: 46.875rem;
  }
`;

import styled from '@emotion/styled';

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
        </Container>
      </Content>
    </>
  );
};
export default SkillsSection;

const Content = styled.section`
  background-color: rgba(230, 171, 35, 1);
`;
const HeadingBig = styled.h1`
  font-family: 'Roboto Mono', monospace;
  font-size: clamp(36px, 4vw, 96px);
  color: rgba(30, 59, 86, 1);
  margin: 0;
`;
const Container = styled.div`
  display: grid;
  padding: 2rem 0;
  @media screen and (min-width: 60em) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ParagraphBig = styled.p`
  color: rgba(30, 59, 86, 1);
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  font-size: clamp(18px, 5vw, 48px);
`;
const ParagraphMedium = styled.p`
  color: rgba(30, 59, 86, 1);
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  font-size: clamp(0.8rem, 4vw, 1.25rem);
`;
const Article = styled.article`
  padding: 2rem;
  text-align: center;
  @media screen and (min-width: 60em) {
    text-align: left;
    width: 46.875rem;
  }
`;

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { SCProps } from 'types/styled-component';
import { createMedia } from '@artsy/fresnel';
import { DiHtml5 } from '@react-icons/all-files/di/DiHtml5';
import { DiCss3 } from '@react-icons/all-files/di/DiCss3';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { IconContext } from '@react-icons/all-files/lib';

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
      <Skills.Content>
        <Skills.Container>
          <Skills.Article>
            <Skills.HeadingBig>Skills</Skills.HeadingBig>
            <Skills.ParagraphBig>
              With my knowledge of these technologies. We can create beautiful,
              responsive websites that will help improve your business.
            </Skills.ParagraphBig>
            <Skills.ParagraphMedium>
              If you have a good business, then you deserve a good website that
              will help your business grow! That is why you would want good
              developers that will make it true!
            </Skills.ParagraphMedium>
          </Skills.Article>
          <Skills.Card>
            <MediaContextProvider>
              <Media lessThan="md">
                <Skills.CardContainer>
                  <IconContext.Provider value={{ size: '3.25rem' }}>
                    <div>
                      <DiHtml5 color="darkorange" title="Html5 Logo" />
                    </div>
                    <div>
                      <DiCss3 color="blue" title="CSS3 Logo" />
                    </div>
                    <div>
                      <DiReact color="lightblue" title="React Logo" />
                    </div>
                  </IconContext.Provider>
                </Skills.CardContainer>
              </Media>
              <Media greaterThan="md">
                <Skills.CardContainer>
                  <IconContext.Provider value={{ size: '4.25rem' }}>
                    <div>
                      <DiHtml5 color="darkorange" title="Html5 Logo" />
                    </div>
                    <div>
                      <DiCss3 color="blue" title="CSS3 Logo" />
                    </div>
                    <div>
                      <DiReact color="lightblue" title="React Logo" />
                    </div>
                  </IconContext.Provider>
                </Skills.CardContainer>
              </Media>
            </MediaContextProvider>
          </Skills.Card>
        </Skills.Container>
      </Skills.Content>
    </>
  );
};

export default SkillsSection;

class Skills {
  static Card = styled.div`
    display: inline-block;
    /* width: 16.25rem;
    height: 17.5rem; */
    height: fit-content;
    background: rgba(248, 249, 255, 1);
    border: 4px solid rgba(30, 59, 86, 1);
    border-radius: 20px;
    margin: 0 auto;
    filter: drop-shadow(0px 15px 16px rgba(0, 0, 0, 0.25));
    @media screen and (min-width: 60em) {
      padding: 2rem;
    }
  `;

  static CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
  `;
  static Content = styled.section`
    background-color: rgba(230, 171, 35, 1);
  `;
  static HeadingBig = styled.h1`
    font-family: 'Roboto Mono', monospace;
    font-size: clamp(36px, 4vw, 96px);
    color: rgba(30, 59, 86, 1);
    margin: 0;
  `;
  static Container = styled.div<SCProps>`
    display: grid;
    padding: 2rem 0;
    @media screen and (min-width: 60em) {
      grid-template-columns: repeat(2, 1fr);
    }
  `;

  static ParagraphBig = styled.p<SCProps>`
    color: rgba(30, 59, 86, 1);
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;
    font-size: clamp(18px, 5vw, 48px);
  `;
  static ParagraphMedium = styled.p<SCProps>`
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;
    font-size: clamp(0.8rem, 4vw, 1.25rem);
  `;
  static Article = styled.article<SCProps>`
    padding: 2rem;
    text-align: center;
    @media screen and (min-width: 60em) {
      text-align: left;
      width: 46.875rem;
    }
  `;
}

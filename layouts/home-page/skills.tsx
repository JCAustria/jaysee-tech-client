/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import SC from './skills.sc';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { DiHtml5 } from '@react-icons/all-files/di/DiHtml5';
import { DiCss3 } from '@react-icons/all-files/di/DiCss3';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';
import { SiNextDotJs } from '@react-icons/all-files/si/SiNextDotJs';
import { IconContext } from '@react-icons/all-files/lib';
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss';

const SkillsSection = () => {
  return (
    <>
      <SC.SkillsContent>
        <SC.Container padding="2rem">
          <SC.HeadingBig>Skills</SC.HeadingBig>
          <SC.GridContainer gridCols="0.35fr 1fr">
            <SC.TechSkillsCard>
              <IconContext.Provider value={{ size: '120' }}>
                <SC.Container padding="2rem 2rem">
                  <SC.IconContainer>
                    <DiHtml5 color="rgb(277,76,38)" title="Html5 Icon" />
                  </SC.IconContainer>

                  <SC.IconContainer>
                    <DiCss3 color="rgb(38, 77, 228)" title="CSS3 Icon" />
                  </SC.IconContainer>

                  <SC.IconContainer>
                    <DiJavascript1
                      color="rgb(240, 219, 79)"
                      title="JavaScript Logo"
                    />
                  </SC.IconContainer>

                  <SC.IconContainer>
                    <DiReact color="rgb(96,219,251)" title="React.js Logo" />
                  </SC.IconContainer>

                  <SC.IconContainer>
                    <SiNextDotJs color="rgb(0,0,0)" title="Next.js Logo" />
                  </SC.IconContainer>

                  <SC.IconContainer>
                    <SiTailwindcss
                      color="rgba(27,172,185,1)"
                      title="Next.js Logo"
                    />
                  </SC.IconContainer>
                </SC.Container>
              </IconContext.Provider>
            </SC.TechSkillsCard>

            <SC.Container margin="4rem 0" widthVal="870px">
              <SC.Paragraph
                fontWeight="bold"
                fontSizeMin="18px"
                fontSizeInitial="4vw"
                fontSizeMax="48px"
              >
                With my knowledge of these technologies. We can create
                beautiful, responsive websites that will help improve your
                business.
              </SC.Paragraph>
              <SC.Paragraph
                fontWeight="bold"
                fontSizeMin="14px"
                fontSizeInitial="2vw"
                fontSizeMax="24px"
              >
                If you have a good business, then you deserve a good website
                that will help your business grow! That is why you would want
                good developers that will make it true!
              </SC.Paragraph>
            </SC.Container>
          </SC.GridContainer>
        </SC.Container>
      </SC.SkillsContent>
    </>
  );
};

export default SkillsSection;

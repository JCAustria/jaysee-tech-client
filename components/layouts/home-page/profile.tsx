import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ProfileSection = () => {
  return (
    <Profile.Contents>
      <Profile.Question>Or wanna get straight to the point?</Profile.Question>
      <Profile.Header>Who am I?</Profile.Header>
      <Profile.Info>
        I am John Carlo Austria and I am a frontend developer based in the
        philippines, I specialize in creating websites using HTML,CSS ,
        JavaScript and React
      </Profile.Info>
      <Profile.Header>What am I currently Doing?</Profile.Header>
      <Profile.Info>
        I am currently studying at a Public School in the Philippines, as I am
        learning in this school, I am also teaching myself web development
        online.
      </Profile.Info>
      <Profile.Header>Are you currently looking for work?</Profile.Header>
      <Profile.Info>
        As I have said, I am currently studying and I only work on this website
        whenever I have the free time. I can make websites, but only when I have
        time for it.
      </Profile.Info>
    </Profile.Contents>
  );
};

export default ProfileSection;

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
class Profile {
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

import styled from 'styled-components';
import NavSection from 'components/ui/nav';
import FooterSection from 'components/ui/footer';
import Hero from 'layouts/home-page/hero';
import ProfileSection from 'layouts/home-page/profile';
import SkillsSection from 'layouts/home-page/skills';
import Head from 'next/head';

function Home(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Personal Portfolio of John Carlo Austria"
        />
        <link rel="canonical" href="https://jaysee.tech" />
        <title>Jaysee | Frontend Developer</title>
      </Head>
      <NavSection />
      <Hero />
      <MainContents>
        <SkillsSection />
        <ProfileSection />
      </MainContents>
      <FooterSection />
    </>
  );
}
export default Home;

export const MainContents = styled.main`
  font-family: 'Raleway', sans-serif;
`;

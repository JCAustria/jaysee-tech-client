import styled from '@emotion/styled';
import { css, ThemeProvider } from '@emotion/react';
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
      <ThemeProvider theme={themeTypography}>
        <MainContents>
          <Hero />
          <SkillsSection />
          <ProfileSection />
          <FooterSection />
        </MainContents>
      </ThemeProvider>
    </>
  );
}

export default Home;

// Reusable CSS
const themeTypography = {
  fontFamily: {
    fontSans: "'Raleway',sans-serif",
    fontSerif: "'Merriweather',sans-serif",
    fontMonospace: "'Roboto Mono', monospace",
  },
  fontColors: {
    color: 'rgba(35, 38, 91, 1)',
  },
};

const paddingSm = css`
  padding: 1rem;
`;
const paddingMd = css`
  padding: 1.25rem;
`;
const paddingLg = css`
  padding: 2rem;
`;

const MainContents = styled.main``;

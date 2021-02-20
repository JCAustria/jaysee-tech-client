import { MainContents } from 'components/index.sc';
import NavSection from 'components/nav';
import FooterSection from 'layouts/home-page/footer';
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

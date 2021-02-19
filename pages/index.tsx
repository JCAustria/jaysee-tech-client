import Head from 'next/head';
import Hero from 'layouts/home-page/hero';
import NavSection from 'components/nav';
import SkillsSection from 'layouts/home-page/skills';
import ProfileSection from 'layouts/home-page/profile';
import FooterSection from 'layouts/home-page/footer';

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
      <main>
        <Hero />
        <SkillsSection />
        <ProfileSection />
      </main>
      <FooterSection />
    </>
  );
}

export default Home;

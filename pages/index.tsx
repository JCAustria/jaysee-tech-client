import Head from 'next/head';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Hero from '@/layouts/hero';
import NavSection from '@/layouts/nav';
import ProfileSection from '@/layouts/profile';

function Home() {
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
      <Main>
        <ProfileSection />
      </Main>
    </>
  );
}

const Main = styled(motion.main)`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 2rem 2rem;
  background-color: rgba(9, 143, 185, 1);
`;

export default Home;

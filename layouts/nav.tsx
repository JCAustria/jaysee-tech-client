import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SC from './nav.sc';

// TODO: Tidy up code
const NavSection = () => {
  const breakpoint = 960;
  const [tablet, setTablet] = useState<boolean | string>('undefined');

  useEffect(() => {
    const handleResizeWindow = () =>
      setTablet(window.innerWidth > breakpoint ? true : false);
    handleResizeWindow();
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return typeof tablet !== 'undefined' ? (
    <>
      {tablet ? (
        <SC.Nav>
          <SC.NavLists>
            <SC.NavItem>
              <Link href="/" passHref>
                <SC.NavLink>
                  <SC.Logo src="/Logo.svg" alt="Logo" width={50} height={50} />
                </SC.NavLink>
              </Link>
            </SC.NavItem>
            <SC.NavItem initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Link href="/projects" passHref>
                <SC.NavLink>Projects</SC.NavLink>
              </Link>
            </SC.NavItem>
            <SC.NavItem initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Link href="/blog" passHref>
                <SC.NavLink>Blog</SC.NavLink>
              </Link>
            </SC.NavItem>
          </SC.NavLists>
        </SC.Nav>
      ) : (
        <NavSideBar />
      )}
    </>
  ) : null;
};

const NavSideBar = () => {
  const [isTap, setTap] = useState(false);
  const handleClick = () => setTap(!isTap);
  useEffect(() => {}, []);
  const NavButton = () => {
    return (
      <>
        <SC.NavButton
          onClick={handleClick}
          whileTap={{ scale: 1.2 }}
          whileHover={{ scale: 1.1 }}
        >
          <SC.Bar />
          <SC.Bar />
          <SC.Bar />
        </SC.NavButton>
      </>
    );
  };
  return (
    <>
      <NavButton />
      <AnimatePresence initial={false}>
        {isTap && (
          <SC.SideBar>
            <SC.NavLists>
              <SC.NavItem
                initial={{ opacity: 0, y: 200 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{ opacity: 0, y: 200 }}
              >
                <Link href="/" passHref>
                  <SC.NavLink>Home</SC.NavLink>
                </Link>
              </SC.NavItem>
              <SC.NavItem
                initial={{ opacity: 0, y: 200 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{ opacity: 0, y: 200 }}
              >
                <Link href="/projects" passHref>
                  <SC.NavLink>Projects</SC.NavLink>
                </Link>
              </SC.NavItem>
              <SC.NavItem
                initial={{ opacity: 0, y: 200 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1 },
                }}
                exit={{ opacity: 0, y: 200, transition: { delay: 0.1 } }}
              >
                <Link href="/blog" passHref>
                  <SC.NavLink>Blog</SC.NavLink>
                </Link>
              </SC.NavItem>
            </SC.NavLists>
          </SC.SideBar>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavSection;

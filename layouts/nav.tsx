import { AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import * as SC from './nav.sc';
const MetaData = {
  Logo: {
    src: '/Logo.svg',
    desc: 'Logo',
  },
};

const Routes = {
  projects: {
    link: '/projects',
    routeName: 'Projects',
  },
  blog: {
    link: '/blog',
    routeName: 'Blog',
  },
};
const NavSection = () => {
  const { projects, blog } = Routes;
  const { src, desc } = MetaData.Logo;

  const isDesktopOrLaptop = useMediaQuery({
    minWidth: 1024,
  });

  return (
    <>
      {isDesktopOrLaptop ? (
        <SC.Nav>
          <SC.NavLists>
            <SC.NavItem>
              <SC.NavLink href="/">
                <SC.Logo src={src} alt={desc} width={90} height={90} />
              </SC.NavLink>
            </SC.NavItem>
            <SC.NavItem initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <SC.NavLink href={projects.link}>{projects.routeName}</SC.NavLink>
            </SC.NavItem>
            <SC.NavItem initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <SC.NavLink href={blog.link}>{blog.routeName}</SC.NavLink>
            </SC.NavItem>
          </SC.NavLists>
        </SC.Nav>
      ) : (
        <NavSideBar />
      )}
    </>
  );
};

const NavSideBar = () => {
  const { projects, blog } = Routes;
  const [isTap, setTap] = useState(false);
  const NavButton = () => {
    return (
      <>
        <SC.NavButton
          onClick={() => setTap(!isTap)}
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
                <SC.NavLink href={projects.link}>
                  {projects.routeName}
                </SC.NavLink>
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
                <SC.NavLink href={blog.link}>{blog.routeName}</SC.NavLink>
              </SC.NavItem>
            </SC.NavLists>
          </SC.SideBar>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavSection;

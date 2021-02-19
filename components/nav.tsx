import Link from 'next/link';
import SC from './nav.sc';
import { BsCollection } from '@react-icons/all-files/bs/BsCollection';
import { BsNewspaper } from '@react-icons/all-files/bs/BsNewspaper';
import { BsFillHouseFill } from '@react-icons/all-files/bs/BsFillHouseFill';
import { IconContext } from '@react-icons/all-files/lib';

const NavSection = () => {
  return (
    <>
      <SC.Nav>
        <SC.NavLists>
          <SC.NavItem>
            <Link href="/" passHref>
              <SC.NavLink>
                <SC.Logo src="/Logo.svg" alt="Logo" width={55} height={55} />
              </SC.NavLink>
            </Link>
          </SC.NavItem>

          <SC.NavItem>
            <Link href="/" passHref>
              <SC.NavLink>
                <IconContext.Provider
                  value={{
                    color: 'white',
                    size: '25px',
                    style: { alignContent: 'center' },
                  }}
                >
                  <div>
                    <BsFillHouseFill title="Home" />
                  </div>
                </IconContext.Provider>
                Home
              </SC.NavLink>
            </Link>
          </SC.NavItem>
          <SC.NavItem initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/projects" passHref>
              <SC.NavLink>
                <IconContext.Provider
                  value={{
                    color: 'white',
                    size: '25px',
                    style: { alignContent: 'center' },
                  }}
                >
                  <div>
                    <BsCollection title="Projects" />
                  </div>
                </IconContext.Provider>
                Projects
              </SC.NavLink>
            </Link>
          </SC.NavItem>
          <SC.NavItem initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/blog" passHref>
              <SC.NavLink>
                <IconContext.Provider
                  value={{
                    color: 'white',
                    size: '25px',
                    style: { alignContent: 'center' },
                  }}
                >
                  <div>
                    <BsNewspaper title="Blog" />
                  </div>
                </IconContext.Provider>
                Blog
              </SC.NavLink>
            </Link>
          </SC.NavItem>
        </SC.NavLists>
      </SC.Nav>
    </>
  );
};

export default NavSection;

import Link from 'next/link';
import SC from './nav.sc';
import { BsCollection } from '@react-icons/all-files/bs/BsCollection';
import { BsNewspaper } from '@react-icons/all-files/bs/BsNewspaper';
import { BsFillHouseFill } from '@react-icons/all-files/bs/BsFillHouseFill';

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
                <SC.Container>
                  <BsFillHouseFill />
                </SC.Container>
                Home
              </SC.NavLink>
            </Link>
          </SC.NavItem>
          <SC.NavItem initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/projects" passHref>
              <SC.NavLink>
                <SC.Container>
                  <BsCollection />
                </SC.Container>
                Projects
              </SC.NavLink>
            </Link>
          </SC.NavItem>
          <SC.NavItem initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/blog" passHref>
              <SC.NavLink>
                <SC.Container>
                  <BsNewspaper />
                </SC.Container>
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

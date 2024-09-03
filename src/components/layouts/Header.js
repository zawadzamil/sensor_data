import Link from 'next/link';
import Image from 'next/image';
import { PATH_HOME } from '@/helpers/Slugs';

// import LogoFull from "public/logo-full.webp";
import NavMenu from '@/components/layouts/NavMenu';
import MobileMenu from '@/components/layouts/MobileMenu';
import { Typography } from '../shared/typography';

const Header = () => {
  return (
    <header className="panel px-[120px] py-[16px] sticky top-0 w-full z-50">
      <div className="h-[80px] flex">
        <Link href={PATH_HOME} title="Home page link"
        className='flex h-full items-center me-2'
        >
          <Typography.SubHeading>ModelTest.com</Typography.SubHeading>
        </Link>

        <div className="h-full w-full">
          <NavMenu />
          {/* <MobileMenu/> */}
        </div>
      </div>
    </header>
  );
};

export default Header;

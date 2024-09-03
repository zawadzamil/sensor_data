import LeftNavItems from './LeftNavItems';
import RightNavItems from './RightNavItems';

const NavMenu = () => {
  return (
    <nav className="hidden lg:flex w-full h-full items-center justify-between">
      <LeftNavItems />
      <RightNavItems />
    </nav>
  );
};

export default NavMenu;

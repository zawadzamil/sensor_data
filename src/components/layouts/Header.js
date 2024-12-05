// import LogoFull from "public/logo-full.webp";

import {Typography} from "@/components/shared/typography";
import {Icons} from "@/assets/icons";

const Header = () => {
  return (
      <header className="bg-neutral shadow-md ">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left - Title */}
          <Typography.Heading className="text-[3rem] text-white"> Sensor Data</Typography.Heading>

          {/* Right - Profile Icon */}
          <div className="flex items-center space-x-4">
            {/* Profile Icon */}
            <Icons.Profile/>
          </div>
        </div>
      </header>
  );
};

export default Header;

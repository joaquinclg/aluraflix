import { Link } from "react-router-dom";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background backdrop-blur-sm">
      <div className="flex w-full items-center justify-between px-4 py-6">
        <div className="">
          <Link to={"/"} className="text-2xl font-bold">
            AluraFlix
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

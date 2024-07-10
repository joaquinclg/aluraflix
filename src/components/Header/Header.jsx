import { Link } from "react-router-dom";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="sticky top-0 w-full backdrop-blur-sm">
      <div className="w-full px-4 flex justify-between items-center py-6">
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

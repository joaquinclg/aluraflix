import { navbarItems } from "../../constants/navbar-items";

const Navbar = () => {
  return (
    <nav className="flex space-x-2 items-center">
      {navbarItems.map((item, index) => (
        <button
          key={index}
          className="py-1 px-4 sm:py-2 rounded-lg border text-sm hover:bg-muted transition duration-200"
        >
          <p className="sm:hidden">+</p>
          <p className="max-sm:hidden">{item.label}</p>
        </button>
      ))}
    </nav>
  );
};

export default Navbar;

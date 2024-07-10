import { navbarItems } from "../../constants/navbar-items";

const Navbar = () => {
  return (
    <nav className="flex items-center space-x-2">
      {navbarItems.map((item, index) => (
        <button
          key={index}
          className="rounded-lg border px-4 py-1 text-sm transition duration-200 hover:bg-muted sm:py-2"
        >
          <p className="md:hidden">+</p>
          <p className="max-md:hidden">{item.label}</p>
        </button>
      ))}
    </nav>
  );
};

export default Navbar;

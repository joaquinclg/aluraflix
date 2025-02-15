import useFormModal from "../../hooks/useFormModal";

const Navbar = () => {
  const { openModal } = useFormModal();

  return (
    <nav className="flex items-center space-x-2">
      <button
        className="rounded-lg border px-4 py-1 text-sm transition duration-200 hover:bg-muted sm:py-2"
        onClick={openModal}
      >
        <p className="md:hidden">+</p>
        <p className="max-md:hidden">Nueva pelicula</p>
      </button>
    </nav>
  );
};

export default Navbar;

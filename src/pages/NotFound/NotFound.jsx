import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center">
      <div>
        <h2 className="text-5xl sm:text-7xl font-semibold text-center">404</h2>
        <p className="text-lg sm:text-2xl text-center mt-2">
          Página no encontrada
        </p>
        <div className="mt-5 text-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

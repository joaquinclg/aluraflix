import PropTypes from "prop-types";

const Card = ({ video }) => {
  return (
    <li
      key={video.id}
      className="relative aspect-video rounded-lg overflow-hidden w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96 2xl:w-108 bg-slate-700"
    >
      <img
        className="absolute inset-0 w-full h-full object-cover object-center bg-slate-700"
        src={video.imagen}
        alt={video.titulo}
      />
    </li>
  );
};

Card.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    titulo: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    categoria: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;

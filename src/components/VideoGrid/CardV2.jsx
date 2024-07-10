import PropTypes from "prop-types";

const Card = ({ video }) => {
  return (
    <li
      key={video.id}
      className="relative aspect-video rounded-lg overflow-hidden  bg-slate-700"
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
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    categoria: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;

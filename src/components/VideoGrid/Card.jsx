import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { MdDelete, MdEdit } from "react-icons/md";

const Card = ({ video }) => {
  const onDelete = async () => {
    try {
      await fetch(`${import.meta.env.VITE_DB_URL}/videos/${video.id}`, {
        method: "DELETE",
      });

      window.location.reload(false);
    } catch (error) {
      console.log("Error al eliminar el video", error);
    }
  };

  return (
    <li
      key={video.id}
      className="2xl:w-108 group relative aspect-video w-60 overflow-hidden rounded-lg bg-slate-700 sm:w-72 lg:w-80 xl:w-96"
    >
      <div>
        <img
          className="absolute inset-0 h-full w-full bg-slate-700 object-cover object-center transition duration-[400ms] ease-out group-hover:scale-110"
          src={video.imagen}
          alt={video.titulo}
        />
      </div>
      <Link
        to={video.link}
        className="absolute inset-0 h-full w-full"
        target="_blank"
        rel="noopener noreferrer"
      />

      <div className="absolute top-0 hidden w-full p-2 group-hover:block">
        <div className="flex items-center justify-end gap-2">
          <button className="rounded-md bg-muted bg-opacity-50 p-2 text-background transition-all duration-200 hover:bg-opacity-100 hover:text-foreground">
            <MdEdit />
          </button>
          <button className="rounded-md bg-muted bg-opacity-50 p-2 text-background transition-all duration-200 hover:bg-opacity-100 hover:text-foreground">
            <MdDelete onClick={onDelete} />
          </button>
        </div>
      </div>
    </li>
  );
};

Card.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    titulo: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    categoria: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;

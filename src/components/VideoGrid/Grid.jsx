import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import Card from "./Card";

const Grid = ({ categoria }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_DB_URL}/videos?categoria=${categoria.id}`,
      );
      const data = await response.json();
      setVideos(data);
    };

    try {
      fetchVideos();
    } catch (error) {
      console.error("Error al obtener los videos", error);
    }
  }, [categoria]);

  if (!videos.length) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-medium text-lg capitalize">{categoria.nombre}</h2>
      <div className="relative w-full overflow-hidden whitespace-nowrap">
        <div className="videos-grid-wrapper h-full w-full overflow-x-auto">
          <ul className="mb-2 flex w-max items-center space-x-4">
            {videos.map((video) => (
              <Card key={video.id} video={video} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Grid.propTypes = {
  categoria: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
  }).isRequired,
};

export default Grid;

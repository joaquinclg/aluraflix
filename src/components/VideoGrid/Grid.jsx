import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import Card from "./Card";

const Grid = ({ categoria }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(
        `http://localhost:3000/videos?categoria=${categoria.id}`
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
      <h2 className="text-lg text-medium capitalize">{categoria.nombre}</h2>
      <div className="relative overflow-hidden w-full whitespace-nowrap">
        <div className="videos-grid-wrapper h-full w-full overflow-x-auto">
          <ul className="flex w-max items-center space-x-4 mb-2">
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

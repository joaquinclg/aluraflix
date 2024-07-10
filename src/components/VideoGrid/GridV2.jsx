import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import Card from "./CardV2";

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
    <div className="">
      <h2 className="text-lg text-medium capitalize">{categoria.nombre}</h2>

      <div className="mt-4">
        <ul className="grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2">
          {videos.map((video) => (
            <Card key={video.id} video={video} />
          ))}
          {videos.map((video) => (
            <Card key={video.id} video={video} />
          ))}
        </ul>
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

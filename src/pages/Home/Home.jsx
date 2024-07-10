// https://www.themoviedb.org/movie/top-rated?language=es
// https://github.com/alura-es-cursos/alura-cinema/tree/aula5/src/pages

import { useEffect, useState } from "react";

import Grid from "../../components/VideoGrid/Grid";
import Banner from "../../components/Home/Banner";

function HomePage() {
  const [categorias, setCategorias] = useState([]);
  const [latestVideo, setLatestVideo] = useState({});

  useEffect(() => {
    const fetchCategorias = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_DB_URL}/categorias?_sort=nombre,id`,
      );
      const data = await response.json();
      setCategorias(data);
    };

    const fetchLatestVideo = async () => {
      const videoResponse = await fetch(
        `${import.meta.env.VITE_DB_URL}/videos?_sort=-id&_limit=1`,
      );
      const video = await videoResponse.json();

      const categoriaResponse = await fetch(
        `${import.meta.env.VITE_DB_URL}/categorias/${video[0].categoria}`,
      );

      const categoria = await categoriaResponse.json();

      setLatestVideo({ ...video[0], categoria: categoria.nombre });
    };

    try {
      fetchCategorias();
    } catch (error) {
      console.error("Error al obtener las categorias", error);
    }

    try {
      fetchLatestVideo();
    } catch (error) {
      console.error("Error al obtener el último video", error);
    }
  }, []);

  return (
    <>
      {/* Banner */}
      <Banner video={latestVideo} />

      {/* Categorias */}
      <div className="mb-10 mt-10 px-4">
        {categorias?.map((categoria) => (
          <Grid key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </>
  );
}

export default HomePage;

// https://www.themoviedb.org/movie/top-rated?language=es
// https://github.com/alura-es-cursos/alura-cinema/tree/aula5/src/pages

import { useEffect, useState } from "react";

import Grid from "../../components/VideoGrid/Grid";

function HomePage() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      const response = await fetch(
        "http://localhost:3000/categorias?_sort=nombre,id"
      );
      const data = await response.json();
      setCategorias(data);
    };

    try {
      fetchCategorias();
    } catch (error) {
      console.error("Error al obtener las categorias", error);
    }
  }, []);

  return (
    <>
      <div className="px-4">
        {categorias?.map((categoria) => (
          <Grid key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </>
  );
}

export default HomePage;

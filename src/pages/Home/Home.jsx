// https://www.themoviedb.org/movie/top-rated?language=es

import { useEffect, useState } from "react";

import Grid from "../../components/VideoGrid/Grid";
import Banner from "../../components/Home/Banner";

import NuevaPeliculaForm from "../../components/Formulario/NuevaPeliculaForm";

import useFormModal from "../../hooks/useFormModal";
import useEditFormModal from "../../hooks/useEditFormModal";
import EditPeliculaForm from "../../components/Formulario/EditarPeliculaForm";

function HomePage() {
  const [categorias, setCategorias] = useState([]);
  const [latestVideo, setLatestVideo] = useState({});

  const modalCreate = useFormModal();
  const modalEdit = useEditFormModal();

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
      {/* Formulario */}

      {modalCreate.isOpen && (
        <div className="fixed inset-0 z-50 flex h-dvh w-full items-center justify-center bg-black/80 py-5">
          <div className="relative flex h-full items-center overflow-y-auto rounded-md bg-popover p-10 px-20">
            <NuevaPeliculaForm />
          </div>
        </div>
      )}

      {modalEdit.isOpen && (
        <div className="fixed inset-0 z-50 flex h-dvh w-full items-center justify-center bg-black/80 py-5">
          <div className="relative flex h-full items-center overflow-y-auto rounded-md bg-popover p-10 px-20">
            <EditPeliculaForm />
          </div>
        </div>
      )}

      {/* Banner */}
      <Banner video={latestVideo} />

      {/* Categorias */}
      <div className="mb-10 mt-10 space-y-5 px-4">
        {categorias?.map((categoria) => (
          <Grid key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </>
  );
}

export default HomePage;

import { useState, useEffect } from "react";
import useEditFormModal from "../../hooks/useEditFormModal";
import Input from "./Input";
import Textarea from "./Textarea";

interface Categoria {
  id: string | number;
  nombre: string;
}

const EditPeliculaForm = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    categoria: "",
    imagen: "",
    link: "",
  });

  const { closeModal, data: videoData } = useEditFormModal();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_DB_URL}/categorias`)
      .then((res) => res.json())
      .then((data) => setCategorias(data))
      .catch((err) => console.error(err));

    setFormData({
      ...videoData,
      titulo: videoData.titulo,
      descripcion: videoData.descripcion,
      categoria: videoData.categoria,
      imagen: videoData.imagen,
      link: videoData.link,
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch(`${import.meta.env.VITE_DB_URL}/videos/${videoData.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("Error al editar la pelicula", error);
    } finally {
      closeModal();
      window.location.reload();
    }
  };

  return (
    <>
      <h2 className="mb-8 text-center text-lg font-semibold">
        Editar pelicula
      </h2>

      <form
        className="grid gap-4 [&>input]:bg-muted [&>textarea]:bg-muted"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-2">
          <label>Titulo</label>
          <Input
            type="text"
            required
            value={formData.titulo}
            onChange={(e) =>
              setFormData({ ...formData, titulo: e.target.value })
            }
          />
        </div>
        <div className="grid gap-2">
          <label>Descripcion</label>
          <Textarea
            required
            value={formData.descripcion}
            className="h-24 resize-none"
            onChange={(e) =>
              setFormData({ ...formData, descripcion: e.target.value })
            }
          />
        </div>
        <div className="grid gap-2">
          <label>Categoria</label>
          <select
            required
            value={formData.categoria}
            className="w-full rounded-sm bg-muted px-2 py-2 text-foreground"
            onChange={(e) =>
              setFormData({ ...formData, categoria: e.target.value })
            }
          >
            <option value="" disabled defaultValue="" hidden>
              Selecciona una categoria
            </option>
            {categorias?.map((categoria) => (
              <option key={categoria?.id} value={categoria?.id}>
                {categoria?.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <label>Imagen</label>
          <Input
            type="text"
            required
            value={formData.imagen}
            onChange={(e) =>
              setFormData({ ...formData, imagen: e.target.value })
            }
          />
        </div>
        <div className="grid gap-2">
          <label>Link</label>
          <Input
            type="text"
            required
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          />
        </div>
        <div className="mt-5 flex w-full flex-col items-center justify-center gap-2 md:flex-row">
          <button
            type="submit"
            className="w-full rounded-md bg-foreground px-4 py-2 text-background disabled:opacity-50"
            disabled={
              !formData.titulo ||
              !formData.descripcion ||
              !formData.categoria ||
              !formData.imagen ||
              !formData.link
            }
          >
            Enviar
          </button>
          <button
            className="w-full rounded-md bg-destructive px-4 py-2 text-background"
            onClick={closeModal}
          >
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
};

export default EditPeliculaForm;

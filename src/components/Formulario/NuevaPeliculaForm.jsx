import { useState, useEffect } from "react";
import useFormModal from "../../hooks/useFormModal";
import Input from "../Formulario/Input";
import Textarea from "../Formulario/Textarea";

const NuevaPeliculaForm = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const [link, setLink] = useState("");

  const [categorias, setCategorias] = useState([]);

  const { closeModal } = useFormModal();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_DB_URL}/categorias`)
      .then((res) => res.json())
      .then((data) => setCategorias(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo || !descripcion || !categoria || !imagen || !link) {
      return;
    }

    const nuevaPelicula = {
      titulo,
      descripcion,
      categoria: parseInt(categoria),
      imagen,
      link,
    };

    try {
      const response = fetch(`${import.meta.env.VITE_DB_URL}/videos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaPelicula),
      });

      setTitulo("");
      setDescripcion("");
      setCategoria("");
      setImagen("");
      setLink("");
    } catch (error) {
      console.error("Error al agregar la pelicula", error);
    } finally {
      closeModal();
      window.location.reload();
    }
  };

  return (
    <div>
      <h2 className="mb-8 text-center text-lg font-semibold">
        Agregar nueva pelicula
      </h2>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <label>Titulo</label>
          <Input
            type="text"
            required
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <label>Descripcion</label>
          <Textarea
            required
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="h-24 resize-none"
          />
        </div>
        <div className="grid gap-2">
          <label>Categoria</label>
          <select
            required
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full rounded-sm bg-muted px-2 py-2 capitalize text-foreground"
          >
            <option value="" disabled defaultValue="" hidden>
              Selecciona una categoria
            </option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <label>Imagen</label>
          <Input
            type="text"
            required
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <label>Link</label>
          <Input
            type="text"
            required
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="mt-5 flex w-full flex-col items-center justify-center gap-2 md:flex-row">
          <button
            type="submit"
            className="w-full rounded-md bg-foreground px-4 py-2 text-background disabled:opacity-50"
            disabled={!titulo || !descripcion || !categoria || !imagen || !link}
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
    </div>
  );
};

export default NuevaPeliculaForm;

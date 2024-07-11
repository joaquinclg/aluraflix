import { useState, useEffect } from "react";
import useFormModal from "../../hooks/useFormModal";

const NuevaPeliculaForm = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const [link, setLink] = useState("");

  const [categorias, setCategorias] = useState([]);

  const { closeModal } = useFormModal();

  useEffect(() => {
    fetch("http://localhost:3000/categorias")
      .then((res) => res.json())
      .then((data) => setCategorias(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaPelicula = {
      titulo,
      descripcion,
      categoria: parseInt(categoria),
      imagen,
      link,
    };

    try {
      const response = fetch("http://localhost:3000/videos", {
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

      closeModal();
      window.location.reload(false);
    } catch (error) {
      console.error("Error al agregar la pelicula", error);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 [&>input]:bg-muted [&>textarea]:bg-muted"
      onSubmit={handleSubmit}
    >
      <label>Titulo</label>
      <input
        type="text"
        required
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <label>Descripcion</label>
      <textarea
        required
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <label>Categoria</label>
      <select
        required
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
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
      <label>Imagen</label>
      <input
        type="text"
        required
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
      />
      <label>Link</label>
      <input
        type="text"
        required
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default NuevaPeliculaForm;

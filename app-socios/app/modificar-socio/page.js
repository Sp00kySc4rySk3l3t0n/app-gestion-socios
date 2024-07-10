"use client";
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const ModificarSocio = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [socio, setSocio] = useState({
    id: '',
    nombre: '',
    apellidos: '',
    telefono: '',
    direccion: '',
  });

  useEffect(() => {
    const savedSocios = JSON.parse(localStorage.getItem('socios')) || [];
    const socioToEdit = savedSocios.find(s => s.id === parseInt(id));
    if (socioToEdit) {
      setSocio(socioToEdit);
    } else {
      router.push('/gestion-socios');
    }
  }, [id, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocio((prevSocio) => ({ ...prevSocio, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedSocios = JSON.parse(localStorage.getItem('socios')) || [];
    const updatedSocios = savedSocios.map(s => s.id === socio.id ? socio : s);
    localStorage.setItem('socios', JSON.stringify(updatedSocios));
    router.push('/gestion-socios');
  };

  return (
    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-4 text-blue-500 text-center">Modificar Socio</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombre"
            name="nombre"
            type="text"
            value={socio.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellidos">
            Apellidos
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="apellidos"
            name="apellidos"
            type="text"
            value={socio.apellidos}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
            Teléfono
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="telefono"
            name="telefono"
            type="text"
            value={socio.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direccion">
            Dirección
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="direccion"
            name="direccion"
            type="text"
            value={socio.direccion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModificarSocio;

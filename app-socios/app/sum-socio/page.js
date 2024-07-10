"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SumSocio = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    direccion: '',
    foto: '',
    asociacion: ''
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedSocios = JSON.parse(localStorage.getItem('socios')) || [];
    const newSocios = [
      ...savedSocios,
      {
        id: savedSocios.length + 1,
        ...formData,
      }
    ];
    localStorage.setItem('socios', JSON.stringify(newSocios));
    router.push('/gestion-socios');
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-500 text-center">Añadir Socio</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellidos">
            Apellidos
          </label>
          <input
            type="text"
            name="apellidos"
            id="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
            Teléfono
          </label>
          <input
            type="text"
            name="telefono"
            id="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direccion">
            Dirección
          </label>
          <input
            type="text"
            name="direccion"
            id="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="foto">
            Foto (URL)
          </label>
          <input
            type="text"
            name="foto"
            id="foto"
            value={formData.foto}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="asociacion">
            Asociación
          </label>
          <input
            type="text"
            name="asociacion"
            id="asociacion"
            value={formData.asociacion}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Añadir Socio
          </button>
        </div>
      </form>
    </div>
  );
};

export default SumSocio;

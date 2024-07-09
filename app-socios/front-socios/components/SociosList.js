// components/SociosList.js
import { useState } from 'react';

const SociosList = () => {
  const [socios, setSocios] = useState([
    { id: 1, nombre: 'Juan Pérez' },
    { id: 2, nombre: 'María López' },
    { id: 3, nombre: 'Carlos Martínez' },
  ]);

  const añadirSocio = () => {
    const nuevoSocio = { id: socios.length + 1, nombre: `Nuevo Socio ${socios.length + 1}` };
    setSocios([...socios, nuevoSocio]);
  };

  const eliminarSocio = (id) => {
    setSocios(socios.filter(socio => socio.id !== id));
  };

  const modificarSocio = (id) => {
    const nombreModificado = prompt('Ingrese el nuevo nombre del socio:');
    setSocios(socios.map(socio => socio.id === id ? { ...socio, nombre: nombreModificado } : socio));
  };

  const imprimirSocio = (id) => {
    alert(`Imprimir información del socio con ID: ${id}`);
  };

  const generarCarnet = (id) => {
    alert(`Generar carnet para el socio con ID: ${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-4 text-blue-500 text-center">Gestión de Socios</h1>
      <div className="flex justify-end mb-4">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={añadirSocio}
        >
          Añadir Socio
        </button>
      </div>
      <div className="bg-white shadow-md rounded overflow-hidden">
        <table className="min-w-full text-black">
          <thead>
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Nombre</th>
              <th className="px-6 py-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {socios.map(socio => (
              <tr key={socio.id}>
                <td className="border px-6 py-4">{socio.id}</td>
                <td className="border px-6 py-4">{socio.nombre}</td>
                <td className="border px-6 py-4">
                  <div className="flex flex-wrap space-x-0 space-y-2 sm:space-y-0 sm:space-x-2">
                    <button 
                      className="bg-yellow-500 text-white px-2 py-1 rounded w-full sm:w-auto"
                      onClick={() => modificarSocio(socio.id)}
                    >
                      Modificar
                    </button>
                    <button 
                      className="bg-red-500 text-white px-2 py-1 rounded w-full sm:w-auto"
                      onClick={() => eliminarSocio(socio.id)}
                    >
                      Eliminar
                    </button>
                    <button 
                      className="bg-green-500 text-white px-2 py-1 rounded w-full sm:w-auto"
                      onClick={() => imprimirSocio(socio.id)}
                    >
                      Imprimir
                    </button>
                    <button 
                      className="bg-purple-500 text-white px-2 py-1 rounded w-full sm:w-auto"
                      onClick={() => generarCarnet(socio.id)}
                    >
                      Carnet
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SociosList;

"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PdfGenerator from './PdfGenerator';
import CarnetGenerator from './CarnetGenerator';

const SociosList = () => {
  const [socios, setSocios] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const savedSocios = JSON.parse(localStorage.getItem('socios')) || [];
    setSocios(savedSocios);
  }, []);

  const saveSociosToLocalStorage = (newSocios) => {
    localStorage.setItem('socios', JSON.stringify(newSocios));
  };

  const añadirSocio = () => {
    const nuevoSocio = { id: socios.length + 1, nombre: `Nuevo Socio ${socios.length + 1}`, apellido: '', telefono: '', direccion: '' };
    const newSocios = [...socios, nuevoSocio];
    setSocios(newSocios);
    saveSociosToLocalStorage(newSocios);
  };

  const eliminarSocio = (id) => {
    const newSocios = socios.filter(socio => socio.id !== id);
    setSocios(newSocios);
    saveSociosToLocalStorage(newSocios);
  };

  const modificarSocio = (id) => {
    router.push(`/modificar-socio?id=${id}`);
  };

  const downloadSocios = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(socios));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "socios.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    localStorage.removeItem('socios');
  };

  const uploadSocios = (event) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const newSocios = JSON.parse(e.target.result);
      setSocios(newSocios);
      saveSociosToLocalStorage(newSocios);
    };
    fileReader.readAsText(event.target.files[0]);
  };

  return (
    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-4 text-blue-500 text-center">Gestión de Socios</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center mb-4 space-y-2 sm:space-y-0 sm:space-x-4 w-full">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
          onClick={() => router.push('/sum-socio')}
        >
          Añadir Socio
        </button>
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded w-full sm:w-auto"
          onClick={downloadSocios}
        >
          Descargar Socios
        </button>
        <input 
          type="file" 
          accept=".json" 
          onChange={uploadSocios} 
          className="bg-gray-200 text-black px-4 py-2 rounded w-full sm:w-auto"
        />
      </div>
      <div className="bg-white shadow-md rounded overflow-x-auto">
        <table className="min-w-full text-black">
          <thead>
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Nombre</th>
              <th className="px-6 py-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {socios.map((socio) => (
              <tr key={socio.id}>
                <td className="border px-6 py-4">{socio.id}</td>
                <td className="border px-6 py-4">{socio.nombre}</td>
                <td className="border px-6 py-4">
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2">
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
                    <PdfGenerator socio={socio} />
                    <CarnetGenerator socio={socio} />
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

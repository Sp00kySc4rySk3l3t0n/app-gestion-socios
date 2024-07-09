"use client"
import Navbar from '../../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-500">
          ¡Bienvenido a GestionSocios!
        </h1>
      </div>
    </div>
  );
}

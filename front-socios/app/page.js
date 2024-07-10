import Navbar from '../components/Navbar';
import './globals.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-500">Bienvenido a Gestión de Socios</h1>
      </div>
    </div>
  );
}
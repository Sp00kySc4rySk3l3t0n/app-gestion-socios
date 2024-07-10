// app/gestion-socios/page.js
import Navbar from '../../components/Navbar';
import SociosList from '../../components/SociosList';

export default function GestionSocios() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <SociosList />
      </div>
    </div>
  );
}

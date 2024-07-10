"use client"
import Navbar from '../../components/Navbar';
import ContactForm from '../../components/ContactForm';

export default function Contactanos() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <ContactForm />
      </div>
    </div>
  );
}

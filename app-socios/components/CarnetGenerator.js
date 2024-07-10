import jsPDF from 'jspdf';

const CarnetGenerator = ({ socio }) => {
  const generateCarnet = () => {
    const doc = new jsPDF();

    // Cara delantera del carnet
    doc.setFillColor(0, 51, 102); // Fondo azul oscuro
    doc.roundedRect(10, 10, 90, 50, 5, 5, 'F');
    doc.setTextColor(255, 255, 255); // Texto blanco
    doc.setFontSize(12);
    doc.text(`ID: ${socio.id}`, 15, 20);
    doc.text(`Nombre: ${socio.nombre}`, 15, 30);
    doc.text(`Apellidos: ${socio.apellidos}`, 15, 40);

    // Cara trasera del carnet
    doc.addPage();
    doc.setFillColor(0, 51, 102); // Fondo azul oscuro
    doc.roundedRect(10, 10, 90, 50, 5, 5, 'F');
    doc.setTextColor(255, 255, 255); // Texto blanco
    doc.setFontSize(12);
    doc.text(`Dirección: ${socio.direccion}`, 15, 30);

    // Abre el PDF en una nueva pestaña
    window.open(doc.output('bloburl'), '_blank');
  };

  return (
    <button onClick={generateCarnet} className="bg-purple-500 text-white px-2 py-1 rounded w-full sm:w-auto">
      Carnet
    </button>
  );
};

export default CarnetGenerator;

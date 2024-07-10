import jsPDF from 'jspdf';

const CarnetGenerator = ({ socio }) => {
  const generateCarnet = () => {
    const doc = new jsPDF();

    // Cara delantera del carnet
    doc.setFillColor(0, 51, 102); // Fondo azul oscuro
    doc.roundedRect(10, 10, 90, 50, 5, 5, 'F');
    doc.setTextColor(255, 255, 255); // Texto blanco
    doc.setFontSize(12);
    doc.text(socio.asociacion, 55, 15, { align: 'center' });
    doc.text(`ID: ${socio.id}`, 15, 25);
    doc.text(`Nombre: ${socio.nombre}`, 15, 35);
    doc.text(`Apellidos: ${socio.apellidos}`, 15, 45);

    // Foto del socio (espacio reservado) con tamaño reducido y margen
    doc.setFillColor(200, 200, 200); // Fondo gris claro
    doc.rect(70, 20, 20, 20, 'F');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text('Foto', 80, 35, { align: 'center' });

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

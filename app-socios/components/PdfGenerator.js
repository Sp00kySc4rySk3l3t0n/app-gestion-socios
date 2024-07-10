import jsPDF from 'jspdf';

const PdfGenerator = ({ socio }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text(`ID: ${socio.id}`, 10, 10);
    doc.text(`Nombre: ${socio.nombre}`, 10, 20);
    doc.text(`Apellido: ${socio.apellidos}`, 10, 30);
    doc.text(`Teléfono: ${socio.telefono}`, 10, 40);
    doc.text(`Dirección: ${socio.direccion}`, 10, 50);

    // Abre el PDF en una nueva pestaña
    window.open(doc.output('bloburl'), '_blank');
  };

  return (
    <button onClick={generatePDF} className="bg-green-500 text-white px-2 py-1 rounded w-full sm:w-auto">
      Imprimir
    </button>
  );
};

export default PdfGenerator;

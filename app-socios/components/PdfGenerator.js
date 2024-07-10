import jsPDF from 'jspdf';

const PdfGenerator = ({ socio }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Agregar un encabezado con el nombre de la organización
    doc.setFillColor(0, 51, 102); // Fondo azul oscuro
    doc.rect(0, 0, 210, 30, 'F');
    doc.setTextColor(255, 255, 255); // Texto blanco
    doc.setFontSize(20);
    doc.text(socio.asociacion, 105, 20, { align: 'center' });

    // Añadir un borde alrededor de los datos del socio
    doc.setDrawColor(0, 51, 102); // Color del borde azul oscuro
    doc.setLineWidth(1);
    doc.roundedRect(10, 40, 190, 80, 5, 5);

    // Datos del socio
    doc.setTextColor(0, 0, 0); // Texto negro
    doc.setFontSize(12);
    doc.text(`ID: ${socio.id}`, 15, 50);
    doc.text(`Nombre: ${socio.nombre}`, 15, 60);
    doc.text(`Apellidos: ${socio.apellidos}`, 15, 70);
    doc.text(`Teléfono: ${socio.telefono}`, 15, 80);
    doc.text(`Dirección: ${socio.direccion}`, 15, 90);

    // Foto del socio (espacio reservado)
    doc.setFillColor(200, 200, 200); // Fondo gris claro
    doc.rect(150, 45, 40, 50, 'F');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text('Foto', 170, 70, { align: 'center' });

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

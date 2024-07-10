'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import EditSocioForm from '../../components/EditSocioForm';

const ModificarSocio = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <EditSocioForm id={id} />
    </Suspense>
  );
};

export default ModificarSocio;

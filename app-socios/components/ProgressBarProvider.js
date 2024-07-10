// components/ProgressBarProvider.js
"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Suspense } from 'react';

const ProgressBarProvider = ({ children }) => {
  return (
    <>
      {children}
      <Suspense fallback={<div>Cargando...</div>}>
        <ProgressBar
          height="4px"
          color="#000000"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </Suspense>
    </>
  );
};

export default ProgressBarProvider;

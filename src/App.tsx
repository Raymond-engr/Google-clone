import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

const ImagesPage = lazy(() => import('./pages/ImagesPage'));
const AllPage = lazy(() => import('./pages/AllPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));


const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index element={<AllPage />} />
            <Route path="All" element={<AllPage />} />
            <Route path="Images" element={<ImagesPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );};

export default App;
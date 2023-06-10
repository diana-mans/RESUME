import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './components/pages/AboutPage/AboutPage.async';
import MainPage from './components/pages/MainPage/MainPage';

const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>Главная</Link>
      <br />
      <Link to={'/about'}>О сайте</Link>
      <br />
      <br />
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route
          path={'/about'}
          element={
            <Suspense fallback={<h1>Загрузка</h1>}>
              <AboutPageAsync />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

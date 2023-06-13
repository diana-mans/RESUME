import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { classNames } from './helpers/classNames/classNames';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import MainPage from './pages/MainPage/MainPage';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
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
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

export default App;

import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <br />
      <Link to={'/about'}>О сайте</Link>
      <br />
      <br />
      <Suspense fallback={<h1>Загрузка</h1>}>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/about'} element={<AboutPage />} />
        </Routes>{' '}
      </Suspense>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

export default App;

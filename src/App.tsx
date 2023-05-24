import { Routes, Route, Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import './scss/app.scss';
import Home from './pages/Home';
// import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart')); //Ленивая подрузка компонента. Подгрузится только когда мы перейдем в корзину.
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />

        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <Cart />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

import { RouteConfig } from '@/shared/config/routeConfig/routeConfig';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Загрузка</h1>}>
      <Routes>
        {Object.values(RouteConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>{' '}
    </Suspense>
  );
};

export default AppRouter;

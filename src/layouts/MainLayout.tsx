import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../compoments/Header';

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

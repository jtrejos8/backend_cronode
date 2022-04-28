import React from 'react';
import { AdminLayout } from '../../../components/layouts/admin-layout';

export const HomeScreen = () => {
  return (
    <AdminLayout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="jumbotron mt-2">
            <h1 className="display-5">Sistema de gestión de horario</h1>
          </div>
        </div>
      </div>     
    </AdminLayout>
  );
};
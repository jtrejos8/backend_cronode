import React from 'react';
import { CustomNavbar } from '../../ui/navbar';
import { AdminLayoutContainer } from './styles';

export const AdminLayout = ({ children }) => {
  return (
    <AdminLayoutContainer>
      <CustomNavbar />
      {children}
    </AdminLayoutContainer>
  );
};

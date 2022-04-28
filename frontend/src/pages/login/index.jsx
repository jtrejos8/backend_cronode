import React from 'react';
import { LoginForm } from '../../components/login/login-form';
import { LoginContainer } from './styles';

export const LoginScreen = () => {
  return (
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
  );
};

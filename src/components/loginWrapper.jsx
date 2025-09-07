import React from 'react';
import { useParams } from 'react-router-dom';
import Login from './login';
import LoginState from './loginState';

const LoginWrapper = () => {
  const { timestamp } = useParams();
  // return <Login timestamp={timestamp} />;
  return <LoginState timestamp={timestamp} />;

};

export default LoginWrapper;

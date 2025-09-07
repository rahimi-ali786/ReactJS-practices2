import React from 'react';
import { useParams } from 'react-router-dom';
import Login from './login'; // assuming Login is your class component

const LoginWrapper = () => {
  const { timestamp } = useParams();
  return <Login timestamp={timestamp} />;
};

export default LoginWrapper;

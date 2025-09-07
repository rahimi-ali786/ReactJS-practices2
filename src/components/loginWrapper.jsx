import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Login from './login';
import LoginState from './loginState';

const LoginWrapper = () => {
  const { timestamp } = useParams();
  const navigate = useNavigate();
  // return <Login timestamp={timestamp} />;
  return <LoginState timestamp={timestamp} navigate={navigate} />;

};

export default LoginWrapper;

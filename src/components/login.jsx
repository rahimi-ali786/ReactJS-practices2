import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class Login extends Component {
 render() { 
  const {timestamp} = this.props;
  return (
   <>
   <h1>Login</h1>
   <h2>timestamp: {timestamp}</h2>
   </>
  );
 }
}
 
export default Login;
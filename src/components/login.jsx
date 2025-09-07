import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class Login extends Component {
   handleSubmit = (e) => {
    e.preventDefault();
  }

 render() { 
  const {timestamp} = this.props;

  return (
   <>
   {/* <h1>Login</h1>
   <h2>timestamp: {timestamp}</h2> */}

   <form onSubmit={this.handleSubmit}>
     <div className="mb-3">
       <label htmlFor="email">Email:</label>
       <input id="email" className="form-control" type="text"/>
     </div>
      <div className="mb-3">
       <label htmlFor="password">Password:</label>
       <input id="password" className="form-control" type="text"/>
     </div>
     <button className="btn btn-primary">Login</button>
   </form>
   </>
  );
 }
}
 
export default Login;
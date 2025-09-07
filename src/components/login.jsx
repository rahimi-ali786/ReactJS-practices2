import React, { Component, createRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
   email = createRef();
   password = createRef();

   handleSubmit = async (e) => {
    e.preventDefault();
    console.log('email:', this.email.current.value);
    console.log('password:', this.password.current.value);
    const account = {email: this.email.current.value , password: this.password.current.value};
    if(account.email && account.password){
      const response = await axios.post('https://reqres.in/api/login', account, {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      });
      console.log(response);
    }   
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
       <input ref={this.email} id="email" className="form-control" type="text"/>
     </div>
      <div className="mb-3">
       <label htmlFor="password">Password:</label>
       <input ref={this.password} id="password" className="form-control" type="text"/>
     </div>
     <button className="btn btn-primary">Login</button>
   </form>
   </>
  ); 
 }
}
 
export default Login;
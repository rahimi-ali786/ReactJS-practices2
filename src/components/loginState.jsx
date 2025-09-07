import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

class LoginState extends Component {
   state = {
     account: {
       email: '',
       password: ''
     }
   }  

   handleSubmit = async (e) => {
    e.preventDefault();
   }   
   // handleChange = (e) => {
   //  const input = e.currentTarget;
   //  const newAccount = {...this.state.account};
   //  newAccount[input.name] = input.value;
   //  this.setState({account: newAccount});
   // }
    handleChange = ({currentTarget: input}) => {
    const newAccount = {...this.state.account};
    newAccount[input.name] = input.value;
    this.setState({account: newAccount});
   }
   
 render() { 
  const {timestamp} = this.props;
  const {email, password} = this.state.account;

  return (
   <>
   <form onSubmit={this.handleSubmit}>
     <div className="mb-3">
       <label htmlFor="email">Email:</label>
       <input onChange={this.handleChange} value={email} name= "email" id="email" className="form-control" type="text"/>
     </div>
      <div className="mb-3">
       <label htmlFor="password">Password:</label>
       <input onChange={this.handleChange} value={password} name="password" id="password" className="form-control" type="text"/>
     </div>
     <button className="btn btn-primary">Login</button>
   </form>
   </>
  ); 
 }
}
 
export default LoginState;
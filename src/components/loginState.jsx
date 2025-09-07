import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Input from './input';

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
     <Input onChange={this.handleChange} value={email} name="email" label="Email" />
     <Input onChange={this.handleChange} value={password} name="password" label="Password" />
     <button className="btn btn-primary">Login</button>
   </form>
   </>
  ); 
 }
}
 
export default LoginState;
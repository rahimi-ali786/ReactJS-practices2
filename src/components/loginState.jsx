import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Input from './input';
import * as yup from 'yup';

 class LoginState extends Component {
    state = {
      account: {
        email: '',
        password: ''
      },
      errors: [],
      sending: false
    }  

   schema = yup.object().shape({
     email: yup.string().email('Invalid Email!').required('Email is required!'),
     password: yup.string().min(6).required('Password is required!')
   })

    validate = async () =>{
      try{
       const result = await this.schema.validate(this.state.account, {abortEarly: false});
       return result;
      }catch(error){
       console.log(error.errors);
       this.setState({errors: error.errors});
      }
    }
    
    handleSubmit = async (e) => {
     e.preventDefault();
     const result = await this.validate();
     console.log(result);
     if(result){
      try{
        this.setState({sending: true});
        const response = await axios.post('https://reqres.in/api/login', result, {
          headers: {
            'x-api-key': 'reqres-free-v1'
          }    
        });
        // console.log(response.data.token);
        localStorage.setItem('token', response.data.token);
        this.props.navigate('/dashboard', {replace: true});
        this.setState({sending: false});
        console.log(response);
      } catch (error) {
        this.setState({sending: false});
        this.setState({errors: ['Invalid email or password!']});
      } finally {
        this.setState({sending: false});
      }
    }
   }
    // handleChange = async (e) => {
    //  const input = e.currentTarget;
    //  const newAccount = {...this.state.account};
    //  newAccount[input.name] = input.value;
    //  this.setState({account: newAccount});
    // }
     handleChange = ({currentTarget: input}) => {
       const newAccount = { ...this.state.account };
       newAccount[input.name] = input.value;
       this.setState({ account: newAccount });
     };

    render(){
   // const {timestamp} = this.props;
   const {email, password} = this.state.account;

   return (
    <>{
        this.state.errors.length !== 0 && (
           <div className="alert alert-danger">
             <ul>
               {
                 this.state.errors.map((error,index) => <li key={index}>{error}</li>)
               }
             </ul>
           </div>
          )
       }
    <form onSubmit={this.handleSubmit}>
      <Input onChange={this.handleChange} value={email} name="email" label="Email" />
      <Input onChange={this.handleChange} value={password} name="password" label="Password" />
      <button disabled={this.state.sending} className="btn btn-primary">Login</button>
    </form>
    </>
   ); 
  }
}
 
export default LoginState;
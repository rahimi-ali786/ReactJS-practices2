import React, { Component } from 'react';
import Users from './components/users';
import User from './components/user';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import LoginWrapper from './components/loginWrapper';
import NotFound from './components/notFound';


import {Routes, Route, Navigate} from 'react-router-dom';

class App extends Component {
 state = { 
  users: []
  } 
 render() { 
  return (
   <>
    <Navbar />
    <div className="container mt-4">
     <Routes>
        <Route path="/users" element={<Users myProp={this.state.users} />} />
        <Route path="/users/:id" element={<User />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/login/:timestamp" element={<Login />} /> */}
        <Route path="/login" element={<LoginWrapper />} />
        <Route path="/login/:timestamp" element={<LoginWrapper />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/customers" element={<Navigate to="/users" />} />
     </Routes>    
    </div>
   </>
  ); 
 }
}
 
export default App;
import React, { Component } from 'react';
import Users from './components/users';

class App extends Component {
 state = { 
  users: []
  } 
 render() { 
  return (
   <Users />
  );
 }
}
 
export default App;
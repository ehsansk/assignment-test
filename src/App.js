import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserList from './component/UserList';
import UserContext from './context/UserContext'
 
function App() {
  return (
    <UserContext>
    <div className="App">
     <UserList />    
     <h1>Hello</h1>
     <ToastContainer />
    </div>
    </UserContext>
  );
}

export default App;

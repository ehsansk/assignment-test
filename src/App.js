import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserList from './component/UserList';
import UserContext from './context/UserContext'
 
function App() {
  return (
    <UserContext>
    <div className="App">
     <UserList />    
     <ToastContainer />
    </div>
    </UserContext>
  );
}

export default App;

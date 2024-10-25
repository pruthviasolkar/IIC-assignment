import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import {createBrowserRouter,RouterProvider} from "react-router-dom"; 
import Sidebar from './Components/Sidebar/sidebar';
import Dashboardall from './Components/maindash/dashboardall/dashboardall';
function App() {
  const router = createBrowserRouter([
    {path:"/",
      element:<><Sidebar/><Dashboardall/></>
    },{}
  ]) 
  return (
    <div className="App">
       <RouterProvider router={router}/>
        
       
    </div>
  );
}

export default App;

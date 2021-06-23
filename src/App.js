import './App.css';
import {Route,BrowserRouter} from 'react-router-dom'
import Navbar from './Components/UI/Navbar/Navbar'
import HomePage from './Components/Pages/Homepage/HomePage'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <div>
            <Route path='/' component={HomePage}></Route>
          
          </div>
        </BrowserRouter>   
    </div>
  );
}

export default App;

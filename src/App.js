import './App.css';
import {Route,BrowserRouter} from 'react-router-dom'
import Navbar from './Components/UI/Navbar/Navbar'
import HomePage from './Components/Pages/Homepage/HomePage'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div className="main">
            <Navbar></Navbar>
            <Route path='/' component={HomePage}></Route>
          </div>
        </BrowserRouter>   
    </div>
  );
}

export default App;




{/* <BrowserRouter>
<Navbar ></Navbar>
<div>
  <Route path="/" exact component={HomePage}></Route>
  <Route path ="/movie/:id" component={Movie}></Route>
  <Route path="/search/:term" component={SearchPage}></Route>
  <Route path="/tv_show" component ={Tv_show}></Route>
  <Route path="/favorite" component = {Favorite}></Route>
</div>
</BrowserRouter> */}
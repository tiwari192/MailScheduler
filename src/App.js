import './App.css';
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'

function App() {
  return (
    <>
      <Navbar />

      <div className="main-page">
        <Route exact path="/">
          <Signup />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

      </div>

      <Route path="/home">
        <Home />
      </Route>



    </>
  );
}

export default App;

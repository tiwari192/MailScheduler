import './App.css';
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'
import  History  from './components/HistoryPage'
import  Create  from './components/CreatePage'

function App() {
  return (
    <>
      <Navbar />

      <Route exact path="/">
        <Signup />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/history">
        <History />
      </Route>

      <Route path="/create">
        <Create />
      </Route>

    </>
  );
}

export default App;

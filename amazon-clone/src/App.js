import './App.css';
import {Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <Header />
      <Checkout />
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route path="/">
          <Header />
          <Home />
      
        </Route>
      </Switch>
    </div>
  );
}


export default App;

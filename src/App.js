import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import logo from './logo.svg';
import BHome from './bootstrap/BHome';
import './App.css';
import { Button, Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
       {/* <Button color="danger">danger</Button> */}
      <Router >
        <Route path="/home" component={Home}></Route>
        <Route path="/bootstrap/BHome" component={BHome}></Route>

        <Link to="/home">
          <div>click to home</div>
        </Link>

        <Link to="/bootstrap/BHome">
          <div>click to BHome</div>
        </Link>
      </Router>
    </div>
  );
}

export default App;

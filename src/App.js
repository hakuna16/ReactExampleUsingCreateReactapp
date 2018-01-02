import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LoginPage from './components/LoginPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <LoginPage/>
      </div>
    );
  }
}

export default App;

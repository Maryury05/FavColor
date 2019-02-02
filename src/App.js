import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png';
import FirstQuestion from './components/FirstQuestion';

class App extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <img src={logo} alt="Logo" style={{ width: 50, height: 50 }}/>
          <h3>FavColor</h3>
        </div>
        <FirstQuestion />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Navigation from './components/navigation'
import MainPage from './pages/mainPage'
import './App.css';

class App extends Component {
  render() {
      return (
          <div style={{height: '100vh', position: 'relative'}}>
              <BrowserRouter>
                  <div>
                      <Navigation />
                      <Route exact path="/" component={MainPage} />
                  </div>
              </BrowserRouter>
          </div>
      );
  }
}

export default App;

import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import Button from './components/Button';

 class App extends Component {
  
  render() {
    return (
      <div>
       <NavBar/>
       <News/>
       <Button/>
      </div>
    )
  }
}
export default App
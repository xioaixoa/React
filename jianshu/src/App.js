import React, { Component } from 'react';
import { Globalstyle } from './style';
import Header from './common/header/index'

class App extends Component {
  render() {
    return (
      <div><Globalstyle/><Header></Header></div>    
      )
  }
}

export default App;

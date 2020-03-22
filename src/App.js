import React from 'react';
import './sass/style.scss';
import NavBar from './navbar';
import MidSec from './midsec';


class App extends React.Component {
  constructor(){
    super()
    this.state={}
  }

  render(){
    return (
      <div className="h">
        <NavBar/>
        <MidSec/>
      </div>
    );
  }
}

export default App;

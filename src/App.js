import React from 'react';
import Navbar from './components/Navbar';


class App extends React.Component {
  constructor(){
    super()
    this.state={}
  }

  render(){
    return (
      <div>
        <div>
          <Navbar/>
          <h1><center>Ninja-Developers-React-App</center></h1>
        </div>
      </div>
    );
  }
}

export default App;

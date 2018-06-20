import React, { Component } from 'react';
import { LogTrip } from './components/LogTrip';
import { RegisterDriver } from './components/RegisterDriver';


class App extends Component {
  render() {
    return (
      <div>
        <RegisterDriver/>
        <LogTrip/>
      </div>

    );
  }
}

export default App;

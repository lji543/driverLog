import React, { Component } from 'react';
import { LogTrip } from './containers/LogTrip';
import { RegisterDriver } from './containers/RegisterDriver';
import { UserMessage } from './components/UserMessage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driverName: '',
      registeredDrivers: new Set(),
      userAlert: '',
    };
  }

  render() {
    return (
      <div>
        <RegisterDriver registeredDrivers={this.state.registeredDrivers}/>
        <LogTrip registeredDrivers={this.state.registeredDrivers}/>
      </div>
    );
  }
}

export default App;

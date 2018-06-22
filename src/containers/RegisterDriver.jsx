import React from 'react';
import { LogTrip } from './LogTrip';
import { UserMessage } from '../components/UserMessage';

// TODO: move Drivers to own component/class
// import { Drivers } from '../Drivers';

// TODO: need the export here as well as the default below?
export class RegisterDriver extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.registerDriver = this.registerDriver.bind(this);

    // TODO: move any of these to props?
    this.state = {
      driverName: '',
      registeredDrivers: this.props.registeredDrivers,
      userAlert: '',
    };
  }

  handleChange(e) {
    this.setState({driverName: e.target.value});
  }

  registerDriver() {
    let driverName = this.state.driverName;
    let registeredDrivers = this.state.registeredDrivers;
    let userAlert = this.state.userAlert;

    let alreadyRegistered;
    registeredDrivers.forEach(
      function(driver) {
        alreadyRegistered = (driver.name === driverName) ? true : false;
      }
    );

    if (alreadyRegistered) {
      userAlert =
        'This driver has already been registered. Please choose another name.';
    } else {
      registeredDrivers.add(
        {
          name:driverName,
          mph:0,
          distance:0,
          hours:0,
        }
      );

      userAlert = 'Driver successfully registered.';
    }

    this.setState({
      registeredDrivers: registeredDrivers,
      userAlert: userAlert,
    });
  }


    render(){
      let driverName = this.state.driverName;

      return (
        <div>
    			<p>Register Driver:</p>
    			<input onChange={this.handleChange} value={driverName} type="text"></input>
    			<button onClick={this.registerDriver}
    				type="button" name="button">Register
          </button>
          <UserMessage message={this.state.userAlert}/>
          <LogTrip registeredDrivers={this.state.registeredDrivers}/>
    		</div>
      );
    }
}

export default RegisterDriver;

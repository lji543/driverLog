import React from 'react';
import { LogTrip } from './LogTrip';
import { UserMessage } from '../components/UserMessage';

// TODO: move Drivers to own component/class
// import { Drivers } from '../Drivers';

// TODO: need the export here as well as the default below?
export class RegisterDriver extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      registeredDrivers: [],
      driverName: '',
      userAlert: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.registerDriverfn = this.registerDriverfn.bind(this);
  }


  handleChange(e) {
    this.setState({driverName: e.target.value});
  }

  registerDriverfn() {
    console.log('drivers ',this.state)

    let driverName = this.state.driverName;
    let registeredDrivers = this.state.registeredDrivers;
    let userAlert = this.userAlert;
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
      registeredDrivers.push(
        {
          name:driverName,
          mph:0,
          distance:0,
          hours:0,
        }
      );

      userAlert = 'Driver successfully registered.';
    }

    this.setState({registeredDrivers: registeredDrivers});
  }


    render(){

      return (
        <div>
    			<p>Register Driver:</p>
          <input onChange={this.handleChange} value={this.state.driverName} type="text"></input>
    			<button onClick={this.registerDriverfn}
    				type="button" name="button">Register
          </button>
          <UserMessage message={this.userAlert}/>
          <LogTrip registeredDrivers={this.state.registeredDrivers}/>
    		</div>
      );
    }
}

export default RegisterDriver;

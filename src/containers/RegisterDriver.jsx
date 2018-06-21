import React from 'react';
// TODO: move Drivers to own component/class
// import { Drivers } from '../Drivers';

// TODO: need the export here as well as the default below?
export class RegisterDriver extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.registerDriver = this.registerDriver.bind(this);
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

    if (registeredDrivers.has(driverName)) {
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

      this._buildSelectList(driverName);
      userAlert = 'Driver successfully registered.';
    }

    // document.getElementById('userAlert').innerHTML = this.userAlert;
    // document.getElementById('driverName').value = '';
  }

  // TODO: replace native js w/ more react type language
  _buildSelectList(driverName) {
    let driverSelect = document.getElementById('driverSelect');
    let driverOption = document.createElement("option")

    driverOption.setAttribute("value", driverName);
    driverOption.setAttribute("id", driverName);
    driverOption.appendChild(document.createTextNode(driverName));

    document.getElementById("driverSelect").appendChild(driverOption);
  }



    render(){
      let driverName = this.state.driverName;

      return (
        <div>
    			<p>Register Driver:</p>
    			<input onChange={this.handleChange} value={driverName} type="text"></input>
    			<button onClick={this.registerDriver}
    				type="button" name="button">Register</button>
    		</div>
      );
    }
}

export default RegisterDriver;

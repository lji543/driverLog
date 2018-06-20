import React from 'react';

export class RegisterDriver extends React.Component{
  registeredDrivers = new Set();
  userAlert;

  registerDriver() {
    let driverName = document.getElementById('driverName').value;

    if (this.registeredDrivers.has(driverName)) {
      this.userAlert =
        'This driver has already been registered. Please choose another name.';
    } else {
      this.registeredDrivers.add(
        {
          name:driverName,
          mph:0,
          distance:0,
          hours:0,
        }
      );

      this._buildSelectList(driverName);
      this.userAlert = 'Driver successfully registered.';
    }

    document.getElementById('userAlert').innerHTML = this.userAlert;
    document.getElementById('driverName').value = '';
  }


  _buildSelectList(driverName) {
    let driverSelect = document.getElementById('driverSelect');
    let driverOption = document.createElement("option")

    driverOption.setAttribute("value", driverName);
    driverOption.setAttribute("id", driverName);
    driverOption.appendChild(document.createTextNode(driverName));

    document.getElementById("driverSelect").appendChild(driverOption);
  }



    render(){
      return <form>


      </form>
    }
}

export default RegisterDriver;

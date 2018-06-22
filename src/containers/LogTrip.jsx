import React from 'react';
import { RegisterDriver } from './RegisterDriver';
import { UserMessage } from '../components/UserMessage';
import { DisplayList } from '../components/DisplayList';
import { Select } from '../components/Select';

// 07:15 09:15 42

// TODO: need the export here as well as the default below?
export class LogTrip extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.logTrip = this.logTrip.bind(this);

    // TODO: move any of these to props?
    this.state = {
      driverName: '',
      loggedDriverData: [],
      registeredDrivers:  this.props.registeredDrivers,
      tripInfo: '',
      userAlert: '',
    };
  }

  handleChange(e) {
    this.setState({tripInfo: e.target.value});
  }

  _printReport() {
    let registeredDrivers = this.state.registeredDrivers;

    registeredDrivers.forEach(function(driverObj) {
      // let driverListItem = document.createElement("li")

      let driverPrint;
      if (driverObj.distance === 0) {
        driverPrint = driverObj.name + ': ' +
          driverObj.distance;
      } else {
        driverPrint = driverObj.name + ': ' +
          driverObj.distance + ' miles @ ' + driverObj.mph + ' mph';
      }

      this.state.loggedDriverData.push(driverPrint);
    });
  }


  logTrip() {
    let driverName = document.getElementById('driverSelect').value;
    let tripInfo = this.state.tripInfo;
    let userAlert = this.state.userAlert;
    let registeredDrivers = this.state.registeredDrivers;

    function _findMinutes(timeString) {
      let hrs = new Number(timeString[0]);
      let mins = new Number(timeString[1]);
      return (hrs * 60) + mins;
    }

    let start = _findMinutes(tripInfo.substring(0,5).split(':'));
    let end = _findMinutes(tripInfo.substring(6,11).split(':'));
    let distance = Math.round(Number.parseFloat(tripInfo.substring(12,17)));

    let hours = (end - start)/60;
    let mph = distance / hours;

    if ((mph >= 5) && (mph <= 100)) {
      registeredDrivers.forEach(function(driverObj) {
        if (driverObj.name === driverName) {
          driverObj.distance += distance;
          driverObj.hours += hours;
          driverObj.mph = Math.round(driverObj.distance / (driverObj.hours));
        }
      });
    } else {
      this.userAlert = 'This trip did not meet the criteria. Please enter new values.';
    }

    this._printReport();
  }


  render() {
    let tripInfo = this.state.tripInfo;
    // TODO: move select and buttons to their own components
    return (
      <div>
  			<p>Log Trips:</p>
  			<div>
  				<span>Driver: </span>
          <Select items={this.state.registeredDrivers}/>
  			</div>
        <div>Example Format: 07:15 09:15 42</div>
  			<input onChange={this.handleChange} value={tripInfo} type="text"></input>
  			<button onClick={this.logTrip}
  				type="button" name="button">Log
        </button>
        <UserMessage message={this.state.message}/>
        <DisplayList items={this.state.loggedDriverData}/>
  		</div>
    );
  }
}

export default LogTrip;

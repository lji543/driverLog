import React from 'react';

export class LogTrip extends React.Component{

  registeredDrivers = new Set();
  userAlert;


  _printReport() {
    let driverList = document.getElementById('driverList');
    driverList.innerHTML = "";

    this.registeredDrivers.forEach(function(driverObj) {
      let driverListItem = document.createElement("li")

      let driverPrint;
      if (driverObj.distance === 0) {
        driverPrint = driverObj.name + ': ' +
          driverObj.distance;
      } else {
        driverPrint = driverObj.name + ': ' +
          driverObj.distance + ' miles @ ' + driverObj.mph + ' mph';
      }

      driverListItem.innerHTML = driverPrint;
      document.getElementById("driverList").appendChild(driverListItem);
    });
  }


  logTrip() {
    let driverName = document.getElementById('driverSelect').value;
    let tripInfo = document.getElementById('tripInfo').value;

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
      this.registeredDrivers.forEach(function(driverObj) {
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


    render(){
        let data = this.props.data;

        return <form>


        </form>
    }
}

export default LogTrip;

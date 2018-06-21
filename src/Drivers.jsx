import React from 'react';

export class Drivers extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      registeredDrivers: new Set(),
    };
  }
}

export default Drivers

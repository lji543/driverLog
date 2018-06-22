import React from 'react';

export class DisplayList extends React.Component{

  render() {
    var listItems = this.props.items.map(function(item) {
       return (
         <li>{item}</li>
       );
     });

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default DisplayList;

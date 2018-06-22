import React from 'react';

export class Select extends React.Component{

  render() {
    let listItems = this.props.items.map(function(item) {
       return (
         <options>{item}</options>
       );
     });

    return (
      <select>
        <option value="">-</option>
        {listItems}
      </select>
    );
  }
}

export default Select;

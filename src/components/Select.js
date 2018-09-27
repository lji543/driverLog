import React from 'react';

export class Select extends React.Component{

  render() {
    let listItems;
    // console.log('item ', this.props.items, this.props.items.length)
    if (this.props.items) {
      console.log('item ', this.props.items)
      listItems = this.props.items.map(function(item) {
        console.log('item name', item.name)
        return (
          <option key={item.name}>{item.name}</option>
        );
      });
    }

    console.log(listItems)

    return (
      <select>
        <option value="">-</option>
        {listItems}
      </select>
    );
  }
}

export default Select;

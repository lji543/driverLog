import React from 'react';

export class Select extends React.Component{

  render() {
    let listItems;
    if (this.props.items.length) {
      listItems = this.props.items.map(function(item) {
        return (
          <options>{item}</options>
        );
      });
    }

    return (
      <select>
        <option value="">-</option>
        {listItems}
      </select>
    );
  }
}

export default Select;


// export class NavBar extends React.Component {
//   render() {
//     const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
//     const navLinks = pages.map(page => {
//       return (
//         <a href={'/' + page}>
//           {page}
//         </a>
//       )
//     });
//
//     return <nav>{navLinks}</nav>;
//   }
// }







// class Button extends React.Component {
//   render() {
//     return (
//       <button>
//         {this.props.text}
//       </button>
//     );
//   }
// }
//
// // defaultProps goes here:
// Button.defaultProps = {
//   text: 'I am a button',
// }
//
// ReactDOM.render(
//   <Button text="" />,
//   document.getElementById('app')
// );

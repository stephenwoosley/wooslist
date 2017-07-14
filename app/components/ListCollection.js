import React from 'react';
import List from './List.js'

// function ListLists (props) {
//   let listOfLists = ['Gabriella', 'Stephen', 'Kelly'];
//   return (
//
//   )
// }

class ListCollection extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(){
    this.props.onListClick();
  }
  render() {
    let listOfLists = ['Gabriella', 'Stephen', 'Kelly'];
    return (
      <div>
        <ul className='lists'>
          {listOfLists.map((list) => {
            return (
              <li
                key={list}
                onClick={this.handleChange}
                style={{backgroundColor: 'blue', color: 'white', border: '2px solid black', marginTop: '5px'}}>
                {list}
              </li>
            )
          })}
        </ul>
        <button className='button'>New</button>
      </div>
    )
  }
}

export default ListCollection;

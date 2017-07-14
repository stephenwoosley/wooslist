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
      <div className='new'>
        <ul className='lists'>
          {listOfLists.map((list) => {
            return (
              <li
                className='listOfListsItem'
                key={list}
                onClick={this.handleChange}
              >
                {list}
              </li>
            )
          })}
        </ul>
        <div className='add-list-btn'>
          <img className="plus-svg" src="/app/images/plus.png" alt="plus button" />
        </div>
      </div>
    )
  }
}

export default ListCollection;

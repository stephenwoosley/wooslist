import React from 'react';
import Header from './Header.js';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['wash the dishes', 'take out the trash', 'fold laundry', 'clean your room']
    }
  }
  render() {
    return (
      <div>
        <ul className='lists'>
          {this.state.todos.map((todo) => {
            return (
              <li
                key={todo}
                style={{backgroundColor: 'blue', color: 'white', border: '2px solid black', marginTop: '5px'}}>
                {todo}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default List;

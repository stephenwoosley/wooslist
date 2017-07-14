import React from 'react';
import Header from './Header.js';

class ShowModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleToDoSubmit = this.handleToDoSubmit.bind(this);
  }
  handleTextChange(e){
    this.props.handleChange(e.target.value);
  }
  handleToDoSubmit(e){
    this.props.handleSubmit(e);
  }
  render() {
    return (
      <div>
        <form className='column'
          onSubmit={this.handleToDoSubmit}
          >
          <input
            id='username'
            placeholder='New Task'
            type='text'
            autoComplete='off'
            value={this.props.currentToDo}
            onChange={this.handleTextChange}
          />
          <button className='button' type='submit'>
            Add
          </button>
        </form>
      </div>
    )
  }
}


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['wash the dishes', 'take out the trash', 'fold laundry', 'clean your room'],
      showHide: false,
      newToDo: ''
    }
    this.showOrHideForm = this.showOrHideForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  showOrHideForm(){
    {this.state.showHide
      ? this.setState (() => {return {showHide: false}})
      : this.setState (() => {return {showHide: true}})
    }
  }
  handleChange(event){
    this.setState({newToDo: event});
  }
  handleSubmit(event){
    alert('New ToDo Submitted: ' + this.state.newToDo);
    event.preventDefault();
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
        <button className='button' onClick={this.showOrHideForm}>New</button>
        {this.state.showHide &&
          <ShowModalForm
            currentToDo={this.state.newToDo}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        }
      </div>
    )
  }
}

export default List;

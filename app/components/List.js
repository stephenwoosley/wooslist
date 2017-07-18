import React from 'react';
import Header from './Header.js';
import todoData from '../data/todos.js';
import NewEntry from './NewEntry.js';

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
      todos: ['test1', 'test2', 'test3', 'test4'],
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
    // alert('New ToDo Submitted: ' + this.state.newToDo);
    event.preventDefault();
    // alert('New ToDo Submitted: ' + this.state.newToDo)
    this.setState({newToDo: ''});
    this.setState({todos: this.state.todos.concat(this.state.newToDo)});
  }
  render() {
    return (
      <div className='new'>
        {/* <div className='list-title-div'>
          <div className='list-title'>Gabriella</div>
        </div> */}
        <ul className='lists'>
          {this.state.todos.map((todo) => {
            return (
              <li
                className='listOfListsItem'
                key={todo}
              >
                {todo}
              </li>
            )
          })}
        </ul>
        {this.state.showHide &&
          <NewEntry
            submitIt={this.handleSubmit}
            handleChange={this.handleChange}
            currentList={this.state.newToDo}
          />
          // <ShowModalForm
          //   currentToDo={this.state.newToDo}
          //   handleChange={this.handleChange}
          //   handleSubmit={this.handleSubmit}
          // />
        }
        <div className='add-list-btn'>
          <input
            className="plus-svg"
            type="image"
            src="/app/images/plus.png"
            onClick={this.showOrHideForm}
          />
          {/* <img className="plus-svg" src="/app/images/plus.png" alt="plus button" /> */}
        </div>
      </div>
    )
  }
}

export default List;

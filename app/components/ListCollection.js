import React from 'react';
import List from './List.js';
import Modal from './Modal.js';
import NewEntry from './NewEntry.js'

class ListCollection extends React.Component {
  constructor(props) {
    super(props);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.showModalFunc = this.showModalFunc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      showModal: false,
      todoLists: ['Gabriella\'s Morning List', 'Kelly\'s To-Do List', 'Stephen\'s Projects', 'Gabriella\'s To-Do List'],
      newList: ''
    };
  }
  handleViewChange(){
    this.props.onListClick();
  }
  showModalFunc(e){
    e.preventDefault()
    {this.state.showModal
      ? this.setState({showModal: false})
      : this.setState({showModal: true})
    }
  }
  handleSubmit(event){
    event.preventDefault();
    // alert('New ToDo Submitted: ' + this.state.newList);
    this.setState({newList: ''});
    this.setState({todoLists: this.state.todoLists.concat(this.state.newList)});
    this.showModalFunc;
  }

  handleChange(event){
    this.setState({newList: event});
  }

  componentDidMount(){
    // this.setState({
    //   todos: todo-data.todos
    // });
    console.log("Lists are: " + this.state.todoLists);
  }

  render() {
    // let listOfLists = ['Gabriella', 'Stephen', 'Kelly'];
    return (
      <div className='new'>
        <ul className='lists'>
          {this.state.todoLists.map((list) => {
            return (
              <li
                className='listOfListsItem'
                key={list}
                onClick={this.handleViewChange}
              >
                {list}
              </li>
            )
          })}
        </ul>
        {this.state.showModal &&
          <NewEntry
              submitIt={this.handleSubmit}
              handleChange={this.handleChange}
              currentList={this.state.newList}
          />
          // <Modal
          //   currentList={this.state.newList}
          //   closeModal={this.showModalFunc}
          //   submitIt={this.handleSubmit}
          //   handleChange={this.handleChange}
          // />
        }
        <div className='add-list-btn'>
          <img
            className="plus-svg"
            src="/app/images/plus.png"
            alt="plus button"
            onClick={this.showModalFunc}
          />
        </div>
      </div>
    )
  }
}

export default ListCollection;

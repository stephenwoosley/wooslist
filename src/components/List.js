import React from 'react';
import NewEntry from './NewEntry.js';
import Close from 'react-icons/lib/md/close';
import Edit from 'react-icons/lib/md/edit';



class List extends React.Component {

  // constructor takes props, binds functions, and declares state
  constructor(props) {
    super(props);
    this.showOrHideForm = this.showOrHideForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      todos: ['test1', 'test2', 'test3', 'test4'],
      showForm: false,
      newToDo: ''
    }
  }

  // toggles showForm state, which shows todo entry form on true
  showOrHideForm(){
    {this.state.showForm
      ? this.setState ({showForm: false})
      : this.setState ({showForm: true})
    }
  }

  // set newList state to equal the text input entered by the user
  handleChange(event){
    this.setState({newToDo: event});
  }

  // when submit is clicked, add the newList item to the todoLists array and hide form
  handleSubmit(event){
    event.preventDefault();
    this.setState({newToDo: ''});
    this.setState({todos: this.state.todos.concat(this.state.newToDo)});
  }

  render() {
    return (
      <div className='new'>
        <ul className='lists'>
          {/* map through contents of todos and show li for each item */}
          {this.state.todos.map((todo) => {
            return (
              <li
                className='listOfListsItem'
                key={todo}
              >
                <div className='list-icon-left'>
                  <Edit className='edit' />
                </div>
                {todo}
                <div className='list-icon-right'>
                  <Close className='delete' />
                </div>
              </li>
            )
          })}
        </ul>
        {/* if showForm is true, show the form (NewToDo) */}
        {this.state.showForm &&
          <NewEntry
            submitIt={this.handleSubmit}
            handleChange={this.handleChange}
            currentList={this.state.newToDo}
          />
        }
        {!this.state.showForm &&
          <div className='add-list-btn'>
            {/* clicking image will run func that flips showForm to show form */}
            <input
              className="plus-svg"
              type="image"
              src={require ('./images/plus.png')}
              onClick={this.showOrHideForm}
            />
          </div>
        }      
      </div>
    )
  }
}

export default List;

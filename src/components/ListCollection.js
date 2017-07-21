import React from 'react';
import NewEntry from './NewEntry.js';
import Close from 'react-icons/lib/md/close';
import Edit from 'react-icons/lib/md/edit';



class ListCollection extends React.Component {

  // constructor takes props, binds functions, and declares state
  constructor(props) {
    super(props);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.showFormFunc = this.showFormFunc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      showForm: false,
      todoLists: ['Gabriella\'s Morning List', 'Kelly\'s To-Do List', 'Stephen\'s Projects', 'Gabriella\'s To-Do List'],
      newList: ''
    };
  }

  // will toggle list view
  handleViewChange(){
    this.props.onListClick();
  }

  // toggles showForm state, which shows todo entry form on true
  showFormFunc(e){
    e.preventDefault()
    {this.state.showForm
      ? this.setState({showForm: false})
      : this.setState({showForm: true})
    }
  }

  // when submit is clicked, add the newList item to the todoLists array and hide form
  handleSubmit(event){
    event.preventDefault();
    this.setState({newList: ''});
    this.setState({todoLists: this.state.todoLists.concat(this.state.newList)});
    this.showFormFunc;
  }

  // set newList state to equal the text input entered by the user
  handleChange(event){
    this.setState({newList: event});
  }
  // console out the contents of the list upon page load
  componentDidMount(){
    console.log("Lists are: " + this.state.todoLists);
  }

  render() {
    return (
      <div className='new'>
        <ul className='lists'>
          {/* map through contents of todoLists and show li for each item */}
          {this.state.todoLists.map((list) => {
            return (
              <li
                className='listOfListsItem'
                key={list}
                onClick={this.handleViewChange}
              >
                <div className='list-icon-left'>
                  <Edit className='edit' />
                </div>
                {list}
                <div className='list-icon-right'>
                  <Close className='delete' />
                </div>
              </li>
            )
          })}
        </ul>
        {/* if showForm is true, show the form (NewEntry) */}
        {this.state.showForm &&
          <NewEntry
              submitIt={this.handleSubmit}
              handleChange={this.handleChange}
              currentList={this.state.newList}
          />
        }
        <div className='add-list-btn'>
          {/* clicking image will run func that flips showForm to show form */}
          <img
            className="plus-svg"
            src={require ('./images/plus.png')}
            alt="plus button"
            onClick={this.showFormFunc}
          />
        </div>
      </div>
    )
  }
}

export default ListCollection;

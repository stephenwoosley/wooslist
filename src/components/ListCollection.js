import React from 'react';
import NewEntry from './NewEntry.js';
import Close from 'react-icons/lib/md/close';
import Edit from 'react-icons/lib/md/edit';
import fire from '../fire';


class ListCollection extends React.Component {

  // constructor takes props, binds functions, and declares state
  constructor(props) {
    super(props);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.showFormFunc = this.showFormFunc.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTodoFirebaseAdd = this.handleTodoFirebaseAdd.bind(this);
    // this.addMessage = this.addMessage.bind(this);

    this.state = {
      showForm: false,
      newList: '',
      todoLists: [],
    };
  }

  handleTodoFirebaseAdd() {
    console.log('newList inside firebase handler is: ' + this.state.newList)
    let newOne = {
      id: this.state.todoLists.length + 1,
      name: this.state.newList,
    };
    let newTodoKey = fire.database().ref().child('samples').push().key;
    let updates = {};
    updates['/samples/' + newTodoKey] = newOne;
    this.setState({newList: ''});
    return fire.database().ref().update(updates)
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

  // set newList state to equal the text input entered by the user
  handleChange(event){
    this.setState({newList: event});
  }

  componentWillMount() {
    let listCollectionRef = fire.database().ref().child('samples');
    //fire.database().ref().child('samples')
    listCollectionRef.orderByKey().limitToLast(8).on('child_added', snapshot => {
      let fbValSnap = snapshot.val();
      snapshot.forEach(childSnapshot => {
        let key = childSnapshot.key;
        let childData = childSnapshot.val();
        let text = childData.text;
        console.log('childSnapshot.key name is');
        console.log(key);
        console.log('childSnapshot.val().name is:');
        console.log(childData);
        //this (finally) sets the todoLists state to what's in the Firebase DB.
        this.setState({todoLists: this.state.todoLists.concat(childData)})
      })
      console.log("Firebase snapshot.val() at samples level is: ");
      console.log(fbValSnap);
      console.log("Lists are: " + this.state.todoLists);
    })
  }


  render() {
    return (
      <div className='new'>
        <ul className='lists'>
          {/* map through contents of todoLists and show li for each item */}
          {this.state.todoLists.map((list, i) => {
            return (
              <li
                className='listOfListsItem'
                key={i}
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
              firebaseAdd={this.handleTodoFirebaseAdd}
              // addMessage={this.addMessage}
          />
        }
        {!this.state.showForm &&
          <div className='add-list-btn'>
            {/* clicking image will run func that flips showForm to show form */}
            <img
              className="plus-svg"
              src={require ('./images/plus.png')}
              alt="plus button"
              onClick={this.showFormFunc}
            />
          </div>
        }
      </div>
    )
  }
}

export default ListCollection;

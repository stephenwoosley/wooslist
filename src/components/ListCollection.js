
// TODO:
// 1. handle clicks on the list item text or delete differently than clicks on the white space.
// 2. Configure List Items just like List Collections
// 3. Handle List Items belonging to Collections
// FIRST: Edit mode should only be active inside one LI at a time; therefore
//        move edit-to-static-mode switching to inside UpdateableItem Component.


import React from 'react';
import NewEntry from './NewEntry.js';
import Edit from 'react-icons/lib/md/edit';
import Close from 'react-icons/lib/md/close';
import UpdateableItem from './UpdateableItem.js';
import StaticItem from './StaticItem.js';
import fire from '../fire';


class ListCollection extends React.Component {

  // constructor takes props, binds functions, and declares state
  constructor(props) {
    super(props);

    this.dbListCollectionItems = fire.database().ref().child('ListCollectionItems');

    this.handleViewChange = this.handleViewChange.bind(this);
    this.showFormFunc = this.showFormFunc.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNewItemSubmit = this.handleNewItemSubmit.bind(this);
    // this.handleTodoFirebaseAdd = this.handleTodoFirebaseAdd.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.showLCEdit = this.showLCEdit.bind(this);

    this.state = {
      showForm: false,
      editClicked: false,
      newList: '',
      todoLists: [],
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
  showLCEdit(e){
    e.preventDefault()
    {this.state.editClicked
      ? this.setState({editClicked: false})
      : this.setState({editClicked: true})
    }
  }

  handleNewItemSubmit(e) {
    // e.preventDefault();
    if (this.state.newList && this.state.newList.trim().length !== 0) {
      this.dbListCollectionItems.push({
        text: this.state.newList
      });
      this.setState({
        newList: ''
      });
    }
  }

  // set newList state to equal the text input entered by the user
  handleChange(event){
    this.setState({newList: event});
  }

  componentDidMount() {
    this.dbListCollectionItems.on('value', dataSnapshot => {
      var items = [];

      dataSnapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item['.key'] = childSnapshot.key;
        items.push(item);
      });

      this.setState({
        todoLists: items
      });
    });
  }

  componentWillUnmount() {
    this.dbListCollectionItems.off();
  }


  removeItem(key){
    this.dbListCollectionItems.child(key).remove();
  }

  render() {
    var _this = this;
    return (
      <div className='new'>
        <ul className='lists'>
          {/* map through contents of todoLists and show li for each item */}
          {this.state.todoLists.map((list, i) => {
            return (
              // UI for List Collection Items
              // put li inside a component and attach edited state to the component and render based on edited state
              // create an edit function to facilitate firebase updates
              <li
                key={ list ['.key']}
                className='listOfListsItem'
              >
                {/* UI for the Edit Button */}
                <a>
                  <div className='list-icon-left'>
                    <Edit className='edit' onClick={this.showLCEdit}/>
                  </div>
                </a>
                {/* UI for the Updateable Text of the todo */}
                {this.state.editClicked
                  ? <UpdateableItem
                      dbkey={list['.key']}
                      text={list.text}
                      remove={this.removeItem}
                      hideEdit={this.showLCEdit}
                    />
                  : <StaticItem
                      text={list.text}
                      onClick={this.handleViewChange}
                    />
                }
                {/* UI for the Close Button */}
                <a>
                  <div className='list-icon-right'>
                    <Close className='delete' onClick={this.removeItem.bind(null, list['.key'])}/>
                  </div>
                </a>
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
              firebaseAdd={this.handleNewItemSubmit}
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

// handleTodoFirebaseAdd() {
//   console.log('newList inside firebase handler is: ' + this.state.newList)
//   let newOne = {
//     id: this.state.todoLists.length + 1,
//     name: this.state.newList,
//   };
//   let newTodoKey = fire.database().ref().child('samples').push().key;
//   let updates = {};
//   updates['/samples/' + newTodoKey] = newOne;
//   this.setState({newList: ''});
//   return fire.database().ref().update(updates)
// }


// componentWillMount() {
//   let listCollectionRef = fire.database().ref().child('samples');
//   //fire.database().ref().child('samples')
//   listCollectionRef.orderByKey().limitToLast(8).on('child_added', snapshot => {
//     let fbValSnap = snapshot.val();
//     snapshot.forEach(childSnapshot => {
//       let key = childSnapshot.key;
//       let childData = childSnapshot.val();
//       let text = childData.text;
//       console.log('childSnapshot.key name is');
//       console.log(key);
//       console.log('childSnapshot.val().name is:');
//       console.log(childData);
//       //this (finally) sets the todoLists state to what's in the Firebase DB.
//       this.setState({todoLists: this.state.todoLists.concat(childData)})
//     })
//     console.log("Firebase snapshot.val() at samples level is: ");
//     console.log(fbValSnap);
//     console.log("Lists are: " + this.state.todoLists);
//   })
// }

// `string text ${expression} string text`

// let objLocation = app.newsModule.articles

// `${objLocation}.x`

// 'string text ' + expression + ' string text'



// x is a string
// x should represent an object of the same name

// retrieve an object where the key is = x


{/* <li
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
</li> */}

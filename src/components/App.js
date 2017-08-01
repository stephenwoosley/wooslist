import React, { Component } from 'react';
import Header from './Header';
import ListCollection from './ListCollection';
import List from './List';
import '../css/App.css';
// import fire from '../fire';

class App extends Component {
  // constructor takes props, binds function and declares state
  constructor(props) {
    super(props);
    this.toggleListOrCollection = this.toggleListOrCollection.bind(this);
    this.state = {
      listOfListsActive: true,
      messages: []
    };
  }

  // addMessage(e){
  //   e.preventDefault(); // <- prevent form submit from reloading the page
  //   /* Send the message to Firebase */
  //   fire.database().ref('messages').push( this.inputEl.value );
  //   this.inputEl.value = ''; // <- clear the input
  // }
  //
  // componentWillMount() {
  //   /* Create reference to messages in Firebase Database */
  //   let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
  //   messagesRef.on('child_added', snapshot => {
  //     /* Update React state when message is added at Firebase Database */
  //     let something = { text: snapshot.val(), id: snapshot.key };
  //     this.setState({ messages: [something].concat(this.state.messages) });
  //   })
  // }

  // sets listOfListsActive state to toggle which component displays
  toggleListOrCollection() {
    this.state.listOfListsActive
    ? this.setState({listOfListsActive: false})
    : this.setState({listOfListsActive: true})
  }

  render() {
    return (
      <div className='container'>
        {/* Displays header and passes props down */}
        <Header showButton={this.state.listOfListsActive} onHomeClick={this.toggleListOrCollection}/>
        {/* Toggles displayed component based on listOfListsActive state */}
        {this.state.listOfListsActive
          ? <ListCollection onListClick={this.toggleListOrCollection} />
          : <List />
         }
         {/* <form onSubmit={this.addMessage.bind(this)}>
            <input type="text" ref={ el => this.inputEl = el }/>
            <input type="submit"/>
            <ul> */}
              { /* Render the list of messages */}
          {/* //       this.state.messages.map( message => <li key={message.id}>{message.text}</li> ) */}
          {/* //     } */}
          {/* //   </ul> */}
          {/* // </form> */}
      </div>
    );
  }
}

export default App;

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
      </div>
    );
  }
}

export default App;

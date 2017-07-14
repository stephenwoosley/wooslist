import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch
// } from 'react-router-dom';
import Header from './Header';
import ListCollection from './ListCollection';
import List from './List';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.toggleListOrCollection = this.toggleListOrCollection.bind(this);
    this.state = {listOfListsActive: true};
  }
  toggleListOrCollection() {
    this.state.listOfListsActive
    ? this.setState({listOfListsActive: false})
    : this.setState({listOfListsActive: true})
  }
  render() {
    const CurrentComponent = this.state.componentName;
    return (
      <div className='container'>
        <Header showButton={this.state.listOfListsActive} onHomeClick={this.toggleListOrCollection}/>
        {this.state.listOfListsActive
          ? <ListCollection onListClick={this.toggleListOrCollection}/>
          : <List />
         }
      </div>
    )
  }
}

module.exports = App;

import React, { Component } from 'react';
import fire from '../fire';

class EditableItemContent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: props.text,
    }
  }
  itemChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <form onSubmit={ this.handleUpdateItem }>
        <input
          className="listOfListsItemText"
          id={this.props.dbkey + 'itemname'}
          onChange={ this.itemChange }
          value={ this.state.text }
          name="text"
        />
      </form>
    );
  }
}

class UneditableItemContent extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      console.log(this)
    );
  }
}

class UpdateableItem extends Component {
  constructor (props) {
    super(props);
    this.dbListCollectionItems = fire.database().ref().child('ListCollectionItems');
    this.itemChange = this.itemChange.bind(this);
    this.handleUpdateItem = this.handleUpdateItem.bind(this);
    this.remove = this.remove.bind(this);
    this.state = {
      text: props.text,
      edit: true
    };
  }

  itemChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleUpdateItem(e) {
    e.preventDefault();
    if (this.state.text && this.state.text.trim().length !== 0) {
      this.dbListCollectionItems.child(this.props.dbkey).update(this.state);
    }
    this.props.hideEdit
    {this.state.edit && this.setState({edit: false})}

  }
  remove(key) {
    this.props.remove(key)
  }

  render(){
    return (
      <div>
      {this.state.edit
        ? <EditableItemContent />
        : <UneditableItemContent />
      }
           <form onSubmit={ this.handleUpdateItem }>
             <input
              className="listOfListsItemText"
              id={this.props.dbkey + 'itemname'}
              onChange={ this.itemChange }
              value={ this.state.text }
              name="text"
            />
          </form>
      </div>
    )
  }
}

export default UpdateableItem;

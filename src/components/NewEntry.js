import React from 'react';

class NewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleToDoSubmit = this.handleToDoSubmit.bind(this);
    this.firebaseAdd = this.firebaseAdd.bind(this);
  }
  handleToDoSubmit(e){
    this.props.submitIt(e);
  }
  handleTextChange(e){
    this.props.handleChange(e.target.value);
  }
  firebaseAdd(e){
    e.preventDefault();
    this.props.firebaseAdd(this.props.currentList)
  }

  render() {
    return (
      <div>
        <form className='listEntryInput'
          // onSubmit={this.handleToDoSubmit}
          onSubmit={this.firebaseAdd}
          // onSubmit={
          //   this.props.addMessage
          // }
          >
          <input
            className='focus'
            autoFocus
            type='text'
            ref={this.props.currentList}
            autoComplete='off'
            value={this.props.currentList}
            onChange={this.handleTextChange}
          />
        </form>
      </div>
    )
  }
}

export default NewEntry;

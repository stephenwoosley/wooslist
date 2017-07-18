import React from 'react';

class NewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleToDoSubmit = this.handleToDoSubmit.bind(this);
  }
  handleToDoSubmit(e){
    this.props.submitIt(e);
  }
  handleTextChange(e){
    this.props.handleChange(e.target.value);
  }
  render() {
    return (
      <div>
        <form className='listEntryInput'
          onSubmit={this.handleToDoSubmit}
          >
          <input
            className='focus'
            placeholder='Whats Next?'
            type='text'
            autoComplete='off'
            value={this.props.currentList}
            onChange={this.handleTextChange}
          />
          {/* <button className='button' type='submit'>
            Add
          </button> */}
        </form>
      </div>
    )
  }
}

export default NewEntry;

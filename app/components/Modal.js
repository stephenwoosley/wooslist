import React from 'react';

class Modal extends React.Component {
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

    let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      // background: '#fff'
    }

    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    }

    return (
      <div>
        <div id='myModal' className='modal'>
           {/* Modal content  */}
          <div className='modal-content'>
            <div className='modal-header'>
              <span className='close' onClick={this.props.closeModal}>&times;</span>
              <h2>Modal Header</h2>
            </div>
            <div className='modal-body'>
              <form className='column'
                onSubmit={this.handleToDoSubmit}
                >
                <input
                  id='username'
                  placeholder='New Task'
                  type='text'
                  autoComplete='off'
                  value={this.props.currentList}
                  onChange={this.handleTextChange}
                />
                <button className='button' type='submit'>
                  Add
                </button>
              </form>
            </div>
            <div className='modal-footer'>
              <h3>Modal Footer</h3>
            </div>
          </div>
        </div>
        {/* <div style={backdropStyle} onClick={this.props.closeModal}>
          test
        </div> */}
      </div>

    )
  }
}

export default Modal;

import React from 'react';
import moment from 'moment';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.homeClick = this.homeClick.bind(this);
  }
  homeClick() {
    this.props.onHomeClick();
  }
  render() {
    return (
      <div className='header'>
        {!this.props.showButton &&
          <div className='add-list-btn'>
            <img onClick={this.homeClick} className="plus-svg" src="/app/images/home.png" alt="home button" />
          </div>
        }
        <div className='header-text'>
          <h1 className='main-title'>wooslist</h1>
        </div>
        <div className='date-block'>
          <div className='column-test'>
            <span className='big-day'>{moment().format('D')}</span>
            <span>{moment().format('MMM YYYY')}</span>
          </div>
          <h3 className='weekday'>{moment().format('dddd')}</h3>
        </div>
      </div>
    )
  }
}

export default Header;

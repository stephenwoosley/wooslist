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
          <h1 className='main-title'>Wooslist.{!this.props.showButton &&
            <span className='slash-list-name'>/Gabriella</span>
          }</h1>

        </div>

        <div className='date-block Grid Aligner'>
          <div className='big-day'>
            {moment().format('D')}
          </div>
          {/* ***** Day Month Year ***** */}
          <div className='Grid-cell date-numbers'>

              <div className='month-year-container'>
                <div className='month'>
                  {moment().format('MMM')}
                </div>
                <div className='year'>
                  {moment().format('YYYY')}
                </div>
              </div>
          </div>
          {/* {!this.props.showButton &&
            <div className='list-name Grid-cell Aligner-item'>Gabriella</div>
          } */}
          <h3 className='weekday Grid-cell'>{moment().format('dddd')}</h3>
        </div>
      </div>
    )
  }
}

export default Header;

import React from 'react';
import moment from 'moment';


class Header extends React.Component {
  // constructor takes props and binds function
  constructor(props) {
    super(props);
    this.homeClick = this.homeClick.bind(this);
  }
  // on clicking the home button, activate function from props that toggles view
  homeClick() {
    this.props.onHomeClick();
  }

  render() {

    return (
      <div className='header'>
        {/* if List.js view is active, then show home button */}
        {!this.props.showButton &&
          <div className='add-list-btn'>
            <img onClick={this.homeClick} className="plus-svg" src={require ('./images/home.png')} alt="home button" />
          </div>
        }
        <div className='header-text'>
          {/* populate the list name based on which list is active */}
          <div className='main-title'>Wooslist.{!this.props.showButton &&
            <span className='slash-list-name'>/Gabriella</span>
          }</div>
        </div>
        {/* row that populates date information */}
        <div className='date-block Grid Aligner'>
          {/* large numeric day */}
          <div className='big-day'>
            {moment().format('D')}
          </div>
          <div className='Grid-cell date-numbers'>
              {/* month and year stacked */}
              <div className='month-year-container'>
                <div className='month'>
                  {moment().format('MMM')}
                </div>
                <div className='year'>
                  {moment().format('YYYY')}
                </div>
              </div>
          </div>
          {/* day of the week */}
          <h3 className='weekday Grid-cell'>{moment().format('dddd')}</h3>
        </div>
      </div>
    )

  }

}

export default Header;

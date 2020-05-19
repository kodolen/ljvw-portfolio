import React, { Component } from 'react';

class DarkModeToggle extends Component {
  constructor(props) {
    super(props);

    if(JSON.parse(localStorage.getItem('DARK_MODE')) === true) {
      document.body.classList.add('dark-mode');
    }

    this.state = {
      darkMode: JSON.parse(localStorage.getItem('DARK_MODE'))
    }

    this.handleModeChange = this.handleModeChange.bind(this);
  }

  handleModeChange() {
    let toggle = document.getElementById("dark-mode-toggle");
    let contentWhite = document.getElementById('content-white')
    let casesBg = document.getElementById('cases-bg');

    if(!this.state.darkMode) {
      document.body.classList.add('dark-mode');
      toggle.classList.add('dark-mode');
      contentWhite.classList.add('dark-mode');
      casesBg.classList.add('dark-mode')

    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('transition')
      toggle.classList.remove('dark-mode');
      contentWhite.classList.remove('dark-mode');
      casesBg.classList.remove('dark-mode');
    }

    this.setState({
      darkMode: (!this.state.darkMode)
    });
    localStorage.setItem('DARK_MODE', !this.state.darkMode);
  }

  render() {
    return (
      <button onClick={this.handleModeChange} id="dark-mode-toggle"><span className="theme-button-text">Change theme</span></button>
    );
  }
}

export default DarkModeToggle;
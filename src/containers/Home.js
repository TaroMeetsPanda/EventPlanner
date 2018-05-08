import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../App.css';
import { onChange } from '../actions';

class Home extends Component {
  render() {
    console.log(this.props.formState.message);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Welcome to Taro and ChowChow's first application!!
          <li><Link to='/addUser' >Add User</Link></li>
          <input id='message' name='message' value={this.props.formState.message} onChange={(e) => this.props.onChange('message', e.target.value)} />
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formState: state
  }
}

const mapDispatchToProps = {
  onChange,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

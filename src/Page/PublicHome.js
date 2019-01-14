import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';

import RegisterDialog from '../func/RegisterDialog.js';
import LoginDialog from '../func/LoginDialog.js';
import NavBar from '../func/NavBar.js';
import Footer from '../func/Footer.js';

import { ButtonToolbar, Alert, Jumbotron, Button, Carousel } from 'react-bootstrap';

class PublicHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorCode: '',
      successCode: ''
    };

    this.openEvents = this.openEvents.bind(this);
  }//end constructor

  openEvents() {
    this.props.history.push('/home');
  }
  componentWillMount() {

  }


  render() {

    let succMsg = <p></p>;
    if (this.state.successCode === 'succLogin') {
      succMsg = <Alert bsStyle="success">
        <strong>Successful Login</strong>
      </Alert>;
    }
    else if (this.state.successCode === 'succRegister') {
      succMsg = <Alert bsStyle="success">
        <strong>Successful Register</strong>
      </Alert>;
    }
    else if (this.state.successCode === 'succVerification') {
      succMsg = <Alert bsStyle="success">
        <strong>Successful Verification</strong>
      </Alert>;
    }
    else if (this.state.successCode === 'succLogout') {
      succMsg = <Alert bsStyle="success">
        <strong>Successful Logout!</strong>
      </Alert>;
    }

    return (
      <div>
        <ButtonToolbar>
          <NavBar />
        </ButtonToolbar>
        <Jumbotron>
          <h2>Hello There!</h2>
          {succMsg}
          <p>
            This is a simple cloud-based application, it aims to improve the communication and unstanding between you and your colleagues in the company.
          </p>
          <p>
            You can create some events, seminar, presentations, etc, view the stuff that other people post or enroll yourself in something interested you. 
          </p>
          <p>
            <Button bsStyle="primary" onClick={this.openEvents}>Sign in to view activities</Button>
          </p>
        </Jumbotron>
        <p className="App-intro">
          Did you ever have a feeling that you know very little about the colleagues sitting nearby you? 
        </p>
        <p>
          You might ignore something that is also important when you are putting into your own work. With this application, you can host some event or join other peoples' activities more conveniently. 
          For instance, presentations telling other people what you are currently working on, activities after work, seminar regarding your issue with your project. 
        </p>
        <div align="center">
          <Carousel style={{ width: 900, height: 500 }}>
            <Carousel.Item>
              <img style={{ width: 900, height: 500 }} alt="900x500" src="/img/seminar-events1.jpg" />
              <Carousel.Caption>
                <h3>Seminar</h3>
                <p>Host your own small seminar, maybe other people from other area can give you some novel idea</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{ width: 900, height: 500 }} alt="900x500" src="/img/drink.jpg" />
              <Carousel.Caption>
                <h3>After work activities</h3>
                <p>Bring some relax to yourself together with your colleagues, for example, a drink is a good one</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{ width: 900, height: 500 }} alt="900x500" src="/img/act.png" />
              <Carousel.Caption>
                <h3>Any type you want</h3>
                <p>You can creat one now</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withRouter(PublicHome);
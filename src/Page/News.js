import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

import RegisterDialog from '../func/RegisterDialog.js';
import LoginDialog from '../func/LoginDialog.js';
import NavBar from '../func/NavBar.js';
import Footer from '../func/Footer.js';

import { Button, ButtonToolbar, Alert, Panel } from 'react-bootstrap';
import AddEventDialog from '../func/AddEventDialog.js';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorCode: '',
            successCode: '',
            eventList: []
        };


    }//end constructor


    render() {


        return (
            <div>
                <ButtonToolbar>
                    <NavBar />
                </ButtonToolbar>
                

                <Panel bsStyle="success">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Article 1</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>blablabla</Panel.Body>
                </Panel>

                

                <Panel bsStyle="warning">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Article 2</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>blablabla</Panel.Body>
                </Panel>

                <Panel bsStyle="danger">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Article 3</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>blablabla</Panel.Body>
                </Panel>
                <Footer />
            </div>
        );
    }

}

export default withRouter(News);
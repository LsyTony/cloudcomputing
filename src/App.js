import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PublicHome from './Page/PublicHome.js';
import UserHome from './Page/UserHome.js';
import News from './Page/News.js';


class App extends Component {
  constructor(props) {
    super(props);
    global.poolDataCfg = {
      UserPoolId: 'eu-west-2_4rEJywLCt', //config cognito.userPoolId,
      ClientId: 'uvvd9umi4gp7c16e1ksfjotti', //config cognito.userPoolClientId
    };
    //AWS LAmbda function API for getting all of the activities from the database
    global.APIURL1 = 'https://phoebi37hd.execute-api.eu-west-2.amazonaws.com/getStage';
    //AWS LAmbda function API for adding a new activity
    global.APIURL2 = 'https://f5p0h724p6.execute-api.eu-west-2.amazonaws.com/postStage';
    //AWS LAmbda function API for enroll of a activity
    global.APIURL3 = 'https://76n1amy7og.execute-api.eu-west-2.amazonaws.com/enrollstage';
    global.isLogin = false;
  }

  componentWillMount(){
    if (localStorage.getItem('userData') !== null) {
      let userData = JSON.parse(localStorage.getItem('userData'));
      //15 min timeout in browser until relogin
      if (Date.now() - userData.lastLoginDate < 15 * 60 * 1000) {
        global.isLogin = true;
        global.jwtToken = userData.jwtToken;
      }
    }
  }

  myRouterSwitch() {
    let myHomePage = <PublicHome />;
    if (global.isLogin) {
      myHomePage = <UserHome />
    }
    return (
      <Switch>
        <Route exact path="/" component={PublicHome} />
        <Route path="/home" component={UserHome} />
        <Route path="/news" component={News} />
      </Switch>
    );
  }//end myRouterSwitch
  handleSelect(eventKey) {
    //event.preventDefault();
    alert(`selected ${eventKey}`);
  }
  render() {
    let routerSwitch = this.myRouterSwitch();


    return (
      <div className="App">
        <Router history={Router.HistoryLocation} >
          {routerSwitch}
        </Router>
      </div>
    );
  }
}

export default App;

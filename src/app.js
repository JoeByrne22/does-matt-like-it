import React from 'react';
import ReactDOM from 'react-dom';
import ThingIndex from './components/ThingIndex';
import ThingNew from './components/New';
import ThingShow from './components/Show';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/register';


import 'bulma';
import './scss/style.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path="/things" component={ThingIndex} />
          <Route exact path="/things/new" component={ThingNew} />
          <Route exact path="/things/:id" component={ThingShow} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root')
);

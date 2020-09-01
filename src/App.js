import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';
import { Apply } from './Apply';
import { Deposit } from './Deposit';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route path="/apply" component={Apply} />
            <Route path="/deposit" component={Deposit} />
            <Route path="/register" component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;

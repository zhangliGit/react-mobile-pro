import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, KeepAlive } from "react-keep-alive";
import './index.css';
import "@a/css/global.less";
import '@a/css/qui-base.css';
import '@u/rem.js'
import App from './App';
import List from './List';
import Detail from './Detail';

ReactDOM.render(
  <Provider>
    <Router>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route
          exact
          path="/list"
          render={(props: any) => (
            <KeepAlive key="List">
              <List {...props} />
            </KeepAlive>
          )}
        ></Route>
        <Route exact path="/detail" component={Detail} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
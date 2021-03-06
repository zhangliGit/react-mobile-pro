import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as Providers } from 'react-redux'
import store from './store/index'
import asyncComponent from './asyncComponent'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider, KeepAlive } from 'react-keep-alive'
import './index.css'
import '@a/css/global.less'
import '@a/css/qui-base.css'
import '@u/rem.js'
import App from './App'
const List = asyncComponent(() => require('./List'))
const Detail = asyncComponent(() => require('./Detail'))

ReactDOM.render(
  <Providers store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/list" component={List}></Route>
        {/* <Route
          path="/list"
          render={(props: any) => (
            <KeepAlive key="List">
              <List {...props} />
            </KeepAlive>
          )}
        ></Route> */}
        <Route path="/detail" component={Detail} />
      </Switch>
    </Router>
  </Providers>,
  document.getElementById('root')
)

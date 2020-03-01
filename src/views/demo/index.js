import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import attachFastClick from 'fastclick'
import '../../config'
import '@a/css/base.less'
import '@u/rem.js'
import './index.css'
import App from './App'
import Detail from './Detail'

attachFastClick.attach(document.body)
ReactDOM.render(
  <HashRouter>
    <div className="qui-page qui-fx">
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/detail" component={Detail}></Route>
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root')
)

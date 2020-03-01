import React, { Component } from 'react'
import HeaderCom from '@com/HeaderCom'
import './App.less'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      appList: [
        {
          id: 1,
          name: '示例',
          url: 'demo'
        }
      ]
    }
  }
  goApp(url) {
    window.location.href = `${url}.html`
  }
  getTip = () => <div onClick={() => this.goTip()}>脚手架</div>
  goTip = () => {
    this.props.history.push('/tip')
  }
  render() {
    const { appList } = this.state
    return (
      <div className="qui-fx-f1 qui-fx-ver">
        <HeaderCom title="react应用" right={this.getTip()}></HeaderCom>
        <div className="qui-fx-f1">
          {appList.map(app => {
            return (
              <div onClick={() => this.goApp(app.url)} key={app.id} className="app-list">
                {app.name}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

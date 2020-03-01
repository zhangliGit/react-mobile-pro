import React, { Component } from 'react'
import back from '../img/back.png'
import './index.less'

export default class HeaderCom extends Component {
  goBack = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <div className="header-com qui-fx qui-fx-ac">
        <div className="max-width">
          {this.props.isBack ? <img onClick={() => this.goBack()} className="back-icon" src={back} alt="" /> : ''}
        </div>
        <div className="title">{this.props.title}</div>
        <div className="max-width qui-fx-je">{this.props.right}</div>
      </div>
    )
  }
}

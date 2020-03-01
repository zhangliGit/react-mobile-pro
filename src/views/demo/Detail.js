import React, { Component } from 'react'
import HeaderCom from '@com/HeaderCom'
import $ajax from '@u/ajax-serve'
import apiList from './api'
import './detail.less'

export default class Detail extends Component {
  state = {
    detail: {}
  }
  async componentDidMount() {
    const res = await $ajax.get({
      url: apiList.getDetail
    })
    this.setState({
      detail: res.data
    })
  }
  render() {
    const { detail } = this.state
    return (
      <div className="qui-fx-f1 qui-fx-ver">
        <HeaderCom history={this.props.history} isBack title="详情"></HeaderCom>
        <div className="qui-fx-f1 detail">
          <p>姓名：{detail.name}</p>
          <p>年龄：{detail.age}</p>
          <p>性别：{detail.sex}</p>
          <p>住址：{detail.address}</p>
        </div>
      </div>
    )
  }
}

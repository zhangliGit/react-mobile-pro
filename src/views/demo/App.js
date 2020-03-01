import React, { Component } from 'react'
import HeaderCom from '@com/HeaderCom'
import $ajax from '@u/ajax-serve'
import apiList from './api'
import './App.css'

export default class App extends Component {
  state = {
    dataList: []
  }
  goDetail = () => {
    this.props.history.push('/detail')
  }
  async componentDidMount() {
    const res = await $ajax.get({
      url: apiList.getIndex
    })
    this.setState({
      dataList: res.data
    })
  }
  render() {
    const { dataList } = this.state
    return (
      <div className="qui-fx-f1 qui-fx-ver">
        <HeaderCom history={this.props.history} title="主页"></HeaderCom>
        <div className="qui-fx-f1">
          {dataList.map((item, index) => {
            return (
              <div onClick={() => this.goDetail()} key={index} className="list-item qui-fx-jsb qui-bd-b">
                <span>{item.name}</span>
                <span>{item.number}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

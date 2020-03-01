import React, { Component } from 'react'
import HeaderCom from '@com/HeaderCom'

const styles = {
  lineHeight: '24px',
  padding: '10px'
}
export default class Tip extends Component {
  render() {
    return (
      <div className="qui-fx-f1 qui-fx-ver">
        <HeaderCom history={this.props.history} isBack title="模板说明"></HeaderCom>
        <div className="qui-fx-f1" style={{ ...styles }}>
          react模板脚手架基于create-react-app改造，配置多模块编译打包
        </div>
      </div>
    )
  }
}

import React from 'react'
import $ajax from '../../utils/ajax-serve'
import ScrollList from '../../components/common/ScrollList/index'

class Detail extends React.Component {
  readonly state = {
    data: 'zhangli'
  }
  componentDidMount() {
    $ajax
      .get({
        url: 'http://yapi.demo.qunar.com/mock/5691/detail'
      })
      .then(res => {
        this.setState({
          data: res.data
        })
      })
  }
  render() {
    console.log(this.props)
    return (
      <div className="qui-page qui-fx-ver app">
        <div className="header">详情</div>
        <ScrollList>
          <div style={{ padding: '15px', lineHeight: '35px' }}>{this.state.data}</div>
        </ScrollList>
      </div>
    )
  }
}

export default Detail

import React, { Component } from 'react'
import BScroll from 'better-scroll'

class ScrollList extends Component {
  componentDidMount(): void {
    const wrap: any = this.refs.wrapper
    let scroll = new BScroll(wrap, {
      click: true,
      scrollbar: true
    })
    scroll.refresh()
    scroll.scrollTo(0, -1)
  }
  render() {
    return (
      <div className="qui-fx-f1 qui-of scroll-list" ref="wrapper">
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default ScrollList

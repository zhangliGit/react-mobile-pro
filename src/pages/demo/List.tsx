import React, { useState, useEffect } from 'react'
import { useKeepAliveEffect } from 'react-keep-alive'
import actions from './store/action/home'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ScrollList from '../../components/common/ScrollList/index'

const List: React.FC = (props: any) => {
  const [dataList, setList] = useState([])
  useEffect(() => {
    // 路由缓存浏览器刷新当前界面时加载数据
    showList()
  }, [])
  // useKeepAliveEffect(() => {
  //   // 对于缓存的路由，只有进入类型为push时才刷新加载
  //   if (props.history.action === 'PUSH') {
  //     getList()
  //   }
  //   // 缓存路由退入后台时触发
  //   return () => {
  //   };
  // })
  const showList = async () => {
    const res = await props.actions.getList()
    setList(res.data)
  }
  const goDetial = () => {
    props.history.push('/detail')
  }
  return (
    <div className="qui-page qui-fx-ver app">
      <div className="header">列表</div>
      <ScrollList>
        <ul>
          {dataList.map((item: { title: string }, index: number) => {
            return (
              <li
                onClick={() => goDetial()}
                className="qui-bd-b"
                style={{ padding: '20px 25px', background: '#fff' }}
                key={index}
              >
                {item.title}
              </li>
            )
          })}
        </ul>
      </ScrollList>
    </div>
  )
}

function mapDispatchToProps(dispatch: any) {
  const { getList } = actions
  return {
    actions: bindActionCreators({ getList }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(List)

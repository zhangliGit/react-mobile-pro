import React, { useState, useEffect } from 'react';
import $ajax from '../../utils/ajax-serve'
import { fetch, commit } from './store/action/home'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ScrollList from '../../components/common/ScrollList/index'
import './App.less'

const App: React.FC = (props: any) => {
  const [dataList, setData] = useState([]);
  interface resD {
    data: [];
  }
  useEffect(() => {
    $ajax
      .get({
        url: "http://yapi.demo.qunar.com/mock/5691/app"
      })
      .then((res: resD) => {
        setData(res.data);
      });
  }, []);
  const goList = () => {
    props.history.push("/list");
  };
  const  getData = async () => {
    const res = await props.actions.fetch()
    console.log(res, 0)
  }
  console.log(props)
  return (
    <div className="qui-page qui-fx-ver app">
      <div className="header">
        首页{props.name}
      </div>
      <div onClick={() => getData()}>
        获取数据
      </div>
      <ScrollList>
        <ul>
          {dataList.map((item: { name: string }, index: number) => {
            return (
              <li onClick={() => goList()} className="qui-bd-b" style={{ padding: '20px 25px', background: '#fff' }} key={index}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </ScrollList>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    list: state.reducer.list,
    name: state.reducer.name
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators({ fetch, commit }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


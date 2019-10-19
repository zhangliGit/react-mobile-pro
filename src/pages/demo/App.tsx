import React, { useState, useEffect } from 'react';
import actions from "./store/action/home";
import $ajax from '../../utils/ajax-serve'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ScrollList from '../../components/common/ScrollList/index'
import './App.less'
const App: React.FC = (props: any) => {
  const [dataList, setData] = useState([]);
  useEffect(() => {
    props.actions.getIndex().then((res: any) => {
      setData(res.data)
    })
  }, []);
  const goList = () => {
    props.history.push("/list");
  };
  return (
    <div className="qui-page qui-fx-ver app">
      <div className="header">
        首页{props.name}
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
  const { getIndex } = actions
  return {
    actions: bindActionCreators({ getIndex }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


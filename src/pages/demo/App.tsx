import React, { useState, useEffect } from 'react';
import $ajax from '../../utils/ajax-serve'
import ScrollList from '../../components/common/ScrollList/index'
import './App.less'
import { Button, Switch } from 'antd-mobile'
import ChildOne from './ChildOne'

const App: React.FC = () => {
  const params = {
    title: 'haha'
  }
  const [checked, setCheck] = useState(true)
  const [dataList, setData] = useState([]);
  interface resD {
    data: []
  }
  useEffect(() => {
    $ajax
      .post({
        url: "http://192.168.2.247:3000/mock/40/getIndex"
      })
      .then((res: resD) => {
        setData(res.data);
      });
  }, [])
  return (
    <div className="qui-page qui-fx-ver app">
      <div className="header">
          <Button type="primary">确定</Button>
        <Switch checked={checked} onChange = { () => setCheck(!checked)}></Switch>
      </div>
      <ScrollList>
        <ul>
          {dataList.map((item: { title: string }, index: number) => {
            return <li style={{padding: '25px'}} key={index}>{item.title}</li>;
          })}
        </ul>
      </ScrollList>
      <ChildOne {...params}></ChildOne>
    </div>
  );
}

export default App;

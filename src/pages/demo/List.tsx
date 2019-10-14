import React, { useState, useEffect } from "react";
import { useKeepAliveEffect } from 'react-keep-alive'
import $ajax from "../../utils/ajax-serve";
import ScrollList from "../../components/common/ScrollList/index";

const List: React.FC = (props: any) => {
  const [dataList, setList] = useState([]);
  useEffect(() => {
    // 路由缓存浏览器刷新当前界面时加载数据
    if (props.history.action === 'POP') {
      getList()
    }
  }, []);
  useKeepAliveEffect(() => {
    // 对于缓存的路由，只有进入类型为push时才刷新加载
    if (props.history.action === 'PUSH') {
      getList()
    }
    // 缓存路由退入后台时触发
    return () => {
    };
  })
  const getList = () => {
    $ajax
    .get({
      url: "http://yapi.demo.qunar.com/mock/5691/getList"
    })
    .then(res => {
      setList(res.data);
    });
  }
  const goDetial = () => {
    props.history.push("/detail");
  };
  return (
    <div className="qui-page qui-fx-ver app">
      <div className="header">列表</div>
      <ScrollList>
        <ul style={{pointerEvents: 'auto'}}>
          {dataList.map((item: { title: string }, index: number) => {
            return (
              <li
                onClick={() => goDetial()}
                className="qui-bd-b"
                style={{ padding: "20px 25px", background: "#fff" }}
                key={index}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </ScrollList>
    </div>
  );
};

export default List;

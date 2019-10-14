import React, {useState, useEffect } from 'react';
import $ajax from "../../utils/ajax-serve";
import ScrollList from "../../components/common/ScrollList/index";

const Detail: React.FC = () => {
  const [data, setData] = useState('')
  useEffect(() => {
    $ajax
      .get({
        url: "http://yapi.demo.qunar.com/mock/5691/detail"
      })
      .then(res => {
        setData(res.data);
      });
  }, [])
  return (
    <div className="qui-page qui-fx-ver app">
      <div className="header">详情</div>
      <ScrollList>
        <div style={{padding: '15px', lineHeight: '35px'}}>{data}</div>
      </ScrollList>
    </div>
  );
}

export default Detail;

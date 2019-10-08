import React from 'react';
import './App.less'
import ChildOne from './ChildOne'

const App: React.FC = () => {
  const params = {
    title: 'haha'
  }
  return (
    <div className="qui-page app" style={{ background: "red" }}>
      <div className="header"></div>
      <ChildOne {...params}></ChildOne>
    </div>
  );
}

export default App;

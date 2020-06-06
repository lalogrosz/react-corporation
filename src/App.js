import './App.css';

import React from 'react';
import Employees from './components/Employees';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo">
          <img src="logo.png"/>
        </div>
        Corporation
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Employees />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Alan Grosz | Corporation</Footer>
    </Layout>
  );
}

export default App;

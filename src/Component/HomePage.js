import React from 'react';
import 'antd/dist/antd.css';
import '../index.css'
import { Layout } from 'antd';
import Navbar from './Navbar';
import FooterPage from './FooterPage';
import Body from './Body';

const { Header } = Layout;



const HomePage = () =>{


return (
  <Layout style={{ minHeight: '100vh' }}>

    <Navbar />
    
    <Layout className="site-layout">

      <Header className="site-layout-background" style={{ padding: 0 }} />
     
      <Body />
      <FooterPage />


    </Layout>

  </Layout>
  );
    
}

export default HomePage;
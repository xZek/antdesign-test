import React from 'react';
import 'antd/dist/antd.css';
import '../index.css'
import { Layout } from 'antd';

import Axios from '../api/axios';
import BreadCrumpPage from './BreadCrumpPage';

const { Content } = Layout;


const Body = () =>{

  return(
    <Content style={{ margin: '0 16px' }}>
       <BreadCrumpPage />
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
         <Axios />
        </div>
    </Content>

  )

}
export default Body;
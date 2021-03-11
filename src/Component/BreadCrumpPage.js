import React from 'react';
import 'antd/dist/antd.css';
import '../index.css'
import { Breadcrumb } from 'antd';



const BreadCrumpPage  = () => {

    return(
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Zek</Breadcrumb.Item>
      </Breadcrumb>
    )

}

export default BreadCrumpPage;
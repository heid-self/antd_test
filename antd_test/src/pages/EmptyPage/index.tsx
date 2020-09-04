import { PageContainer } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
//import styles from './index.less';
import {connect} from 'dva' ;
import {Input,Table,Space,Button,Row,Col} from 'antd';
import { UserOutlined,PhoneOutlined,QqOutlined,EnvironmentOutlined } from '@ant-design/icons';



const columns=[
  {
    title:'姓名',
    dataIndex:'name',
    key:'name'
  },
  {
    title:'电话',
    dataIndex:'mobile',
    key:'mobile'
  },
  {
    title:'邮箱',
    dataIndex:'email',
    key:'email'
  },
  {
    title:'地址',
    dataIndex:'addr',
    key:'addr'
  },
  {
    title:'操作',
    key:'action',
    render:()=>(
      <Space size="middle">
        <a>修改</a>
        <a>删除</a>
      </Space>
     
    )
  }
]
const Tablelist =  props => {
  const {source}=props;
  return (
    <div>
      <Row gutter={[16,16]}>
        <Col span={10}>
          <Input size="large" placeholder="请输入姓名" prefix={<UserOutlined />} /> 
        </Col>
        
        <Col span={10}>
          <Input size="large" placeholder="请输入电话" prefix={<PhoneOutlined />} />
        </Col>

        <Col span={4}>
          <Button type="primary" size="large">新增</Button>
        </Col>
      </Row>
     
      <Row gutter={[16,16]} >
        <Col span={10}>
          <Input size="large" placeholder="请输入邮箱" prefix={<QqOutlined />} />
        </Col>
        
        <Col span={10}>
          <Input size="large" placeholder="请输入地址" prefix={<EnvironmentOutlined />} /> 
        </Col>

        <Col span={4}>
          <Button type="dashed" size="large">查找</Button>
        </Col>
      </Row>
      
     
      <Table dataSource={source} columns={columns} />
    </div>
  )
}
 export default connect(({tablelist})=>({...tablelist}))(Tablelist)

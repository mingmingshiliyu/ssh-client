import { useEffect, useState } from 'react'
import { Card,FloatButton,List } from "antd";
import {serverList} from '../../Mock/serverList'

import './index.css'
import { CommentOutlined, CustomerServiceOutlined, LinuxOutlined, PlusCircleTwoTone } from '@ant-design/icons';

export default function Ssh ({ enterAction }) {
  const [filePath, setFilePath] = useState('')
  const [fileContent, setFileContent] = useState('')
  const [error, setError] = useState('')



  // useEffect(() => {
  //   if (enterAction.type === 'files') {
  //     // 匹配文件进入，直接读取文件
  //     const filePath = enterAction.payload[0].path
  //     setFilePath(filePath)
  //     try {
  //       const content = window.services.readFile(filePath)
  //       setFileContent(content)
  //     } catch (err) {
  //       setError(err.message)
  //       setFileContent('')
  //     }
  //   }
  // }, [enterAction])

  return (
    <div className='read'>
      <div>{'ssh'}</div>
      <div>
        <List
        dataSource={serverList.group1}
        renderItem={(item)=>(
          <List.Item key={item.email}>
              <List.Item.Meta
                avatar={item.system=='linux'?<LinuxOutlined />:item.system=='windows'?<WindowsOutlined />:<MacCommandOutlined />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.email}
              />
              <div>Content</div>
            </List.Item>
        )}
        ></List>
      </div>
      <div>
        <FloatButton.Group
          tooltip={{
            // tooltipProps is supported starting from version 5.25.0.
            title: '服务器操作',
            color: 'blue',
            placement: 'top',
          }}
          trigger="click"
          type="primary"
          style={{ insetInlineEnd: 24 }}
          icon={<PlusCircleTwoTone />}
        >
          <FloatButton />
          <FloatButton icon={<PlusCircleTwoTone />} onclick={()=>{}}
          tooltip={{
            // tooltipProps is supported starting from version 5.25.0.
            title: 'Since 5.25.0+',
            color: 'blue',
            placement: 'top',
          }}
          />
        </FloatButton.Group>
      </div>
    </div>
  )
}

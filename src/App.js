import React, { useState } from 'react'
import "./App.css"
import { Layout, Menu } from 'antd';
import { CoffeeOutlined, UsergroupAddOutlined, TeamOutlined, HomeOutlined, UserAddOutlined, TrophyOutlined, FileTextOutlined } from '@ant-design/icons';
import { useRoutes, useNavigate } from "react-router-dom";
import routes from './routes';

const { Header, Footer, Content } = Layout;
const items = [
  {
    label: '首页 ',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: '领导视察',
    key: 'leader',
    icon: <UsergroupAddOutlined />,
  },
  {
    label: '团队项目',
    key: 'project',
    icon: <FileTextOutlined />,
  },
  {
    label: '团队荣誉',
    key: 'honor',
    icon: <TrophyOutlined />,
  },
  {
    label: '团队活动',
    key: 'active',
    icon: <CoffeeOutlined />,
  },
  {
    label: '加入我们',
    key: 'join',
    icon: <UserAddOutlined />,
  },
  {
    label: '团队规模',
    key: 'submenu',
    children: [{ label: '老师', key: 'scaleteacher' },
    { label: '学生', key: 'scalestudent' }],
    icon: <TeamOutlined />,
  },
]

const App = () => {

  const [current, setCurrent] = useState('home');
  let navigate = useNavigate();

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(`/${e.key}`)
  };
  return (
    <Layout>
      <Header style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        background: ' #fff'
      }}>
        <Menu style={{ fontSize: '1.4vw', }}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items} />
      </Header>
      <Content style={{ background: ' #f0f2f5' }}>
        {useRoutes(routes)}

      </Content>
      <Footer style={{ background: ' #fff' }}>Footer</Footer>
    </Layout>

  )
}
export default App

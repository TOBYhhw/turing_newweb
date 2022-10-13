import React from 'react'
import { Footer, Header } from 'antd/lib/layout/layout'
import { useRoutes, NavLink } from "react-router-dom";
import routes from './routes';
export default function App() {
  return (
    <div>
      <Header>我是头</Header>
      <NavLink to='/home'>home</NavLink>
      <NavLink to='/main'>main</NavLink>
      <NavLink to='/leader'>leader</NavLink>
      {useRoutes(routes)}
      <Footer>我是脚</Footer>
    </div>

  )
}


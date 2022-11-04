import React from 'react'
import { Footer, Header } from 'antd/lib/layout/layout'
import { useRoutes } from "react-router-dom";
import routes from './routes';
const App = () => {
  return (
    <>
      <Header>我是头</Header>
      {useRoutes(routes)}
      <Footer>我是脚</Footer>
    </>

  )
}
export default App

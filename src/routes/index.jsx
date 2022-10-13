import { Navigate } from 'react-router-dom'
import Main from '../pages/Main/Main'
import Home from '../pages/Home/Home'
import Leader from '../pages/Leader/Leader'
import News from '../pages/News/News'
import Message from '../pages/Message/Message'
// 路由映射表
const routes = [
    {
        path: '/main',
        element: <Main />,
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'message',
                element: <Message />
            },
            {
                path: '',
                element: <Navigate to='news' />
            }
        ]
    },
    {
        path: '/leader',
        element: <Leader />
    },
    // 路由重定向
    {
        path: '/',
        element: <Navigate to='/main' />
    }
]
export default routes
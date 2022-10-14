import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Leader from '../pages/Leader'
import Project from '../pages/Project'
import Honor from '../pages/Honor'
import Active from '../pages/Active'
import Join from '../pages/Join'
import ScaleTeacher from '../pages/ScaleTeacher'
import ScaleStudent from '../pages/ScaleStudent'


// 路由映射表 
const routes = [
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/leader',
        element: <Leader />
    },
    {
        path: '/project',
        element: <Project />,
    },
    {
        path: '/honor',
        element: <Honor />,
    },
    {
        path: '/active',
        element: <Active />,
    },
    {
        path: '/join',
        element: <Join />,
    },
    {
        path: '/scaleteacher',
        element: <ScaleTeacher />,
    },
    {
        path: '/scalestudent',
        element: <ScaleStudent />,
    },

    // 路由重定向
    {
        path: '/',
        element: <Navigate to='/home' />
    }
]
export default routes
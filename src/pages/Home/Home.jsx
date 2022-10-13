import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
export default function Home() {
    return (
        <div>
            <div>Home</div>
            <NavLink to='/home/news'>news</NavLink>
            <NavLink to='/home/message'>message</NavLink>
            <Outlet></Outlet>
        </div>

    )
}

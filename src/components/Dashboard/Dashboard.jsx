import React from 'react'
import "./Dashboard.css"
import { Link, Outlet } from 'react-router-dom'



function Dashboard() {
    return (
        <div>
            <h2>Dashboard Page</h2>
            <nav>
                <Link to="/dashboard/profile">Profile</Link>
                <Link to="/dashboard/settings">Settings</Link>
            </nav>
            <Outlet /> { /* Nested routes will render here  */}
        </div>
    )
}

export default Dashboard
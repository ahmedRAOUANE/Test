import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

// components
import HomePage from "../pages/HomePage";
import Navbar from '../components/Navbar';

const UserLayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </main>
            <footer>footer</footer>
        </div>
    )
}

export default UserLayout
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='sticky top-0 z-50 backdrop-blur-lg'>
            <div className="p-4 flex justify-between items-center">
                <h1>AquaGrid AI</h1>
                <ul className='flex gap-10 items-center'>
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    {/* <Link to="/reports">Reports</Link> */}
                    <label className="relative inline-flex items-center w-14 h-8 cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked={document.documentElement.classList.contains("dark")}
                            onChange={() => document.documentElement.classList.toggle("dark")}
                        />

                        <div className="w-full h-full rounded-full bg-gray-300 peer-checked:bg-gray-700 transition-colors duration-300" />

                        {/* Light (sun) */}
                        <span className="absolute left-1 top-1 text-xl transition-transform duration-300 peer-checked:translate-x-6 peer-checked:opacity-0">
                            <img src="https://img.icons8.com/?size=100&id=8EUmYhfLPTCF&format=png&color=000000" width={23} className='rounded-full' />
                        </span>

                        {/* Dark (moon) */}
                        <span className="absolute left-1 top-1 text-xl transition-transform duration-300 opacity-0 peer-checked:translate-x-6 peer-checked:opacity-100">
                            <img src="https://img.icons8.com/?size=100&id=62034&format=png&color=000000" alt="dark-mode" width={25} />
                        </span>
                    </label>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
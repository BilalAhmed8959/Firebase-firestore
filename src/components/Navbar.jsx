import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='text-center flex gap-10 list-none no-underline justify-center items-center bg-gray-500 h-20'>
            <h2 ><Link className='no-underline  text-black ' to={'/'}>Home</Link></h2>
            <h2><Link className='no-underline  text-black' to={'login'}>Login</Link ></h2>
            <h2><Link className='no-underline  text-black' to={'register'}>Register</Link></h2>
        </div>
    )
}

export default Navbar
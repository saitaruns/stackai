import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='py-4 px-4 md:px-24 shadow-md left-0 top-0'>
            <Link href='/'>Home</Link>
        </div>
    )
}

export default Navbar
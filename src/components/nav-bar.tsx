import Link from 'next/link'
import React from 'react'
import { AppSideBar } from './app-sidebar'
import { Menu } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='py-4 px-4 md:px-24 shadow-md left-0 top-0 flex gap-2'>
            <AppSideBar>
                <Menu className='cursor-pointer flex md:hidden' />
            </AppSideBar>
            <Link href='/'>Home</Link>
        </div>
    )
}

export default Navbar
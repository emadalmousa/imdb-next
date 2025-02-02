import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai';//react-icons.hithub.io
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitsch from './DarkModeSwitsch';
const Header = () => {
    return (
        // flex zeigt elemente neben einander
        <div className='flex justify-between items-center p-3'>
            <div className='flex gap-4'>
                <MenuItem title="home" address="/" Icon={AiFillHome} ></MenuItem>
                <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} ></MenuItem>
            </div>
            <div className='flex gap-3 items-center'>
                <DarkModeSwitsch />
                <Link href={"/"} className='flex gap-1 items-center'>
                    <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg' >IMDB</span>
                    <span className='text-xl hidden sm:inline'>Clone</span>
                </Link>
            </div>
        </div>
    )
}

export default Header
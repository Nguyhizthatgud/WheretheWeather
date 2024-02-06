
import React from 'react'
import Searchbox from './Searchbox';
import { IoPartlySunny } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { RiUserLocationLine } from "react-icons/ri";
import { Divider } from 'antd';
type Props = {}

export default function Navbar({ }: Props) {
    return (
        <nav className='shadow-lg sticky top-0 left-0 z-50 bg-white'>
            <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto'>
                <p className='flex items-center justify-center gap-1'>
                    <div className='text-gray-500 text-2xl'>
                        ?Wheather
                    </div><IoPartlySunny className='text-2xl text-yellow-300' />
                </p>
                <section className='flex gap-1 items-center'>
                    <FaLocationDot className='cursor-pointer text-2xl text-gray-600 hover:opacity-80' />
                    <Divider type="vertical" />
                    <RiUserLocationLine className='cursor-pointer text-2xl text-gray-600 hover:opacity-80' />
                    <p className='text-dark-400 text-sm'>Viet Nam</p>
                    <Divider type="vertical" />
                    {/* <div>{searchbox}</div> */}
                    <Searchbox Value={''} onChange={undefined} onSubmit={undefined} />
                </section>
            </div>
        </nav>
    )
}
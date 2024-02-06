
import cn from '@/utils/Cn';
import React from 'react'
import { LiaSearchLocationSolid } from "react-icons/lia";
type Props = {
    className?: string;
    Value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}
//https://api.openweathermap.org/data/2.5/weather?q=Thanh%20pho%20Ho%20Chi%20Minh,vn&APPID=731cab9135db147dc33054ebc855d064
export default function Searchbox(props: Props) {

    return (
        <form onSubmit={props.onSubmit} className={cn("flex relative items-center justify-center h-10", props.className)}>
            <input onChange={props.onChange} value={props.Value} type="text" placeholder="Mình ở đâu nhờ?..."
                className='tw-input px-3 py-2 w-[200px] text-gray-400 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 focus:shadow-md h-full'>
            </input>
            <button className='px-3 py-auto rounded-r-md bg-blue-500 text-white hover:bg-blue-700 focus:ounline-none h-full'>
                <LiaSearchLocationSolid className='text-1xl' />
            </button>
        </form>
    )
}
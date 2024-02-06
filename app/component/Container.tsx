import cn from '@/utils/Cn';
import React from 'react'

type Props = {};

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={cn('w-full bg-white boder rounded-xl flex py-4 shadow-sm', props.className)}></div>
    )
}
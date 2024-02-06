import React from 'react'

type Props = {}

const ForecastweatherDetails = (props: Props) => {
    return (
        <div></div>
    )
}
export interface SingleWeatherDetailProps {
    information: string;
    icon: React.ReactNode;
    value: string;
}
function SingleWeatherDetailProps(props: SingleWeatherDetailProps) {
    return (
        <div className='flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/40'>
            <p className='whitespace-nowrap'>{props.information}</p>
            <div className='text-3xl'>{props.icon}</div>
            <p>{props.value}</p>
        </div>
    )
}
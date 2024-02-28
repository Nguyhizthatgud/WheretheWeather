import React from 'react'
import { MdOutlineVisibility } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
import { WiBarometer } from "react-icons/wi";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
type Props = {}
export interface WeatherdetailProps {
    visability: string;
    humidity: string;
    WindSpeed: string;
    airPressure: string;
    sunrise: string;
    sunset: string;
}
export default function ForecastweatherDetails(props: WeatherdetailProps) {
    return (
        <>
            <SingleWeatherDetailProps
                icon={<MdOutlineVisibility />}
                information="Visability"
                value={props.visability}
            />
            <SingleWeatherDetailProps
                icon={<WiHumidity />}
                information="Humidity"
                value={props.humidity}
            />
            <SingleWeatherDetailProps
                icon={<LuWind />}
                information="Wind Speed"
                value={props.WindSpeed}
            />
            <SingleWeatherDetailProps
                icon={<WiBarometer />}
                information="Air pressure"
                value={props.airPressure}
            />
            <SingleWeatherDetailProps
                icon={<WiSunrise />}
                information="Sunrise Time"
                value={props.sunrise}
            />
            <SingleWeatherDetailProps
                icon={<WiSunset />}
                information="Sunset Time"
                value={props.sunset}
            />
        </>
    )
}
export interface SingleWeatherDetailProps {
    information: string;
    icon: React.ReactNode;
    value: string;
}
function SingleWeatherDetailProps(props: SingleWeatherDetailProps) {
    return (
        <div className='flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black'>
            <p className='whitespace-nowrap'>{props.information}</p>
            <div className='text-3xl'>{props.icon}</div>
            <p>{props.value}</p>
        </div>
    )
}
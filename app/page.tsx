'use client'
import { useQuery } from "react-query";
import Navbar from "./component/Navbar";
import axios from 'axios';
import { Alert, Flex, Spin } from 'antd';
import 'dotenv/config';

import Container from "./component/Container";

import { convertKelvinToCelsius } from "@/utils/convertKelvintoCelcius";
import { MdOutlineVisibility } from "react-icons/md";
import { TbLocationPin } from "react-icons/tb";
import parseISO from "date-fns/parseISO";
import { parse, format } from 'date-fns';
import WeatherIconIndicate from "./WeatherIconIndicate";
import { useEffect } from "react";




export default function Home() {
  interface City {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  }

  interface MainWeatherInfo {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  }

  interface WeatherDescription {
    id: number;
    main: string;
    description: string;
    icon: string;
  }

  interface Clouds {
    all: number;
  }

  interface Wind {
    speed: number;
    deg: number;
    gust: number;
  }

  interface Sys {
    pod: string;
  }

  interface WeatherData {
    cod: string;
    message: number;
    cnt: number;
    list: {
      dt: number;
      main: MainWeatherInfo;
      weather: WeatherDescription[];
      clouds: Clouds;
      wind: Wind;
      visibility: number;
      pop: number;
      sys: Sys;
      dt_txt: string;
    }[];
    city: City;
  }


  const { isLoading, error, data } = useQuery<WeatherData>('repoData', async () => {
    require('dotenv').config();
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Thanh%20pho%20Ho%20Chi%20Minh,vn&APPID=731cab9135db147dc33054ebc855d064&cnt=56`);
    return data;
  });
  if (isLoading) return (
    <Flex className="flex items-center min-h-screen justify-center">
      <Spin tip="Loading" size="large" />
    </Flex>
  );
  const firstData = data?.list[0];
  console.log("data", data);
  if (error) return 'An error has occurred:'
  // Convert Unix timestamp to milliseconds and create a Date object
  // const weathertime = data?.dt && new Date(data.dt * 1000).toLocaleTimeString();
  // Format the date as MM/DD/YYYY
  // const weatherdate = data?.dt && new Date(data.dt * 1000).toLocaleDateString();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // useEffect (() => {
  //   labelStatus = 
  // })


  // const dayOfWeek = data?.dt ? daysOfWeek[new Date(data.dt * 1000).getDay()] : undefined;
  // Check if firstData exists and has dt_txt property
  if (firstData && firstData.dt_txt) {
    const formattedDate = format(parseISO(firstData.dt_txt), 'EEEE');
    console.log(formattedDate); // Output: The full name of the day of the week
  }
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
      <div className="">
        <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-8 pt-2">
          <section>
            {/* {for day forcasts} */}
            <div>
              <h2 className="flex gap-1 text-2xl items-end">
                <p className="">{format(parseISO(firstData?.dt_txt ?? " "), "EEEE")}</p>
                <p className="text-lg">({format(parseISO(firstData?.dt_txt ?? ""), "dd.MM.yyyy")})</p>
              </h2>
              <Container className="gap-10 px-6 items-center ">
                <div className="flex flex-col px-4">
                  <span>{data?.city.name}</span>
                  <span className="text-3xl">{convertKelvinToCelsius(firstData?.main.temp)}°&nbsp;</span>
                  <p className="text-xs space-x-l white-space-nowrap ">
                    <span>feels like {convertKelvinToCelsius(firstData?.main.feels_like)}°</span>
                  </p>
                  <p className="text-xs space-x-2">
                    <span>{convertKelvinToCelsius(firstData?.main.temp_min)}°↓</span>
                    <span>{convertKelvinToCelsius(firstData?.main.temp_max)}°↑</span>
                  </p>
                  <p className="text-xs space-x-l">
                    <span>Humidity {(firstData?.main.humidity)}%</span>
                  </p>
                </div>
                <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3">
                  {data?.list.map((d, i) => (
                    <div key={i} className="flex flex-col justify-between gap-2 items-center text-xs font-bold ">
                      <p className="whitespace-nowrap">{format(parseISO(d.dt_txt), "h:mm a")}</p>
                      <WeatherIconIndicate iconName={d.weather[0].icon} />
                      <p>{convertKelvinToCelsius(d?.main.temp ?? 0)}°&nbsp;</p>
                    </div>
                  ))}
                </div>
              </Container>
            </div>
            <div className="flex gap-4 py-3">
              {/* left */}
              <Container className="w-fit justify-center flex-col px-4 items-center bg-gray-300/80" >
                <p className="capitalize text-center text-sm">{firstData?.weather[0].description ?? ""}
                  <span></span>
                </p>
                <WeatherIconIndicate iconName={firstData?.weather[0].icon ?? ""} />
              </Container>
              {/* right */}
              <Container className="bg-yellow-300/60 overflow-x-auto px-6 gap-4 justify-between">

              </Container>
            </div>
          </section>
          <section>
            {/* {for 7 day forcasts} */}
          </section>
        </main>
      </div>


    </div>
  );
}

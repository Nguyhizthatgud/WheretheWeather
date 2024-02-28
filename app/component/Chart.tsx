import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Props = {}

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Temperature vs Humidity relevent',
        },
    },
};

export default function Chart({}: Props) {
  
  return (
    <div>Chart</div>
  )
}
function isNumber(value: number | undefined): value is number {
    return typeof value === 'number';
}

export function convertKelvinToCelsius(tempinKelvin: number | undefined): number | undefined {
    if (!isNumber(tempinKelvin)) {
        return undefined;
    }
    // This is a simple function that takes in the temperature in Kelvin and converts it to Celsius
    const tempinCelsius = tempinKelvin - 273.15;
    return Math.floor(tempinCelsius);
}
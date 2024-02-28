export function MetterconvertoKilometer(visibilityInMeters: number): string {
    const visibilityInkilometers = visibilityInMeters / 1000;
    return `${visibilityInkilometers.toFixed(0)}km`;
}
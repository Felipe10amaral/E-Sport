export function convertMinuteHora(minutes: number){
    const hours = Math.floor(minutes/60);
    const minutesAmount = minutes % 60;
    
    return `${hours}: ${minutesAmount}`
}
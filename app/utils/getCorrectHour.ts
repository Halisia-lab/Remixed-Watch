export const getCorrectHour = (hour:number, timeZone:number) => {
return (hour + timeZone) % 24;
}
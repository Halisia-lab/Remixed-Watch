export const switchHourFormat = (formated24h:boolean, hours:number) => {
    if(!formated24h && hours>12) {
        return hours - 12;
    } else {
        return hours;
    }
}
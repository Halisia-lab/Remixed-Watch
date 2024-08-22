export const getAmOrPm = (hours:number) => {
   return hours >= 12 ? "PM" : "AM"
}
import { useEffect, useState } from "react";
import { formatNumber } from "~/utils/formatNumber";
import { switchHourFormat } from "~/utils/switchHourFormat";
import { getAmOrPm } from "~/utils/getAmOrPm";

type TimeDisplayProps = {
    hours: number;
    minutes: number;
    seconds: number;
    isLightOn: boolean;
    editHoursMode: boolean;
    editMinutesMode: boolean;
    formated24h:boolean;
}

export const TimeDisplay = ({ hours, minutes, seconds, isLightOn, editHoursMode, editMinutesMode, formated24h }: TimeDisplayProps) => {
    const editMode = editHoursMode || editMinutesMode;
    const [formatedHours, setFormatedHours] = useState(hours);

    useEffect(()=> {
        setFormatedHours(switchHourFormat(formated24h, hours));
    },[formated24h, hours])

    return (
        <div
            className={`${isLightOn ? "items-center flex-row bg-yellow-300 shadow-2xl shadow-yellow-300" : " bg-white"} text-black flex w-28 h-fit rounded-sm justify-center px-7 py-4 relative border border-black`}>
            {editMode &&
                <span className="absolute top-0 left-1 text-xs">
                    EDIT
                </span>
            }
            <span className={`${editHoursMode ? " animate-pulse text-gray-600" : ""}`}>{formatNumber(formatedHours)}</span>
            : <span className={`${editMinutesMode ? " animate-pulse text-gray-600" : ""}`}>{formatNumber(minutes)}</span>
            :<span>{formatNumber(seconds)}</span> 
            {!formated24h && <span className="text-xs">{getAmOrPm(hours)}</span>}
        </div>
    )
}
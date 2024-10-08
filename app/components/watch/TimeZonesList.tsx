import { useState } from "react";

type TimeZonesListProps = {
    onPress: () => void;
    isOpen: boolean;
    onChooseTimeZone: (timeZone: number) => void;
}

export const TimeZonesList = ({ onChooseTimeZone }: TimeZonesListProps) => {
    const [isOpened, setIsOpened] = useState(false);

    return <div className="absolute z-50 dropdown border w-fit my-4 p-3 bg-white">
        <button
            onClick={() => setIsOpened(!isOpened)}
            className="flex flex-row text-blue-500 text-lg">
            Choose time zone
            <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4a90e2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
            </svg>
        </button>
        {isOpened ? (
            <ul className="menu">
            {[-12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, +1, +2, +3, +4, +5, +6, +7, +8, +9, +10, +11, +12].map((x, i) =>
                <li className="border-b py-2" key={i}><button onClick={() => onChooseTimeZone(x)}>GMT {x > 0 ? `+${x}` : x}</button></li>
            )}
        </ul>
        ) : null}
    </div>
}
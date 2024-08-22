type CancelButtonProps = {
    onPress: () => void;
}

export const CancelButton = ({ onPress }: CancelButtonProps) => {
    return <button onClick={onPress} className="flex flex-row bg-orange-500 text-sm w-fit p-4 font-bold rounded-xl text-white mx-2 z-20">
        <svg xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
        Cancel
    </button>
} 
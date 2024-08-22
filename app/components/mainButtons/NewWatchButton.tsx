type NewWatchButtonProps = {
    onPress: () => void;
}

export const NewWatchButton = ({ onPress }: NewWatchButtonProps) => {
    return <button onClick={onPress} className="flex flex-row bg-yellow-500 text-sm w-fit p-4 font-bold rounded-xl text-white mx-2 z-20">
        <svg xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
        New watch
    </button>
} 
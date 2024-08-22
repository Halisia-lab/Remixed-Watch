type ResetButtonProps = {
    onPress: () => void;
}

export const ResetButton = ({ onPress }: ResetButtonProps) => {
    return (
        <button
            onClick={onPress}
            className="flex flex-row bg-red-700 text-sm w-fit p-2 font-bold rounded-xl text-white mx-2 place-self-center z-20"
        >
            Reset
        </button>)
} 
type ZoomButtonProps = {
    label: string
    onPress: () => void;
}

export const ZoomButton = ({ label, onPress }: ZoomButtonProps) => {
    return (
        <button
            onClick={onPress}
            className="flex flex-row bg-blue-900 text-lg w-8 p-4 font-bold rounded-full text-white mx-2 h-8 justify-center items-center z-20">
            {label}
        </button>
    )
} 
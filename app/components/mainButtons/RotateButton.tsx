type RotateButtonProps = {
    isRotationOn: boolean;
    onPress: () => void;
}

export const RotateButton = ({ isRotationOn, onPress }: RotateButtonProps) => {
    return (
        <button
            onClick={onPress}
            className="flex flex-row bg-blue-500 text-sm w-fit p-4 font-bold rounded-xl text-white mx-2 h-4 items-center z-20">
            {isRotationOn ? "Stop" : "Rotation"}
        </button>
    )
}




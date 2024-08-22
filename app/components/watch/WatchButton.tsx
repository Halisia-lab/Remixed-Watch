type WatchButtonProps = {
    label: string;
    onPress: () => void;
    className: string;
}

export const WatchButton = ({ label, className, onPress }: WatchButtonProps) => {
    return (
        <button
            className={`${className} absolute rounded-2xl bg-black h-10 w-14 text-xs flex place-items-center justify-center text-white`}
            onClick={onPress}>
            {label}
        </button>
    )
}
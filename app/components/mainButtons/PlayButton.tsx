type PlayButtonProps = {
    isMoving: boolean;
    onPress: () => void;
}
export const PlayButton = ({ isMoving, onPress }: PlayButtonProps) => {
    return (
        <button
            onClick={onPress}
            className="flex flex-row bg-green-500 text-sm w-fit p-4 font-bold rounded-xl text-white mx-2 my-4 h-4 items-center z-20"
        >
            Turn
            {isMoving ?
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            }
        </button>)
} 
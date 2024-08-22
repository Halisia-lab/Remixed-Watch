type OriginInputProps = {
    isTurning: boolean;
    placeholder: string;
    onChange: (x: number) => void;
}

export const OriginInput = ({ isTurning, onChange, placeholder }: OriginInputProps) => {
    return isTurning && (
        <input type="text"
            onChange={(x) => onChange(Number(x.target.value))}
            className="flex w-9 border border-gray-500 mx-1 z-20 place-content-center text-center"
            placeholder={placeholder}
        />);
}


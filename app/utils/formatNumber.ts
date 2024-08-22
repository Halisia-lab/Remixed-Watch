export const formatNumber = (potentiallySingleNumber: number) => {
    return potentiallySingleNumber < 10 ? `0${potentiallySingleNumber}` : `${potentiallySingleNumber}`
}
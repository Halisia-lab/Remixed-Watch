export const getAngle = (clockHand: string) => {
    switch (clockHand) {
        case ("h"):
            return 30;
        case ("m"):
            return (6);
        case ("s"):
            return (2);
        default:
            return null;
    }
}
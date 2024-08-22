import { useEffect, useState } from "react";
import { TimeDisplay } from "./TimeDisplayer";
import { WatchButton } from "./WatchButton";
import { getCorrectHour } from "../../utils/getCorrectHour";
import watchImage from "../../../public/images/watch_image.jpg"
import { Coordinates } from "~/models/Coordinates";
import { Matrix } from "~/models/Matrix";
import { RotateButton } from "~/components/mainButtons/RotateButton";
import { ZoomButton } from "../mainButtons/ZoomButton";
import { ResetButton } from "../mainButtons/ResetButton";
import { PlayButton } from "../mainButtons/PlayButton";
import { OriginInput } from "../inputFields/OriginInput"

type WatchProps = {
    timeZone: number;// = 1 for GMT+1
}

export const Watch = ({ timeZone }: WatchProps) => {
    const today = new Date();

    // Time variables 
    const [hours, setHours] = useState(getCorrectHour(today.getUTCHours(), timeZone));
    const [minutes, setMinutes] = useState(today.getMinutes());
    const [seconds, setSeconds] = useState(today.getSeconds());

    // Watch buttons variables
    const [isLightOn, setIsLightOn] = useState(false);
    const [formated24h, setFormated24h] = useState(true);
    const [editHoursMode, setEditHoursMode] = useState(false);
    const [editMinutesMode, setEditMinutesMode] = useState(false);

    // Moving position variables
    const [position, setPosition] = useState(new Coordinates(1, 1));
    const [translationMatrix, setTranslationMatrix] = useState(new Matrix(3, 3, Matrix.translation(0.05, 0.05)));
    const [isTurning, setisTurning] = useState(false);
    const [origin, setOrigin] = useState(new Coordinates(1, 1));

    // Self Rotation variables
    const [rotationAngle, setRotationAngle] = useState(0);
    const [rotationMatrix, setRotationMatrix] = useState(new Matrix(3, 3, Matrix.rotation(0)));
    const [isRotationOn, setIsRotationOn] = useState(false);

    // Zoom variables
    const [size, setSize] = useState(new Coordinates(1, 1));
    const [scaleMatrix, setScaleMatrix] = useState(new Matrix(3, 3, Matrix.scale(1, 1)));

    const [animationMatrix, setAnimationMatrix] = useState(new Matrix(3, 3, [[1, 0, 0], [0, 1, 0], [0, 0, 1]]));


    const rotate = () => {
        setTimeout(() => {
            setRotationAngle((rotationAngle + 2) % 360);
            setRotationMatrix(new Matrix(3, 3, Matrix.rotation(rotationAngle)));
            setAnimationMatrix(new Matrix(3, 3, rotationMatrix.multiplyMatrix(scaleMatrix)!));
        }, 50);
    }

    const zoomIn = () => {
        setSize(new Coordinates(size.x + 0.1, size.y + 0.1));
        setScaleMatrix(new Matrix(3, 3, Matrix.scale(size.x, size.y)));
        setAnimationMatrix(new Matrix(3, 3, rotationMatrix.multiplyMatrix(scaleMatrix)!));
    }

    const zoomOut = () => {
        setSize(new Coordinates(size.x - 0.1, size.y - 0.1));
        setScaleMatrix(new Matrix(3, 3, Matrix.scale(size.x, size.y)));
        setAnimationMatrix(new Matrix(3, 3, rotationMatrix.multiplyMatrix(scaleMatrix)!));
    }

    const turnAroundCoordinates = () => {
        setTimeout(() => {
            const rotationM = new Matrix(3, 3, Matrix.rotation(1));
            const newCoordinates = (new Matrix(3, 3, rotationM.multiplyMatrix(translationMatrix)!)).multiplyVector([position.x, position.y, 1]);
            setPosition(new Coordinates(newCoordinates[0], newCoordinates[1]));
        }, 10);
    }

    const updateTime = () => {
        setTimeout(() => {
            increaseSeconds();
        }, 1000);

        setTimeout(() => {
            increaseMinutes()
        }, 60 * 1000);

        setTimeout(() => {
            increaseHours
        }, 60 * 60 * 1000);
    }

    const swithLight = () => {
        setIsLightOn(!isLightOn);
    }

    const increaseSeconds = () => {
        setSeconds((seconds + 1) % 60)
        if (seconds === 0) {
            setMinutes(minutes + 1)
        }
    }

    const increaseMinutes = () => {
        setMinutes((minutes + 1) % 60);
        if (minutes === 0) {
            setHours(hours + 1);
        }
    }

    const increaseHours = () => {
        setHours((hours + 1) % 24);
    }

    const increaseAccordingMode = () => {
        if (editHoursMode) increaseHours();
        else if (editMinutesMode) increaseMinutes();
    }

    const changeMode = () => {
        if (!editHoursMode && !editMinutesMode) {
            setEditHoursMode(true);
        }
        if (editHoursMode) {
            setEditMinutesMode(true); setEditHoursMode(false);
        };
        if (editMinutesMode) {
            setEditMinutesMode(false);
        }
    }

    const resetTime = () => {
        setEditHoursMode(false);
        setEditMinutesMode(false);

        setHours(getCorrectHour(today.getUTCHours(), timeZone));
        setMinutes(today.getMinutes());
        setSeconds(today.getSeconds());
    }

    const resetAnimations = () => {
        setRotationAngle(0);
        setisTurning(false);
        setIsRotationOn(false);
        setSize(new Coordinates(1, 1));
        setOrigin(new Coordinates(1, 1));
        setPosition(new Coordinates(1, 1));
        setScaleMatrix(new Matrix(3, 3, Matrix.scale(1, 1)));
        setRotationMatrix(new Matrix(3, 3, Matrix.rotation(0)));
        setAnimationMatrix(new Matrix(3, 3, [[1, 0, 0], [0, 1, 0], [0, 0, 1]]));
    }

    const changeOriginX = (newCoordinate: number) => {
        setOrigin(new Coordinates(Number(newCoordinate), origin.y))
    }

    const changeOriginY = (newCoordinate: number) => {
        setOrigin(new Coordinates(origin.x, -Number(newCoordinate)))
    }

    useEffect(() => {
        if (isRotationOn) {
            rotate();
        }
        if (isTurning) {
            turnAroundCoordinates();
        }
        updateTime();
    },)

    return (
        <div className="flex flex-col items-center m-20">
            <div style={{ left: `${position.x}rem`, top: `${position.y}rem`, transform: `matrix(${animationMatrix.cells[0][0]}, ${animationMatrix.cells[0][1]}, ${animationMatrix.cells[1][0]}, ${animationMatrix.cells[1][1]}, ${origin.x}, ${origin.y})` }}
                className={`relative h-56 w-56 flex justify-center place-items-center `}>
                <img src={watchImage} className="absolute h-full w-full" />
                <span className="absolute top-16 text-black text-xs">GMT+ {timeZone}</span>

                {/* Buttons */}
                <WatchButton className="top-16 right-0 h-6 w-10 " label={"MODE"} onPress={() => changeMode()} />
                <WatchButton className="top-32 left-0 h-5 w-10" label={"LIGHT"} onPress={() => swithLight()} />
                <WatchButton className="bottom-16 right-16 h-4 w-8 bg-blue-600" label={"+1"} onPress={() => increaseAccordingMode()} />
                <WatchButton className="bottom-16 left-16 h-4 w-12 bg-orange-500" label={"RESET"} onPress={() => resetTime()} />
                <WatchButton className="right-2 h-6 w-8 top-32" label={"AM"} onPress={() => setFormated24h(!formated24h)} />

                {/* Screen */}
                <TimeDisplay hours={hours} seconds={seconds} minutes={minutes} isLightOn={isLightOn} editHoursMode={editHoursMode} editMinutesMode={editMinutesMode} formated24h={formated24h} />
            </div>

            {/* Animation Input & Buttons */}
            <div className="flex flex-row h-6 items-center m-4">
                <PlayButton isMoving={isTurning} onPress={() => setisTurning(!isTurning)} />
                <OriginInput isTurning={isTurning} onChange={changeOriginX} placeholder="x" />
                <OriginInput isTurning={isTurning} onChange={changeOriginY} placeholder="y" />
            </div>

            <div className="flex flex-row items-center my-2">
                <RotateButton isRotationOn={isRotationOn} onPress={() => setIsRotationOn(!isRotationOn)} />
                <ZoomButton label={"+"} onPress={() => zoomIn()} />
                <ZoomButton label={"-"} onPress={() => zoomOut()} /><ResetButton onPress={() => resetAnimations()} />
            </div>
        </div>
    )
}
import { FC, useEffect, useState } from "react"
import { AlertProps } from "./types"
import "@style/components/Alert/Alert.scss"
import AlertCircleIcon from "@images/icons/alert-circle.svg"
import CheckCircleIcon from "@images/icons/check-circle.svg"
import XIcon from "@images/icons/x.svg"

const Alert: FC<AlertProps> = ({ 
    type = "error", 
    title = "Ошибка", 
    message = "Пожалуйста, попробуйте ещё раз",
    onClose,
    duration = 5000,
    position = "bottom-right"
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const className = `alert_${type}`;
    const positionClass = `alert_position_${position}`;

    useEffect(() => {
        let timerId: NodeJS.Timeout | null = null;
        
        if (duration !== null) {
            timerId = setTimeout(() => {
                handleClose();
            }, duration);
        }

        return () => {
            if (timerId) {
                clearTimeout(timerId);
            }
        };
    }, [duration]);

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) {
            onClose();
        }
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className={`alert ${className} ${positionClass}`}>
            <div className="alert__content">
                <div className={`alert__icon alert__icon_${type}`}>
                    {type === "error" ? (
                        <AlertCircleIcon />
                    ) : (
                        <CheckCircleIcon />
                    )}
                </div>

                <div className="alert__message">
                    <strong>{title}</strong>
                    <p>{message}</p>
                </div>
            </div>
            <button className="alert__close-button" onClick={handleClose}>
                <XIcon />
            </button>
        </div>
    )
}

export default Alert
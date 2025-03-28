import { FC } from "react"
import { AlertProps } from "./types"
import "@style/components/Alert/Alert.scss"
import AlertCircleIcon from "@images/icons/alert-circle.svg"
import CheckCircleIcon from "@images/icons/check-circle.svg"
import XIcon from "@images/icons/x.svg"

const Alert: FC<AlertProps> = ({ type = "error", title = "Ошибка", message = "Пожалуйста, попробуйте ещё раз" }) => {
    const className = `alert_${type}`

    return (
        <div className={`alert ${className}`}>
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
            <button className="alert__close-button">
                <XIcon />
            </button>
        </div>
    )
}

export default Alert
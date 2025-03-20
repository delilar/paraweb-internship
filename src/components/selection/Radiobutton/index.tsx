import { FC, useState } from "react";
import { RadiobuttonProps } from "./types";
import "../../../style/components/selection/Radiobutton.scss"


const Radiobutton: FC<RadiobuttonProps> = ({ name = "", label, disabled = false }) => {
    const id = `radio-${name}-${label}`; // Уникальный id для каждого инпута
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        if (!disabled) {
            setIsChecked(!isChecked);
        }
    };

    return (
        <div className="radiobutton">
            <input
                type="radio"
                className="radiobutton__input"
                id={id}
                name={name}
                disabled={disabled}
                checked={isChecked}
                onChange={() => {}} // Controlled component needs onChange
                onClick={handleClick}
            />
            <label className={`radiobutton__label ${disabled ? "disabled" : ""}`} htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

export default Radiobutton;
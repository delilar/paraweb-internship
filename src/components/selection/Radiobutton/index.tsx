import { FC, useState, useId } from "react";
import { RadiobuttonProps } from "./types";
import "@style/components/selection/Radiobutton.scss"

const Radiobutton: FC<RadiobuttonProps> = ({ 
    id: propId,
    name = "", 
    label, 
    disabled = false,
    onChange 
}) => {
    const generatedId = useId(); // Генерируем уникальный id с помощью хука useId
    const id = propId || `radio-${generatedId}${name ? `-${name}` : ""}${label ? `-${label}` : ""}`;
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        if (!disabled) {
            const newCheckedState = !isChecked;
            setIsChecked(newCheckedState);
            
            if (onChange) {
                onChange(newCheckedState);
            }
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
                onChange={handleChange}
            />
            <label className={`radiobutton__label ${disabled ? "disabled" : ""}`} htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

export default Radiobutton;
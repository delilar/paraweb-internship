import { FC, useState } from "react";
import { CheckboxProps } from "./types";
import "../../../style/components/selection/Checkbox.scss";

const Checkbox: FC<CheckboxProps> = ({ label, disabled = false }) => {
    const id = `checkbox-${label}`; // Уникальный id
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        if (!disabled) {
            setIsChecked(!isChecked);
        }
    };

    return (
        <div className="checkbox">
            <input
                type="checkbox"
                className="checkbox__input"
                id={id}
                disabled={disabled}
                checked={isChecked}
                onChange={handleChange}
            />
            <label className={`checkbox__label ${disabled ? "disabled" : ""}`} htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
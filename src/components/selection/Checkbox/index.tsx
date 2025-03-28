import { FC, useState } from "react";
import { CheckboxProps } from "./types";
import "@style/components/selection/Checkbox.scss";
import classNames from "classnames";

const Checkbox: FC<CheckboxProps> = ({ label, disabled = false, checked=false, className }) => {
    const id = `checkbox-${label}`; // Уникальный id
    const [isChecked, setIsChecked] = useState(checked);

    const checkboxClassName = classNames("checkbox", className);

    const handleChange = () => {
        if (!disabled) {
            setIsChecked(!isChecked);
        }
    };

    return (
        <div className={checkboxClassName}>
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
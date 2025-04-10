import { FC, useState, useId } from "react";
import { CheckboxProps } from "./types";
import "@style/components/selection/Checkbox.scss";
import classNames from "classnames";

const Checkbox: FC<CheckboxProps> = ({ 
    id: propId,
    label, 
    disabled = false, 
    checked = false, 
    className,
    onChange 
}) => {
    const generatedId = useId();
    const id = propId || `checkbox-${generatedId}${label ? `-${label}` : ""}`;
    const [isChecked, setIsChecked] = useState(checked);

    const checkboxClassName = classNames("checkbox", className);

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
import { FC, useState } from "react";
import { ToggleProps } from "./types";
import "@style/components/Toggle/Toggle.scss";
import CheckIcon from "@images/icons/check.svg"


const Toggle: FC<ToggleProps> = ({ checked = false, disabled = false, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChecked = (): void => {
        if (!disabled) {
            const newCheckedState = !isChecked;
            setIsChecked(newCheckedState);
            
            if (onChange) {
                onChange(newCheckedState);
            }
        }
    };

    return (
        <button 
            className={`toggle ${isChecked ? "toggle_checked" : ""}`} 
            type="button" 
            onClick={handleChecked} 
            disabled={disabled}
        >
            <span className="toggle__display"></span>
            <CheckIcon />
        </button>
    );
}

export default Toggle;
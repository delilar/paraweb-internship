import { FC, useState } from "react";
import { ToggleProps } from "./types";
import "@style/components/Toggle/Toggle.scss";
import CheckIcon from "@images/icons/check.svg"


const Toggle: FC<ToggleProps> = ({ checked = false, disabled = false }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChecked = (): void => {
        if (!disabled) {
            setIsChecked((prev) => !prev);
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

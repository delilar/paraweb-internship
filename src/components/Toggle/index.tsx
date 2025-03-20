import { FC, useState } from "react";
import { ToggleProps } from "./types";
import "../../style/components/Toggle/Toggle.scss";

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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12L10 17L20 7" stroke="#1F2733" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    );
}

export default Toggle;

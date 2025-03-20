import { FC } from "react";
import { TagProps } from "./types";
import "../../style/components/Tag/Tag.scss"

const Tag: FC<TagProps> = ({ type='primary', mainValue, secondaryValue, color='gray' }) => {
    
    const className = `tag ${type} ${color}`;
    
    return (
        <div className={className}>
            <span className="tag__main-text">{mainValue}</span>
            {type === 'deletable' && 
                <>
                    <span className="tag__secondary-text">{secondaryValue}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="#1F2733" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </> 
            }
        </div>
    )
}

export default Tag;
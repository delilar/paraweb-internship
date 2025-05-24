import { FC } from "react";
import { TagProps } from "./types";
import "@style/components/Tag/Tag.scss"
import XIcon from "@images/icons/x.svg";

const Tag: FC<TagProps> = ({ type='primary', mainValue, secondaryValue, color='gray' }) => {
    
    const className = `tag ${type} ${color}`;
    
    return (
        <div className={className}>
            <span className="tag__main-text">{mainValue}</span>
            {type === 'deletable' && 
                <>
                    <span className="tag__secondary-text">{secondaryValue}</span>
                    <XIcon />
                </> 
            }
        </div>
    )
}

export default Tag;
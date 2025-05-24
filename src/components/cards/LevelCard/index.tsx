import { FC } from "react";
import { LevelCardProps } from "./types";

import "@style/components/cards/LevelCard.scss";

import CoinDisabledIcon from "@images/coin-icon-disabled.svg";
import CheckIcon from "@images/icons/check.svg"
import ImagePlaceholder from "@/components/ImagePlaceholder";
import classNames from "classnames";

const LevelCard: FC<LevelCardProps> = ({ 
    coins=100, 
    title="Наименование уровня", 
    imageUrl, 
    disabled=false,
    href="#"
}) => {
    const block = "level-card";

    const className = classNames(block, {
        [`${block}--disabled`]: disabled
    });

    const getClass = (element: string) => 
        classNames(`${block}__${element}`, { [`${block}__${element}--disabled`]: disabled });

    return (
        <div className={className}>
            <div className={getClass("image")}>
                {imageUrl ? <img src={imageUrl} alt="Level" /> : <ImagePlaceholder />}
            </div>
            <div className={getClass("info")}>
                <h4 className={getClass("title")}>
                    <a href={disabled ? undefined : href} className={getClass("link")}>
                        {title}
                    </a>
                </h4>
                {disabled ? (
                    <div className={getClass("coin-tag")}>
                        <CoinDisabledIcon />
                        <div className={getClass("coins")}>{coins}</div>
                    </div>
                ) : (
                    <div className={getClass("check-icon")}>
                        <CheckIcon />
                    </div>
                )}
            </div>
        </div>
    );
};

export default LevelCard;
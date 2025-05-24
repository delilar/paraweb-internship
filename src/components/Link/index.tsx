import { FC } from "react"
import { LinkProps } from "./types"

import classNames from "classnames"

import "@style/components/Link/Link.scss"

import SocialTgIcon from "@images/social/social-tg.svg"
import SocialVkIcon from "@images/social/social-vk.svg"
import SocialIdIcon from "@images/social/social-leader-id.svg"
import SocialWhatsappIcon from "@images/social/social-whatsapp.svg"
import SocialGuapMonoIcon from "@images/social/logo-guap-mono.svg"
import SocialGuapColorIcon from "@images/social/logo-guap-color.svg"
import LinkIcon from "@images/icons/link.svg"


const Link: FC<LinkProps> = ({ 
    type="icon", 
    socialType="tg", 
    size="normal", 
    link="#", 
    children, 
    className,
    onClick 
}) => {

    const linkClassName = classNames("link", {
        [`${type}`]: type,
        [`${socialType}`]: socialType,
        [`${size}`]: size,
        className
    })

    const getSocialType = () => {
        switch (socialType) {
            case "tg":
                return (
                    <SocialTgIcon />
                )
            case "vk":
                return (
                    <SocialVkIcon />
                )
            case "id":
                return (
                    <SocialIdIcon />
                )
            case "whatsapp":
                return (
                    <SocialWhatsappIcon />
                )
            case "logo-guap-mono":
                return (
                    <SocialGuapMonoIcon />
                )
            case "logo-guap-color":
                return (
                    <SocialGuapColorIcon />
                )
        }
    }

    const socialIcon = getSocialType();

    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            onClick(e);
        }
    };

    const getTarget = () => {
        if (type === "social") {
            return "_blank";
        }
        return undefined;
    };

    switch (type) {
        case "icon":
            return (
                <a className={linkClassName} target={getTarget()} href={link} onClick={handleClick}>
                    <LinkIcon />
                    <span className="link__text">{children}</span>
                </a>
            )
        case "underlined":
            return (
                <a className={linkClassName} target={getTarget()} href={link} onClick={handleClick}>
                    <span className="link__text">{children}</span>
                </a>
            )
        case "social":
            return (
                <a className={linkClassName} target={getTarget()} href={link} onClick={handleClick}>
                    {socialIcon}
                    <span className="link__text">{children}</span>
                </a>
            )
    }
}

export default Link
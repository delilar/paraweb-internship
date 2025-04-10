import { FC } from "react";
import "@style/components/cards/PartnerCard.scss";
import { PartnerCardProps } from "./types";
import ImagePlaceholder from "@components/ImagePlaceholder";
import Link from "@components/Link";

const PartnerCard: FC<PartnerCardProps> = ({ imageUrl, title, link="#", linkText, contactPerson, phone, email, socialLinks=[] }) => {
    return (
        <div className="partner-card">
            <div className="partner-card__image">
                {imageUrl ? <img src={imageUrl} alt="Communitie" /> : <ImagePlaceholder />}
            </div>
            <div className="partner-card__heading">
                <a href={link} className="partner-card__link">
                    <h4 className="partner-card__title">{title}</h4>
                </a>
                <a href={link} target="_blank" className="partner-card__link">{linkText}</a>
            </div>
            <hr />
            <div className="partner-card__main">
                <div className="partner-card__contact-person">
                    <small>Контактное лицо</small>
                    <p>{contactPerson}</p>
                </div>
                <div className="partner-card__phone">
                    <small>Телефон</small>
                    <a href={`tel:${phone}`}>{phone}</a>
                </div>
                <div className="partner-card__email">
                    <small>Электронная почта</small>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
            </div>
            {socialLinks.length ? 
            <>
                <hr />
                <div className="partner-card__links">
                    {socialLinks.map((social, index) => (
                        <Link type="social" link={social.link} socialType={social.type} key={index} />
                    ))}
                </div>
            </> : null }
        </div>
    )
}

export default PartnerCard;
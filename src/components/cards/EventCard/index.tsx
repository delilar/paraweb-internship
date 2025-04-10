import { FC } from "react";

import "@style/components/cards/EventCard.scss";

import BookmarkIcon from "@images/icons/bookmark.svg";
import ClockIcon from "@images/icons/clock.svg";
import LocationIcon from "@images/icons/map-pin.svg";
import PeopleIcon from "@images/icons/users-group.svg";
import AlarmIcon from "@images/icons/alarm-plus.svg";
import CoinIcon from "@images/coin-icon.svg";

import { EventCardProps } from "./types";

import Tag from "@components/Tag";
import ImagePlaceholder from "@components/ImagePlaceholder";
import IconButton from "@components/buttons/IconButton";
import classNames from "classnames";

const CommunitieCard: FC<EventCardProps> = ({
    imageUrl,
    href="#",
    isFavorite=false,
    tagTitle="Творчество",
    tagColor='red',
    title="Название мероприятия",
    coins=100,
    startDate,
    endDate,
    location="Москва, ул. Пушкина, д. 1",
    numberOfPeople=500
}) => {


    const daysRemaining = Math.floor((new Date(startDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    const eventDuration = `${startDate.getHours()}:${startDate.getMinutes() === 0 ? "00" : startDate.getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes() === 0 ? "00" : endDate.getMinutes()}`;
    const eventDay = startDate.getDate();
    const eventMonth = startDate.toLocaleString("ru-RU", { month: "short" }).replace(".", "");

    const daysRemainingClassName = classNames(
        "event-card__alarm-tag",
        {
            "event-card__alarm-tag--soon": daysRemaining <= 3,
        }
    )

    const handleBookmarkClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Bookmark clicked");
    };

    return (
        <a href={href} target="_blank" className="event-card">
            <div className="event-card__image-wrapper">
                {imageUrl ? <img src={imageUrl} alt="Communitie" /> : <ImagePlaceholder />}
                <time dateTime={endDate.toDateString()} className={"event-card__event-date"}>
                    <h2 className="event-card__day">{eventDay}</h2>
                    <p className="event-card__month">{eventMonth}</p>
                </time>
                <IconButton
                    icon={<BookmarkIcon />}
                    variant="contrast-filled"
                    className="event-card__bookmark-button"
                    isChecked={isFavorite}
                    onClick={handleBookmarkClick}
                />
            </div>
            <div className="event-card__main-info">
                <div className="event-card__title-info">
                    <div className="event-card__tags-wrapper">
                        <Tag mainValue={tagTitle} color={tagColor}></Tag>
                        <div className="event-card__coin-tag">
                            <CoinIcon />
                            <div className="product-card__coins">{coins}</div>
                        </div>
                        <div className={daysRemainingClassName}>
                            <AlarmIcon />
                            <p className="event-card__days-remaining">Через {daysRemaining} {daysRemaining <= 3 ? "дня" : "дней"}</p>
                        </div>
                    </div>
                    <h4 className="event-card__title">{title}</h4>
                </div>
                <div className="event-card__event-info">
                    <div className="event-card__info-wrapper">
                        <div className="event-card__event-duration-wrapper">
                            <ClockIcon />
                            <p className="event-card__event-duration">{eventDuration}</p>
                        </div>
                        <div className="event-card__location-wrapper">
                            <LocationIcon />
                            <p className="event-card__event-location">{location}</p>
                        </div>
                        <div className="event-card__number-of-people-wrapper">
                            <PeopleIcon />
                            <p className="event-card__number-of-people">{numberOfPeople}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default CommunitieCard;
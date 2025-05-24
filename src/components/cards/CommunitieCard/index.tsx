import { FC } from "react";

import "@style/components/cards/CommunitieCard.scss";
import BookmarkIcon from "@images/icons/bookmark.svg";

import { CommunitieCardProps } from "./types";

import Tag from "@components/Tag";
import ImagePlaceholder from "@components/ImagePlaceholder";
import IconButton from "@/components/buttons/IconButton";

const CommunitieCard: FC<CommunitieCardProps> = ({
    imageUrl,
    href="#",
    isFavorite=false,
    tagTitle="Творчество",
    tagColor='red',
    title="Название сообщества",
    userImageUrl,
    fullname="Константинопольский Константин Константинович",
    jobTitle="Ответственный"
}) => {

    const handleBookmarkClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Bookmark clicked");
    };

    return (
        <a href={href} target="_blank" className="communitie-card">
            <div className="communitie-card__image-wrapper">
                {imageUrl ? <img src={imageUrl} alt="Communitie" /> : <ImagePlaceholder />}
                <IconButton
                    icon={<BookmarkIcon />}
                    variant="contrast-filled"
                    className="communitie-card__bookmark-button"
                    isChecked={isFavorite}
                    onClick={handleBookmarkClick}
                />
            </div>
            <div className="communitie-card__main-info">
                <div className="communitie-card__title-info">
                    <Tag mainValue={tagTitle} color={tagColor}></Tag>
                    <h4 className="communitie-card__title">{title}</h4>
                </div>
                <div className="communitie-card__person-info">
                    {userImageUrl ?
                        <img className="communitie-card__user-image" src={userImageUrl} alt="User" /> :
                        <ImagePlaceholder outerClassName="communitie-card__user-image" />
                    }
                    <div className="communitie-card__person-wrapper">
                        <h5 className="communitie-card__fullname">{fullname}</h5>
                        <p className="communitie-card__job-title">{jobTitle}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default CommunitieCard;
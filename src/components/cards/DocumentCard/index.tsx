import { FC } from "react";
import "@style/components/cards/DocumentCard.scss";
import { DocumentCardProps } from "./types";
import DownloadIcon from "@images/icons/download.svg";

const DocumentCard: FC<DocumentCardProps> = ({ title="Headline", docType="PDF", docWeight="99.9 КВ" }) => {
    return (
        <div className="document-card">
            <h4 className="document-card__title">{title}</h4>
            <div className="document-card__bottom-container">
                <DownloadIcon />
                <p className="document-card__doc-info">
                    {`${docType.toUpperCase()}, ${docWeight.toUpperCase()}`}
                </p>
            </div>
        </div>
    )
}

export default DocumentCard;
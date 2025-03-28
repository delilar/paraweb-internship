import { FC } from "react";
import "@style/components/ImagePlaceholder/ImagePlaceholder.scss"
import PlaceHolderIcon from "@images/placeholder-icon.svg"
import classNames from "classnames";

interface ImagePlaceholderProps {
    outerClassName?: string;
}

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({ outerClassName }) => {

    const className = classNames("image-placeholder", outerClassName);

    return (
        <div className={className}>
            <PlaceHolderIcon />
        </div>
    )
}

export default ImagePlaceholder;
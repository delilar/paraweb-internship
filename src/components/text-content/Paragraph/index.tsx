import { FC } from "react";
import classNames from "classnames";
import { ParagraphProps } from "./types";

import "@style/components/text-content/Paragraph.scss";


const Paragraph: FC<ParagraphProps> = ({ children, className }) => {

    const paragraphClassName = classNames("paragraph", "text-content", className);

    return (
        <p className={paragraphClassName}>
            {children}
        </p>
    )
}

export default Paragraph;
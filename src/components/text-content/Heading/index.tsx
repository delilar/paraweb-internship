import { FC, JSX } from "react";
import { HeadingProps } from "./types";
import classNames from "classnames";
import "@style/components/text-content/Heading.scss";

const Heading: FC<HeadingProps> = ({ level, children, className }) => {

    const headingClassName = classNames("heading", `heading__${level}`, "text-content", className);

    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <HeadingTag className={headingClassName}>
            {children}
        </HeadingTag>
    )
}

export default Heading;
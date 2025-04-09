import { FC } from "react";
import { FigureProps } from "./types";
import classNames from "classnames";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import "@style/components/text-content/Figure.scss";

const Figure: FC<FigureProps> = ({ src, alt, caption, className }) => {
  const figureClassName = classNames("figure", className);

  const formatedCaption = caption?.replace(/\.$/, "");

  return (
    <figure className={figureClassName}>
      {src ? <img src={src} alt={alt} /> : <ImagePlaceholder />}
      {formatedCaption && <figcaption>{formatedCaption}</figcaption>}
    </figure>
  );
};

export default Figure;
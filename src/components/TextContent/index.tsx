import { FC, useMemo } from "react";
import classNames from "classnames";
import DOMPurify from "dompurify";

import "@style/components/text-content/index.scss";

interface TextContentProps {
  html: string;
  className?: string;
}

const TextContent: FC<TextContentProps> = ({ html, className }) => {
  const sanitizedHtml = useMemo(() => {
    return DOMPurify.sanitize(html, {
      USE_PROFILES: { html: true },
      ADD_TAGS: ['img', 'figure', 'figcaption'],
      ADD_ATTR: ['src', 'alt', 'class']
    });
  }, [html]);
  
  const textContentClassName = classNames("text-content", className);

  return (
    <div 
      className={textContentClassName}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default TextContent;
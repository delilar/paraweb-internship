import { FC, useEffect } from "react";
import classNames from "classnames";
import DOMPurify from "dompurify";

import "@style/components/text-content/index.scss";

interface TextContentProps {
  html: string;
  className?: string;
}

const TextContent: FC<TextContentProps> = ({ html, className }) => {
  useEffect(() => {
    // Настраиваем DOMPurify для корректной работы с изображениями
    DOMPurify.setConfig({
      ADD_TAGS: ['img', 'figure', 'figcaption'],
      ADD_ATTR: ['src', 'alt', 'class']
    });
  }, []);

  const sanitizedHtml = DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ADD_TAGS: ['img', 'figure', 'figcaption'],
    ADD_ATTR: ['src', 'alt', 'class']
  });
  
  const textContentClassName = classNames("text-content", className);

  return (
    <div 
      className={textContentClassName}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default TextContent; 
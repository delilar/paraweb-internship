import { FC } from "react";
import { BulletListProps } from "./types";
import "@style/components/text-content/BulletList.scss";
import classNames from "classnames";

const BulletList: FC<BulletListProps> = ({ items, className }) => {

    const listClassName = classNames("bulleted-list", "text-content", className);

    return (
        <ul className={listClassName}>
      {items.map((item) => (
        <li key={item.id} className="bulleted-list__item">
          <span className="bulleted-list__text">{item.text}</span>
          {item.children && item.children.length > 0 && (
            <ul className="bulleted-list__nested">
              {item.children.map((childItem) => (
                <li key={childItem.id} className="bulleted-list__nested-item">
                  <span className="bulleted-list__nested-text">{childItem.text}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
    )
}

export default BulletList;
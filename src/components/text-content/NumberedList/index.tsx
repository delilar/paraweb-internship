import { FC } from "react";
import { NumberedListProps } from "./types";
import classNames from "classnames";
import "@style/components/text-content/NumberedList.scss";

const NumberedList: FC<NumberedListProps> = ({ items, className }) => {
  const listClassName = classNames("numbered-list", "text-content", className);

  return (
    <ol className={listClassName}>
      {items.map((item) => (
        <li className="numbered-list__item" key={item.id}>{item.text}</li>
      ))}
    </ol>
  );
};

export default NumberedList;
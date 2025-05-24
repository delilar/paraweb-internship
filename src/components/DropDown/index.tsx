import { FC } from "react";
import { DropdownProps } from "./types";
import classNames from "classnames";

import "@style/components/DropDown/DropDown.scss";

import Link from "@components/Link";
import Checkbox from "@components/selection/Checkbox";

const Dropdown: FC<DropdownProps> = ({ 
  options,
  onItemClick,
  onCheckboxChange,
  menuClassName = "dropdown__menu",
  itemClassName = "dropdown__item",
  variant = "normal"
}) => {
  const menuClassNames = classNames(menuClassName, variant, "dropdown__menu-visible");
  const itemClassNames = classNames(itemClassName, variant);

  return (
    <div className={menuClassNames}>
      {options.map((option) => (
        <div 
          key={option.id} 
          className={itemClassNames}
        >
          {option.type === 'social' ? (
            <Link 
              type="social" 
              link={option.link} 
              socialType={option.socialType} 
              className="dropdown__link"
              onClick={() => onItemClick?.(option)}
            >
              {option.label}
            </Link>
          ) : option.type === 'checkbox' ? (
            <Checkbox
              label={option.label}
              disabled={false}
              checked={option.checked}
              className="dropdown__checkbox"
              onChange={(checked) => onCheckboxChange && onCheckboxChange(option.id, checked)}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
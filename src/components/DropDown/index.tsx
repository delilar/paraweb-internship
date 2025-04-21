import { FC } from "react";
import { DropdownProps } from "./types";
import classNames from "classnames";

import "@style/components/DropDown/DropDown.scss";

import Link from "@components/Link";
import Checkbox from "@components/selection/Checkbox";

const Dropdown: FC<DropdownProps> = ({ 
  isOpen, 
  options,
  onItemClick,
  onCheckboxChange,
  menuClassName = "dropdown__menu",
  itemClassName = "dropdown__item",
  variant = "normal"
}) => {
  const handleItemClick = (e: React.MouseEvent, option: any) => {
    if ((e.target as HTMLElement).tagName === 'INPUT') return;
    
    if (
      (e.target as HTMLElement).tagName === 'A' || 
      (e.target as HTMLElement).closest('a')
    ) {
      if (option.type === 'social') {
        onItemClick && onItemClick(option);
      }
      return;
    }
    
    if ((e.target as HTMLElement).closest('label')) {
      return;
    }
    
    if (option.type === 'checkbox') {
      return;
    } else if (option.type === 'social') {
      onItemClick && onItemClick(option);
      
      if (option.link) {
        const url = option.link.startsWith('http') ? option.link : `https://${option.link}`;
        window.open(url, '_blank');
      }
    }
  };

  const menuClassNames = classNames(menuClassName, variant, "dropdown__menu-visible");
  const itemClassNames = classNames(itemClassName, variant);

  if (!isOpen) return null;

  return (
    <div className={menuClassNames}>
      {options.map((option) => (
        <div 
          key={option.id} 
          className={itemClassNames}
          onClick={(e) => handleItemClick(e, option)}
        >
          {option.type === 'social' ? (
            <Link 
              type="social" 
              link={option.link} 
              socialType={option.socialType} 
              className="dropdown__link"
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
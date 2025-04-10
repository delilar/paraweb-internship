import { FC, useState } from "react";
import { DropdownProps } from "./types";

import "@style/components/DropDown/DropDown.scss";

import Link from "@components/Link";
import Checkbox from "@components/selection/Checkbox";


const Dropdown: FC<DropdownProps> = ({ title="Выбрать варианты", optionsData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options] = useState(
    optionsData.map(option => ({ ...option, checked: option.checked ?? false }))
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button className="dropdown__toggle" onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && (
        <div className={"dropdown__menu"}>
          {options.map((option) => (
            <div key={option.id} className="dropdown__item">
              {option.link ? (
                <Link type="social" link={option.link} socialType={option.socialType} className="dropdown__link">{option.label}</Link>
              ) : (
                <Checkbox
                  label={option.label}
                  disabled={false}
                  checked={option.checked}
                  className="dropdown__checkbox"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

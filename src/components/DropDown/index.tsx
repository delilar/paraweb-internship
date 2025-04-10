import { FC, useState, useEffect, useRef } from "react";
import { DropdownProps } from "./types";

import "@style/components/DropDown/DropDown.scss";

import Link from "@components/Link";
import Checkbox from "@components/selection/Checkbox";

const Dropdown: FC<DropdownProps> = ({ 
  title="Выбрать варианты", 
  optionsData,
  onChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(
    optionsData.map(option => ({ ...option, checked: option.checked ?? false }))
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Обработчик клика вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Добавляем обработчик при открытии дропдауна
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Очистка обработчика при размонтировании
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionChange = (id: number, checked: boolean) => {
    const updatedOptions = options.map(option => 
      option.id === id ? { ...option, checked } : option
    );
    
    setOptions(updatedOptions);
    
    // Передаем выбранные опции родителю
    if (onChange) {
      const selectedOption = updatedOptions.find(option => option.id === id);
      onChange(selectedOption, updatedOptions.filter(option => option.checked));
    }
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown__toggle" onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && (
        <div className="dropdown__menu">
          {options.map((option) => (
            <div key={option.id} className="dropdown__item">
              {option.link ? (
                <Link type="social" link={option.link} socialType={option.socialType} className="dropdown__link">
                  {option.label}
                </Link>
              ) : (
                <Checkbox
                  label={option.label}
                  disabled={false}
                  checked={option.checked}
                  className="dropdown__checkbox"
                  onChange={(checked) => handleOptionChange(option.id, checked)}
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
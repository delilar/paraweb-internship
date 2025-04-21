import { FC, useState, useRef, useEffect } from "react";
import { SelectProps } from "./types";
import { Option } from "./types";
import classNames from "classnames";
import ChevronDownIcon from "@images/icons/chevron-down.svg";
import "@style/components/Select/Select.scss";
import Dropdown from "@components/DropDown";

const Select: FC<SelectProps> = ({
  variant,
  options: initialOptions,
  disabled = false,
  error = false,
  label = "Выберите из списка",
  onChange,
  className,
  prefixIcon,
  iconComponent = <ChevronDownIcon />
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<Option[]>(initialOptions);
  const selectRef = useRef<HTMLDivElement>(null);
  const processingRef = useRef<boolean>(false);
  const selectedCount = options.filter(opt => opt.type === 'checkbox' && opt.checked).length;

  const getSelectedLabel = (count: number) => {
    const wordForm = (n: number, forms: [string, string, string]) => {
      return forms[
        n % 10 === 1 && n % 100 !== 11
          ? 0
          : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)
          ? 1
          : 2
      ];
    };
  
    const selectedWord = wordForm(count, ["Выбран", "Выбрано", "Выбрано"]);
    const variantWord = wordForm(count, ["вариант", "варианта", "вариантов"]);
  
    return `${selectedWord} ${count} ${variantWord}`;
  };
  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const selectClassName = classNames("select", className, {
    [`select--${variant}`]: variant,
    'select--with-prefix-icon': !!prefixIcon,
    'select--open': isOpen,
    'select--disabled': disabled,
    'select--error': error
  });

  const toggleDropdown = () => {
    if (disabled) return;
    setIsOpen(!isOpen)
  };

  const handleOptionClick = (option: Option) => {
    if (disabled) return;
    if (processingRef.current) return;
    processingRef.current = true;
    
    setTimeout(() => {
      processingRef.current = false;
    }, 50);
    
    if (onChange) {
      onChange(
        option, 
        options.filter(
          opt => opt.type === 'checkbox' && opt.checked
        )
      );
    }

    if (option.type === 'social') {
      setIsOpen(false);
    }
  };

  const handleCheckboxChange = (id: number, checked: boolean) => {
    if (disabled) return;
    if (processingRef.current) return;
    processingRef.current = true;
    
    setTimeout(() => {
      processingRef.current = false;
    }, 50);
    
    const updatedOptions = options.map(option => {
      if (option.id === id) {
        if (option.type === 'checkbox') {
          return { ...option, checked };
        }
      }
      return option;
    });
    
    setOptions(updatedOptions);
    
    if (onChange) {
      const selectedOption = updatedOptions.find(option => option.id === id);
      onChange(
        selectedOption, 
        updatedOptions.filter(
          option => option.type === 'checkbox' && option.checked
        )
      );
    }
  };

  const iconWithClass = isOpen ? "select__icon--open" : "select__icon";

  return (
    <div className={selectClassName} ref={selectRef}>
      <button className="select__toggle" onClick={toggleDropdown}>
        {prefixIcon && (
          <span className="select__prefix-icon">
            {prefixIcon}
          </span>
        )}
        <span className="select__toggle-text">{ selectedCount > 0 ? getSelectedLabel(selectedCount) : label }</span>
        {iconComponent && (
          <span className="select__toggle-icon">
            <span className={iconWithClass}>
              {iconComponent}
            </span>
          </span>
        )}
      </button>
      
      <div className="select__dropdown-wrapper">
        <Dropdown 
          isOpen={isOpen}
          options={options}
          onItemClick={handleOptionClick}
          onCheckboxChange={handleCheckboxChange}
          menuClassName="select__dropdown-menu"
          itemClassName="dropdown__item"
          variant={variant}
        />
      </div>
    </div>
  );
};

export default Select; 
import { FC, useState, useRef, useEffect } from "react";
import { SelectProps } from "./types";
import { Option } from "./types";
import classNames from "classnames";
import ChevronDownIcon from "@images/icons/chevron-down.svg";
import "@style/components/Select/Select.scss";
import Dropdown from "@components/DropDown";
import { wordForm } from "@/utils/wordForm";

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

  const processOption = (option: Option, selectedOption?: Option) => {
    if (disabled || processingRef.current) return;
    processingRef.current = true;
    
    setTimeout(() => {
      processingRef.current = false;
    }, 50);
    
    if (onChange) {
      onChange(
        selectedOption || option, 
        options.filter(
          opt => opt.type === 'checkbox' && opt.checked
        )
      );
    }

    if (option.type === 'social') {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (option: Option) => {
    processOption(option);
  };

  const handleCheckboxChange = (id: number, checked: boolean) => {
    if (disabled) return;
    
    const updatedOptions = options.map(option => {
      if (option.id === id && option.type === 'checkbox') {
        return { ...option, checked };
      }
      return option;
    });
    
    setOptions(updatedOptions);
    
    const selectedOption = updatedOptions.find(option => option.id === id);
    processOption(selectedOption as Option, selectedOption);
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
        {isOpen && (
          <Dropdown 
            options={options}
            onItemClick={handleOptionClick}
            onCheckboxChange={handleCheckboxChange}
            menuClassName="select__dropdown-menu"
            itemClassName="dropdown__item"
            variant={variant}
          />
        )}
      </div>
    </div>
  );
};

export default Select;
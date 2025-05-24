import { FC, useState, useRef, useEffect } from "react";
import { TextFieldProps } from './types';
import classNames from "classnames";
import { IMaskInput } from "react-imask";
import "@style/components/TextField/TextField.scss";
import EyeIcon from "@images/icons/eye.svg";
import EyeClosedIcon from "@images/icons/eye-closed.svg";
import { getMaskOptions } from "@/utils/textFieldUtils.ts";

const TextField: FC<TextFieldProps> = ({
  value,
  disabled = false,
  error = false,
  label = "Введите текст",
  onChange,
  className,
  prefixIcon,
  endIcon,
  placeholder,
  type = "text",
  mask,
  unmask = false
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputType, setInputType] = useState(type);
  const [internalValue, setInternalValue] = useState(value || "");
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Update internal value when prop changes (for controlled mode)
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);
  
  // Determine if the field has a value for styling purposes
  const hasValue = !!internalValue && internalValue.length > 0;
  
  const textFieldClassName = classNames("text-field", className, {
    'text-field--with-prefix-icon': !!prefixIcon,
    'text-field--with-end-icon': !!endIcon || type === 'password',
    'text-field--focused': isFocused,
    'text-field--filled': hasValue,
    'text-field--disabled': disabled,
    'text-field--error': error
  });

  const handleFocus = () => {
    if (disabled) return;
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (disabled) return;
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const newValue = e.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleAccept = (val: string) => {
    if (disabled) return;
    setInternalValue(val);
    if (onChange) {
      onChange(val);
    }
  };

  const togglePasswordVisibility = () => {
    if (type === 'password') {
      setInputType(inputType === 'password' ? 'text' : 'password');
    }
  };

  const shouldUseMask = !!mask;
  
  return (
    <div className={textFieldClassName}>
      <div className="text-field__container">
        {prefixIcon && (
          <span className="text-field__prefix-icon">
            {prefixIcon}
          </span>
        )}
        <div className="text-field__input-container">
          {shouldUseMask ? (
            <IMaskInput
              inputRef={(el) => {
                if (el) inputRef.current = el;
              }}
              className="text-field__input"
              value={internalValue}
              onAccept={handleAccept}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={disabled}
              placeholder={placeholder}
              mask={getMaskOptions(type, mask) as any}
              unmask={unmask}
              type={inputType !== 'password' ? inputType : undefined}
            />
          ) : (
            <input
              ref={inputRef}
              type={inputType}
              className="text-field__input"
              value={internalValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={disabled}
              placeholder={placeholder}
            />
          )}
          <span className="text-field__label">{label}</span>
        </div>
        {(endIcon || type === 'password') && (
          <span 
            className="text-field__end-icon" 
            onClick={type === 'password' ? togglePasswordVisibility : undefined}
          >
            {type === 'password' ? (
              inputType === 'password' ? <EyeIcon /> : <EyeClosedIcon />
            ) : (
              endIcon
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextField;
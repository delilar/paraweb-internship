import { FC, useState, useRef, useEffect } from "react";
import { TextFieldProps, MaskOptions } from './types';
import classNames from "classnames";
import { IMaskInput } from "react-imask";
import IMask from "imask";
import "@style/components/TextField/TextField.scss";
import EyeIcon from "@images/icons/eye.svg";
import EyeClosedIcon from "@images/icons/eye-closed.svg";

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
  const inputRef = useRef<HTMLInputElement>(null);
  
  const textFieldClassName = classNames("text-field", className, {
    'text-field--with-prefix-icon': !!prefixIcon,
    'text-field--with-end-icon': !!endIcon || type === 'password',
    'text-field--focused': isFocused,
    'text-field--filled': !!value,
    'text-field--disabled': disabled,
    'text-field--error': error
  });

  useEffect(() => {
    if (inputRef.current && value === '') {
      setIsFocused(false);
    }
  }, [value]);

  const handleFocus = () => {
    if (disabled) return;
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (disabled) return;
    if (inputRef.current?.value) return;
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleAccept = (val: string) => {
    if (disabled) return;
    if (onChange) {
      onChange(val);
    }
  };

  const togglePasswordVisibility = () => {
    if (type === 'password') {
      setInputType(inputType === 'password' ? 'text' : 'password');
    }
  };

  const renderEndIcon = () => {
    if (type === 'password') {
      return inputType === 'password' ? <EyeIcon /> : <EyeClosedIcon />;
    }
    return endIcon;
  };

  const getMaskOptions = (): MaskOptions => {
    switch (type) {
      case 'email':
        return {
          mask: /^\S*@?\S*$/
        };
      case 'tel':
        return {
          mask: '+{7}(000)000-00-00'
        };
      case 'tel-ru':
        return {
          mask: [
            { mask: '8(000)000-00-00' },
            { mask: '+{7}(000)000-00-00' }
          ]
        };
      case 'date':
        return {
          mask: Date,
          pattern: 'd.`m.`Y',
          blocks: {
            d: {
              mask: IMask.MaskedRange,
              from: 1,
              to: 31,
              maxLength: 2
            },
            m: {
              mask: IMask.MaskedRange,
              from: 1,
              to: 12,
              maxLength: 2
            },
            Y: {
              mask: IMask.MaskedRange,
              from: 1900,
              to: 2999
            }
          }
        };
      default:
        return mask || { mask: '' };
    }
  };

  const renderInput = () => {
    const shouldUseMask = mask || ['email', 'tel', 'tel-ru', 'date'].includes(type as string);
    
    if (shouldUseMask) {
      const maskOptions = getMaskOptions() as any;
      
      return (
        <IMaskInput
          inputRef={(el) => {
            if (el) inputRef.current = el;
          }}
          className="text-field__input"
          value={value}
          onAccept={handleAccept}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          placeholder={placeholder}
          mask={maskOptions}
          unmask={unmask}
          type={inputType !== 'password' ? inputType : undefined}
        />
      );
    }
    
    return (
      <input
        ref={inputRef}
        type={inputType}
        className="text-field__input"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        placeholder={placeholder}
      />
    );
  };

  return (
    <div className={textFieldClassName}>
      <div className="text-field__container">
        {prefixIcon && (
          <span className="text-field__prefix-icon">
            {prefixIcon}
          </span>
        )}
        <div className="text-field__input-container">
          {renderInput()}
          <span className="text-field__label">{label}</span>
        </div>
        {(endIcon || type === 'password') && (
          <span 
            className="text-field__end-icon" 
            onClick={type === 'password' ? togglePasswordVisibility : undefined}
          >
            {renderEndIcon()}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextField; 
import { useState } from 'react';
import classNames from 'classnames';
import { IconButtonProps } from './types';
import "@style/components/buttons/IconButton.scss";

const IconButton: React.FC<IconButtonProps> = ({
  variant = 'filled',
  disabled = false,
  isChecked = false,
  onClick,
  className = '',
  icon: Icon
}) => {

  const [checked, setChecked] = useState(isChecked);

  const buttonClasses = classNames(
    'icon-button',
    {
      [`icon-button--${variant}`]: variant,
      'icon-button--disabled': disabled,
      'icon-button--checked': checked
    },
    className
  )

  const handleOnClick = (e: React.MouseEvent) => {
    if (!disabled && onClick) {
      setChecked(!checked);
      onClick(e);
    }
  }

  return (
    <button className={buttonClasses} disabled={disabled} onClick={handleOnClick}>
      {Icon}
    </button>
  );
};

export default IconButton;
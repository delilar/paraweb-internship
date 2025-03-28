import classNames from 'classnames';
import { IconButtonProps } from './types';
import "@style/components/buttons/IconButton.scss";

const IconButton: React.FC<IconButtonProps> = ({
  variant = 'filled',
  disabled = false,
  onClick,
  className = '',
  icon: Icon
}) => {
  const buttonClasses = classNames(
    'icon-button',
    {
      [`icon-button--${variant}`]: variant,
      'icon-button--disabled': disabled
    },
    className
  )

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {Icon}
    </button>
  );
};

export default IconButton;
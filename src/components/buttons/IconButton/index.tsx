
import '../../style/components/buttons/IconButton.scss';
import { IconButtonProps } from './types';

const IconButton: React.FC<IconButtonProps> = ({
  variant = 'filled',
  disabled = false,
  isMobile = false,
  onClick,
  className = ''
}) => {
  const buttonClasses = [
    'icon-button',
    isMobile ? 'icon-button--mobile' : '',
    `icon-button--${variant}`,
    disabled ? 'icon-button--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      <span className="icon-button__icon"></span>
    </button>
  );
};

export default IconButton;

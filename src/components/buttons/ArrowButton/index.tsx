import '../../style/components/buttons/ArrowButton.scss';
import { ArrowButtonProps } from './types';

const ArrowButton: React.FC<ArrowButtonProps> = ({
  variant = 'default',
  disabled = false,
  isMobile = false,
  onClick,
  className = '',
  children = 'Button'
}) => {
  const buttonClasses = [
    'arrow-button',
    isMobile ? 'arrow-button--mobile' : '',
    `arrow-button--${variant}`,
    disabled ? 'arrow-button--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      <span className="arrow-button__icon"></span>
      <span className="arrow-button__text">{children}</span>
    </button>
  );
};

export default ArrowButton;

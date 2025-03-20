import "../../style/components/buttons/Button.scss";
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  disabled = false,
  icon = true,
  isMobile = false,
  onContrastBackground = false,
  onClick,
  className = ''
}) => {
  const buttonClasses = [
    'button',
    isMobile ? 'button--mobile' : '',
    `button--${variant}`,
    onContrastBackground ? 'button--on-contrast-background' : '',
    disabled ? 'button_disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {icon && (
        <svg className="button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13.5 6.5L17.5 10.5M4 20.0001H8L18.5 9.50006C19.0304 8.96963 19.3284 8.2502 19.3284 7.50006C19.3284 6.74991 19.0304 6.03049 18.5 5.50006C17.9696 4.96963 17.2501 4.67163 16.5 4.67163C15.7499 4.67163 15.0304 4.96963 14.5 5.50006L4 16.0001V20.0001Z" 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
        </svg>
      )}
      <span className="button__text">{children}</span>
      <svg className="button__add-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 5V19M5 12H19" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default Button;
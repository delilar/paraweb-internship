import "@style/components/buttons/Button.scss";
import { ButtonProps } from './types';
import classNames from 'classnames';


const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  disabled = false,
  onContrastBackground = false,
  onClick,
  className = '',
  iconLeft: IconLeft,
  iconRight: IconRight
}) => {
  const buttonClasses = classNames(
    'button',
    {
      [`button--${variant}`]: variant,
      'button--on-contrast-background': onContrastBackground
    },
    className
  );

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {IconLeft && <IconLeft />}
      <span className="button__text">{children}</span>
      {IconRight && <IconRight />}
    </button>
  );
};


export default Button;